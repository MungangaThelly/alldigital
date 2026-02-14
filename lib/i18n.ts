export const locales = ["sv", "en", "ar", "ti", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sv";

export const localeNames: Record<Locale, string> = {
  sv: "Svenska",
  en: "English",
  ar: "العربية",
  ti: "ትግርኛ",
  fr: "Français",
};

export const rtlLocales: Locale[] = ["ar"];

export const dateLocales: Record<Locale, string> = {
  sv: "sv-SE",
  en: "en-US",
  ar: "ar",
  ti: "ti-ER",
  fr: "fr-FR",
};

export function getLocaleOrDefault(locale: string): Locale {
  if (locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  return defaultLocale;
}

export function withLocale(locale: Locale, path: string): string {
  if (path === "/") {
    return `/${locale}`;
  }
  return `/${locale}${path}`;
}

export type Dictionary = {
    supportPopup: {
      title: string;
      dontShow: string;
      close: string;
    };
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    lessons: string;
    progress: string;
    help: string;
    about: string;
    languageLabel: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  home: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroSubtitle: string;
    startLearning: string;
    learnMore: string;
    whyTitle: string;
    features: Array<{ title: string; description: string }>;
    tracksTitle: string;
    tracks: {
      contactTitle: string;
      contactDesc: string;
      servicesTitle: string;
      servicesDesc: string;
      safetyTitle: string;
      safetyDesc: string;
      phoneTitle: string;
      phoneDesc: string;
    };
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    testimonialsTitle: string;
    testimonials: Array<{
      name: string;
      age: string;
      quote: string;
      achievement: string;
    }>;
  };
  about: {
    title: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    whyTitle: string;
    reasons: Array<{ title: string; text: string }>;
    readyTitle: string;
    readyText: string;
    readyButton: string;
  };
  lessons: {
    title: string;
    intro: string;
    yourPoints: string;
    durationUnit: string;
    pointsUnit: string;
    locked: string;
    repeat: string;
    start: string;
    completePrevious: string;
    speechPlay: string;
    speechPause: string;
    speechStop: string;
    speechSpeed: string;
  };
  progress: {
    title: string;
    subtitle: string;
    statsCompleted: string;
    statsPoints: string;
    statsTime: string;
    overallProgress: string;
    achievements: string;
    achievementsEmpty: string;
    achievementFirstTitle?: string;
    achievementFirstDesc?: string;
    recentActivity: string;
    recentActivityEmpty: string;
    completedOn: string;
    badges: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
      requirement: string;
    }>;
  };
  help: {
    title: string;
    subtitle: string;
    contactCards: {
      callTitle: string;
      callDesc: string;
      callDetail: string;
      callSub: string;
      chatTitle: string;
      chatDesc: string;
      chatDetail: string;
      chatSub: string;
      emailTitle: string;
      emailDesc: string;
      emailDetail: string;
      emailSub: string;
      faqTitle: string;
      faqDesc: string;
      faqDetail: string;
      faqSub: string;
    };
    faqTitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    supportHoursTitle: string;
    supportWeekdays: string;
    supportWeekend: string;
    supportNote: string;
  };
  lesson: {
  notFoundTitle: "Lektion hittades inte",
  backToLessons: "Tillbaka till lektioner",
  congratsTitle: "Grattis!",
  completedLessonPrefix: "Du har slutfört lektionen",
  earnedLabel: "Du har tjänat",
  moreLessons: "Fler lektioner",
  seeProgress: "Se framsteg",
  stepLabel: "Steg",
  stepOf: "av",
  showHint: "Visa tips",
  hideHint: "Dölj tips",
  previous: "Föregående",
  next: "Nästa",
  nextStep: "Nästa steg",
  finish: "Avsluta",

  supportPopup: {
    title: "Stöd oss med Swish",
    dontShow: "Visa inte igen",
    close: "Stäng",
  },
},

  interactive: {
    phoneSimulator: {
      instruction: string;
      success: string;
      apps: {
        messages: string;
        phone: string;
        camera: string;
        settings: string;
      };
    };
    messageComposer: {
      header: string;
      toLabel: string;
      toValue: string;
      messageLabel: string;
      placeholder: string;
      send: string;
      successTitle: string;
      retryTitle: string;
      retryHint: string;
      instruction: string;
    };
    scamDetector: {
      messageFrom: string;
      messageText: string;
      messageTime: string;
      warningTitle: string;
      warningSignals: string[];
      question: string;
      answerReal: string;
      answerScam: string;
      correctTitle: string;
      correctText: string;
      correctTip: string;
      wrongTitle: string;
      wrongText: string;
      retryButton: string;
    };
    appFinder: {
      title: string;
      hint: string;
      correctTitle: string;
      correctText: string;
      wrongTitle: string;
      wrongText: string;
      retryButton: string;
      apps: {
        bankId: string;
        bankLogIn: string;
        idVerify: string;
        swish: string;
      };
    };
  };
  accessibility: {
    title: string;
    fontSizeLabel: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  sv: {
    lesson: {
      notFoundTitle: "Lektion hittades inte",
      backToLessons: "Tillbaka till lektioner",
      congratsTitle: "Grattis!",
      completedLessonPrefix: "Du har slutfört lektionen",
      earnedLabel: "Du har tjänat",
      moreLessons: "Fler lektioner",
      finish: "Avsluta",

      supportPopup: {
        title: "Stöd oss med Swish",
        dontShow: "Visa inte igen",
        close: "Stäng",
      },
    },

    meta: {
      title: "Tillsammans digitalt - Lär dig digitalt i din takt",
      description:
        "En trygg och enkel plattform för att lära sig digital kommunikation. Ingen stress, ingen jargong, bara stöd.",
    },

    nav: {
      home: "Hem",
      lessons: "Lektioner",
      progress: "Mina framsteg",
      help: "Hjälp",
      about: "Om",
      languageLabel: "Språk",
    },

    footer: {
      copyright: "© 2026 IT-Weor AB. Alla rättigheter förbehållna.",
      tagline: "En trygg plats att lära sig digitalt 🔒",
    },
    home: {
      heroTitleLine1: "Lär dig digitalt",
      heroTitleLine2: "i din egen takt",
      heroSubtitle: "Ingen stress. Ingen jargong. Bara stöd när du behöver det.",
      startLearning: "Börja lära dig",
      learnMore: "Läs mer",
      whyTitle: "Varför Tillsammans digitalt?",
      features: [
        {
          title: "Trygg övningsmiljö",
          description: "Öva utan rädsla. Här kan du inte förstöra något. Prova igen så många gånger du vill.",
        },
        {
          title: "Steg för steg",
          description: "Lektioner som blir gradvis svårare. Börja enkelt och bygg upp ditt självförtroende.",
        },
        {
          title: "Hjälp när du behöver",
          description: "Chatta med frivilliga mentorer eller ring oss. Du är aldrig ensam i din inlärning.",
        },
        {
          title: "Fokus på Sverige",
          description: "Lär dig BankID, Swish, 1177 och andra svenska tjänster. Allt på klarspråk.",
        },
      ],
      tracksTitle: "Vad kan du lära dig?",
      tracks: {
        contactTitle: "Håll kontakten",
        contactDesc: "SMS, WhatsApp, videomöten med barnbarnen",
        servicesTitle: "Svenska e-tjänster",
        servicesDesc: "BankID, Swish, 1177, Mina Sidor",
        safetyTitle: "Håll dig säker",
        safetyDesc: "Undvik bedrägerier och fejkade SMS",
        phoneTitle: "Förstå din mobil",
        phoneDesc: "Vilka knappar gör vad? Lugn och ro.",
      },
      ctaTitle: "Redo att ta första steget?",
      ctaSubtitle: "Börja idag. Kärnan är alltid gratis.",
      ctaButton: "Starta din resa",
          testimonialsTitle: "Vad andra säger",
          testimonials: [
            {
              name: "Karin",
              age: "72 år",
              quote: "Jag var livsrädd för telefonen förut. Nu Swishar jag till barnbarnen och videochattar varje vecka!",
              achievement: "Genomförde 5 lektioner",
            },
            {
              name: "Lars",
              age: "68 år",
              quote: "Tillsammans digitalt lärde mig inte bara tekniken - de förstår hur vi tänker. Inga dumma frågor här!",
              achievement: "Nu hjälper han andra i sin bostadsförening",
            },
            {
              name: "Ingrid",
              age: "75 år",
              quote: "Jag trodde aldrig jag skulle klara BankID. Nu köper jag till och med mina teåtarbiljetter online!",
              achievement: "Använder 6 olika appar självständigt",
            },
          ],
    },
    about: {
      title: "Om Tillsammans digitalt",
      missionTitle: "Vår Mission",
      missionP1:
        "Tillsammans digitalt skapades för att hjälpa äldre vuxna i Sverige att bemästra digital kommunikation med självförtroende. Vi tror att alla förtjänar att känna sig bekväma med teknologi, oavsett ålder.",
      missionP2:
        "Ingen stress. Ingen jargong. Ingen rädsla för att göra fel. Bara stöd, tålamod och en trygg plats att lära sig. Kärnan är alltid gratis, och säkerhetskritiskt innehåll ligger aldrig bakom betalvägg.",
      whyTitle: "Varför Tillsammans digitalt?",
      reasons: [
        {
          title: "Gamifierad inlärning:",
          text: "Genom att göra lärandet roligt och engagerande med poäng, prestationer och utmaningar blir det lättare att hålla motivationen uppe.",
        },
        {
          title: "Trygg övningsmiljö:",
          text: "Öva utan rädsla. I våra simuleringar kan du inte skicka riktiga meddelanden eller förstöra något. Det är helt säkert att experimentera.",
        },
        {
          title: "Sveriges fokus:",
          text: "Vi fokuserar på de tjänster du faktiskt använder i Sverige - BankID, Swish, 1177, och mer. Allt på klarspråk.",
        },
        {
          title: "Mänskligt stöd:",
          text: "Vi är här för dig. Ring, chatta eller maila när du behöver hjälp. Du är aldrig ensam.",
        },
      ],
      readyTitle: "Redo att börja?",
      readyText: "Gå med i tusentals svenskar som redan bygger sitt digitala självförtroende.",
      readyButton: "Börja lära dig idag",
    },
    lessons: {
      title: "Lektioner",
      intro: "Välj en lektion att börja med. Start gärna med de enklaste och arbeta dig uppåt!",
      yourPoints: "Din poäng",
      durationUnit: "min",
      pointsUnit: "poäng",
      locked: "Låst",
      repeat: "Upprepa",
      start: "Starta lektion",
      completePrevious: "Slutför tidigare lektioner först",
      speechPlay: "Spela",
      speechPause: "Paus",
      speechStop: "Stopp",
      speechSpeed: "Hastighet",
    },
    progress: {
      title: "Mina framsteg",
      subtitle: "Se hur långt du har kommit på din digitala resa!",
      statsCompleted: "Slutförda lektioner",
      statsPoints: "Total poäng",
      statsTime: "Tid spenderad",
      overallProgress: "Övergripande framsteg",
      achievements: "Dina prestationer",
      achievementsEmpty: "Slutför lektioner för att tjäna prestationer!",
      recentActivity: "Senaste aktivitet",
      recentActivityEmpty: "Ingen aktivitet än. Börja en lektion för att komma igång!",
      completedOn: "Slutförd",
      badges: [
        {
          id: "first-step",
          title: "Första steget",
          description: "Slutförde din första lektion",
          icon: "🚀",
          requirement: "Complete 1 lesson",
        },
        {
          id: "explorer",
          title: "Upptäckare",
          description: "Slutförde 3 lektioner",
          icon: "🗺️",
          requirement: "Complete 3 lessons",
        },
        {
          id: "confident-learner",
          title: "Trygg inlärare",
          description: "Slutförde 5 lektioner",
          icon: "💪",
          requirement: "Complete 5 lessons",
        },
        {
          id: "digital-master",
          title: "Digital expert",
          description: "Slutförde alla 12 lektioner",
          icon: "👑",
          requirement: "Complete all lessons",
        },
        {
          id: "communication-champ",
          title: "Kommunikationskamrat",
          description: "Behärskade e-post, sociala medier och videosamtal",
          icon: "💬",
          requirement: "Complete communication lessons",
        },
        {
          id: "banking-buddy",
          title: "Bankvänn",
          description: "Behärskade BankID, Swish och online banking",
          icon: "🏦",
          requirement: "Complete banking lessons",
        },
        {
          id: "speed-learner",
          title: "Snabbinlärare",
          description: "Slutförde 2 lektioner på en dag",
          icon: "⚡",
          requirement: "Complete 2 lessons in one day",
        },
      ],
    },
    help: {
      title: "Hjälp & Support",
      subtitle: "Vi finns här för att hjälpa dig. Välj det sätt som passar dig bäst.",
      contactCards: {
        callTitle: "Ring oss",
        callDesc: "Prata direkt med en hjälpsam person",
        callDetail: "070-481 03 77",
        callSub: "Vardagar 9-17",
        chatTitle: "Ring en mentor",
        chatDesc: "Få stöd av en mentor på telefon",
        chatDetail: "070-481 03 77",
        chatSub: "Vardagar 9-17",
        emailTitle: "E-post",
        emailDesc: "Skicka din fråga så återkommer vi",
        emailDetail: "help@nuhar.se",
        emailSub: "Svar inom 24 timmar",
        faqTitle: "Vanliga frågor",
        faqDesc: "Hitta svar på vanliga frågor här",
        faqDetail: "Läs FAQ",
        faqSub: "Snabba svar på vanliga frågor",
      },
      faqTitle: "Vanliga frågor",
      faqItems: [
        {
          question: "Kostar det något att använda Tillsammans digitalt?",
          answer: "Kärnan är alltid gratis. Säkerhetskritiskt innehåll ligger aldrig bakom betalvägg, och intäkter från organisationer håller fri tillgång öppen.",
        },
        {
          question: "Vad händer om jag gör fel?",
          answer: "Ingen fara! Våra övningsområden är helt säkra. Du kan inte förstöra något eller skicka meddelanden på riktigt. Det är en trygg plats att öva.",
        },
        {
          question: "Hur långt tid tar varje lektion?",
          answer: "De flesta lektioner tar 10-20 minuter. Du kan pausa när som helst och fortsätta senare. Gå i din egen takt!",
        },
        {
          question: "Behöver jag vara bra på datorer?",
          answer: "Absolut inte! Tillsammans digitalt är gjord för de som känner sig osäkra på teknik. Vi börjar från början och förklarar allt noggrant.",
        },
        {
          question: "Kan jag få hjälp från en riktig person?",
          answer: "Ja! Du kan ringa oss, chatta eller maila när du behöver hjälp. Vi har också mentorer som kan hjälpa dig.",
        },
      ],
      supportHoursTitle: "Våra supporttider",
      supportWeekdays: "Måndag - Fredag: 9:00 - 17:00",
      supportWeekend: "Lördag - Söndag: Stängt",
      supportNote: "E-post och chatt besvaras även utanför öppettider, men det kan ta lite längre tid.",
    },
    lesson: {
      notFoundTitle: "Lektion hittades inte",
      backToLessons: "Tillbaka till lektioner",
      congratsTitle: "Grattis!",
      completedLessonPrefix: "Du har slutfört lektionen",
      earnedLabel: "Du har tjänat:",
      moreLessons: "Fler lektioner",
      seeProgress: "Se dina framsteg",
      stepLabel: "Steg",
      stepOf: "av",
      showHint: "Visa tips",
      previous: "Föregående",
      next: "Nästa",
      finish: "Slutför",
    },
    interactive: {
      phoneSimulator: {
        instruction: "Tryck på meddelanden-appen (den gröna med pratbubblan)",
        success: "Rätt! Bra jobbat!",
        apps: {
          messages: "Meddelanden",
          phone: "Telefon",
          camera: "Kamera",
          settings: "Inställningar",
        },
      },
      messageComposer: {
        header: "Nytt meddelande",
        toLabel: "Till:",
        toValue: "Mormor",
        messageLabel: "Meddelande:",
        placeholder: "Skriv ditt meddelande här...",
        send: "Skicka",
        successTitle: "Perfekt! Bra jobbat!",
        retryTitle: "Prova igen!",
        retryHint: "Försök skriva exakt: \"{expectedMessage}\"",
        instruction: "Skriv meddelandet i fältet och tryck på \"Skicka\"-knappen. Ingen fara - detta är bara övning!",
      },
      scamDetector: {
        messageFrom: "+46701234567",
        messageText: "BRÅDSKANDE! Din BankID kommer att spärras om du inte bekräftar dina uppgifter här: http://fake-bank.com/verify",
        messageTime: "13:24",
        warningTitle: "Varningssignaler att titta efter:",
        warningSignals: [
          "Okänt telefonnummer",
          "Skapa känsla av brådska",
          "Misstänkt länk (inte bank.se)",
          "Ber om personlig information",
        ],
        question: "Är detta ett äkta meddelande eller ett bedrägeri?",
        answerReal: "Äkta meddelande",
        answerScam: "Bedrägeri",
        correctTitle: "Rätt! Utmärkt!",
        correctText: "Detta är ett klassiskt bedrägeri-SMS. Banker ber ALDRIG om dina uppgifter via SMS.",
        correctTip: "Kom ihåg: Radera sådana meddelanden direkt och klicka aldrig på länkar!",
        wrongTitle: "Tyvärr inte riktigt",
        wrongText: "Detta är faktiskt ett bedrägeri! Titta på varningssignalerna ovan och försök igen.",
        retryButton: "Prova igen",
      },
      appFinder: {
        title: "Hitta BankID-appen",
        hint: "Leta efter den officiella BankID-logotypen med blå och gul färg",
        correctTitle: "Perfekt!",
        correctText: "Du hittade den rätta BankID-appen! Den har alltid den blå ikonen med ett lås. Bra jobbat!",
        wrongTitle: "Inte riktigt!",
        wrongText: "Det var inte rätt app. Den officiella BankID-appen har en blå bakgrund med en låssymbol (🔐).",
        retryButton: "Försök igen",
        apps: {
          bankId: "BankID",
          bankLogIn: "Bank Log In",
          idVerify: "ID Verify",
          swish: "Swish",
        },
      },
    },
    accessibility: {
      title: "Tillgänglighet",
      fontSizeLabel: "Textstorlek",
      small: "Liten",
      medium: "Normal",
      large: "Stor",
      xLarge: "Extra stor",
    },
  },
  en: {
    supportPopup: {
      title: "Support us with Swish",
      dontShow: "Don't show again",
      close: "Close",
    },
    lesson: {
      supportPopup: {
        title: "Support us with Swish",
        dontShow: "Don't show again",
        close: "Close",
      },
      // ...existing lesson keys...
    },
    meta: {
      title: "Tillsammans digitalt - Learn digital skills at your pace",
      description: "A safe and simple platform to learn digital communication. No stress, no jargon, just support.",
    },
    nav: {
      home: "Home",
      lessons: "Lessons",
      progress: "My Progress",
      help: "Help",
      about: "About",
      languageLabel: "Language",
    },
    footer: {
      copyright: "© 2026 IT-Weor AB. All rights reserved.",
      tagline: "A safe place to learn digital skills 🔒",
    },
    home: {
      heroTitleLine1: "Learn digital skills",
      heroTitleLine2: "at your own pace",
      heroSubtitle: "No stress. No jargon. Just support when you need it.",
      startLearning: "Start learning",
      learnMore: "Learn more",
      whyTitle: "Why Tillsammans digitalt?",
      features: [
        {
          title: "Safe practice environment",
          description: "Practice without fear. You can't break anything here. Try as many times as you want.",
        },
        {
          title: "Step by step",
          description: "Lessons become gradually harder. Start simple and build your confidence.",
        },
        {
          title: "Help when you need it",
          description: "Chat with volunteer mentors or call us. You are never alone in your learning.",
        },
        {
          title: "Focus on Sweden",
          description: "Learn BankID, Swish, 1177 and other Swedish services. All in plain language.",
        },
      ],
      tracksTitle: "What can you learn?",
      tracks: {
        contactTitle: "Stay in touch",
        contactDesc: "SMS, WhatsApp, video calls with grandchildren",
        servicesTitle: "Swedish e-services",
        servicesDesc: "BankID, Swish, 1177, My Pages",
        safetyTitle: "Stay safe",
        safetyDesc: "Avoid scams and fake SMS",
        phoneTitle: "Understand your phone",
        phoneDesc: "Which buttons do what? Calm and steady.",
      },
      ctaTitle: "Ready to take the first step?",
      ctaSubtitle: "Start today. Core access is always free.",
      ctaButton: "Start your journey",
          testimonialsTitle: "What others say",
          testimonials: [
            {
              name: "Karin",
              age: "72 years old",
              quote: "I was terrified of the phone before. Now I Swish money to grandkids and video chat every week!",
              achievement: "Completed 5 lessons",
            },
            {
              name: "Lars",
              age: "68 years old",
              quote: "Tillsammans digitalt didn't just teach me the tech - they understand how we think. No stupid questions here!",
              achievement: "Now helps others in his housing association",
            },
            {
              name: "Ingrid",
              age: "75 years old",
              quote: "I never thought I'd manage BankID. Now I even buy my theater tickets online!",
              achievement: "Uses 6 different apps independently",
            },
          ],
    },
    about: {
      title: "About Tillsammans digitalt",
      missionTitle: "Our Mission",
      missionP1:
        "Tillsammans digitalt was created to help older adults in Sweden master digital communication with confidence. We believe everyone deserves to feel comfortable with technology, regardless of age.",
      missionP2:
        "No stress. No jargon. No fear of making mistakes. Just support, patience, and a safe place to learn. Core access is always free, and safety-critical content is never paywalled.",
      whyTitle: "Why Tillsammans digitalt?",
      reasons: [
        {
          title: "Gamified learning:",
          text: "By making learning fun and engaging with points, achievements, and challenges, it is easier to stay motivated.",
        },
        {
          title: "Safe practice environment:",
          text: "Practice without fear. In our simulations you cannot send real messages or break anything. It is completely safe to experiment.",
        },
        {
          title: "Sweden focus:",
          text: "We focus on the services you actually use in Sweden - BankID, Swish, 1177, and more. All in plain language.",
        },
        {
          title: "Human support:",
          text: "We are here for you. Call, chat, or email whenever you need help. You are never alone.",
        },
      ],
      readyTitle: "Ready to start?",
      readyText: "Join thousands in Sweden already building their digital confidence.",
      readyButton: "Start learning today",
    },
    lessons: {
      title: "Lessons",
      intro: "Choose a lesson to begin with. Start with the easiest and work your way up!",
      yourPoints: "Your points",
      durationUnit: "min",
      pointsUnit: "points",
      locked: "Locked",
      repeat: "Repeat",
      start: "Start lesson",
      completePrevious: "Complete earlier lessons first",
      speechPlay: "Play",
      speechPause: "Pause",
      speechStop: "Stop",
      speechSpeed: "Speed",
    },
    progress: {
      title: "My Progress",
      subtitle: "See how far you have come on your digital journey!",
      statsCompleted: "Completed lessons",
      statsPoints: "Total points",
      statsTime: "Time spent",
      overallProgress: "Overall progress",
      achievements: "Your achievements",
      achievementsEmpty: "Complete lessons to earn achievements!",
      recentActivity: "Recent activity",
      recentActivityEmpty: "No activity yet. Start a lesson to get going!",
      completedOn: "Completed",
      badges: [
        {
          id: "first-step",
          title: "First step",
          description: "Completed your first lesson",
          icon: "🚀",
          requirement: "Complete 1 lesson",
        },
        {
          id: "explorer",
          title: "Explorer",
          description: "Completed 3 lessons",
          icon: "🗺️",
          requirement: "Complete 3 lessons",
        },
        {
          id: "confident-learner",
          title: "Confident learner",
          description: "Completed 5 lessons",
          icon: "💪",
          requirement: "Complete 5 lessons",
        },
        {
          id: "digital-master",
          title: "Digital champion",
          description: "Completed all 12 lessons",
          icon: "👑",
          requirement: "Complete all lessons",
        },
        {
          id: "communication-champ",
          title: "Communication champion",
          description: "Mastered email, social media, and video calls",
          icon: "💬",
          requirement: "Complete communication lessons",
        },
        {
          id: "banking-buddy",
          title: "Banking buddy",
          description: "Mastered BankID, Swish, and online banking",
          icon: "🏦",
          requirement: "Complete banking lessons",
        },
        {
          id: "speed-learner",
          title: "Speed learner",
          description: "Completed 2 lessons in one day",
          icon: "⚡",
          requirement: "Complete 2 lessons in one day",
        },
      ],
    },
    help: {
      title: "Help & Support",
      subtitle: "We are here to help you. Choose the way that suits you best.",
      contactCards: {
        callTitle: "Call us",
        callDesc: "Talk directly with a helpful person",
        callDetail: "070-481 03 77",
        callSub: "Weekdays 9-17",
        chatTitle: "Call a mentor",
        chatDesc: "Get support from a mentor by phone",
        chatDetail: "070-481 03 77",
        chatSub: "Weekdays 9-17",
        emailTitle: "Email",
        emailDesc: "Send your question and we will get back to you",
        emailDetail: "help@nuhar.se",
        emailSub: "Reply within 24 hours",
        faqTitle: "Frequently asked questions",
        faqDesc: "Find answers to common questions here",
        faqDetail: "Read FAQ",
        faqSub: "Quick answers to common questions",
      },
      faqTitle: "Frequently asked questions",
      faqItems: [
        {
          question: "Does it cost anything to use Tillsammans digitalt?",
          answer: "Core access is always free. Safety-critical content is never paywalled, and organization funding keeps free access open.",
        },
        {
          question: "What happens if I make a mistake?",
          answer: "No worries! Our practice areas are completely safe. You cannot break anything or send real messages. It is a safe place to practice.",
        },
        {
          question: "How long does each lesson take?",
          answer: "Most lessons take 10-20 minutes. You can pause at any time and continue later. Go at your own pace!",
        },
        {
          question: "Do I need to be good with computers?",
          answer: "Absolutely not! Tillsammans digitalt is made for those who feel unsure about technology. We start from the beginning and explain everything carefully.",
        },
        {
          question: "Can I get help from a real person?",
          answer: "Yes! You can call us, chat, or email whenever you need help. We also have mentors who can assist you.",
        },
      ],
      supportHoursTitle: "Our support hours",
      supportWeekdays: "Monday - Friday: 9:00 - 17:00",
      supportWeekend: "Saturday - Sunday: Closed",
      supportNote: "Email and chat are answered outside office hours too, but it may take a bit longer.",
    },
    lesson: {
      notFoundTitle: "Lesson not found",
      backToLessons: "Back to lessons",
      congratsTitle: "Congratulations!",
      completedLessonPrefix: "You completed the lesson:",
      earnedLabel: "You earned:",
      moreLessons: "More lessons",
      seeProgress: "See your progress",
      stepLabel: "Step",
      stepOf: "of",
      showHint: "Show hint",
      previous: "Previous",
      next: "Next",
      finish: "Finish",
    },
    interactive: {
      phoneSimulator: {
        instruction: "Tap the Messages app (the green one with a speech bubble)",
        success: "Correct! Great job!",
        apps: {
          messages: "Messages",
          phone: "Phone",
          camera: "Camera",
          settings: "Settings",
        },
      },
      messageComposer: {
        header: "New message",
        toLabel: "To:",
        toValue: "Grandma",
        messageLabel: "Message:",
        placeholder: "Type your message here...",
        send: "Send",
        successTitle: "Perfect! Great job!",
        retryTitle: "Try again!",
        retryHint: "Try typing exactly: \"{expectedMessage}\"",
        instruction: "Type the message in the field and press the \"Send\" button. Do not worry - this is just practice!",
      },
      scamDetector: {
        messageFrom: "+46701234567",
        messageText: "URGENT! Your BankID will be blocked if you do not confirm your details here: http://fake-bank.com/verify",
        messageTime: "13:24",
        warningTitle: "Warning signs to look for:",
        warningSignals: [
          "Unknown phone number",
          "Creates a sense of urgency",
          "Suspicious link (not bank.se)",
          "Asks for personal information",
        ],
        question: "Is this a real message or a scam?",
        answerReal: "Real message",
        answerScam: "Scam",
        correctTitle: "Correct! Excellent!",
        correctText: "This is a classic scam SMS. Banks NEVER ask for your details via SMS.",
        correctTip: "Remember: Delete such messages and never click links!",
        wrongTitle: "Not quite",
        wrongText: "This is actually a scam! Look at the warning signs above and try again.",
        retryButton: "Try again",
      },
      appFinder: {
        title: "Find the BankID app",
        hint: "Look for the official BankID logo with blue and yellow colors",
        correctTitle: "Perfect!",
        correctText: "You found the right BankID app! It always has the blue icon with a lock. Great job!",
        wrongTitle: "Not quite!",
        wrongText: "That was not the right app. The official BankID app has a blue background with a lock symbol (🔐).",
        retryButton: "Try again",
        apps: {
          bankId: "BankID",
          bankLogIn: "Bank Log In",
          idVerify: "ID Verify",
          swish: "Swish",
        },
      },
    },
    accessibility: {
      title: "Accessibility",
      fontSizeLabel: "Font size",
      small: "Small",
      medium: "Medium",
      large: "Large",
      xLarge: "Extra large",
    },
  },
  ar: {
        supportPopup: {
          title: "ادعمنا عبر Swish",
          dontShow: "لا تظهر مرة أخرى",
          close: "إغلاق",
        },
    meta: {
      title: "Tillsammans digitalt - تعلّم المهارات الرقمية على وتيرتك",
      description: "منصة آمنة وبسيطة لتعلّم التواصل الرقمي. بلا توتر، بلا مصطلحات معقدة، فقط دعم.",
    },
    nav: {
      home: "الرئيسية",
      lessons: "الدروس",
      progress: "تقدمي",
      help: "المساعدة",
      about: "حول",
      languageLabel: "اللغة",
    },
    footer: {
      copyright: "© 2026 IT-Weor AB. جميع الحقوق محفوظة.",
      tagline: "مكان آمن لتعلّم المهارات الرقمية 🔒",
    },
    home: {
      heroTitleLine1: "تعلّم المهارات الرقمية",
      heroTitleLine2: "على وتيرتك الخاصة",
      heroSubtitle: "لا توتر. لا مصطلحات معقدة. دعم عندما تحتاجه.",
      startLearning: "ابدأ التعلم",
      learnMore: "اعرف المزيد",
      whyTitle: "لماذا Tillsammans digitalt؟",
      features: [
        {
          title: "بيئة تدريب آمنة",
          description: "تدرّب بلا خوف. لا يمكنك كسر أي شيء هنا. جرّب بقدر ما تريد.",
        },
        {
          title: "خطوة بخطوة",
          description: "الدروس تصبح أصعب تدريجيا. ابدأ بسيطا واصنع ثقتك.",
        },
        {
          title: "مساعدة عند الحاجة",
          description: "دردشة مع مرشدين متطوعين أو اتصل بنا. لن تكون وحدك.",
        },
        {
          title: "تركيز على السويد",
          description: "تعلّم BankID وSwish و1177 وخدمات سويدية أخرى بلغة بسيطة.",
        },
      ],
      tracksTitle: "ماذا يمكنك أن تتعلم؟",
      tracks: {
        contactTitle: "ابقَ على تواصل",
        contactDesc: "رسائل SMS وواتساب ومكالمات فيديو مع الأحفاد",
        servicesTitle: "الخدمات الإلكترونية السويدية",
        servicesDesc: "BankID وSwish و1177 وMina Sidor",
        safetyTitle: "ابقَ آمنًا",
        safetyDesc: "تجنب الاحتيال والرسائل المزيفة",
        phoneTitle: "افهم هاتفك",
        phoneDesc: "أي زر يفعل ماذا؟ بهدوء.",
      },
      ctaTitle: "جاهز للخطوة الأولى؟",
      ctaSubtitle: "ابدأ اليوم. الوصول الأساسي مجاني دائمًا.",
      ctaButton: "ابدأ رحلتك",
          testimonialsTitle: "ماذا يقول الآخرون",
          testimonials: [
            {
              name: "كارين",
              age: "72 سنة",
              quote: "كنت خائفة جدًا من الهاتف من قبل. الآن أرسل النقود عبر Swish للأحفاد وأتحدث بالفيديو كل أسبوع!",
              achievement: "أكملت 5 دروس",
            },
            {
              name: "لارس",
              age: "68 سنة",
              quote: "Tillsammans digitalt لم يعلمني التكنولوجيا فقط - إنهم يفهمون كيف نفكر. لا توجد أسئلة غبية هنا!",
              achievement: "يساعد الآخرين في الجمعية الآن",
            },
            {
              name: "إنغريد",
              age: "75 سنة",
              quote: "لم أعتقد أبدًا أنني سأتمكن من BankID. الآن حتى أشتري تذاكر المسرح عبر الإنترنت!",
              achievement: "تستخدم 6 تطبيقات مختلفة بشكل مستقل",
            },
          ],
    },
    about: {
      title: "حول Tillsammans digitalt",
      missionTitle: "مهمتنا",
      missionP1:
        "تم إنشاء Tillsammans digitalt لمساعدة كبار السن في السويد على إتقان التواصل الرقمي بثقة. نؤمن أن الجميع يستحق أن يشعر بالراحة مع التكنولوجيا، بغض النظر عن العمر.",
      missionP2:
        "لا توتر. لا مصطلحات معقدة. لا خوف من الخطأ. فقط دعم وصبر ومكان آمن للتعلّم. الوصول الأساسي مجاني دائمًا، والمحتوى المتعلق بالسلامة لا يوضع خلف جدار دفع.",
      whyTitle: "لماذا Tillsammans digitalt؟",
      reasons: [
        {
          title: "تعلّم مُحفَّز بالألعاب:",
          text: "من خلال جعل التعلّم ممتعًا ومشوقًا بالنقاط والإنجازات والتحديات يصبح من الأسهل الحفاظ على الدافع.",
        },
        {
          title: "بيئة تدريب آمنة:",
          text: "تدرّب بلا خوف. في محاكاة التطبيق لا يمكنك إرسال رسائل حقيقية أو كسر أي شيء. الأمر آمن تمامًا للتجربة.",
        },
        {
          title: "تركيز على السويد:",
          text: "نركّز على الخدمات التي تستخدمها فعلا في السويد - BankID وSwish و1177 والمزيد. كلها بلغة واضحة.",
        },
        {
          title: "دعم بشري:",
          text: "نحن هنا من أجلك. اتصل أو دردش أو أرسل بريدًا إلكترونيًا عندما تحتاج إلى مساعدة. لن تكون وحدك.",
        },
      ],
      readyTitle: "جاهز للبدء؟",
      readyText: "انضم إلى آلاف الأشخاص في السويد الذين يبنون ثقتهم الرقمية.",
      readyButton: "ابدأ التعلم اليوم",
    },
    lessons: {
      title: "الدروس",
      intro: "اختر درسًا لتبدأ. يُفضَّل البدء بالأسهل ثم التقدّم!",
      yourPoints: "نقاطك",
      durationUnit: "دقيقة",
      pointsUnit: "نقطة",
      locked: "مغلق",
      repeat: "أعد",
      start: "ابدأ الدرس",
      completePrevious: "أكمل الدروس السابقة أولاً",
      speechPlay: "تشغيل",
      speechPause: "إيقاف مؤقت",
      speechStop: "إيقاف",
      speechSpeed: "السرعة",
    },
    progress: {
      title: "تقدمي",
      subtitle: "انظر إلى مدى تقدّمك في رحلتك الرقمية!",
      statsCompleted: "الدروس المكتملة",
      statsPoints: "إجمالي النقاط",
      statsTime: "الوقت المستغرق",
      overallProgress: "التقدم العام",
      achievements: "إنجازاتك",
      achievementFirstTitle: "الخطوة الأولى",
      achievementFirstDesc: "أكملت أول درس لك",
      achievementsEmpty: "أكمل الدروس لتحصل على إنجازات!",
      recentActivity: "النشاط الأخير",
      recentActivityEmpty: "لا يوجد نشاط بعد. ابدأ درسًا للانطلاق!",
      completedOn: "تم",
      badges: [
        {
          id: "first-step",
          title: "الخطوة الأولى",
          description: "أكملت أول درس لك",
          icon: "🚀",
          requirement: "Complete 1 lesson",
        },
        {
          id: "explorer",
          title: "المستكشف",
          description: "أكملت 3 دروس",
          icon: "🗺️",
          requirement: "Complete 3 lessons",
        },
        {
          id: "confident-learner",
          title: "متعلم واثق",
          description: "أكملت 5 دروس",
          icon: "💪",
          requirement: "Complete 5 lessons",
        },
        {
          id: "digital-master",
          title: "بطل رقمي",
          description: "أكملت جميع الدروس السبعة",
          icon: "👑",
          requirement: "Complete all lessons",
        },
        {
          id: "communication-champ",
          title: "بطل التواصل",
          description: "أتقنت البريد الإلكتروني والوسائط الاجتماعية والمكالمات الفيديو",
          icon: "💬",
          requirement: "Complete communication lessons",
        },
        {
          id: "banking-buddy",
          title: "صديق البنك",
          description: "أتقنت BankID و Swish والخدمات المصرفية عبر الإنترنت",
          icon: "🏦",
          requirement: "Complete banking lessons",
        },
        {
          id: "speed-learner",
          title: "متعلم سريع",
          description: "أكملت درسين في يوم واحد",
          icon: "⚡",
          requirement: "Complete 2 lessons in one day",
        },
      ],
    },
    help: {
      title: "المساعدة والدعم",
      subtitle: "نحن هنا لمساعدتك. اختر الطريقة التي تناسبك.",
      contactCards: {
        callTitle: "اتصل بنا",
        callDesc: "تحدّث مباشرة مع شخص مساعد",
        callDetail: "070-481 03 77",
        callSub: "أيام الأسبوع 9-17",
        chatTitle: "اتصل بمرشد",
        chatDesc: "احصل على دعم من مرشد عبر الهاتف",
        chatDetail: "070-481 03 77",
        chatSub: "أيام الأسبوع 9-17",
        emailTitle: "البريد الإلكتروني",
        emailDesc: "أرسل سؤالك وسنرد عليك",
        emailDetail: "help@nuhar.se",
        emailSub: "رد خلال 24 ساعة",
        faqTitle: "الأسئلة الشائعة",
        faqDesc: "اعثر على إجابات للأسئلة الشائعة هنا",
        faqDetail: "اقرأ الأسئلة الشائعة",
        faqSub: "إجابات سريعة لأسئلة شائعة",
      },
      faqTitle: "الأسئلة الشائعة",
      faqItems: [
        {
          question: "هل يكلف استخدام Tillsammans digitalt شيئًا؟",
          answer: "الوصول الأساسي مجاني دائمًا. المحتوى المتعلق بالسلامة لا يوضع خلف جدار دفع، وتمويل المؤسسات يحافظ على بقاء الوصول المجاني متاحًا.",
        },
        {
          question: "ماذا يحدث إذا ارتكبت خطأ؟",
          answer: "لا تقلق! مناطق التدريب آمنة تمامًا. لا يمكنك كسر أي شيء أو إرسال رسائل حقيقية. إنه مكان آمن للتجربة.",
        },
        {
          question: "كم يستغرق كل درس؟",
          answer: "معظم الدروس تستغرق 10-20 دقيقة. يمكنك الإيقاف مؤقتًا في أي وقت والمتابعة لاحقًا. سر على وتيرتك.",
        },
        {
          question: "هل أحتاج أن أكون جيدًا في الكمبيوتر؟",
          answer: "أبدًا! Tillsammans digitalt مخصص لمن يشعر بعدم الثقة بالتكنولوجيا. نبدأ من الصفر ونشرح كل شيء بعناية.",
        },
        {
          question: "هل يمكنني الحصول على مساعدة من شخص حقيقي؟",
          answer: "نعم! يمكنك الاتصال بنا أو الدردشة أو إرسال بريد إلكتروني عندما تحتاج إلى مساعدة. لدينا أيضًا مرشدون للمساعدة.",
        },
      ],
      supportHoursTitle: "ساعات الدعم",
      supportWeekdays: "الإثنين - الجمعة: 9:00 - 17:00",
      supportWeekend: "السبت - الأحد: مغلق",
      supportNote: "يتم الرد على البريد والدردشة خارج ساعات العمل أيضًا، لكن قد يستغرق الأمر وقتًا أطول.",
    },
    lesson: {
      notFoundTitle: "الدرس غير موجود",
      backToLessons: "العودة إلى الدروس",
      congratsTitle: "تهانينا!",
      completedLessonPrefix: "لقد أكملت الدرس:",
      earnedLabel: "لقد ربحت:",
      moreLessons: "دروس أكثر",
      seeProgress: "عرض تقدمك",
      stepLabel: "الخطوة",
      stepOf: "من",
      showHint: "إظهار تلميح",
      previous: "السابق",
      next: "التالي",
      finish: "إنهاء",
    },
    interactive: {
      phoneSimulator: {
        instruction: "اضغط على تطبيق الرسائل (الأخضر مع فقاعة الكلام)",
        success: "صحيح! أحسنت!",
        apps: {
          messages: "الرسائل",
          phone: "الهاتف",
          camera: "الكاميرا",
          settings: "الإعدادات",
        },
      },
      messageComposer: {
        header: "رسالة جديدة",
        toLabel: "إلى:",
        toValue: "الجدة",
        messageLabel: "الرسالة:",
        placeholder: "اكتب رسالتك هنا...",
        send: "إرسال",
        successTitle: "ممتاز! أحسنت!",
        retryTitle: "حاول مرة أخرى!",
        retryHint: "حاول كتابة: \"{expectedMessage}\"",
        instruction: "اكتب الرسالة في الحقل واضغط على زر \"إرسال\". لا تقلق — هذا تدريب فقط!",
      },
      scamDetector: {
        messageFrom: "+46701234567",
        messageText: "عاجل! سيتم حظر BankID الخاص بك إذا لم تؤكد بياناتك هنا: http://fake-bank.com/verify",
        messageTime: "13:24",
        warningTitle: "علامات تحذيرية يجب الانتباه لها:",
        warningSignals: [
          "رقم هاتف غير معروف",
          "يخلق إحساسًا بالعجلة",
          "رابط مشبوه (ليس bank.se)",
          "يطلب معلومات شخصية",
        ],
        question: "هل هذه رسالة حقيقية أم احتيال؟",
        answerReal: "رسالة حقيقية",
        answerScam: "احتيال",
        correctTitle: "صحيح! ممتاز!",
        correctText: "هذه رسالة احتيال شائعة. البنوك لا تطلب معلوماتك عبر الرسائل النصية.",
        correctTip: "تذكّر: احذف مثل هذه الرسائل ولا تضغط على الروابط!",
        wrongTitle: "ليس تمامًا",
        wrongText: "هذه في الواقع رسالة احتيال! انظر إلى علامات التحذير أعلاه وحاول مرة أخرى.",
        retryButton: "حاول مرة أخرى",
      },
      appFinder: {
        title: "ابحث عن تطبيق BankID",
        hint: "ابحث عن الشعار الرسمي لـ BankID باللون الأزرق والأصفر",
        correctTitle: "ممتاز!",
        correctText: "عثرت على تطبيق BankID الصحيح! يكون دائمًا ذا أيقونة زرقاء مع قفل. أحسنت!",
        wrongTitle: "ليس تمامًا!",
        wrongText: "هذا ليس التطبيق الصحيح. تطبيق BankID الرسمي له خلفية زرقاء مع رمز القفل (🔐).",
        retryButton: "حاول مرة أخرى",
        apps: {
          bankId: "BankID",
          bankLogIn: "تسجيل دخول البنك",
          idVerify: "تحقق الهوية",
          swish: "Swish",
        },
      },
    },
    accessibility: {
      title: "إمكانية الوصول",
      fontSizeLabel: "حجم الخط",
      small: "صغير",
      medium: "متوسط",
      large: "كبير",
      xLarge: "كبير جدًا",
    },
  },
  ti: {
        supportPopup: {
          title: "Nefasitna Swish ብምምሕዳር",
          dontShow: "ኣይትረኣየን እንደገና",
          close: "ዝግብን",
        },
    meta: {
      title: "Tillsammans digitalt - ብእርስካ ፍጥነት ዲጂታል ምምሃር",
      description: "ዲጂታል ግንኙነት ንምምሃር ደሓን እና ቀሊል መድረኽ። ጭንቀት የለን፣ መተሓሳሰቢ ቃላት የለን፣ ድጋፍ ብብቂ ኣሎ።",
    },
    nav: {
      home: "መጀመርያ",
      lessons: "ትምህርታት",
      progress: "ምዕባለ",
      help: "ሓገዝ",
      about: "ብዛዕባ",
      languageLabel: "ቋንቋ",
    },
    footer: {
      copyright: "© 2026 IT-Weor AB. ኩሉ መሰል ተጠቒሙ እዩ።",
      tagline: "ዲጂታል ክእለት ለመምሃር ደሓን ቦታ 🔒",
    },
    home: {
      heroTitleLine1: "ዲጂታል ክእለት መምሃር",
      heroTitleLine2: "ብእርስካ ፍጥነት",
      heroSubtitle: "ጭንቀት የለን። ዘይንባብ ቃላት የለን። እንተፈለግካ ድጋፍ ኣሎ።",
      startLearning: "ምምሃር ጀምር",
      learnMore: "ተወሳኺ ፈልጥ",
      whyTitle: "ስለ ምንታይ Tillsammans digitalt?",
      features: [
        {
          title: "ደሓን ዘለዎ ልምምድ",
          description: "ብዘይ ፍርሃት ልምምድ ኣድርግ። ኣብዚ ምንም ኣይትጐድእን። ደጊም ፈትን።",
        },
        {
          title: "ብደረጃ",
          description: "ትምህርታት ብቕጽል ይበዛሉ። ቀሊል ጀምር እና ምትእምነት ሓድስ።",
        },
        {
          title: "እንተፈለግካ ሓገዝ",
          description: "ንተወፋይ መምሃር ይዕበዩ ወይ ንናይ ቴሌፎን ደውል። ብቻኻ ኣይትርክብን።",
        },
        {
          title: "ንስዊድን ትኩረት",
          description: "BankID, Swish, 1177 እና ካልኦት ስዊድን ኣገልግሎታት ተማሃር። ብቀሊል ቋንቋ።",
        },
      ],
      tracksTitle: "እንታይ ክትማሃር ትኽእል?",
      tracks: {
        contactTitle: "ግንኙነት ቆይታ",
        contactDesc: "SMS, WhatsApp, ቪዲዮ ጥሪ ምስ ሕጂን",
        servicesTitle: "ናይ ስዊድን ኢ-ኣገልግሎት",
        servicesDesc: "BankID, Swish, 1177, Mina Sidor",
        safetyTitle: "ደሓን ቆይታ",
        safetyDesc: "ምትትላል እና ሓሳብ የለዎ መልእኽቲ ኣትከለ",
        phoneTitle: "ሞባይልካ ርእስ",
        phoneDesc: "እንታይ ናይ ነፍሲ ኣንጻር እዩ? ብምዕሩግ።",
      },
      ctaTitle: "ንመጀመርያ ደረጃ ደስ ኣለካ?",
      ctaSubtitle: "ዛሬ ጀምር። ቀንዲ ተበፃሒነት ኩሉ ጊዜ ነጻ እዩ።",
      ctaButton: "ጉዞኻ ጀምር",
          testimonialsTitle: "ካልኦት እንታይ ይበሉ",
          testimonials: [
            {
              name: "ካሪን",
              age: "72 ዓመት",
              quote: "ቀደም ካብ ቴክኖሎጂ ብጣዕሚ ፈራሒ ነይረ። ሐዚ ነቲ ኣሕጽናት Swish እገብር እና ነቲ መሐለተይ ምስሊ ኣንተሽካመ!",
              achievement: "5 ትምህርቲ ወዲእካ",
            },
            {
              name: "ላርስ",
              age: "68 ዓመት",
              quote: "ምስ ዝመሰለዚ እቲ ሕብረተ ዓለም ክንደይ መጠን ለውጢ ሓደገ። ሐዚ ከም Facebook ተጠቐምቲ ኣብ እገብር እና ቤተሰብ እትከታተል።",
              achievement: "ቪዲዮ ጥሪ ምስ ኣሕጽናት",
            },
            {
              name: "እንግሪድ",
              age: "75 ዓመት",
              quote: "ከም 1177 እገልግሎት ናይ ጥዕና ከም ዝተረደእኩዎ በጃኹም ኣብ አመስግን። ሐዚ ዶክተር ጊዜ ብነባርከ እንከየስ።",
              achievement: "ስምዒታዊ BankID በባላይ",
            },
          ],
    },
    about: {
      title: "ብዛዕባ Tillsammans digitalt",
      missionTitle: "ሓላፍነትና",
      missionP1:
        "Tillsammans digitalt ንዓበይቲ ኣብ ስዊድን ዲጂታል ግንኙነት ብምትእምነት ክትምሃሩ እዩ ተፈጢሩ። ኩሉ ሰብ ከም ቴክኖሎጂ ምችእ ክስማዕ ይግባእ እምነትና እዩ።",
      missionP2:
        "ጭንቀት የለን። ዘይንባብ ቃላት የለን። ስሕተት ንምስራሕ ፍርሃት የለን። ግን ድጋፍን ትግስትን ዘለዎ ርቡዕ ቦታ እዩ። ቀንዲ ተበፃሒነት ኩሉ ጊዜ ነጻ እዩ፣ ናይ ድሕነት ትሕዝቶ ድማ ኣብ ድሕሪ ክፍሊት መርበብ ኣይእትውን።",
      whyTitle: "ስለ ምንታይ Tillsammans digitalt?",
      reasons: [
        {
          title: "በቢ-ጨዋታ ምምሃር:",
          text: "ብነጥቦታት፣ ስኬታት እና ተግባራት ምምሃር ምውሳኽ ደስ ይብል እና መንቀሳቐስ ክትቀጽል ይሕግዝ።",
        },
        {
          title: "ደሓን ዘለዎ ልምምድ:",
          text: "ብዘይ ፍርሃት ልምምድ ኣድርግ። ኣብ ምምሳሌ ውሽጢ መልእኽታት ሓቀኛ ኣይትልእክን፣ ምንም ኣይትጐድእን።",
        },
        {
          title: "ንስዊድን ትኩረት:",
          text: "ኣብ ስዊድን ትጠቐም ዝኾነ BankID, Swish, 1177 ወዘተ እና ካልእ ኣገልግሎታት ንርከብ እዩ ትኩረትና። ብቀሊል ቋንቋ።",
        },
        {
          title: "ሰብኣዊ ድጋፍ:",
          text: "ንኣካ ኣለና። እንተፈለግካ ደውል፣ ውይይት ኣድርግ ወይ ኢ-መይል ላእክ። ብቻኻ ኣይትርክብን።",
        },
      ],
      readyTitle: "ንጀምር ዘይትዕርፍ?",
      readyText: "ከም ሺሕ ስዊድን ዲጂታል ምትእምነት ዝሃንጹ ኣባላት ምስኣትዎ።",
      readyButton: "ዛሬ ምምሃር ጀምር",
    },
    lessons: {
      title: "ትምህርታት",
      intro: "ትምህርት ክትጀምር ምርጽ። ቀሊል ብምጀመር ብድሕሪኡ ገጽታ!",
      yourPoints: "ነጥቦታትካ",
      durationUnit: "ደቒቓታት",
      pointsUnit: "ነጥቦታት",
      locked: "ተሰኒዱ",
      repeat: "ኣብ መልስ",
      start: "ትምህርት ጀምር",
      completePrevious: "መጀመርያ ቀዳማይ ትምህርታት ኣድርግ",
      speechPlay: "ተጫወት",
      speechPause: "ሕጂ ኣቋርጽ",
      speechStop: "ኣቋርጽ",
      speechSpeed: "ፍጥነት",
    },
    progress: {
      title: "ምዕባለይ",
      subtitle: "ኣብ ዲጂታል ጉዞኻ ክንደይ ከም ደረስካ ርእ!",
      statsCompleted: "ተወዳእ ትምህርታት",
      statsPoints: "ጠቅላላ ነጥቦታት",
      statsTime: "ዝተጠቐምካ ጊዜ",
      overallProgress: "ሓፈሻዊ ምዕባለ",
      achievements: "ስኬታትካ",
      achievementFirstTitle: "ቀዳማይ ደረጃ",
      achievementFirstDesc: "መጀመርያ ትምህርትካ ወዳእካ",
      achievementsEmpty: "ስኬት ንምርካብ ትምህርታት ወዳእ!",
      recentActivity: "ቀረባ እንቅስቃሴ",
      recentActivityEmpty: "ኣብዚ ጊዜ እንቅስቃሴ የለን። ንመጀመርያ ትምህርት ጀምር!",
      completedOn: "ተወዳእ",
      badges: [
        {
          id: "first-step",
          title: "ቀዳማይ ደረጃ",
          description: "መጀመርያ ትምህርትካ ወዳእካ",
          icon: "🚀",
          requirement: "Complete 1 lesson",
        },
        {
          id: "explorer",
          title: "ምልላይ",
          description: "3 ትምህርታት ወዳእካ",
          icon: "🗺️",
          requirement: "Complete 3 lessons",
        },
        {
          id: "confident-learner",
          title: "ውሓት ተመሃራይ",
          description: "5 ትምህርታት ወዳእካ",
          icon: "💪",
          requirement: "Complete 5 lessons",
        },
        {
          id: "digital-master",
          title: "ዲጂታል ሕዋት",
          description: "ሓምሳ ትምህርታት ወዳእካ",
          icon: "👑",
          requirement: "Complete all lessons",
        },
        {
          id: "communication-champ",
          title: "ልውውጥ ሕዋት",
          description: "ኢ-መይል ምስራሕ ቋንቋ ማዕረግ ወዘተ ወዳእካ",
          icon: "💬",
          requirement: "Complete communication lessons",
        },
        {
          id: "banking-buddy",
          title: "ባንክ ወደድ",
          description: "BankID Swish ወዘተ ምምሃር ወዳእካ",
          icon: "🏦",
          requirement: "Complete banking lessons",
        },
        {
          id: "speed-learner",
          title: "ቅሉዕ ተመሃራይ",
          description: "ሓደ ዓመ 2 ትምህርታት ወዳእካ",
          icon: "⚡",
          requirement: "Complete 2 lessons in one day",
        },
      ],
    },
    help: {
      title: "ሓገዝ & ድጋፍ",
      subtitle: "ንሓገዝካ ኣብዚ ኣለና። ዝተሻለ መንገዲ ምረጽ።",
      contactCards: {
        callTitle: "ደውልና",
        callDesc: "ብቀጥታ ከብዲ ሰብ ተዛረብ",
        callDetail: "070-481 03 77",
        callSub: "ሳሙን ቀናት 9-17",
        chatTitle: "ንመምሃር ደውል",
        chatDesc: "ብቴሌፎን ካብ መምሃር ድጋፍ ርኸብ",
        chatDetail: "070-481 03 77",
        chatSub: "ሳሙን ቀናት 9-17",
        emailTitle: "ኢ-መይል",
        emailDesc: "ጥያቄኻ ላእክ እና ንምልሳ ንመጽእ",
        emailDetail: "help@nuhar.se",
        emailSub: "ብ24 ሰዓታት ውሽጢ መልስ",
        faqTitle: "ሓተታት ተደጋጋሚ",
        faqDesc: "ንተደጋጋሚ ሓተታት መልስ ኣብዚ ርኸብ",
        faqDetail: "FAQ ኣንብብ",
        faqSub: "ፈጣን መልስ ንተደጋጋሚ ሓተታት",
      },
      faqTitle: "ሓተታት ተደጋጋሚ",
      faqItems: [
        {
          question: "Tillsammans digitalt ንምጥቃም ክፍሊት ኣለዎ?",
          answer: "ቀንዲ ተበፃሒነት ኩሉ ጊዜ ነጻ እዩ። ናይ ድሕነት ትሕዝቶ ኣብ ድሕሪ ክፍሊት መርበብ ኣይእትውን፣ ናይ ትካላት ደገፍ ድማ ነጻ ተበፃሒነት ክቕፅል ይሕግዝ።",
        },
        {
          question: "ስሕተት እተገብር እንታይ ይኸውን?",
          answer: "ተጨነቕን! መድረኻት ልምምድ ኣብ ሙሉእ ደሓን እዮም። ምንም ኣይትጐድእን ወይ መልእኽቲ ሓቀኛ ኣይትልእክን።",
        },
        {
          question: "ነፍሲ ትምህርት ክንደይ ጊዜ ይወስድ?",
          answer: "ብዙሕ ትምህርታት 10-20 ደቒቓታት ይወስዱ። ኣብ ማንኛውን ጊዜ ክትወክል እና ብድሕሪኡ ክትቀጽል ትኽእል።",
        },
        {
          question: "ብኮምፒዩተር ዝምልከት ጽቡቕ ክንሆን ኣለዎ?",
          answer: "ኣብዚ ኣይደለን! Tillsammans digitalt ንቴክኖሎጂ ዘይተስማማ ሰባት እዩ ተስማምዕ። ካብ መጀመርያ እና በዝሒ ንምብራር ንጀምር።",
        },
        {
          question: "ካብ ሓደ ሰብ ትኽእል ሓገዝ ክርከብ ይኽእል?",
          answer: "እወ! ምትህልል፣ ውይይት ወይ ኢ-መይል ትልእክ እንተፈለግካ ሓገዝ ንህብ ኢና። መምሃር ኣለዉ ዘይዋቕርልካ።",
        },
      ],
      supportHoursTitle: "ሰዓታት ድጋፍ",
      supportWeekdays: "ሰኑይ - ዓርቢ: 9:00 - 17:00",
      supportWeekend: "ቅዳሜ - እሑድ: ዝተዓጸወ",
      supportNote: "ኢ-መይልን ውይይትን ብዝኾነ ጊዜ ይመልስ እንተዘይኮነ ግን ጊዜ ሊሕዝ ይኽእል።",
    },
    lesson: {
      notFoundTitle: "ትምህርት ኣይተረኽበን",
      backToLessons: "ናብ ትምህርታት ተመለስ",
      congratsTitle: "እንኳዕ ደስ ኣለካ!",
      completedLessonPrefix: "ትምህርት ወዳእካ:",
      earnedLabel: "ረኺብካ:",
      moreLessons: "ተወሳኺ ትምህርታት",
      seeProgress: "ምዕባለኻ ርእ",
      stepLabel: "ደረጃ",
      stepOf: "ካብ",
      showHint: "ምክር ኣርእ",
      previous: "ቀዳማይ",
      next: "ቀጻሊ",
      finish: "ውዳእ",
    },
    interactive: {
      phoneSimulator: {
        instruction: "ኣብ ናይ መልእኽቲ መተግበሪ (ምስ ሓረግ ቃል) ጸቅጥ",
        success: "ትክክል! ጽቡቕ ስራሕ!",
        apps: {
          messages: "መልእኽታት",
          phone: "ቴሌፎን",
          camera: "ካመራ",
          settings: "ቅንብሮታት",
        },
      },
      messageComposer: {
        header: "ሓድሽ መልእኽቲ",
        toLabel: "ናብ:",
        toValue: "ኣባ",
        messageLabel: "መልእኽቲ:",
        placeholder: "ኣብዚ መልእኽትካ ጻፍ...",
        send: "ልክእ",
        successTitle: "ፍጹም! ጽቡቕ ስራሕ!",
        retryTitle: "እንደገና ፈትን!",
        retryHint: "ልክዕ እዚ ጻፍ: \"{expectedMessage}\"",
        instruction: "መልእኽቲ ኣብ ስፍራ ጻፍ እና \"ልክእ\" ትጠቕም። ፍርሃት የለን — ልምምድ ብቻ እዩ!",
      },
      scamDetector: {
        messageFrom: "+46701234567",
        messageText: "ኣጽናዕ! ናትካ BankID እንተዘይረጋገጥካ ክትሰርዝ እዩ: http://fake-bank.com/verify",
        messageTime: "13:24",
        warningTitle: "ምልክታት ሓበሬታ ንምብላሽ:",
        warningSignals: [
          "ኣይተረኽበ ቁጽሪ ቴሌፎን",
          "ሓሳብ ናይ ግዜ እንዳይተሃሰብ",
          "ሓሳብ የለዎ ሊንክ (bank.se ዘይኮነ)",
          "ግላዊ ሓበሬታ ይሓትት",
        ],
        question: "እዚ ሓቀኛ መልእኽቲ ወይ ምትትላል እዩ?",
        answerReal: "ሓቀኛ መልእኽቲ",
        answerScam: "ምትትላል",
        correctTitle: "ትክክል! ጽቡቕ!",
        correctText: "እዚ ምትትላል መልእኽቲ እዩ። ባንካት ብSMS ሓበሬታ ኣይሓትቱን።",
        correctTip: "ዝኽር: እዚ ያማን መልእኽታት ርግጸን እና ሊንክ ኣይጽብጽብ!",
        wrongTitle: "ኣይደለን",
        wrongText: "እዚ በለስ ምትትላል እዩ! ናብ ምልክታት ሓበሬታ ተመልከት እና እንደገና ፈትን።",
        retryButton: "እንደገና ፈትን",
      },
      appFinder: {
        title: "BankID መተግበሪ ርኸብ",
        hint: "ናይ BankID መደበኛ ምልክት ብሰማያዊ እና ብጫ ቀለም ርኸብ",
        correctTitle: "ፍጹም!",
        correctText: "ትክክለኛ BankID መተግበሪ ረኺብካ! ሁልግዜ ሰማያዊ እና ምልክት ቁልፍ ኣለዎ። ጽቡቕ ስራሕ!",
        wrongTitle: "ኣይትክክልን!",
        wrongText: "እዚ ትክክለኛ መተግበሪ ኣይኮነን። መደበኛ BankID መተግበሪ ሰማያዊ መሬት እና ምልክት ቁልፍ (🔐) ኣለዎ።",
        retryButton: "እንደገና ፈትን",
        apps: {
          bankId: "BankID",
          bankLogIn: "ናይ ባንክ መግቢ",
          idVerify: "ID ምርግጋጽ",
          swish: "Swish",
        },
      },
    },
    accessibility: {
      title: "ተበጻሕነት",
      fontSizeLabel: "ናይ ፊደል ዓቐን",
      small: "ንእሽቶ",
      medium: "መማህሊል",
      large: "ዓቢ",
      xLarge: "ኣዝዩ ዓቢ",
    },
  },
  fr: {
        supportPopup: {
          title: "Soutenez-nous avec Swish",
          dontShow: "Ne plus afficher",
          close: "Fermer",
        },
    meta: {
      title: "Tillsammans digitalt - Apprenez le numérique à votre rythme",
      description: "Une plateforme sûre et simple pour apprendre la communication numérique. Sans stress, sans jargon, juste du soutien.",
    },
    nav: {
      home: "Accueil",
      lessons: "Leçons",
      progress: "Ma progression",
      help: "Aide",
      about: "À propos",
      languageLabel: "Langue",
    },
    footer: {
      copyright: "© 2026 IT-Weor AB. Tous droits réservés.",
      tagline: "Un endroit sûr pour apprendre le numérique 🔒",
    },
    accessibility: {
      title: "Accessibilité",
      fontSizeLabel: "Taille de la police",
      small: "Petite",
      medium: "Moyenne",
      large: "Grande",
      xLarge: "Très grande",
    },
    home: {
      heroTitleLine1: "Apprenez le numérique",
      heroTitleLine2: "à votre rythme",
      heroSubtitle: "Pas de stress. Pas de jargon. Juste du soutien quand vous en avez besoin.",
      startLearning: "Commencer",
      learnMore: "En savoir plus",
      whyTitle: "Pourquoi Tillsammans digitalt ?",
      features: [
        {
          title: "Environnement d'entraînement sûr",
          description: "Pratiquez sans crainte. Ici, vous ne pouvez rien casser. Essayez autant de fois que vous voulez.",
        },
        {
          title: "Pas à pas",
          description: "Les leçons deviennent progressivement plus difficiles. Commencez simplement et gagnez en confiance.",
        },
        {
          title: "De l'aide quand vous en avez besoin",
          description: "Discutez avec des mentors bénévoles ou appelez-nous. Vous n'êtes jamais seul.",
        },
        {
          title: "Focus sur la Suède",
          description: "Apprenez BankID, Swish, 1177 et d'autres services suédois. Tout en langage clair.",
        },
      ],
      tracksTitle: "Que pouvez-vous apprendre ?",
      tracks: {
        contactTitle: "Restez en contact",
        contactDesc: "SMS, WhatsApp, appels vidéo avec les petits-enfants",
        servicesTitle: "E-services suédois",
        servicesDesc: "BankID, Swish, 1177, Mes pages",
        safetyTitle: "Restez en sécurité",
        safetyDesc: "Évitez les arnaques et les faux SMS",
        phoneTitle: "Comprendre votre téléphone",
        phoneDesc: "Quel bouton fait quoi ? Calmement.",
      },
      ctaTitle: "Prêt(e) à faire le premier pas ?",
      ctaSubtitle: "Commencez aujourd'hui. L'accès de base est toujours gratuit.",
      ctaButton: "Commencer votre parcours",
          testimonialsTitle: "Ce que disent les autres",
          testimonials: [
            {
              name: "Karin",
              age: "72 ans",
              quote: "J'étais terrifiée par le téléphone avant. Maintenant j'envoie de l'argent aux petits-enfants par Swish et je fais des appels vidéo chaque semaine!",
              achievement: "A terminé 5 leçons",
            },
            {
              name: "Lars",
              age: "68 ans",
              quote: "Tillsammans digitalt ne m'a pas seulement appris la technologie - ils comprennent comment nous pensons. Pas de questions stupides ici!",
              achievement: "Aide maintenant d'autres dans son association",
            },
            {
              name: "Ingrid",
              age: "75 ans",
              quote: "Je ne pensais jamais gérer BankID. Maintenant j'achète même mes billets de théâtre en ligne!",
              achievement: "Utilise 6 applications différentes de manière indépendante",
            },
          ],
    },
    about: {
      title: "À propos de Tillsammans digitalt",
      missionTitle: "Notre mission",
      missionP1:
        "Tillsammans digitalt a été créé pour aider les personnes âgées en Suède à maîtriser la communication numérique en toute confiance. Nous pensons que tout le monde mérite de se sentir à l'aise avec la technologie, quel que soit l'âge.",
      missionP2:
        "Pas de stress. Pas de jargon. Pas de peur de se tromper. Juste du soutien, de la patience et un lieu sûr pour apprendre. L'accès de base est toujours gratuit, et le contenu critique pour la sécurité n'est jamais paywallé.",
      whyTitle: "Pourquoi Tillsammans digitalt ?",
      reasons: [
        {
          title: "Apprentissage gamifié :",
          text: "En rendant l'apprentissage amusant et engageant avec des points, des réussites et des défis, il est plus facile de rester motivé.",
        },
        {
          title: "Environnement d'entraînement sûr :",
          text: "Pratiquez sans crainte. Dans nos simulations, vous ne pouvez pas envoyer de vrais messages ni rien casser. C'est totalement sûr pour expérimenter.",
        },
        {
          title: "Focus sur la Suède :",
          text: "Nous nous concentrons sur les services que vous utilisez réellement en Suède - BankID, Swish, 1177 et plus. Tout en langage clair.",
        },
        {
          title: "Soutien humain :",
          text: "Nous sommes là pour vous. Appelez, discutez ou envoyez un email quand vous avez besoin d'aide. Vous n'êtes jamais seul.",
        },
      ],
      readyTitle: "Prêt(e) à commencer ?",
      readyText: "Rejoignez des milliers de Suédois qui renforcent déjà leur confiance numérique.",
      readyButton: "Commencer aujourd'hui",
    },
    lessons: {
      title: "Leçons",
      intro: "Choisissez une leçon pour commencer. Commencez par les plus simples et progressez !",
      yourPoints: "Vos points",
      durationUnit: "min",
      pointsUnit: "points",
      locked: "Verrouillé",
      repeat: "Refaire",
      start: "Démarrer la leçon",
      completePrevious: "Terminez d'abord les leçons précédentes",
      speechPlay: "Lire",
      speechPause: "Pause",
      speechStop: "Arrêter",
      speechSpeed: "Vitesse",
    },
    progress: {
      title: "Ma progression",
      subtitle: "Voyez jusqu'où vous êtes allé(e) dans votre parcours numérique !",
      statsCompleted: "Leçons terminées",
      statsPoints: "Total de points",
      statsTime: "Temps passé",
      overallProgress: "Progression globale",
      achievements: "Vos réussites",
      achievementFirstTitle: "Premier pas",
      achievementFirstDesc: "Vous avez terminé votre première leçon",
      achievementsEmpty: "Terminez des leçons pour gagner des réussites !",
      recentActivity: "Activité récente",
      recentActivityEmpty: "Aucune activité pour l'instant. Commencez une leçon pour démarrer !",
      completedOn: "Terminé le",
      badges: [
        {
          id: "first-step",
          title: "Premier pas",
          description: "Vous avez terminé votre première leçon",
          icon: "🚀",
          requirement: "Complete 1 lesson",
        },
        {
          id: "explorer",
          title: "Explorateur",
          description: "Vous avez terminé 3 leçons",
          icon: "🗺️",
          requirement: "Complete 3 lessons",
        },
        {
          id: "confident-learner",
          title: "Apprenant confiant",
          description: "Vous avez terminé 5 leçons",
          icon: "💪",
          requirement: "Complete 5 lessons",
        },
        {
          id: "digital-master",
          title: "Champion numérique",
          description: "Vous avez terminé toutes les 7 leçons",
          icon: "👑",
          requirement: "Complete all lessons",
        },
        {
          id: "communication-champ",
          title: "Champion de la communication",
          description: "Vous maîtrisez l'email, les réseaux sociaux et les appels vidéo",
          icon: "💬",
          requirement: "Complete communication lessons",
        },
        {
          id: "banking-buddy",
          title: "Ami de la banque",
          description: "Vous maîtrisez BankID, Swish et les services bancaires en ligne",
          icon: "🏦",
          requirement: "Complete banking lessons",
        },
        {
          id: "speed-learner",
          title: "Apprenant rapide",
          description: "Vous avez terminé 2 leçons en une journée",
          icon: "⚡",
          requirement: "Complete 2 lessons in one day",
        },
      ],
    },
    help: {
      title: "Aide & Support",
      subtitle: "Nous sommes là pour vous aider. Choisissez la méthode qui vous convient.",
      contactCards: {
        callTitle: "Appelez-nous",
        callDesc: "Parlez directement à une personne serviable",
        callDetail: "070-481 03 77",
        callSub: "Jours ouvrés 9-17",
        chatTitle: "Appeler un mentor",
        chatDesc: "Obtenez de l'aide d'un mentor par téléphone",
        chatDetail: "070-481 03 77",
        chatSub: "Jours ouvrés 9-17",
        emailTitle: "E-mail",
        emailDesc: "Envoyez votre question et nous vous répondrons",
        emailDetail: "help@nuhar.se",
        emailSub: "Réponse sous 24 heures",
        faqTitle: "FAQ",
        faqDesc: "Trouvez les réponses aux questions fréquentes ici",
        faqDetail: "Lire la FAQ",
        faqSub: "Réponses rapides aux questions courantes",
      },
      faqTitle: "Questions fréquentes",
      faqItems: [
        {
          question: "L'utilisation de Tillsammans digitalt est-elle payante ?",
          answer: "L'accès de base est toujours gratuit. Le contenu critique pour la sécurité n'est jamais paywallé, et le financement des organisations maintient l'accès gratuit.",
        },
        {
          question: "Que se passe-t-il si je fais une erreur ?",
          answer: "Pas de souci ! Nos espaces d'entraînement sont totalement sûrs. Vous ne pouvez rien casser ni envoyer de vrais messages. C'est un endroit sûr pour pratiquer.",
        },
        {
          question: "Combien de temps dure chaque leçon ?",
          answer: "La plupart des leçons durent 10 à 20 minutes. Vous pouvez faire une pause à tout moment et reprendre plus tard. Allez à votre rythme !",
        },
        {
          question: "Dois-je être bon avec les ordinateurs ?",
          answer: "Absolument pas ! Tillsammans digitalt est conçu pour ceux qui se sentent peu sûrs avec la technologie. Nous commençons depuis le début et expliquons tout clairement.",
        },
        {
          question: "Puis-je obtenir de l'aide d'une vraie personne ?",
          answer: "Oui ! Vous pouvez nous appeler, discuter ou envoyer un email quand vous en avez besoin. Nous avons aussi des mentors pour vous aider.",
        },
      ],
      supportHoursTitle: "Nos horaires de support",
      supportWeekdays: "Lundi - Vendredi : 9:00 - 17:00",
      supportWeekend: "Samedi - Dimanche : Fermé",
      supportNote: "Les emails et le chat sont aussi traités en dehors des horaires, mais cela peut prendre un peu plus de temps.",
    },
    lesson: {
      notFoundTitle: "Leçon introuvable",
      backToLessons: "Retour aux leçons",
      congratsTitle: "Félicitations !",
      completedLessonPrefix: "Vous avez terminé la leçon :",
      earnedLabel: "Vous avez gagné :",
      moreLessons: "Plus de leçons",
      seeProgress: "Voir votre progression",
      stepLabel: "Étape",
      stepOf: "sur",
      showHint: "Afficher l'astuce",
      previous: "Précédent",
      next: "Suivant",
      finish: "Terminer",
    },
    interactive: {
      phoneSimulator: {
        instruction: "Appuyez sur l'app Messages (la verte avec une bulle)",
        success: "Correct ! Bravo !",
        apps: {
          messages: "Messages",
          phone: "Téléphone",
          camera: "Caméra",
          settings: "Réglages",
        },
      },
      messageComposer: {
        header: "Nouveau message",
        toLabel: "À :",
        toValue: "Mamie",
        messageLabel: "Message :",
        placeholder: "Écrivez votre message ici...",
        send: "Envoyer",
        successTitle: "Parfait ! Bravo !",
        retryTitle: "Réessayez !",
        retryHint: "Essayez d'écrire exactement : \"{expectedMessage}\"",
        instruction: "Écrivez le message dans le champ et appuyez sur \"Envoyer\". Pas d'inquiétude - c'est juste un exercice !",
      },
      scamDetector: {
        messageFrom: "+46701234567",
        messageText: "URGENT ! Votre BankID sera bloqué si vous ne confirmez pas vos informations ici : http://fake-bank.com/verify",
        messageTime: "13:24",
        warningTitle: "Signes d'alerte à repérer :",
        warningSignals: [
          "Numéro inconnu",
          "Crée un sentiment d'urgence",
          "Lien suspect (pas bank.se)",
          "Demande des informations personnelles",
        ],
        question: "Ce message est-il réel ou une arnaque ?",
        answerReal: "Message réel",
        answerScam: "Arnaque",
        correctTitle: "Correct ! Excellent !",
        correctText: "C'est un SMS d'arnaque classique. Les banques ne demandent JAMAIS vos informations par SMS.",
        correctTip: "Rappel : Supprimez ces messages et ne cliquez jamais sur les liens !",
        wrongTitle: "Pas tout à fait",
        wrongText: "C'est en fait une arnaque ! Regardez les signes ci-dessus et réessayez.",
        retryButton: "Réessayer",
      },
      appFinder: {
        title: "Trouvez l'app BankID",
        hint: "Cherchez le logo officiel BankID en bleu et jaune",
        correctTitle: "Parfait !",
        correctText: "Vous avez trouvé la bonne app BankID ! Elle a toujours l'icône bleue avec un cadenas. Bravo !",
        wrongTitle: "Pas tout à fait !",
        wrongText: "Ce n'est pas la bonne app. L'app officielle BankID a un fond bleu avec un symbole de cadenas (🔐).",
        retryButton: "Réessayer",
        apps: {
          bankId: "BankID",
          bankLogIn: "Connexion Banque",
          idVerify: "Vérifier ID",
          swish: "Swish",
        },
      },
    },
  },
};

export function getDictionary(locale: string): Dictionary {
  return dictionaries[getLocaleOrDefault(locale)];
}
