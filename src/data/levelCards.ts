import type { GameCard } from '../types/game'

export const LEVEL_SITUATION_CARDS: GameCard[] = [
  {
    id: "dc_s-001",
    name: "Pocket Money Dilemma",
    nameHi: "पॉकेट मनी दुविधा",
    type: 'decision',
    tier: 'common',
    flavor: "some money pocket money in hand. Vada pav or piggy bank? (Save first, spend what's left)",
    flavorHi: "हाथ में जेब खर्च के कुछ पैसे. वड़ा पाव या गुल्लक? (पहले बचत करें, जो बचा है उसे खर्च करें)",
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
    nameHi: "स्कूल ट्रिप का चक्कर",
    type: 'decision',
    tier: 'common',
    flavor: "Trip costs extra. You have some money. Kya plan hai? (Planning beats panic)",
    flavorHi: "ट्रिप में अतिरिक्त खर्च है। आपके पास कुछ पैसे हैं। क्या योजना है? (Planning beats panic)",
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
    nameHi: "जन्मदिन का उपहार",
    type: 'decision',
    tier: 'common',
    flavor: "Relatives gifted some money. 'Padhai ke liye hai beta.' (Gift money is seed money)",
    flavorHi: "Relatives gifted some money. 'Padhai ke liye hai beta.' (Gift money is seed money)",
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
    nameHi: "कैंटीन प्रलोभन",
    type: 'decision',
    tier: 'common',
    flavor: "Daily canteen vs tiffin. Difference: daily expenses. (Small daily habits = big yearly numbers)",
    flavorHi: "दैनिक कैंटीन बनाम टिफिन। अंतर: दैनिक खर्च. (छोटी दैनिक आदतें = बड़ी वार्षिक संख्याएँ)",
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
    nameHi: "सेकेंड-हैंड साइकिल डील",
    type: 'decision',
    tier: 'common',
    flavor: "Classmate selling old cycle some money. New one costs extra. (Value > vanity)",
    flavorHi: "सहपाठी कुछ पैसों में पुरानी साइकिल बेच रहा है। नये की अतिरिक्त लागत है. (मूल्य > घमंड)",
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
    nameHi: "योग्यता छात्रवृत्ति",
    type: 'decision',
    tier: 'common',
    flavor: "School gave some money scholarship. Sab pooch rahe hain kya kiya? (Reward learning with more learning)",
    flavorHi: "School gave some money scholarship. Sab pooch rahe hain kya kiya? (Reward learning with more learning)",
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
    nameHi: "समूह खाद्य दबाव",
    type: 'decision',
    tier: 'common',
    flavor: "Every weekend eat-out with friends. FOMO is real. (Friendships don't depend on where you eat)",
    flavorHi: "हर सप्ताहांत दोस्तों के साथ बाहर खाना। FOMO वास्तविक है. (दोस्ती इस बात पर निर्भर नहीं करती कि आप कहां खाते हैं)",
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
    nameHi: "पड़ोसी अंकल की नौकरी",
    type: 'decision',
    tier: 'common',
    flavor: "Uncle pays some money for data entry work. Easy money! (First earned rupee deserves respect)",
    flavorHi: "अंकल डाटा एंट्री के काम के लिए कुछ पैसे देते हैं। आसानी से कमाया जाने वाला धन! (पहला कमाया हुआ रुपया सम्मान का पात्र है)",
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
    nameHi: "कुछ पैसे खो गए",
    type: 'decision',
    tier: 'common',
    flavor: "Bhai, some money gir gayi pocket se. Kya karte? (Losing money teaches more than earning)",
    flavorHi: "Bhai, some money gir gayi pocket se. Kya karte? (Losing money teaches more than earning)",
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
    nameHi: "स्टेशनरी बिक्री जाल",
    type: 'decision',
    tier: 'common',
    flavor: "5 pens for some money vs 1 quality pen for some money. Dono alag-alag shops. (Cheap bulk often costs more)",
    flavorHi: "कुछ पैसे के लिए 5 पेन बनाम कुछ पैसे के लिए 1 गुणवत्ता वाला पेन। डोनो अलग-अलग दुकानें। (सस्ते थोक की कीमत अक्सर अधिक होती है)",
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
    nameHi: "सड़क पर पैसा खोजें",
    type: 'decision',
    tier: 'common',
    flavor: "some money mil gayi footpath pe. No one's around. (Found money isn't free money)",
    flavorHi: "कुछ पैसे मिल गए फुटपाथ पर। आसपास कोई नहीं है. (पाया गया पैसा मुफ़्त पैसा नहीं है)",
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
    nameHi: "Borrow Karna Padega",
    type: 'decision',
    tier: 'common',
    flavor: "Friend needs some money. You have some money. Kya bologe? (Generosity with boundaries)",
    flavorHi: "दोस्त को कुछ पैसों की जरूरत है. आपके पास कुछ पैसे हैं. क्या बोलोगे? (सीमाओं के साथ उदारता)",
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
    nameHi: "गेमिंग क्रेडिट ऑफर",
    type: 'decision',
    tier: 'common',
    flavor: "some money gaming credits on sale - 50% off today only! (Virtual spends are real losses)",
    flavorHi: "कुछ गेमिंग क्रेडिट बिक्री पर हैं - केवल आज के लिए 50% की छूट! (Virtual spends are real losses)",
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
    nameHi: "टिफिन बनाम कैंटीन",
    type: 'decision',
    tier: 'common',
    flavor: "Maa ne tiffin diya. Yaar bol raha hai 'canteen chal!' (Maa ka tiffin > peer pressure)",
    flavorHi: "माँ ने टिफिन दिया. यार बोल रहा है 'कैंटीन चल!' (मां का टिफिन > साथियों का दबाव)",
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
    nameHi: "गेराज बिक्री खोजें",
    type: 'decision',
    tier: 'common',
    flavor: "Old comics sell for some money at school flea market! (One man's old is another man's gold)",
    flavorHi: "पुरानी कॉमिक्स स्कूल के कबाड़ी बाजार में कुछ पैसों के लिए बिकती हैं! (एक आदमी का पुराना सोना दूसरे आदमी का सोना है)",
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
    nameHi: "ज़ोमैटो ज़ोंबी",
    type: 'decision',
    tier: 'common',
    flavor: "Hostel mess ya Zomato roz? some money vs some money per meal. (Convenience has a monthly price tag)",
    flavorHi: "हॉस्टल में गड़बड़ है या ज़ोमैटो रोज़? प्रति भोजन कुछ पैसे बनाम कुछ पैसे। (सुविधा का मासिक मूल्य टैग है)",
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
    nameHi: "प्रथम इंटर्नशिप वेतन",
    type: 'decision',
    tier: 'common',
    flavor: "some money pehli kamai! Sab bol rahe hain 'treat de!' (First salary = first investment)",
    flavorHi: "some money pehli kamai! Sab bol rahe hain 'treat de!' (First salary = first investment)",
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
    nameHi: "सेमेस्टर शुल्क को लेकर दहशत",
    type: 'decision',
    tier: 'common',
    flavor: "some money fees in 2 months. No plan made. (Fee dates don't move. Your savings can.)",
    flavorHi: "2 महीने में कुछ पैसे फीस. कोई योजना नहीं बनी. (फीस की तारीखें नहीं बदलतीं। आपकी बचत बढ़ सकती है।)",
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
    nameHi: "प्रयुक्त पाठ्यपुस्तक डील",
    type: 'decision',
    tier: 'common',
    flavor: "Used copy some money vs New copy some money. Dono available. (Knowledge matters. Not the spine.)",
    flavorHi: "पुरानी कॉपी में कुछ पैसे बनाम नई कॉपी में कुछ पैसे। डोनो उपलब्ध है. (ज्ञान मायने रखता है। रीढ़ नहीं।)",
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
    nameHi: "क्रिप्टो भाई सलाह",
    type: 'decision',
    tier: 'common',
    flavor: "Dosto ne kaha: 'some money lagao, double ho jaayega!' (FOMO is the most expensive emotion)",
    flavorHi: "Dosto ne kaha: 'some money lagao, double ho jaayega!' (FOMO is the most expensive emotion)",
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
    nameHi: "कौशल बढ़ाएं या शांत रहें",
    type: 'decision',
    tier: 'common',
    flavor: "Coding bootcamp some money. Ya Netflix aur sona. (Skills compound like money)",
    flavorHi: "कोडिंग बूटकैंप कुछ पैसे। हां नेटफ्लिक्स और सोना। (कौशल पैसे की तरह मिश्रित होता है)",
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
    nameHi: "फ्रीलांस विंडफॉल",
    type: 'decision',
    tier: 'common',
    flavor: "Client paid some money for a logo design. Tu hi toh best hai! (Freelance income = freedom when saved)",
    flavorHi: "ग्राहक ने लोगो डिज़ाइन के लिए कुछ पैसे चुकाए। तू ही तो सबसे अच्छा है! (स्वतंत्र आय = बचत होने पर स्वतंत्रता)",
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
    nameHi: "क्रेडिट कार्ड ट्रैप (कॉलेज)",
    type: 'decision',
    tier: 'common',
    flavor: "Bank ka representative on campus. 'Free credit card lo bhai!' (Free credit card isn't free anything)",
    flavorHi: "परिसर में बैंक का प्रतिनिधि। 'फ्री क्रेडिट कार्ड लो भाई!' (मुफ़्त क्रेडिट कार्ड कुछ भी मुफ़्त नहीं है)",
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
    nameHi: "समूह परियोजना विधेयक",
    type: 'decision',
    tier: 'common',
    flavor: "Group project material: some money. Kaun pay karega pehle? (Money agreements before work begins)",
    flavorHi: "Group project material: some money. Kaun pay karega pehle? (Money agreements before work begins)",
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
    nameHi: "सदस्यता अधिभार",
    type: 'decision',
    tier: 'common',
    flavor: "Netflix + Spotify + Prime = monthly expenses. Sab use hota hai? (Audit subscriptions every quarter)",
    flavorHi: "नेटफ्लिक्स + स्पॉटिफ़ + प्राइम = मासिक खर्च। सब यूज़ होता है? (प्रत्येक तिमाही में ऑडिट सदस्यता)",
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
    nameHi: "कैफ़े अध्ययन की आदत",
    type: 'decision',
    tier: 'common',
    flavor: "Café pe study karna cool lagta hai. some money/visit. (Ambience doesn't help you pass exams)",
    flavorHi: "कैफे पे स्टडी करना कूल लगता है। कुछ पैसे/यात्रा. (माहौल आपको परीक्षा उत्तीर्ण करने में मदद नहीं करता)",
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
    nameHi: "प्लेसमेंट बोनस",
    type: 'decision',
    tier: 'common',
    flavor: "Campus placement! some money joining bonus cheque in hand. (Joining bonus sets the tone for life)",
    flavorHi: "कैम्पस प्लेसमेंट! हाथ में कुछ पैसों का जॉइनिंग बोनस चेक। (ज्वाइनिंग बोनस जीवन के लिए दिशा निर्धारित करता है)",
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
    nameHi: "सहकर्मी दबाव यात्रा",
    type: 'decision',
    tier: 'common',
    flavor: "Friends ne Goa plan kiya. Budget: some money. Tune abhi nahi socha. (FOMO trips hurt more than FOMO feelings)",
    flavorHi: "Friends ne Goa plan kiya. Budget: some money. Tune abhi nahi socha. (FOMO trips hurt more than FOMO feelings)",
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
    nameHi: "लाइब्रेरी बनाम अमेज़न",
    type: 'decision',
    tier: 'common',
    flavor: "Reference book: some money on Amazon or free at library. (The goal is knowledge, not ownership)",
    flavorHi: "संदर्भ पुस्तक: अमेज़ॅन पर कुछ पैसे या लाइब्रेरी में मुफ़्त। (लक्ष्य ज्ञान है, स्वामित्व नहीं)",
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
    nameHi: "ओलंपियाड पुरस्कार जीता",
    type: 'decision',
    tier: 'common',
    flavor: "some money prize money! Parents bol rahe hain 'well done beta'. (Celebrate smart - the achievement is yours, not the spend)",
    flavorHi: "कुछ धनराशि पुरस्कार राशि! माता-पिता बोल रहे हैं 'शाबाश बेटा'। (स्मार्ट जश्न मनाएं - उपलब्धि आपकी है, खर्च की नहीं)",
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
    nameHi: "लैपटॉप टूटना",
    type: 'decision',
    tier: 'common',
    flavor: "Laptop slow ho gaya. Repair some money ya new one some money? (Repair before replace. Always.)",
    flavorHi: "लैपटॉप स्लो हो गया. कुछ पैसे मरम्मत या नया कुछ पैसे? (बदलने से पहले मरम्मत करें। हमेशा।)",
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
    nameHi: "अंशकालिक नौकरी की पेशकश",
    type: 'decision',
    tier: 'common',
    flavor: "monthly expenses part-time offer. Time toh lagega. (Earning is step 1. Saving is step 2.)",
    flavorHi: "मासिक खर्च अंशकालिक प्रस्ताव। टाइम तो लगेगा. (कमाई चरण 1 है। बचत चरण 2 है।)",
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
    nameHi: "मेस शुल्क में बढ़ोतरी",
    type: 'decision',
    tier: 'common',
    flavor: "Hostel mess ne fees some money barhaa di. Baaki budget tighten karo. (Budget is a living document - adjust it)",
    flavorHi: "हॉस्टल मेस ने फीस कुछ पैसे बरहा दी। बाकी बजट टाइट करो. (बजट एक जीवित दस्तावेज़ है - इसे समायोजित करें)",
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
    nameHi: "नवीनतम स्मार्टफोन ईएमआई",
    type: 'decision',
    tier: 'epic',
    flavor: "Everyone has the new phone. You can get it on EMI!",
    flavorHi: "हर किसी के पास नया फ़ोन है. आप इसे ईएमआई पर प्राप्त कर सकते हैं!",
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
    nameHi: "जिम वार्षिक सदस्यता",
    type: 'decision',
    tier: 'rare',
    flavor: "Huge discount on annual gym membership if you pay via credit card EMI.",
    flavorHi: "यदि आप क्रेडिट कार्ड ईएमआई के माध्यम से भुगतान करते हैं तो वार्षिक जिम सदस्यता पर भारी छूट।",
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
    nameHi: "Pehli Salary!",
    type: 'decision',
    tier: 'common',
    flavor: "some money pehli salary. HR bol raha hai - 'Treat dena!' (50-30-20 rule starts from salary #1)",
    flavorHi: "some money pehli salary. HR bol raha hai - 'Treat dena!' (50-30-20 rule starts from salary #1)",
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
    nameHi: "पीएफ ऑप्ट इन या आउट",
    type: 'decision',
    tier: 'common',
    flavor: "HR ne form diya - PF opt in ya out? 'Cash mein zyada milega bhai.' (PF is your future self's thank you note)",
    flavorHi: "HR ne form diya - PF opt in ya out? 'Cash mein zyada milega bhai.' (PF is your future self's thank you note)",
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
    nameHi: "फ़ोन छीनना",
    type: 'decision',
    tier: 'common',
    flavor: "Phone chura liya kisi ne! Replacement: some money. (Gadget insurance costs monthly expenses. Think.)",
    flavorHi: "फ़ोन चुरा लिया किसी ने! प्रतिस्थापन: कुछ पैसे. (गैजेट बीमा का मासिक खर्च होता है। सोचिए।)",
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
    nameHi: "वेतन वृद्धि का समय",
    type: 'decision',
    tier: 'common',
    flavor: "Boss ne hint diya - appraisal aane wala hai. (Not negotiating is expensive)",
    flavorHi: "Boss ne hint diya - appraisal aane wala hai. (Not negotiating is expensive)",
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
    nameHi: "जीवनशैली रेंगना",
    type: 'decision',
    tier: 'common',
    flavor: "Salary badi toh sab kuch upgrade kar liya - rent, phone, food. (When income rises, savings rate should too)",
    flavorHi: "Salary badi toh sab kuch upgrade kar liya - rent, phone, food. (When income rises, savings rate should too)",
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
    nameHi: "साल के अंत का बोनस",
    type: 'decision',
    tier: 'common',
    flavor: "some money performance bonus! Dost bol raha hai Manali chalte hain. (Bonus should work harder than you do)",
    flavorHi: "some money performance bonus! Dost bol raha hai Manali chalte hain. (Bonus should work harder than you do)",
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
    nameHi: "वरिष्ठ नागरिकों के साथ रात्रि भोज",
    type: 'decision',
    tier: 'common',
    flavor: "Team dinner at a fancy place. Bill: some money. You suggested splitting. (Be politely firm about money boundaries)",
    flavorHi: "एक शानदार जगह पर टीम का रात्रि भोज। बिल: कुछ पैसे. आपने बंटवारे का सुझाव दिया. (पैसे की सीमाओं के बारे में विनम्रतापूर्वक दृढ़ रहें)",
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
    nameHi: "घर से काम की बचत",
    type: 'decision',
    tier: 'common',
    flavor: "WFH bachata hai monthly expenses on commute & food. (Savings windfalls should be redirected, not spent)",
    flavorHi: "WFH बचाता है आवागमन और भोजन पर मासिक खर्च। (बचत के अप्रत्याशित लाभ को पुनर्निर्देशित किया जाना चाहिए, खर्च नहीं किया जाना चाहिए)",
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
    nameHi: "ईएमआई बमबारी",
    type: 'decision',
    tier: 'common',
    flavor: "Phone EMI + bike EMI + credit card. 40% of salary gone. (EMIs don't feel heavy till they crush you)",
    flavorHi: "फ़ोन ईएमआई + बाइक ईएमआई + क्रेडिट कार्ड। 40% सैलरी चली गई. (ईएमआई तब तक भारी नहीं लगती जब तक वे आपको कुचल न दें)",
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
    nameHi: "जॉब स्विच उन्माद",
    type: 'decision',
    tier: 'common',
    flavor: "some money hike at new company. Joining bonus bhi hai. (Hikes should boost savings more than lifestyle)",
    flavorHi: "नई कंपनी में कुछ धन वृद्धि। जॉइनिंग बोनस भी है. (हाइक से जीवनशैली से ज्यादा बचत को बढ़ावा मिलना चाहिए)",
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
    nameHi: "ऑफिस लंच ट्रैप",
    type: 'decision',
    tier: 'common',
    flavor: "daily expenses office lunch order. Monthly: some money. Mahine mein? (Convenience spending is the sneakiest)",
    flavorHi: "दैनिक व्यय कार्यालय दोपहर के भोजन का आदेश। मासिक: कुछ पैसे. माहीन में? (सुविधा व्यय सबसे गुप्त है)",
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
    nameHi: "साइड हसल जीत",
    type: 'decision',
    tier: 'common',
    flavor: "Content writing side hustle earned some money this month! (Side income = fast-forward button on wealth)",
    flavorHi: "कंटेंट राइटिंग साइड हसल ने इस महीने कुछ पैसे कमाए! (अतिरिक्त आय = धन पर तेजी से आगे बढ़ने वाला बटन)",
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
    nameHi: "एमबीए निर्णय",
    type: 'decision',
    tier: 'common',
    flavor: "some money lakh MBA loan. Worth it ya nahi? (Education loans need a repayment plan, not just hope)",
    flavorHi: "कुछ पैसे लाख एमबीए ऋण. क्या यह इसके लायक है नहीं? (शिक्षा ऋण के लिए पुनर्भुगतान योजना की आवश्यकता है, न कि केवल आशा की)",
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
    nameHi: "टेलीग्राम स्टॉक टिप",
    type: 'decision',
    tier: 'common',
    flavor: "'Yaar ek tip hai. 3x ho jaayega 1 mahine mein!' (Free tips are the most expensive advice)",
    flavorHi: "'Yaar ek tip hai. 3x ho jaayega 1 mahine mein!' (Free tips are the most expensive advice)",
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
    nameHi: "जिम बनाम यूट्यूब",
    type: 'decision',
    tier: 'common',
    flavor: "Gym: monthly expenses. YouTube: Free. Fitness goals same. (Pay for habits only after proving them free)",
    flavorHi: "जिम: मासिक खर्च. यूट्यूब: निःशुल्क. फिटनेस लक्ष्य समान. (आदतों को मुफ़्त साबित करने के बाद ही उनका भुगतान करें)",
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
    nameHi: "टैक्स रिफंड आश्चर्य",
    type: 'decision',
    tier: 'common',
    flavor: "some money income tax refund arrived. 'Iska toh plan hi nahi tha!' (Unexpected income = unexpected future security)",
    flavorHi: "कुछ पैसे इनकम टैक्स रिफंड आ गए. 'इसका तो प्लान ही नहीं था!' (अप्रत्याशित आय = अप्रत्याशित भविष्य की सुरक्षा)",
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
    nameHi: "FOMO निवेश",
    type: 'decision',
    tier: 'common',
    flavor: "Sab bol rahe hain us startup mein invest karo. Unverified. (FOMO is not a financial strategy)",
    flavorHi: "सब बोल रहे हैं हमें स्टार्टअप में निवेश करो। असत्यापित. (FOMO कोई वित्तीय रणनीति नहीं है)",
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
    nameHi: "किराये पर बातचीत",
    type: 'decision',
    tier: 'common',
    flavor: "Landlord hike maang raha hai some money extra. Compare karo. (Everything in India is negotiable)",
    flavorHi: "मकान मालिक ने कुछ पैसे अतिरिक्त मांगे हैं। कारो की तुलना करें. (भारत में हर चीज़ परक्राम्य है)",
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
    nameHi: "रेफरल बोनस",
    type: 'decision',
    tier: 'common',
    flavor: "Company referral bonus: some money cheque! (Bonus ≠ spend. Bonus = advance your goals.)",
    flavorHi: "कंपनी रेफरल बोनस: कुछ पैसे का चेक! (बोनस ≠ खर्च करें। बोनस = अपने लक्ष्यों को आगे बढ़ाएं।)",
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
    nameHi: "भूली हुई सदस्यताएँ",
    type: 'decision',
    tier: 'common',
    flavor: "4 apps auto-renewing. Total: monthly expenses. Kab subscribe kiya? (Audit your apps every 3 months)",
    flavorHi: "4 ऐप्स स्वत: नवीनीकरण। कुल: मासिक खर्च. कब सब्सक्राइब किया? (हर 3 महीने में अपने ऐप्स का ऑडिट करें)",
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
    nameHi: "स्वास्थ्य बीमा भ्रम",
    type: 'decision',
    tier: 'common',
    flavor: "Office plan only ya add personal plan bhi? (One surgery will make you wish you had more cover)",
    flavorHi: "केवल कार्यालय योजना, क्या व्यक्तिगत योजना भी जोड़ें? (एक सर्जरी से आप चाहेंगे कि आपके पास और अधिक कवर हो)",
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
    nameHi: "निवेश करें या यात्रा करें?",
    type: 'decision',
    tier: 'common',
    flavor: "money saved. Europe trip ya mutual fund? (Travel is beautiful. Compound interest is more beautiful.)",
    flavorHi: "पैसा बचाया. यूरोप यात्रा या म्यूचुअल फंड? (यात्रा सुंदर है। चक्रवृद्धि ब्याज अधिक सुंदर है।)",
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
    nameHi: "अपस्किलिंग अदायगी",
    type: 'decision',
    tier: 'common',
    flavor: "some money course led to some money salary hike! (Skills don't just pay - they compound)",
    flavorHi: "कुछ धन पाठ्यक्रम के कारण कुछ धन वेतन वृद्धि हुई! (कौशल केवल लाभ नहीं देता - वे जुड़ते हैं)",
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
    nameHi: "एल4 इवेंट 59",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 60",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 61",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 62",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 63",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 64",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 65",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 66",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 67",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 68",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 69",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 70",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 71",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 72",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 73",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 74",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 75",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 76",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 77",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 78",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 79",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 80",
    type: 'decision',
    tier: 'epic',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 81",
    type: 'decision',
    tier: 'rare',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 82",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
    nameHi: "एल4 इवेंट 83",
    type: 'decision',
    tier: 'common',
    flavor: "A major mid-life financial decision approaches. The stakes are higher now.",
    flavorHi: "मध्य जीवन का एक बड़ा वित्तीय निर्णय निकट आ रहा है। अब दांव ऊंचे हैं.",
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
