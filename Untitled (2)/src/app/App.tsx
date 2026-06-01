import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./components/ui/dialog";
import { User, Shield, Zap, TrendingUp, Clock, Menu, ArrowLeft } from "lucide-react";

interface Player {
  id: string;
  name: string;
  balance: string;
  color: string;
  avatar: string;
  shields: number;
  active: boolean;
}

interface GameCard {
  id: string;
  type: "action" | "defense" | "decision";
  title: string;
  description: string;
  color: string;
  icon: any;
  options?: CardOption[];
}

interface CardOption {
  id: string;
  label: string;
  description: string;
  value: string;
  variant: "destructive" | "success" | "info";
}

interface CareerLevel {
  id: string;
  title: string;
  icon: string;
  status: "completed" | "current" | "locked";
  requirement?: string;
}

export default function App() {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [selectedCard, setSelectedCard] = useState<GameCard | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"game" | "dashboard">("dashboard");

  const players: Player[] = [
    { id: "1", name: "Ustage F...", balance: "₹5.0L", color: "bg-emerald-600", avatar: "U", shields: 3, active: false },
    { id: "2", name: "Rahul Al", balance: "₹5.0L", color: "bg-purple-600", avatar: "R", shields: 3, active: false },
    { id: "3", name: "Priya Bot", balance: "₹5.0L", color: "bg-red-600", avatar: "P", shields: 3, active: false },
  ];

  const handCards: GameCard[] = [
    {
      id: "1",
      type: "action",
      title: "Steal",
      description: "A risky move to take money from another player",
      color: "bg-rose-100 border-rose-300",
      icon: Zap
    },
    {
      id: "2",
      type: "defense",
      title: "Health Insurance",
      description: "Protect yourself from unexpected losses",
      color: "bg-blue-100 border-blue-300",
      icon: Shield
    },
    {
      id: "3",
      type: "decision",
      title: "Tax Refund",
      description: "You just got refund from the government",
      color: "bg-amber-100 border-amber-300",
      icon: TrendingUp,
      options: [
        {
          id: "1",
          label: "Splurge",
          description: "Spend on a vacation",
          value: "₹250k",
          variant: "destructive"
        },
        {
          id: "2",
          label: "Add to Savings",
          description: "Add to SIP",
          value: "₹500k",
          variant: "success"
        },
        {
          id: "3",
          label: "ELSS Fund",
          description: "Get Income + growth",
          value: "₹650k",
          variant: "info"
        }
      ]
    },
    {
      id: "4",
      type: "decision",
      title: "Startup Equity",
      description: "Get a stake in a promising venture",
      color: "bg-emerald-100 border-emerald-300",
      icon: TrendingUp,
      options: [
        {
          id: "1",
          label: "Invest 10%",
          description: "Low risk option",
          value: "₹100k",
          variant: "success"
        },
        {
          id: "2",
          label: "Invest 25%",
          description: "Medium risk option",
          value: "₹250k",
          variant: "info"
        },
        {
          id: "3",
          label: "Go All In",
          description: "High risk, high reward",
          value: "₹500k",
          variant: "destructive"
        }
      ]
    },
  ];

  const handleCardClick = (card: GameCard) => {
    if (card.options) {
      setSelectedCard(card);
      setIsDialogOpen(true);
    }
  };

  const handleOptionSelect = (option: CardOption) => {
    console.log("Selected option:", option);
    setIsDialogOpen(false);
    setSelectedCard(null);
  };

  const careerLevels: CareerLevel[] = [
    { id: "1", title: "Aaramth Grihastha", icon: "📊", status: "current", requirement: "Good Start!" },
    { id: "2", title: "Brahmacharya", icon: "💼", status: "completed", requirement: "Great Finish!" },
    { id: "3", title: "Vidyarth Yeva", icon: "📚", status: "completed", requirement: "Completed!" },
  ];

  const gameLog = [
    "Game started! First to ₹50 Lakhs wins",
    "Turn 1 begins"
  ];

  if (currentView === "dashboard") {
    return <DashboardView careerLevels={careerLevels} onNavigate={() => setCurrentView("game")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-100 flex flex-col">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 backdrop-blur-md shadow-sm p-3 border-b border-emerald-200">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentView("dashboard")}
            className="border-emerald-300 hover:bg-emerald-50"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <TrendingUp className="size-4 text-white" />
          </div>
          <h1 className="font-bold text-lg bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Paisa Niti</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 border-emerald-300 text-emerald-700 bg-emerald-50">
            <Clock className="size-3" />
            {timeRemaining}s
          </Badge>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-emerald-300 hover:bg-emerald-50">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Game Log</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-2">
                <Badge variant="secondary">Turn 1</Badge>
                {gameLog.map((log, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{log}</p>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid lg:grid-cols-[1fr_280px] gap-4 max-w-7xl mx-auto p-3 md:p-6">
          {/* Main Game Area */}
          <div className="space-y-3 lg:space-y-4">
            {/* Players Section - Enhanced Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {players.map((player, idx) => (
                <div
                  key={player.id}
                  className={`${player.color} rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <div className="relative p-2.5 sm:p-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                      <div className="size-7 sm:size-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center font-bold text-xs sm:text-sm ring-2 ring-white/30">
                        {player.avatar}
                      </div>
                      <span className="font-semibold truncate text-[11px] sm:text-sm text-white/95">{player.name}</span>
                    </div>
                    <div className="mb-1.5 sm:mb-2">
                      <span className="text-base sm:text-2xl font-bold tracking-tight">{player.balance}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: player.shields }).map((_, i) => (
                        <div key={i} className="size-5 sm:size-6 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20">
                          <Shield className="size-2.5 sm:size-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Your Turn Section - Enhanced */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-emerald-200/50 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-2.5 sm:p-4 border-b border-emerald-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-lg font-bold text-emerald-900">Your Turn</h3>
                  <Badge variant="outline" className="text-[10px] sm:text-xs border-emerald-300 text-emerald-700 bg-white/50">
                    Turn 1
                  </Badge>
                </div>
                <p className="text-[11px] sm:text-sm text-emerald-700 mt-1 hidden sm:block">
                  Draw 'Startup Equity' — pick a card to play
                </p>
              </div>
              <div className="p-3 sm:p-6">
                {/* Desktop: Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {handCards.map((card) => (
                    <GameCardComponent key={card.id} card={card} onClick={() => handleCardClick(card)} />
                  ))}
                </div>

                {/* Mobile: 2-column Grid - Enhanced */}
                <div className="grid sm:hidden grid-cols-2 gap-3">
                  {handCards.map((card) => (
                    <GameCardComponent key={card.id} card={card} mobile onClick={() => handleCardClick(card)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Game Log Sidebar */}
          <div className="hidden lg:block">
            <Card className="bg-white/90 backdrop-blur sticky top-6">
              <CardHeader className="border-b">
                <CardTitle>Game Log</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <Badge variant="secondary">Turn 1</Badge>
                {gameLog.map((log, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{log}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Decision Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[85vh] flex flex-col p-0 gap-0 rounded-2xl overflow-hidden">
          <DialogHeader className="p-4 sm:p-6 pb-3 bg-gradient-to-br from-emerald-50 to-teal-50 border-b border-emerald-200">
            <DialogTitle className="text-base sm:text-xl font-bold text-emerald-900">{selectedCard?.title}</DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-emerald-700 mt-1">
              {selectedCard?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            {selectedCard?.options?.map((option, idx) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all active:scale-[0.98] hover:shadow-lg relative overflow-hidden group ${
                  option.variant === "destructive"
                    ? "border-red-300 bg-gradient-to-br from-red-50 to-rose-100 hover:border-red-400"
                    : option.variant === "success"
                    ? "border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 hover:border-green-400"
                    : "border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-100 hover:border-blue-400"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge
                        variant={option.variant === "destructive" ? "destructive" : "outline"}
                        className={`text-[11px] sm:text-xs font-semibold ${
                          option.variant === "success"
                            ? "border-green-600 text-green-800 bg-green-100"
                            : option.variant === "info"
                            ? "border-blue-600 text-blue-800 bg-blue-100"
                            : ""
                        }`}
                      >
                        {option.label}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">
                      {option.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-lg sm:text-xl font-bold ${
                      option.variant === "destructive"
                        ? "text-red-700"
                        : option.variant === "success"
                        ? "text-green-700"
                        : "text-blue-700"
                    }`}>
                      {option.value}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DashboardView({ careerLevels, onNavigate }: { careerLevels: CareerLevel[]; onNavigate: () => void }) {
  const currentLevel = careerLevels.find(l => l.status === "current");
  const completedCount = careerLevels.filter(l => l.status === "completed").length;
  const totalLevels = careerLevels.length;
  const progressPercentage = (completedCount / totalLevels) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-emerald-100 flex flex-col relative overflow-hidden">
      {/* Mountain Silhouettes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 right-0 w-full h-64 opacity-20" viewBox="0 0 1440 320">
          <path fill="#10b981" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-15" viewBox="0 0 1440 320">
          <path fill="#14b8a6" d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,165.3C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <span className="text-sm">💰</span>
          </div>
          <div>
            <h1 className="font-bold text-emerald-900 text-sm">Paisa War</h1>
            <p className="text-[10px] text-emerald-700">It's your turn</p>
          </div>
        </div>
        <div className="bg-teal-100 px-3 py-1 rounded-full border border-teal-300">
          <span className="text-teal-800 font-bold text-xs">Level 3</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm px-4 py-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-emerald-800 text-xs font-semibold">Active Paisa Progress</span>
          <span className="text-emerald-700 text-xs">{completedCount}/{totalLevels} Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Content - Leaderboard Style */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4">
        <div className="max-w-md mx-auto space-y-3">
          {careerLevels.map((level, index) => (
            <LeaderboardCard
              key={level.id}
              level={level}
              position={index + 1}
              onClick={level.status === "current" ? onNavigate : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LeaderboardCard({
  level,
  position,
  onClick
}: {
  level: CareerLevel;
  position: number;
  onClick?: () => void;
}) {
  const getCardStyle = () => {
    if (position === 1 && level.status === "current") {
      return {
        bg: "bg-gradient-to-r from-orange-100 to-amber-100",
        border: "border-orange-300",
        positionBg: "bg-orange-500",
        avatarBg: "bg-orange-200",
        buttonBg: "bg-orange-500",
        textColor: "text-orange-900",
      };
    } else if (level.status === "completed") {
      return {
        bg: "bg-gradient-to-r from-cyan-50 to-teal-50",
        border: "border-cyan-300",
        positionBg: "bg-cyan-600",
        avatarBg: "bg-cyan-100",
        buttonBg: "bg-cyan-500",
        textColor: "text-cyan-900",
      };
    } else {
      return {
        bg: "bg-gradient-to-r from-gray-50 to-gray-100",
        border: "border-gray-300",
        positionBg: "bg-gray-500",
        avatarBg: "bg-gray-100",
        buttonBg: "bg-gray-400",
        textColor: "text-gray-700",
      };
    }
  };

  const style = getCardStyle();
  const isClickable = onClick !== undefined;
  const levelNumber = position; // Position 1 = Level 3, Position 2 = Level 2, Position 3 = Level 1

  const cardContent = (
    <div className={`flex items-center gap-3 p-3 rounded-2xl ${style.bg} border-2 ${style.border} shadow-md transition-all ${isClickable ? "active:scale-[0.98]" : ""}`}>
      {/* Position Badge */}
      <div className={`size-8 ${style.positionBg} rounded-full flex items-center justify-center shrink-0`}>
        <span className="text-white font-bold text-sm">{position}</span>
      </div>

      {/* Avatar */}
      <div className={`size-12 ${style.avatarBg} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
        {level.icon}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className={`font-bold text-sm ${style.textColor} truncate text-left`}>{level.title}</h3>
        <p className="text-xs text-gray-600 text-left">Level {levelNumber} ~ {level.requirement}</p>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-gray-500">📈</span>
            <span className="text-[10px] text-gray-600">Loan Investing</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-gray-500">💰</span>
            <span className="text-[10px] text-gray-600">
              {position === 1 ? "Board 95%" : position === 2 ? "Board 90%" : "Board 87%"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`size-10 ${style.buttonBg} rounded-full flex items-center justify-center shrink-0 shadow-md ${isClickable ? "active:scale-90" : "opacity-50 cursor-not-allowed"} transition-all`}
        disabled={!isClickable}
      >
        <span className="text-white text-lg">{isClickable ? "▶" : "🔒"}</span>
      </button>
    </div>
  );

  if (isClickable) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {cardContent}
      </button>
    );
  }

  return cardContent;
}

function GameCardComponent({
  card,
  mobile = false,
  onClick
}: {
  card: GameCard;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const Icon = card.icon;

  return (
    <button
      className="w-full text-left group relative"
      onClick={onClick}
    >
      <div className={`${card.color} rounded-xl sm:rounded-2xl border-2 transition-all active:scale-[0.97] sm:hover:scale-105 sm:hover:shadow-xl shadow-md h-full overflow-hidden relative`}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none" />

        <div className={`relative ${mobile ? "p-3.5" : "p-4"} space-y-3`}>
          <div className="flex items-start justify-between gap-2">
            <Badge
              variant="outline"
              className={`${mobile ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1"} bg-white/70 backdrop-blur-sm font-semibold border-white/50 shadow-sm`}
            >
              {card.type}
            </Badge>
            <div className={`${mobile ? "size-8" : "size-9"} rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm ring-2 ring-white/30`}>
              <Icon className={mobile ? "size-4" : "size-4.5"} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className={`${mobile ? "text-sm" : "text-base"} font-bold mb-1.5 leading-tight`}>
              {card.title}
            </h3>
            <p className={`${mobile ? "text-[11px]" : "text-xs"} text-gray-700 line-clamp-2 leading-snug`}>
              {card.description}
            </p>
          </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </button>
  );
}