import type { GameCard } from '../types/game'

export const LEVEL_SITUATION_CARDS: GameCard[] = [
  {
    id: "dc_s-001",
    name: "Pocket Money Dilemma",
    type: 'decision',
    tier: 'common',
    flavor: "some money pocket money in hand. Vada pav or piggy bank? (Save first, spend what's left)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money gone by Sunday",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-002",
    name: "School Trip ka Chakkar",
    type: 'decision',
    tier: 'common',
    flavor: "Trip costs extra. You have some money. Kya plan hai? (Planning beats panic)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Save weekly expenses, go later",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money parents bail you out",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-003",
    name: "Birthday Bonanza",
    type: 'decision',
    tier: 'common',
    flavor: "Relatives gifted some money. 'Padhai ke liye hai beta.' (Gift money is seed money)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money in piggy bank",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Open kids FD Saved money interest",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on gaming credits",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-004",
    name: "Canteen Temptation",
    type: 'decision',
    tier: 'common',
    flavor: "Daily canteen vs tiffin. Difference: daily expenses. (Small daily habits = big yearly numbers)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money/month saved",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/year on samosas",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-005",
    name: "Second-Hand Cycle Deal",
    type: 'decision',
    tier: 'common',
    flavor: "Classmate selling old cycle some money. New one costs extra. (Value > vanity)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Buy used, save some money",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money new one, EMI from parents",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-006",
    name: "Merit Scholarship",
    type: 'decision',
    tier: 'common',
    flavor: "School gave some money scholarship. Sab pooch rahe hain kya kiya? (Reward learning with more learning)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money banked",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in book course",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on new shoes & celebration",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-007",
    name: "Group Food Pressure",
    type: 'decision',
    tier: 'common',
    flavor: "Every weekend eat-out with friends. FOMO is real. (Friendships don't depend on where you eat)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Skip 3 weekends, save some money",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/weekend = Spent money/month",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-008",
    name: "Neighbour Uncle's Job",
    type: 'decision',
    tier: 'common',
    flavor: "Uncle pays some money for data entry work. Easy money! (First earned rupee deserves respect)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved, money spent",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money spent same day",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-009",
    name: "Lost some money",
    type: 'decision',
    tier: 'common',
    flavor: "Bhai, some money gir gayi pocket se. Kya karte? (Losing money teaches more than earning)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Make do with some money left",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Borrow some money more and spend that too",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-010",
    name: "Stationery Sale Trap",
    type: 'decision',
    tier: 'common',
    flavor: "5 pens for some money vs 1 quality pen for some money. Dono alag-alag shops. (Cheap bulk often costs more)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Buy 1 good pen, save some money",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Buy all 5, lose 3 in a week",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-011",
    name: "Find Money on Road",
    type: 'decision',
    tier: 'common',
    flavor: "some money mil gayi footpath pe. No one's around. (Found money isn't free money)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money to piggy bank",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money at chaat stall immediately",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-012",
    name: "Borrow Karna Padega",
    type: 'decision',
    tier: 'common',
    flavor: "Friend needs some money. You have some money. Kya bologe? (Generosity with boundaries)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Lend some money keep some money",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Lend all some money you're now broke",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-013",
    name: "Gaming Credit Offer",
    type: 'decision',
    tier: 'common',
    flavor: "some money gaming credits on sale - 50% off today only! (Virtual spends are real losses)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Skip it - it's not real money",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money gone in 2 hours of play",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-014",
    name: "Tiffin vs Canteen",
    type: 'decision',
    tier: 'common',
    flavor: "Maa ne tiffin diya. Yaar bol raha hai 'canteen chal!' (Maa ka tiffin > peer pressure)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money/day = monthly expenses saved",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month for peer approval",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-015",
    name: "Garage Sale Find",
    type: 'decision',
    tier: 'common',
    flavor: "Old comics sell for some money at school flea market! (One man's old is another man's gold)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money to savings",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Put some money in piggy bank",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on new comics immediately",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-016",
    name: "Zomato Zombie",
    type: 'decision',
    tier: 'common',
    flavor: "Hostel mess ya Zomato roz? some money vs some money per meal. (Convenience has a monthly price tag)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money/month with mess",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month extra on Zomato",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-017",
    name: "First Internship Pay",
    type: 'decision',
    tier: 'common',
    flavor: "some money pehli kamai! Sab bol rahe hain 'treat de!' (First salary = first investment)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money in savings account",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Start some money SIP",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on celebration treat",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-018",
    name: "Semester Fee Panic",
    type: 'decision',
    tier: 'common',
    flavor: "some money fees in 2 months. No plan made. (Fee dates don't move. Your savings can.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Save monthly expenses from allowance",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Panic + parents ka call",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-019",
    name: "Used Textbook Deal",
    type: 'decision',
    tier: 'common',
    flavor: "Used copy some money vs New copy some money. Dono available. (Knowledge matters. Not the spine.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved on books",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money new book, used 4 times",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-020",
    name: "Crypto Bro Advice",
    type: 'decision',
    tier: 'common',
    flavor: "Dosto ne kaha: 'some money lagao, double ho jaayega!' (FOMO is the most expensive emotion)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Say no, research first",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Only if you can afford to lose it",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money gone in the dip",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-021",
    name: "Skill Up or Chill",
    type: 'decision',
    tier: 'common',
    flavor: "Coding bootcamp some money. Ya Netflix aur sona. (Skills compound like money)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Save over 3 months, then buy",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Invest in skill - ROI is a job",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on personal loan for skill",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-022",
    name: "Freelance Windfall",
    type: 'decision',
    tier: 'common',
    flavor: "Client paid some money for a logo design. Tu hi toh best hai! (Freelance income = freedom when saved)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "SIP some money spend some money",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money shopping for new clothes",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-023",
    name: "Credit Card Trap (College)",
    type: 'decision',
    tier: 'common',
    flavor: "Bank ka representative on campus. 'Free credit card lo bhai!' (Free credit card isn't free anything)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Refuse. Debit card is enough.",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money spent in month 1, interest compounds",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-024",
    name: "Group Project Bill",
    type: 'decision',
    tier: 'common',
    flavor: "Group project material: some money. Kaun pay karega pehle? (Money agreements before work begins)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Split upfront - collect immediately",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Pay all yourself, spend weeks chasing",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-025",
    name: "Subscription Overload",
    type: 'decision',
    tier: 'common',
    flavor: "Netflix + Spotify + Prime = monthly expenses. Sab use hota hai? (Audit subscriptions every quarter)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Keep 1, share 1, drop 1 = money saved",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month for shows you half-watch",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-026",
    name: "Café Study Habit",
    type: 'decision',
    tier: 'common',
    flavor: "Café pe study karna cool lagta hai. some money/visit. (Ambience doesn't help you pass exams)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Home 4 days, café once = save some money",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month for ambience",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-027",
    name: "Placement Bonus",
    type: 'decision',
    tier: 'common',
    flavor: "Campus placement! some money joining bonus cheque in hand. (Joining bonus sets the tone for life)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money emergency fund seed",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money first mutual fund",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money iPhone accessories haul",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-028",
    name: "Peer Pressure Trip",
    type: 'decision',
    tier: 'common',
    flavor: "Friends ne Goa plan kiya. Budget: some money. Tune abhi nahi socha. (FOMO trips hurt more than FOMO feelings)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Skip this one, plan next trip properly",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money credit card swipe",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-029",
    name: "Library vs Amazon",
    type: 'decision',
    tier: 'common',
    flavor: "Reference book: some money on Amazon or free at library. (The goal is knowledge, not ownership)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Library. Save some money.",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money Amazon same day delivery",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-030",
    name: "Won an Olympiad Prize",
    type: 'decision',
    tier: 'common',
    flavor: "some money prize money! Parents bol rahe hain 'well done beta'. (Celebrate smart - the achievement is yours, not the spend)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money to savings",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in index fund",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on party for 40 friends",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-031",
    name: "Laptop Breakdown",
    type: 'decision',
    tier: 'common',
    flavor: "Laptop slow ho gaya. Repair some money ya new one some money? (Repair before replace. Always.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Repair first, save for new",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on EMI you can't afford",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-032",
    name: "Part-Time Job Offer",
    type: 'decision',
    tier: 'common',
    flavor: "monthly expenses part-time offer. Time toh lagega. (Earning is step 1. Saving is step 2.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money/month saved",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money SIP start",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money lifestyle inflate immediately",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-033",
    name: "Mess Fee Hike",
    type: 'decision',
    tier: 'common',
    flavor: "Hostel mess ne fees some money barhaa di. Baaki budget tighten karo. (Budget is a living document - adjust it)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Cut eating-out by monthly expenses",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Borrow some money extra from home",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-034",
    name: "Latest Smartphone EMI",
    type: 'decision',
    tier: 'epic',
    flavor: "Everyone has the new phone. You can get it on EMI!",
    options: [
      {
        type: 'spend',
        label: "Take EMI",
        description: "Get some money now, pay EMI",
        effect: { type: 'wealth_pct', value: -27, target: 'self' },
        mentorInsight: "You just took a loan for a phone. The interest will bleed your wealth."
      },
      {
        type: 'save',
        label: "Decline",
        description: "Use old phone",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        mentorInsight: "Great discipline! Delaying gratification keeps you debt-free."
      },
    ],
  },
  {
    id: "dc_s-035",
    name: "Gym Annual Subscription",
    type: 'decision',
    tier: 'rare',
    flavor: "Huge discount on annual gym membership if you pay via credit card EMI.",
    options: [
      {
        type: 'invest',
        label: "Take EMI",
        description: "Get some money for gym",
        effect: { type: 'wealth_pct', value: 17, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -11, target: 'self' },
        mentorInsight: "Fitness is good, but paying 15% interest for a gym you might not visit is bad."
      },
      {
        type: 'save',
        label: "Decline",
        description: "Workout at home",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Smart choice. You avoided a subscription trap."
      },
    ],
  },
  {
    id: "dc_s-036",
    name: "Pehli Salary!",
    type: 'decision',
    tier: 'common',
    flavor: "some money pehli salary. HR bol raha hai - 'Treat dena!' (50-30-20 rule starts from salary #1)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money emergency fund start",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money first SIP!",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money blown in one weekend",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-037",
    name: "PF Opt In or Out",
    type: 'decision',
    tier: 'common',
    flavor: "HR ne form diya - PF opt in ya out? 'Cash mein zyada milega bhai.' (PF is your future self's thank you note)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Opt in always - forced saving",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "It's investing in 60-year-you",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Opt out, spend the monthly expenses",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-038",
    name: "Phone Snatch",
    type: 'decision',
    tier: 'common',
    flavor: "Phone chura liya kisi ne! Replacement: some money. (Gadget insurance costs monthly expenses. Think.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Repair old phone for some money",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money flagship on impulse",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-039",
    name: "Salary Hike Time",
    type: 'decision',
    tier: 'common',
    flavor: "Boss ne hint diya - appraisal aane wala hai. (Not negotiating is expensive)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Research market rate first",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Negotiate! Salary is your biggest asset",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Accept without asking. Lose yearly expenses.",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-040",
    name: "Lifestyle Creep",
    type: 'decision',
    tier: 'common',
    flavor: "Salary badi toh sab kuch upgrade kar liya - rent, phone, food. (When income rises, savings rate should too)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Increase savings %, not just spends",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Save 50% of hike",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/year in lifestyle inflation",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-041",
    name: "Year-End Bonus",
    type: 'decision',
    tier: 'common',
    flavor: "some money performance bonus! Dost bol raha hai Manali chalte hain. (Bonus should work harder than you do)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money emergency fund",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in mutual fund",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on Manali trip",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-042",
    name: "Dinner with Seniors",
    type: 'decision',
    tier: 'common',
    flavor: "Team dinner at a fancy place. Bill: some money. You suggested splitting. (Be politely firm about money boundaries)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Propose split equally, stick to some money budget",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money 'bhai tu junior hai, tereko pay karna chahiye'",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-043",
    name: "Work From Home Savings",
    type: 'decision',
    tier: 'common',
    flavor: "WFH bachata hai monthly expenses on commute & food. (Savings windfalls should be redirected, not spent)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money to SIP, some money enjoy",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Step up SIP",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money on new gaming chair",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-044",
    name: "EMI Bombarded",
    type: 'decision',
    tier: 'common',
    flavor: "Phone EMI + bike EMI + credit card. 40% of salary gone. (EMIs don't feel heavy till they crush you)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "No new EMIs until existing ones end",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Add a laptop EMI. Why not.",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-045",
    name: "Job Switch ka Mania",
    type: 'decision',
    tier: 'common',
    flavor: "some money hike at new company. Joining bonus bhi hai. (Hikes should boost savings more than lifestyle)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved from hike",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Step up SIP by some money",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money lifestyle upgrade immediately",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-046",
    name: "Office Lunch Trap",
    type: 'decision',
    tier: 'common',
    flavor: "daily expenses office lunch order. Monthly: some money. Mahine mein? (Convenience spending is the sneakiest)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Tiffin 3 days = save some money",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month ordering daily",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-047",
    name: "Side Hustle Win",
    type: 'decision',
    tier: 'common',
    flavor: "Content writing side hustle earned some money this month! (Side income = fast-forward button on wealth)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money saved",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in SIP",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money vacation fund (not planned)",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-048",
    name: "MBA Decision",
    type: 'decision',
    tier: 'common',
    flavor: "some money lakh MBA loan. Worth it ya nahi? (Education loans need a repayment plan, not just hope)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Research ROI first. Placement record dekhna.",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Only if placement data is strong",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent moneyL loan with no plan = debt trap",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-049",
    name: "Telegram Stock Tip",
    type: 'decision',
    tier: 'common',
    flavor: "'Yaar ek tip hai. 3x ho jaayega 1 mahine mein!' (Free tips are the most expensive advice)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Ignore. Report the channel.",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Stick to index funds",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money in pump-and-dump scheme",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-050",
    name: "Gym vs YouTube",
    type: 'decision',
    tier: 'common',
    flavor: "Gym: monthly expenses. YouTube: Free. Fitness goals same. (Pay for habits only after proving them free)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "YouTube for 3 months. Gym if consistent.",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money/month, go 4 times, quit",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-051",
    name: "Tax Refund Surprise",
    type: 'decision',
    tier: 'common',
    flavor: "some money income tax refund arrived. 'Iska toh plan hi nahi tha!' (Unexpected income = unexpected future security)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money to emergency fund",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in ELSS",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money weekend trip",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-052",
    name: "FOMO Investment",
    type: 'decision',
    tier: 'common',
    flavor: "Sab bol rahe hain us startup mein invest karo. Unverified. (FOMO is not a financial strategy)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Wait. Research first.",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Max some money if you can lose it",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money in unverified startup",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-053",
    name: "Rent Negotiation",
    type: 'decision',
    tier: 'common',
    flavor: "Landlord hike maang raha hai some money extra. Compare karo. (Everything in India is negotiable)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Negotiate down or shift = yearly expenses",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Accept silently. some money lost/year.",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-054",
    name: "Referral Bonus",
    type: 'decision',
    tier: 'common',
    flavor: "Company referral bonus: some money cheque! (Bonus ≠ spend. Bonus = advance your goals.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money in liquid fund",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "some money in SIP top-up",
        effect: { type: 'wealth_pct', value: 9, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money new headphone + watch combo",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-055",
    name: "Forgotten Subscriptions",
    type: 'decision',
    tier: 'common',
    flavor: "4 apps auto-renewing. Total: monthly expenses. Kab subscribe kiya? (Audit your apps every 3 months)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Cancel 2 now = money saved",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "-",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Forget them. yearly expenses gone.",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-056",
    name: "Health Insurance Confusion",
    type: 'decision',
    tier: 'common',
    flavor: "Office plan only ya add personal plan bhi? (One surgery will make you wish you had more cover)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Office + monthly expenses personal top-up",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Health = wealth",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Only office plan. Hope nothing happens.",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-057",
    name: "Invest or Travel?",
    type: 'decision',
    tier: 'common',
    flavor: "money saved. Europe trip ya mutual fund? (Travel is beautiful. Compound interest is more beautiful.)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Put some money in fund, travel local",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Saved money in equity fund",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money Europe trip on a whim",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-058",
    name: "Upskilling Payoff",
    type: 'decision',
    tier: 'common',
    flavor: "some money course led to some money salary hike! (Skills don't just pay - they compound)",
    options: [
      {
        type: 'save',
        label: "Save",
        description: "Saved money/month more to save",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "Saving builds the foundation of your wealth. A safe and reliable choice."
      },
      {
        type: 'invest',
        label: "Invest",
        description: "Step up SIP by some money",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing puts your money to work. Risk is involved, but so is growth."
      },
      {
        type: 'spend',
        label: "Spend",
        description: "Spent money hike all spent on lifestyle",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Immediate gratification feels good now, but it delays your long-term goals."
      },
    ],
  },
  {
    id: "dc_s-059",
    name: "L4 Event 59",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-060",
    name: "L4 Event 60",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 25, target: 'self' },
        investRisk: 40,
        failEffect: { type: 'wealth_pct', value: -24, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -28, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-061",
    name: "L4 Event 61",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-062",
    name: "L4 Event 62",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-063",
    name: "L4 Event 63",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 6, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 17, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -13, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -13, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-064",
    name: "L4 Event 64",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-065",
    name: "L4 Event 65",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 33, target: 'self' },
        investRisk: 40,
        failEffect: { type: 'wealth_pct', value: -23, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -21, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-066",
    name: "L4 Event 66",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 6, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 20, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-067",
    name: "L4 Event 67",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-068",
    name: "L4 Event 68",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-069",
    name: "L4 Event 69",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 7, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 16, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -11, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-070",
    name: "L4 Event 70",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 32, target: 'self' },
        investRisk: 40,
        failEffect: { type: 'wealth_pct', value: -24, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -26, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-071",
    name: "L4 Event 71",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-072",
    name: "L4 Event 72",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 6, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 15, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -14, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -14, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-073",
    name: "L4 Event 73",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 11, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-074",
    name: "L4 Event 74",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 3, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-075",
    name: "L4 Event 75",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 29, target: 'self' },
        investRisk: 40,
        failEffect: { type: 'wealth_pct', value: -22, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -24, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-076",
    name: "L4 Event 76",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-077",
    name: "L4 Event 77",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-078",
    name: "L4 Event 78",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 19, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-079",
    name: "L4 Event 79",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 4, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-080",
    name: "L4 Event 80",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 26, target: 'self' },
        investRisk: 40,
        failEffect: { type: 'wealth_pct', value: -23, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -28, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-081",
    name: "L4 Event 81",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 8, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 17, target: 'self' },
        investRisk: 25,
        failEffect: { type: 'wealth_pct', value: -13, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -12, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-082",
    name: "L4 Event 82",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 12, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -6, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
  {
    id: "dc_s-083",
    name: "L4 Event 83",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    options: [
      {
        type: 'save',
        label: "Conservative",
        description: "Safe but slow",
        effect: { type: 'wealth_pct', value: 5, target: 'self' },
        mentorInsight: "At this stage, pure saving won't beat inflation, but it preserves capital."
      },
      {
        type: 'invest',
        label: "Aggressive",
        description: "High risk, high reward",
        effect: { type: 'wealth_pct', value: 10, target: 'self' },
        investRisk: 10,
        failEffect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Investing heavily is necessary for retirement, but ensure you diversify."
      },
      {
        type: 'spend',
        label: "Lifestyle Up",
        description: "Enjoy the wealth",
        effect: { type: 'wealth_pct', value: -7, target: 'self' },
        mentorInsight: "Lifestyle inflation can destroy years of hard work. Be mindful."
      },
    ],
  },
];
