# Mobile Responsiveness & UI Logic Reference

This document contains mobile-first patterns and responsive design logic extracted from the financial card game project.

## 1. Mobile-First Layout Strategy

### Container Structure
```tsx
// Full-height flex container for mobile
<div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-100 flex flex-col">
  
  {/* Sticky header on mobile */}
  <div className="lg:hidden sticky top-0 z-10 ...">
    {/* Mobile header content */}
  </div>

  {/* Scrollable content area */}
  <div className="flex-1 overflow-y-auto">
    {/* Main content */}
  </div>
</div>
```

**Key Points:**
- `flex flex-col` for vertical layout
- `flex-1 overflow-y-auto` allows main content to scroll
- Sticky header stays visible on mobile

---

## 2. Responsive Grid Patterns

### Three-Column Compact Grid (Players)
```tsx
// Mobile: 3 columns, Desktop: stays 3 columns
<div className="grid grid-cols-3 gap-2 sm:gap-3">
  {items.map((item) => (
    <div key={item.id} className="...">
      {/* Compact card content */}
    </div>
  ))}
</div>
```

### Two-Column Card Grid (Playing Cards)
```tsx
// Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns
<div className="grid sm:hidden grid-cols-2 gap-3">
  {/* Mobile-specific rendering */}
</div>

<div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
  {/* Desktop rendering */}
</div>
```

**Breakpoint Strategy:**
- `sm` = 640px (tablet)
- `md` = 768px
- `lg` = 1024px (desktop)
- `xl` = 1280px

---

## 3. Mobile-Specific Text Sizing

### Progressive Text Scaling
```tsx
// Text that adapts from mobile to desktop
<h1 className="text-sm sm:text-base md:text-lg lg:text-xl">Title</h1>

// Ultra-compact mobile text
<p className="text-[10px] sm:text-xs md:text-sm">Description</p>

// Slightly larger mobile text
<span className="text-[11px] sm:text-sm">Label</span>

// Currency/numbers
<span className="text-base sm:text-2xl font-bold">₹5.0L</span>
```

**Size Scale:**
- `text-[10px]` - Ultra compact (labels, badges)
- `text-[11px]` - Very small (descriptions)
- `text-xs` (12px) - Small
- `text-sm` (14px) - Mobile body
- `text-base` (16px) - Desktop body

---

## 4. Spacing Optimization

### Mobile Padding Pattern
```tsx
// Adaptive padding: tight on mobile, generous on desktop
<div className="p-2 sm:p-4 lg:p-6">...</div>

// Card padding
<div className="p-2.5 sm:p-4">...</div>

// Section spacing
<div className="space-y-2 lg:space-y-4">...</div>

// Gap in grids
<div className="gap-2 sm:gap-3 lg:gap-4">...</div>
```

**Spacing Strategy:**
- Mobile: `p-2` (8px), `gap-2` (8px)
- Tablet: `p-3` or `p-4` (12-16px)
- Desktop: `p-6` (24px)

---

## 5. Touch-Friendly Interactive Elements

### Button/Card Interactions
```tsx
// Active state for mobile (instead of hover)
<button className="active:scale-[0.97] sm:hover:scale-105 transition-all">
  {/* Content */}
</button>

// Larger tap targets on mobile
<div className="size-8 sm:size-10">Icon</div>

// Minimum height for touch
<button className="h-12 sm:h-10">Button</button>
```

**Touch Guidelines:**
- Minimum tap target: 44x44px (iOS) or 48x48px (Android)
- Use `active:` for mobile, `hover:` for desktop
- Scale down slightly on tap for feedback

---

## 6. Conditional Rendering by Device

### Show/Hide Based on Screen Size
```tsx
// Show only on mobile
<div className="lg:hidden">
  {/* Mobile-specific content */}
</div>

// Show only on desktop
<div className="hidden lg:block">
  {/* Desktop-specific content */}
</div>

// Hide on mobile, show on tablet+
<p className="hidden sm:block">Desktop description</p>
```

### Component Props for Mobile
```tsx
interface ComponentProps {
  mobile?: boolean;
}

function Component({ mobile = false }: ComponentProps) {
  return (
    <div className={mobile ? "p-3 text-sm" : "p-4 text-base"}>
      {/* Conditional styling */}
    </div>
  );
}

// Usage:
<Component mobile /> // Mobile version
<Component />       // Desktop version
```

---

## 7. Mobile Modal/Dialog Pattern

### Full-Screen Modal Approach
```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-md max-h-[85vh] flex flex-col p-0 gap-0">
    
    {/* Fixed header */}
    <DialogHeader className="p-4 sm:p-6 border-b">
      <DialogTitle className="text-base sm:text-xl">Title</DialogTitle>
    </DialogHeader>

    {/* Scrollable content */}
    <div className="flex-1 overflow-y-auto p-4 sm:p-6">
      {/* Options/Content */}
    </div>
  </DialogContent>
</Dialog>
```

**Modal Best Practices:**
- `max-h-[85vh]` prevents overflow on small screens
- `flex flex-col` with `flex-1 overflow-y-auto` for scrollable content
- Fixed header and scrollable body
- Full width on mobile: `max-w-[calc(100%-2rem)]`

---

## 8. Icon and Avatar Sizing

### Responsive Icon Sizes
```tsx
// Icons in cards
<Icon className="size-3 sm:size-4" />

// Avatar sizes
<div className="size-7 sm:size-10">Avatar</div>

// Badge icons
<div className="size-5 sm:size-6">Shield</div>
```

**Size Pattern:**
- Mobile: `size-3` to `size-7` (12px - 28px)
- Desktop: `size-4` to `size-10` (16px - 40px)

---

## 9. Navigation Pattern (Mobile Drawer)

### Hamburger Menu with Sheet
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <Menu className="size-4" />
    </Button>
  </SheetTrigger>
  
  <SheetContent side="right">
    {/* Drawer content */}
  </SheetContent>
</Sheet>
```

**Mobile Navigation:**
- Hamburger menu in header
- Slide-out drawer (Sheet) for secondary content
- Keep primary actions visible, secondary in drawer

---

## 10. Performance Optimizations

### Conditional Loading
```tsx
// Render different components for mobile vs desktop
{isMobile ? (
  <MobileComponent />
) : (
  <DesktopComponent />
)}

// Or use CSS to hide/show
<div className="block sm:hidden">Mobile</div>
<div className="hidden sm:block">Desktop</div>
```

### State Management
```tsx
const [selectedCard, setSelectedCard] = useState<Card | null>(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);

const handleCardClick = (card: Card) => {
  setSelectedCard(card);
  setIsDialogOpen(true);
};
```

---

## 11. Visual Hierarchy on Mobile

### Emphasis Techniques
```tsx
// Larger, bolder text for important info
<span className="text-lg sm:text-xl font-bold">₹650k</span>

// Color coding for quick recognition
<div className={`
  ${variant === "destructive" ? "bg-red-50 border-red-300" : ""}
  ${variant === "success" ? "bg-green-50 border-green-300" : ""}
`}>
  {/* Content */}
</div>

// Badges for quick scanning
<Badge variant="outline" className="text-[10px]">Type</Badge>
```

---

## 12. Scrolling Patterns

### Prevent Body Scroll Issues
```tsx
// Container handles scroll, not body
<div className="flex-1 overflow-y-auto">
  <div className="p-3">
    {/* Content */}
  </div>
</div>
```

### Snap Scrolling (Optional)
```tsx
// Horizontal card scrolling with snap
<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory">
  <div className="min-w-[280px] snap-center">Card 1</div>
  <div className="min-w-[280px] snap-center">Card 2</div>
</div>
```

---

## 13. Complete Mobile-First Example

```tsx
export default function MobileResponsiveGame() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-cyan-100">
      
      {/* Sticky Mobile Header */}
      <header className="lg:hidden sticky top-0 z-10 bg-white/95 backdrop-blur-md p-3 border-b">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg">App Name</h1>
          <Button variant="outline" size="icon">
            <Menu className="size-4" />
          </Button>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto p-3">
        
        {/* Compact Info Cards */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-emerald-600 rounded-xl p-2.5 text-white">
              <div className="text-sm font-bold">₹5.0L</div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-xl p-3">
          <h2 className="text-sm font-bold mb-2">Your Turn</h2>
          
          {/* Mobile: 2-col, Desktop: 4-col */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                onClick={() => setIsDialogOpen(true)}
                className="bg-blue-100 rounded-xl p-3.5 border-2 border-blue-300 active:scale-[0.97] transition-all"
              >
                <h3 className="text-sm font-bold mb-1">Card {i}</h3>
                <p className="text-xs text-gray-700">Description</p>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile-Optimized Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[85vh] flex flex-col p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-base">Choose Option</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <button
                key={i}
                className="w-full p-4 bg-green-50 border-2 border-green-300 rounded-xl active:scale-[0.98] transition-all"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-semibold">Option {i}</span>
                  <span className="text-lg font-bold text-green-700">₹500k</span>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

---

## 14. Key Takeaways

### Mobile-First Principles
1. **Start with mobile layout** - Use base classes for mobile, then add `sm:`, `md:`, `lg:` for larger screens
2. **Touch-friendly sizes** - Minimum 44x44px tap targets
3. **Readable text** - Never below 11px on mobile
4. **Compact spacing** - Use `p-2`, `gap-2` on mobile, scale up for desktop
5. **Sticky headers** - Keep navigation accessible while scrolling
6. **Full-height modals** - Use `max-h-[85vh]` to prevent overflow
7. **Active states** - Use `active:` for mobile feedback, `hover:` for desktop
8. **Conditional rendering** - Hide/show content based on screen size
9. **Progressive enhancement** - Start simple on mobile, add complexity for larger screens
10. **Performance** - Render appropriate component versions, avoid unnecessary complexity

### Responsive Breakpoint Strategy
- **Mobile**: Default (< 640px) - Compact, vertical, essential content only
- **Tablet** (sm: 640px+): Slightly more spacing, maybe 2-column grids
- **Desktop** (lg: 1024px+): Full features, sidebars, multi-column layouts

---

## 15. Common Patterns Summary

| Element | Mobile Class | Desktop Class |
|---------|-------------|---------------|
| Text (title) | `text-sm` | `text-xl` |
| Text (body) | `text-xs` | `text-sm` |
| Padding | `p-2` or `p-3` | `p-6` |
| Gap | `gap-2` | `gap-4` |
| Icon size | `size-3` or `size-4` | `size-6` |
| Avatar | `size-7` | `size-10` |
| Card padding | `p-2.5` | `p-4` |
| Section spacing | `space-y-2` | `space-y-4` |
| Grid columns | `grid-cols-2` | `grid-cols-4` |

---

**This reference provides reusable patterns for creating mobile-responsive UIs. Apply these principles to any web application for optimal mobile experience.**
