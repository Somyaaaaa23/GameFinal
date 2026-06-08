import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      auth: {
        title: "Welcome to Paisa War",
        subtitle: "The Ultimate Wealth Strategy Game",
        usernameLabel: "Username",
        usernamePlaceholder: "Enter a cool name",
        loading: "Entering...",
        submit: "Enter the Arena"
      },
      dashboard: {
        welcome: "Welcome back",
        campaign: "Campaign Mode",
        campaignDesc: "Play through life stages and build wealth",
        playOnline: "Play Online",
        playOnlineDesc: "Compete with friends in real-time multiplayer",
        tutorial: "Tutorial",
        tutorialDesc: "Learn how to play the game",
        profile: "Player Profile",
        matchesPlayed: "Games Played",
        matchesWon: "Games Won",
        totalWealth: "Total Wealth Generated",
        recentMatches: "Recent Matches",
        win: "Win",
        loss: "Loss",
        vs: "vs",
        home: "Home",
        leaderboard: "Leaderboard",
        contracts: "Contracts",
        howToPlay: "How to Play",
        winStreak: "Win Streak",
        totalXP: "Total XP",
        continue: "Continue",
        level: "Level",
        seasonEndsIn: "Season ends in",
        viewRewards: "View Rewards",
        onlineNow: "Players Online Now",
        readyToBuild: "Ready to build your empire?",
        signOut: "Sign Out"
      },
      game: {
        yourTurn: "Your Turn",
        turn: "TURN",
        drew: "Drew",
        pickCard: "pick a card to play:",
        defenseCards: "Defense Cards",
        endGame: "End Game",
        gameLog: "GAME LOG",
        started: "started!",
        goal: "Goal",
        waiting: "Waiting for other players...",
        actionCard: "Action Card",
        defenseCard: "Defense Card",
        decisionCard: "Decision Card",
        playerTurn: "{{name}}'s Turn",
        waitingFor: "Waiting for {{name}}...",
        theirTurnToPlay: "Their turn to play",
        yourHand: "Your hand ({{count}} cards):"
      },
      profile: {
        title: "Player Profile",
        unknownPlayer: "Unknown Player",
        editUsername: "Edit Username"
      },
      common: {
        save: "Save",
        saving: "Saving...",
        cancel: "Cancel",
        refresh: "Refresh",
        loading: "Loading...",
        loadMore: "Load More",
        you: "you"
      },
      leaderboard: {
        title: "Leaderboard",
        empty: "No entries yet. Be the first to play!",
        rank: "Rank",
        player: "Player",
        wins: "Wins",
        bestWealth: "Best Wealth"
      },
      contracts: {
        title: "Daily Contracts",
        resetsIn: "Resets in",
        loading: "Loading active contracts...",
        empty: "No active contracts for today. Check back tomorrow!",
        startTitle: "Start Your Journey",
        startDesc: "Play a game to start earning contract progress and unlock rewards!",
        weekly: "WEEKLY",
        complete: "COMPLETE",
        card: "card"
      },
      lobby: {
        back: "Back to Dashboard",
        profile: "Profile",
        hostRoom: "Host a Game",
        joinRoom: "Join a Game",
        createRoom: "Create a Room",
        maxPlayers: "Max Players",
        gameMode: "Game Mode",
        modes: {
          blitz: "Blitz",
          blitzDesc: "15 Minutes • ₹15 Lakh Goal",
          standard: "Standard",
          standardDesc: "25 Minutes • ₹35 Lakh Goal",
          epic: "Epic",
          epicDesc: "40 Minutes • ₹50 Lakh Goal"
        },
        createBtn: "Create Room",
        joinTitle: "Join an Existing Room",
        roomCodeLabel: "Room Code",
        roomCodePlaceholder: "Enter 6-character code",
        joinBtn: "Join Room",
        waitingRoom: "Waiting Room",
        shareCode: "Share this code to invite players",
        copied: "✓ Copied!",
        clickToCopy: "Click to copy",
        players: "Players",
        waitingForHost: "Waiting for host to start...",
        startGame: "Start Game"
      }
    }
  },
  hi: {
    translation: {
      auth: {
        title: "Paisa War में आपका स्वागत है",
        subtitle: "संपत्ति रणनीति का सबसे शानदार खेल",
        usernameLabel: "उपयोगकर्ता नाम (Username)",
        usernamePlaceholder: "एक अच्छा नाम दर्ज करें",
        loading: "प्रवेश कर रहे हैं...",
        submit: "मैदान में उतरें"
      },
      dashboard: {
        welcome: "वापसी पर स्वागत है",
        campaign: "अभियान मोड (Campaign)",
        campaignDesc: "जीवन के चरणों से खेलें और संपत्ति बनाएं",
        playOnline: "ऑनलाइन खेलें (Multiplayer)",
        playOnlineDesc: "दोस्तों के साथ रीयल-टाइम में मुकाबला करें",
        tutorial: "ट्यूटोरियल",
        tutorialDesc: "खेलना सीखें",
        profile: "खिलाड़ी की प्रोफाइल",
        matchesPlayed: "खेले गए मैच (Games Played)",
        matchesWon: "जीते गए मैच (Games Won)",
        totalWealth: "कुल संपत्ति अर्जित",
        recentMatches: "हाल के मैच",
        win: "जीत",
        loss: "हार",
        vs: "बनाम",
        home: "होम (Home)",
        leaderboard: "लीडरबोर्ड",
        contracts: "कॉन्ट्रैक्ट्स",
        howToPlay: "कैसे खेलें",
        winStreak: "जीत की लड़ी (Win Streak)",
        totalXP: "कुल XP",
        continue: "जारी रखें",
        level: "स्तर (Level)",
        seasonEndsIn: "सीजन समाप्त होगा",
        viewRewards: "इनाम देखें",
        onlineNow: "खिलाड़ी ऑनलाइन हैं",
        readyToBuild: "क्या आप अपना साम्राज्य बनाने के लिए तैयार हैं?",
        signOut: "लॉग आउट (Sign Out)"
      },
      game: {
        yourTurn: "आपकी बारी (Your Turn)",
        turn: "बारी",
        drew: "मिला:",
        pickCard: "खेलने के लिए एक कार्ड चुनें:",
        defenseCards: "रक्षा कार्ड (Defense)",
        endGame: "गेम समाप्त करें",
        gameLog: "गेम लॉग",
        started: "शुरू हुआ!",
        goal: "लक्ष्य",
        waiting: "अन्य खिलाड़ियों की प्रतीक्षा की जा रही है...",
        actionCard: "एक्शन कार्ड",
        defenseCard: "रक्षा कार्ड",
        decisionCard: "निर्णय कार्ड",
        playerTurn: "{{name}} की बारी",
        waitingFor: "{{name}} की प्रतीक्षा की जा रही है...",
        theirTurnToPlay: "खेलने की उनकी बारी",
        yourHand: "आपका हाथ ({{count}} कार्ड):"
      },
      profile: {
        title: "खिलाड़ी की प्रोफाइल",
        unknownPlayer: "अज्ञात खिलाड़ी",
        editUsername: "उपयोगकर्ता नाम संपादित करें"
      },
      common: {
        save: "सहेजें",
        saving: "सहेज रहा है...",
        cancel: "रद्द करें",
        refresh: "रीफ़्रेश करें",
        loading: "लोड हो रहा है...",
        loadMore: "और लोड करें",
        you: "आप"
      },
      leaderboard: {
        title: "लीडरबोर्ड",
        empty: "अभी तक कोई प्रविष्टि नहीं। खेलने वाले पहले बनें!",
        rank: "रैंक",
        player: "खिलाड़ी",
        wins: "जीत",
        bestWealth: "सर्वश्रेष्ठ संपत्ति"
      },
      contracts: {
        title: "दैनिक अनुबंध (Daily Contracts)",
        resetsIn: "में रीसेट होगा",
        loading: "सक्रिय अनुबंध लोड हो रहे हैं...",
        empty: "आज के लिए कोई सक्रिय अनुबंध नहीं है। कल वापस देखें!",
        startTitle: "अपनी यात्रा शुरू करें",
        startDesc: "प्रगति अर्जित करने और पुरस्कार अनलॉक करने के लिए एक गेम खेलें!",
        weekly: "साप्ताहिक",
        complete: "पूर्ण",
        card: "कार्ड"
      },
      lobby: {
        back: "डैशबोर्ड पर वापस",
        profile: "प्रोफाइल",
        hostRoom: "गेम होस्ट करें",
        joinRoom: "गेम में शामिल हों",
        createRoom: "रूम बनाएं",
        maxPlayers: "अधिकतम खिलाड़ी",
        gameMode: "गेम मोड",
        modes: {
          blitz: "ब्लिट्ज़ (Blitz)",
          blitzDesc: "15 मिनट • ₹15 लाख लक्ष्य",
          standard: "स्टैंडर्ड",
          standardDesc: "25 मिनट • ₹35 लाख लक्ष्य",
          epic: "एपिक (Epic)",
          epicDesc: "40 मिनट • ₹50 लाख लक्ष्य"
        },
        createBtn: "रूम बनाएं",
        joinTitle: "मौजूदा रूम में शामिल हों",
        roomCodeLabel: "रूम कोड",
        roomCodePlaceholder: "6-अक्षर का कोड दर्ज करें",
        joinBtn: "रूम में शामिल हों",
        waitingRoom: "प्रतीक्षा कक्ष (Waiting Room)",
        shareCode: "खिलाड़ियों को आमंत्रित करने के लिए यह कोड साझा करें",
        copied: "✓ कॉपी किया गया!",
        clickToCopy: "कॉपी करने के लिए क्लिक करें",
        players: "खिलाड़ी",
        waitingForHost: "होस्ट के शुरू करने की प्रतीक्षा...",
        startGame: "गेम शुरू करें"
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
