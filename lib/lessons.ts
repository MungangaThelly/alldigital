import { Locale, getLocaleOrDefault } from "@/lib/i18n";

export type LessonDifficulty = "beginner" | "intermediate" | "advanced";
export type LessonCategory = "communication" | "e-services" | "security" | "basics";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: LessonCategory;
  difficulty: LessonDifficulty;
  duration: number; // minutes
  points: number;
  steps: LessonStep[];
  requiredLessons?: string[]; // IDs of lessons that must be completed first
}
export interface LessonStep {
  id: string;
  type: "instruction" | "interactive" | "quiz";
  title: string | ((t: import("@/lib/i18n").Dictionary) => string);
  content: string | ((t: import("@/lib/i18n").Dictionary) => string);
  hint?: string;
  component?: string; // Component to render for interactive steps
  validation?: {
    correctAnswer?: string;
    checkFunction?: string;
  };
}

export interface UserProgress {
  userId: string;
  completedLessons: string[];
  currentLesson?: string;
  currentStep?: string;
  points: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

const lessonsByLocale: Record<Locale, Lesson[]> = {
  sv: [
    {
      id: "spot-scams",
      title: "Upptäck bedrägerier",
      description: "Lär dig identifiera och undvika vanliga bedrägerier via SMS och e-post.",
      category: "security",
      difficulty: "beginner",
      duration: 20,
      points: 200,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Viktigt: Håll dig säker",
          content: "Bedragare försöker lura människor med falska meddelanden. Vi lär oss känna igen dem. Kom ihåg: Din bank ringer ALDRIG och ber om koder eller lösenord!",
          hint: "Detta kan skydda dig från att förlora pengar."
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Granska meddelandet",
          content: "Titta på detta SMS. Är det äkta eller falskt? Leta efter varningssignaler.",
          component: "ScamDetector",
          hint: "Kontrollera avsändaren, språket och om de ber om personlig information."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Bra jobbat!",
          content: "Nu vet du hur du upptäcker bedrägerier. Kom ihåg: Om något känns fel är det troligen det. Ring alltid din bank direkt på numret på ditt kort om du är osäker.",
          hint: "Spara detta nummer i din telefon: bankens kundtjänst."
        }
      ]
    },
    {
      id: "os-update-android",
      title: "Uppdatera Android-telefon",
      description: "Lär dig varför och hur du uppdaterar din Android-telefon steg för steg.",
      category: "basics",
      difficulty: "beginner",
      duration: 15,
      points: 120,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "os-update-why",
          type: "instruction",
          title: "Varför är uppdateringar viktiga?",
          content: "Uppdateringar skyddar mot bedrägerier och virus, gör att appar fungerar bättre, minskar fel och är viktiga för BankID och 1177. Uppdatering är som att laga och förbättra telefonen.",
        },
        {
          id: "os-update-android-step",
          type: "instruction",
          title: "Steg-för-steg: Uppdatera Android",
          content: "1. Öppna Inställningar\n2. Tryck på System\n3. Välj Programuppdatering\n4. Tryck på Sök efter uppdatering\n5. Välj Ladda ner och installera\n\nViktigt: Anslut till Wi-Fi, minst 50% batteri, det kan ta 10–30 minuter, telefonen startar om själv.",
        },
        {
          id: "os-update-android-extra",
          type: "instruction",
          title: "Extra tips",
          content: "Sätt på automatiska uppdateringar, se vilken version du har, och vad du gör om minnet är fullt.",
        },
        {
          id: "os-update-android-safety",
          type: "instruction",
          title: "Säkerhet",
          content: "Uppdatera alltid via Inställningar, aldrig via länkar i SMS eller e-post.",
        },
      ],
    },
    {
      id: "os-update-ios",
      title: "Uppdatera iPhone (iOS)",
      description: "Lär dig varför och hur du uppdaterar din iPhone steg för steg.",
      category: "basics",
      difficulty: "beginner",
      duration: 15,
      points: 120,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "os-update-why",
          type: "instruction",
          title: "Varför är uppdateringar viktiga?",
          content: "Uppdateringar skyddar mot bedrägerier och virus, gör att appar fungerar bättre, minskar fel och är viktiga för BankID och 1177. Uppdatering är som att laga och förbättra telefonen.",
        },
        {
          id: "os-update-ios-step",
          type: "instruction",
          title: "Steg-för-steg: Uppdatera iPhone",
          content: "1. Öppna Inställningar\n2. Tryck på Allmänt\n3. Välj Programuppdatering\n4. Tryck på Hämta och installera\n\nViktigt: Anslut till Wi-Fi, minst 50% batteri, det kan ta 10–30 minuter, telefonen startar om själv.",
        },
        {
          id: "os-update-ios-extra",
          type: "instruction",
          title: "Extra tips",
          content: "Slå på automatiska uppdateringar, se vilken version du har, och vad du gör om minnet är fullt.",
        },
        {
          id: "os-update-ios-safety",
          type: "instruction",
          title: "Säkerhet",
          content: "Uppdatera alltid via Inställningar, aldrig via länkar i SMS eller e-post.",
        },
      ],
    },
    {
      id: "os-update-elderly-tips",
      title: "Tips för äldre deltagare",
      description: "Så gör du OS-uppdatering tryggt och enkelt i grupp.",
      category: "basics",
      difficulty: "beginner",
      duration: 10,
      points: 80,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "elderly-tips-1",
          type: "instruction",
          title: "Gör så här i grupp",
          content: "Visa på storbild/projektor, ha utskrivna steg med bilder, låt deltagarna göra det på sina egna telefoner, ha extra stödpersoner i rummet.",
        },
        {
          id: "elderly-tips-2",
          type: "instruction",
          title: "Säkerhet",
          content: "Man ska inte klicka på uppdateringslänkar i SMS. Uppdateringar görs via Inställningar, inte via meddelanden."
        },
      ],
    },
    {
      id: "safe-social-networks",
      title: "Sociala nätverk med trygghet",
      description: "Många äldre vill använda sociala medier, men är osäkra. Lär dig skapa konto, logga in, sekretessinställningar, dela foto/meddelanden tryggt och undvika scam-kontakter.",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 180,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "Support us with Swish",
          content: "Support us with Swish!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Skapa konto och logga in",
          content: "Steg-för-steg hur du skapar ett konto på t.ex. Facebook eller Instagram och loggar in.",
          hint: "Använd en stark lösenord och skriv upp det på ett säkert ställe."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Grundläggande sekretessinställningar",
          content: "Så ställer du in vem som kan se din profil, dina bilder och dina inlägg. Gå igenom sekretessmenyn och välj det som känns tryggt.",
          hint: "Du kan alltid ändra inställningarna senare."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Bästa praxis för att dela foto och meddelanden",
          content: "Tips för att dela bilder och meddelanden tryggt: Dela bara med personer du känner, undvik att lägga ut känslig information.",
          hint: "Fråga någon om du är osäker på vad du ska dela."
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Undvika scam-kontakter",
          content: "Så känner du igen och undviker falska kontakter och bedrägerier på sociala medier. Acceptera bara vänförfrågningar från personer du känner.",
          hint: "Blockera och rapportera misstänkta konton."
        }
      ]
    },
    {
      id: "digital-meetings",
      title: "Videokonferens & Digitala möten",
      description: "Populärt för social kontakt och telemedicin. Lär dig använda Zoom, Teams, FaceTime, bjuda in och ansluta, ställa in mikrofon och kamera, och bästa praxis för digitala möten.",
      category: "communication",
      difficulty: "intermediate",
      duration: 20,
      points: 180,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Använda Zoom, Teams och FaceTime",
          content: "Så startar du och ansluter till ett digitalt möte med Zoom, Teams eller FaceTime.",
          hint: "Du behöver en internetuppkoppling och ibland ett konto."
        },
        // ...existing code...
        {
          id: "step-2",
          type: "instruction",
          title: "Bjuda in och ansluta",
          content: "Hur du bjuder in andra till ett möte och ansluter själv. Skicka en länk eller möteskod.",
          hint: "Du kan bjuda in via e-post eller SMS."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Ställa in mikrofon och kamera",
          content: "Så kontrollerar du att mikrofon och kamera fungerar och är rätt inställda.",
          hint: "Testa innan mötet börjar."
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Bästa praxis för digitala möten",
          content: "Tips för att delta tryggt och effektivt: Stäng av mikrofon när du inte pratar, använd kamera om du vill, och respektera andra deltagare.",
          hint: "Var gärna i en lugn miljö och ha bra ljus."
        }
      ]
    },
    {
      id: "smartphones-apps-indepth",
      title: "Smartphones & appar (Fördjupning)",
      description: "Lär dig mer om inställningar, backup, lagring och molntjänster för din smartphone.",
      category: "basics",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "Stöd oss med Swish!",
          content: "Hjälp oss hålla plattformen igång och uppdaterad. Swisha valfritt bidrag till 123 456 78 90. Tack för ditt stöd!",
          hint: "Ditt stöd gör skillnad för många!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Inställningar för enklare användning",
          content: "Upptäck inställningar som gör mobilen lättare att använda: större text, mörkt läge, och förenklade menyer.",
          hint: "Du hittar dessa under 'Tillgänglighet' och 'Skärm'."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Backup och lagring",
          content: "Säkerhetskopiera dina bilder och kontakter så att inget försvinner om mobilen tappas bort. Använd Google Drive, iCloud eller liknande tjänster.",
          hint: "Automatisk backup kan aktiveras i inställningarna."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Molntjänster",
          content: "Med molntjänster kan du spara och komma åt dina filer från flera enheter. Exempel: Google Drive, Dropbox, iCloud.",
          hint: "Du kan dela filer och bilder med familj och vänner."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är en fördel med att använda molntjänster?",
          validation: {
            correctAnswer: "Du kan komma åt dina filer från flera enheter och dela dem enkelt"
          }
        }
      ]
    },
    {
      id: "advanced-digital-security",
      title: "Avancerad digital säkerhet",
      description: "Lär dig känna igen bedrägerier, skapa säkra lösenord och förstå nätfiske och andra online-risker.",
      category: "security",
      difficulty: "advanced",
      duration: 30,
      points: 300,
      // requiredLessons removed to make lesson always visible
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "Support us with Swish",
          content: "Support us with Swish!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Känna igen bedrägerier",
          content: "Lär dig identifiera avancerade bedrägerier via SMS (smishing), e-post (phishing) och telefonsamtal (vishing). Bedragare använder olika trick: de kan låtsas vara från banken, skapa panik, eller be dig agera snabbt. Se upp för oväntade länkar, krav på snabba beslut, och personer som ber om personlig information eller BankID. Typiska trick är att skapa stress, hota med problem, eller erbjuda något som låter för bra för att vara sant.",
          hint: "Dubbelkolla alltid avsändaren och fråga någon om du är osäker."
        },
        {
          id: "step-vishing-smishing",
          type: "instruction",
          title: "Vishing och smishing",
          content: "Vishing är bedrägeri via telefonsamtal där någon försöker lura dig att lämna ut information eller BankID. Smishing är bedrägeri via SMS där du får länkar eller meddelanden som ser ut att komma från banken eller myndigheter. Klicka aldrig på länkar i oväntade SMS och lämna aldrig ut information på telefon.",
          hint: "Banken eller myndigheter ber aldrig om BankID eller koder via telefon eller SMS."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Säkra lösenord",
          content: "Använd unika och starka lösenord för varje tjänst. Aktivera tvåfaktorsautentisering där det är möjligt.",
          hint: "En lösenordshanterare kan hjälpa dig hålla koll på alla lösenord."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Nätfiske och online-risker",
          content: "Nätfiske innebär att bedragare försöker lura dig att lämna ut information via falska webbsidor eller e-post. Kontrollera alltid webbadressen och klicka inte på misstänkta länkar.",
          hint: "Skriv in webbadressen själv istället för att klicka på länkar i e-post."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är ett tecken på nätfiske?",
          validation: {
            correctAnswer: "Oväntade länkar och krav på att lämna ut information"
          }
        }
      ]
    },
    {
      id: "digital-photos-memories",
      title: "Digitala foton & minnen",
      description: "Lär dig skanna gamla foton, organisera bilder och dela med familjen.",
      category: "basics",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Skanna gamla foton",
          content: "Du kan använda din mobilkamera eller en särskild app för att skanna gamla pappersfoton. Lägg fotot på ett bord med bra ljus och ta en bild!",
          hint: "Det finns appar som förbättrar kvaliteten, t.ex. Google PhotoScan."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Organisera dina bilder",
          content: "Skapa album i din mobil eller dator för att sortera bilder. Du kan döpa albumen efter år, personer eller händelser.",
          hint: "Det blir lättare att hitta bilder senare!"
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Dela med familjen",
          content: "Du kan dela bilder via e-post, SMS eller appar som Google Foto eller WhatsApp. Välj vilka du vill dela med och skicka!",
          hint: "Dela bara bilder du är bekväm med att andra ser."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är ett bra sätt att organisera bilder?",
          validation: {
            correctAnswer: "Skapa album och sortera efter år eller personer"
          }
        }
      ]
    },
    {
      id: "ai-everyday-life",
      title: "AI i vardagen",
      description: "Vad AI är, hur du använder det, och hur du gör det säkert. Praktiska verktyg för vardagen!",
      category: "basics",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Vad är AI?",
          content: "AI betyder artificiell intelligens. Det är datorprogram som kan hjälpa dig med olika saker, som att skriva texter, planera resor eller hitta information.",
          hint: "AI finns i många appar och tjänster du redan använder!"
        },
        {
          id: "step-2",
          type: "instruction",
          title: "AI i vardagen",
          content: "Du kan använda AI för att planera en resa, skriva brev, översätta språk eller få tips på recept. Prova att fråga en AI-tjänst om hjälp!",
          hint: "Exempel: Google, ChatGPT, eller röstassistenter."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Säker användning av AI",
          content: "Var försiktig med att dela personlig information med AI-tjänster. Lita inte blint på allt AI säger – dubbelkolla viktiga saker!",
          hint: "Fråga gärna någon om du är osäker."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är viktigt när du använder AI?",
          validation: {
            correctAnswer: "Dela inte personlig information och dubbelkolla viktiga svar"
          }
        }
      ]
    },
    {
      id: "sms-basics",
      title: "Skicka ditt första SMS",
      description: "Lär dig skicka textmeddelanden till familj och vänner. Enkelt och tryggt.",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: t => t.supportPopup.title,
          content: t => t.supportPopup.title,
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Välkommen!",
          content: "I den här lektionen ska du lära dig skicka SMS. SMS är ett textmeddelande som du kan skicka till någon annans telefon. Det är enkelt och säkert!",
          hint: "Tryck på 'Nästa' när du är redo.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Öppna meddelanden",
          content: "Hitta ikonen för meddelanden på din telefon. Den ser ofta ut som en pratbubbla. Prova att klicka på den.",
          component: "PhoneSimulator",
          hint: "Leta efter en grön eller blå ikon med en pratbubbla.",
        },
        {
          id: "step-3",
          type: "interactive",
          title: "Skriv ett meddelande",
          content: "Nu ska du skriva ditt meddelande. Prova att skriva 'Hej!' i meddelandefältet.",
          component: "MessageComposer",
          validation: {
            correctAnswer: "Hej!",
          },
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Kontrollera din kunskap",
          content: "Vad händer när du trycker på 'Skicka'-knappen?",
          validation: {
            correctAnswer: "Meddelandet skickas till mottagaren",
          },
        },
      ],
    },
    {
      id: "bankid-intro",
      title: "Vad är BankID?",
      description: "Förstå vad BankID är och varför det är säkert att använda.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "Stöd oss med Swish!",
          content: "Hjälp oss hålla plattformen igång och uppdaterad. Swisha valfritt bidrag till 070-481 03 77 eller scanna QR-koden. Tack för ditt stöd!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "BankID - Din digitala ID-handling",
          content: "BankID är som ditt körkort eller pass, fast digitalt. Du använder det för att bevisa vem du är på nätet. Alla banker i Sverige använder BankID.",
          hint: "Detta är en viktig del av det digitala Sverige!",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Känna igen BankID",
          content: "BankID-appen har en blå logotyp. Kan du hitta den på den här skärmen?",
          component: "AppFinder",
          validation: {
            correctAnswer: "bankid",
          },
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Perfekt!",
          content: "Nu känner du igen BankID-appen! Du använder den för att: logga in på din bank, signera viktiga dokument, och identifiera dig på olika webbplatser. Det är mycket säkert!",
          hint: "BankID är det säkraste sättet att identifiera dig digitalt i Sverige.",
        },
      ],
    },
    {
      id: "health-1177-sv",
      title: "1177 & E-hälsa - Vårdkontakter online",
      description: "Logga in, läs meddelanden, förnya recept och boka/ändra tider på 1177 och andra e-hälsotjänster.",
      category: "e-services",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Vad är 1177 och e-hälsa?",
          content: "1177 är Sveriges vårdguide. Här kan du läsa råd, kontakta vården och se dina vårdärenden. Det finns även andra e-hälsotjänster för att hantera din hälsa online.",
          hint: "1177 används av regionerna i hela Sverige."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Logga in säkert",
          content: "För att se dina personliga uppgifter loggar du in med BankID. Det är säkert och går snabbt. Använd bara den officiella 1177-webbplatsen eller appen.",
          hint: "BankID skyddar din information."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Förnya recept",
          content: "När du är inloggad kan du enkelt förnya dina recept digitalt. Du får ett meddelande när receptet är klart att hämta på apoteket.",
          hint: "Du kan förnya recept för dig själv eller barn."
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Boka och ändra tider",
          content: "Du kan boka, omboka eller avboka vårdtider direkt i mobilen. Välj tid som passar dig och få bekräftelse via e-post eller SMS.",
          hint: "Du kan alltid komma tillbaka och se dina bokningar."
        },
        {
          id: "step-5",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad kan du göra på 1177 och andra e-hälsotjänster?",
          validation: {
            correctAnswer: "Förnya recept och boka/ändra tider online"
          }
        }
      ]
    },
    {
      id: "video-call",
      requiredLessons: ["sms-basics"],
      title: "Ring ett videosamtal",
      description: "Se dina barnbarn och prata med dem ansiktsikten. Lär dig använda FaceTime eller WhatsApp Video.",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Videosamtal - Se varandra på distans",
          content: "Med videosamtal kan du både se och höra personen du pratar med. Perfect för att hänga med barnbarnen eller prata med vänner!",
          hint: "Du behöver ha kamera och internet för detta."
        }
      ]
    },
    {
      id: "email-basics",
      title: "Skicka och läsa e-post",
      description: "Lär dig grunderna i e-post: skriva, skicka, läsa och svara på meddelanden.",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Välkommen till e-post!",
          content: "E-post (email) är som ett digitalt brev. Du kan skicka meddelanden till vem som helst i världen - det kommer fram på några sekunder! E-post är perfekt för längre meddelanden än SMS.",
          hint: "E-post är gratis att använda!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Din e-postadress",
          content: "Din e-postadress ser ut ungefär så här: dittnamn@exempel.se. Det är som din digitala postadress. Du behöver mottagarens e-postadress för att skicka till dem.",
          hint: "Glöm inte '@' tecknet - det måste alltid finnas i en e-postadress!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Skriva ett e-postmeddelande",
          content: "Ett e-postmeddelande har tre viktiga delar: Till (mottagarens adress), Ämne (vad handlar det om), och Meddelande (din text). Precis som ett vanligt brev!",
          hint: "Skriv alltid en tydlig ämnesrad så mottagaren vet vad meddelandet handlar om.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är viktigt att ha när du skickar e-post?",
          validation: {
            correctAnswer: "Mottagarens e-postadress",
          },
        },
      ],
    },
    {
      id: "social-media-basics",
      title: "Sociala medier - Grunderna",
      description: "Lär dig om Facebook och Instagram. Dela bilder, håll kontakten och följ dina nära och kära.",
      category: "communication",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      requiredLessons: ["sms-basics", "email-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Vad är sociala medier?",
          content: "Sociala medier som Facebook och Instagram är platser där människor delar foton, tankar och håller kontakten. Det är som en digital mötesplats där du kan se vad familj och vänner gör.",
          hint: "Miljontals svenskar använder sociala medier varje dag.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Facebook - Håll kontakten",
          content: "På Facebook kan du: Se foton från barnbarnen, dela dina egna bilder, skriva meddelanden, och gå med i grupper med liknande intressen. Du kan till exempel hitta grupper för din hemstad eller dina hobbies!",
          hint: "Du bestämmer själv vad du vill dela och vem som kan se det.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Instagram - Dela bilder",
          content: "Instagram handlar mest om bilder och videos. Perfect för att se bilder från familj och vänner! Du kan också följa dina favorithobbyster som trädgård, matlagning eller resor.",
          hint: "Du behöver inte posta själv - många gillar bara att titta på andras bilder.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Säkerhet på sociala medier",
          content: "Viktigt att komma ihåg: Dela aldrig personlig information som BankID-koder eller lösenord. Var försiktig med vad du delar offentligt. Acceptera bara vänförfrågningar från människor du känner.",
          hint: "När du tvivlar, fråga en släkting eller vän innan du delar något.",
        },
      ],
    },
    {
      id: "digital-banking",
      title: "Digital bankhantering och Swish",
      description: "Lär dig använda Swish för enkla betalningar och hur du checkar ditt bankkonto online.",
      category: "e-services",
      difficulty: "intermediate",
      duration: 25,
      points: 225,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Swish - Sveriges enklaste betalning",
          content: "Swish är en svensk betaltjänst som låter dig skicka pengar direkt från din mobil. Perfekt för att dela på en restaurangräkning, ge lite pengar till barnbarnen, eller betala på loppmarknaden!",
          hint: "De flesta svenskar har Swish - det går blixtsnabbt!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Så fungerar Swish",
          content: "För att Swisha behöver du bara mottagarens telefonnummer och beloppet du vill skicka. Du öppnar Swish-appen, skriver in numret och beloppet, och godkänner med BankID. Klart på några sekunder!",
          hint: "Pengarna kommer direkt - ingen väntan!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Kolla ditt bankkonto online",
          content: "Med din banks app kan du: Se ditt saldo, kolla vilka transaktioner du gjort, betala räkningar, och föra över pengar mellan dina konton. Allt säkert med BankID!",
          hint: "Du kan checka ditt konto när som helst, var som helst.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Säkerhet vid digital bankhantering",
          content: "Viktiga säkerhetsregler: Använd alltid officiella bank-appar, dela aldrig dina BankID-koder, logga alltid ut när du är klar, och håll din telefon uppdaterad. Din bank frågar ALDRIG efter koder i telefon eller mail!",
          hint: "Vid minsta tvivel - ring din banks kundtjänst direkt.",
        },
      ],
    },
    {
      id: "health-1177-sv-short",
      title: "1177 - Vårdkontakter online",
      description: "Logga in, läs meddelanden och boka tid på 1177.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Vad är 1177?",
          content: "1177 är Sveriges vårdguide. Här kan du läsa råd, kontakta vården och se dina vårdärenden.",
          hint: "1177 används av regionerna i hela Sverige.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Logga in säkert",
          content: "För att se dina personliga uppgifter loggar du in med BankID. Det är säkert och går snabbt.",
          hint: "Använd bara den officiella 1177-webbplatsen eller appen.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Meddelanden och bokningar",
          content: "När du är inloggad kan du läsa meddelanden, förnya recept och boka eller avboka tider.",
          hint: "Du kan alltid gå tillbaka och läsa meddelanden igen.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad behöver du för att logga in på 1177?",
          validation: {
            correctAnswer: "BankID",
          },
        },
      ],
    },
    {
      id: "password-safety",
      title: "Säkra lösenord",
      description: "Skapa starka lösenord och skydda dina konton.",
      category: "security",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Vad är ett starkt lösenord?",
          content: "Ett starkt lösenord är långt och svårt att gissa. En lång fras med flera ord fungerar bra.",
          hint: "Exempel: tre ord med mellanslag eller bindestreck.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Ett lösenord per tjänst",
          content: "Använd olika lösenord för olika konton. Då blir inte allt utsatt om ett konto läcker.",
          hint: "Samma lösenord överallt är en risk.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Hjälpmedel",
          content: "Det finns lösenordshanterare som kan spara dina lösenord säkert. Du behöver bara komma ihåg ett huvudlösenord.",
          hint: "Skriv inte lösenord på lappar som andra kan se.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vilket lösenord är starkast?",
          validation: {
            correctAnswer: "En lång fras med flera ord",
          },
        },
      ],
    },
    {
      id: "phone-settings",
      title: "Inställningar på mobilen",
      description: "Justera ljud, ljus och textstorlek så att mobilen passar dig.",
      category: "basics",
      difficulty: "beginner",
      duration: 12,
      points: 120,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Ljud och ljusstyrka",
          content: "Du kan höja eller sänka ljudet och göra skärmen ljusare eller mörkare. Det gör mobilen lättare att använda.",
          hint: "Det finns reglage för både ljud och ljus i inställningarna.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Textstorlek",
          content: "Om texten är liten kan du göra den större. Det hittar du i tillgänglighetsinställningar eller skärm.",
          hint: "Prova olika storlekar tills det känns bra.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Wi-Fi och mobildata",
          content: "När du är hemma använder du ofta Wi-Fi. När du är ute används mobildata. Du kan slå på och av detta i inställningar.",
          hint: "Wi-Fi sparar mobildata.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Var ändrar du textstorlek på mobilen?",
          validation: {
            correctAnswer: "I tillgänglighetsinställningar",
          },
        },
      ],
    },
    {
      id: "photo-sharing",
      title: "Foto och delning",
      description: "Ta ett foto, hitta det i galleriet och dela det.",
      category: "communication",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Ta ett foto",
          content: "Öppna kamera-appen och ta ett foto. Du kan trycka på den stora knappen för att ta bilden.",
          hint: "Håll mobilen stilla när du tar bilden.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Hitta bilden",
          content: "Bilden hamnar i ditt galleri eller dina bilder. Där kan du se alla foton du tagit.",
          hint: "Galleriet kallas ibland \"Bilder\" eller \"Foton\".",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Dela tryggt",
          content: "Välj ett foto och tryck på dela. Du kan skicka via SMS, e-post eller en app som WhatsApp.",
          hint: "Dubbelkolla alltid mottagaren innan du skickar.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad ska du kontrollera innan du delar ett foto?",
          validation: {
            correctAnswer: "Att mottagaren är rätt person",
          },
        },
      ],
    },
    {
      id: "swish-step-by-step",
      title: "Swish steg för steg",
      description: "Gör en enkel betalning i lugn takt och kontrollera mottagaren.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Öppna Swish",
          content: "Öppna Swish-appen och välj att skicka pengar. Du behöver mottagarens telefonnummer.",
          hint: "Be gärna personen upprepa numret.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Fyll i belopp",
          content: "Skriv in beloppet och gärna en kort kommentar, till exempel \"Fika\".",
          hint: "Kontrollera att beloppet stämmer.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Kontrollera och godkänn",
          content: "Kontrollera att mottagaren är rätt. Godkänn sedan med BankID.",
          hint: "Om något ser fel ut - avbryt.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testa din kunskap",
          content: "Vad är viktigast att kontrollera innan du Swishar?",
          validation: {
            correctAnswer: "Mottagaren och beloppet",
          },
        },
      ],
    },
  ],
  en: [
    {
      id: "smartphones-apps-indepth",
      title: "Smartphones & Apps (In-Depth)",
      description: "Learn more about settings, backup, storage, and cloud services for your smartphone.",
      category: "basics",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Settings for easier use",
          content: "Discover settings that make your phone easier to use: larger text, dark mode, and simplified menus.",
          hint: "You find these under 'Accessibility' and 'Display'."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Backup and storage",
          content: "Back up your photos and contacts so nothing is lost if your phone is misplaced. Use Google Drive, iCloud, or similar services.",
          hint: "Automatic backup can be enabled in settings."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Cloud services",
          content: "With cloud services you can save and access your files from multiple devices. Examples: Google Drive, Dropbox, iCloud.",
          hint: "You can share files and photos with family and friends."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What is an advantage of using cloud services?",
          validation: {
            correctAnswer: "You can access your files from multiple devices and share them easily"
          }
        }
      ]
    },
    {
      id: "advanced-digital-security",
      title: "Advanced Digital Security (Certified Level)",
      description: "Learn to recognize scams, create secure passwords, and understand phishing and other online risks.",
      category: "security",
      difficulty: "advanced",
      duration: 30,
      points: 300,
      requiredLessons: ["scam-awareness", "password-safety"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Recognizing scams",
          content: "Learn to identify advanced scams via SMS, email, and phone calls. Watch out for unexpected links and urgent requests.",
          hint: "Always double-check the sender and ask someone if you are unsure."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Secure passwords",
          content: "Use unique and strong passwords for every service. Enable two-factor authentication where possible.",
          hint: "A password manager can help you keep track of all your passwords."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Phishing and online risks",
          content: "Phishing means scammers try to trick you into giving away information via fake websites or emails. Always check the web address and do not click suspicious links.",
          hint: "Type the web address yourself instead of clicking links in emails."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What is a sign of phishing?",
          validation: {
            correctAnswer: "Unexpected links and requests for information"
          }
        }
      ]
    },
    {
      id: "digital-photos-memories",
      title: "Digital photos & memories",
      description: "Learn to scan old photos, organize pictures, and share with family.",
      category: "basics",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Scan old photos",
          content: "You can use your phone camera or a special app to scan old paper photos. Place the photo on a table with good light and take a picture!",
          hint: "There are apps that improve quality, e.g. Google PhotoScan."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Organize your pictures",
          content: "Create albums on your phone or computer to sort pictures. You can name albums by year, people, or events.",
          hint: "It will be easier to find pictures later!"
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Share with family",
          content: "You can share pictures via email, SMS, or apps like Google Photos or WhatsApp. Choose who you want to share with and send!",
          hint: "Only share pictures you are comfortable with others seeing."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What is a good way to organize pictures?",
          validation: {
            correctAnswer: "Create albums and sort by year or people"
          }
        }
      ]
    },
    {
      id: "ai-everyday-life",
      title: "AI for Everyday Life",
      description: "What AI is, how to use it, and how to do so safely. Practical tools for daily life!",
      category: "basics",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "What is AI?",
          content: "AI means artificial intelligence. It's computer programs that can help you with many things, like writing texts, planning trips, or finding information.",
          hint: "AI is in many apps and services you already use!"
        },
        {
          id: "step-2",
          type: "instruction",
          title: "AI in daily life",
          content: "You can use AI to plan a trip, write a letter, translate languages, or get recipe ideas. Try asking an AI service for help!",
          hint: "Examples: Google, ChatGPT, or voice assistants."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Safe AI use",
          content: "Be careful not to share personal information with AI services. Don't blindly trust everything AI says – double-check important things!",
          hint: "Ask someone if you are unsure."
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What is important when using AI?",
          validation: {
            correctAnswer: "Don't share personal info and double-check important answers"
          }
        }
      ]
    },
    {
      id: "sms-basics",
      title: "Send your first SMS",
      description: "Learn to send text messages to family and friends. Simple and safe.",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Welcome!",
          content: "In this lesson you will learn to send SMS. SMS is a text message you can send to someone else's phone. It is simple and safe!",
          hint: "Press 'Next' when you are ready.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Open Messages",
          content: "Find the Messages icon on your phone. It often looks like a speech bubble. Try clicking it.",
          component: "PhoneSimulator",
          hint: "Look for a green or blue icon with a speech bubble.",
        },
        {
          id: "step-3",
          type: "interactive",
          title: "Write a message",
          content: "Now write your message. Try typing 'Hi!' in the message field.",
          component: "MessageComposer",
          validation: {
            correctAnswer: "Hi!",
          },
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What happens when you press the 'Send' button?",
          validation: {
            correctAnswer: "The message is sent to the recipient",
          },
        },
      ],
    },
    {
      id: "bankid-intro",
      title: "What is BankID?",
      description: "Understand what BankID is and why it is safe to use.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "BankID - Your digital ID",
          content: "BankID is like your driver's license or passport, but digital. You use it to prove who you are online. All banks in Sweden use BankID.",
          hint: "This is an important part of digital Sweden!",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Recognize BankID",
          content: "The BankID app has a blue logo. Can you find it on this screen?",
          component: "AppFinder",
          validation: {
            correctAnswer: "bankid",
          },
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Perfect!",
          content: "Now you recognize the BankID app! You use it to: log in to your bank, sign important documents, and identify yourself on websites. It is very secure!",
          hint: "BankID is the safest way to identify yourself digitally in Sweden.",
        },
      ],
    },
    {
      id: "scam-awareness",
      title: "Spot scams",
      description: "Learn to identify and avoid common scams via SMS and email.",
      category: "security",
      difficulty: "intermediate",
      duration: 20,
      points: 200,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Important: Stay safe",
          content: "Scammers try to trick people with fake messages. We will learn how to recognize them. Remember: Your bank NEVER calls and asks for codes or passwords!",
          hint: "This can protect you from losing money.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Review the message",
          content: "Look at this SMS. Is it real or fake? Look for warning signs.",
          component: "ScamDetector",
          hint: "Check the sender, the language, and whether they ask for personal information.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Well done!",
          content: "Now you know how to spot scams. Remember: If something feels off, it probably is. Always call your bank directly using the number on your card if you are unsure.",
          hint: "Save this number in your phone: the bank's customer service.",
        },
      ],
    },
    {
      id: "video-call",
      title: "Make a video call",
      description: "See your grandchildren and talk to them face to face. Learn to use FaceTime or WhatsApp Video.",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Video calls - See each other from a distance",
          content: "With video calls you can both see and hear the person you are talking to. Perfect for keeping up with grandchildren or chatting with friends!",
          hint: "You need a camera and internet for this.",
        },
      ],
    },
    {
      id: "email-basics",
      title: "Send and read emails",
      description: "Learn email basics: write, send, read and reply to messages.",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Welcome to email!",
          content: "Email is like a digital letter. You can send messages to anyone in the world - they arrive in seconds! Email is perfect for longer messages than SMS.",
          hint: "Email is free to use!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Your email address",
          content: "Your email address looks something like this: yourname@example.com. It's like your digital postal address. You need the recipient's email address to send to them.",
          hint: "Don't forget the '@' sign - it must always be in an email address!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Writing an email",
          content: "An email has three important parts: To (recipient's address), Subject (what it's about), and Message (your text). Just like a regular letter!",
          hint: "Always write a clear subject line so the recipient knows what the message is about.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Test your knowledge",
          content: "What's important to have when sending email?",
          validation: {
            correctAnswer: "The recipient's email address",
          },
        },
      ],
    },
    {
      id: "social-media-basics",
      title: "Social Media - The Basics",
      description: "Learn about Facebook and Instagram. Share photos, stay in touch and follow your loved ones.",
      category: "communication",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      requiredLessons: ["sms-basics", "email-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "What is social media?",
          content: "Social media like Facebook and Instagram are places where people share photos, thoughts and stay in touch. It's like a digital meeting place where you can see what family and friends are doing.",
          hint: "Millions of people use social media every day.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Facebook - Stay connected",
          content: "On Facebook you can: See photos from grandchildren, share your own pictures, write messages, and join groups with similar interests. For example, you can find groups for your hometown or hobbies!",
          hint: "You decide what you want to share and who can see it.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Instagram - Share pictures",
          content: "Instagram is mostly about pictures and videos. Perfect for seeing photos from family and friends! You can also follow your favorite hobbies like gardening, cooking or travel.",
          hint: "You don't have to post yourself - many people just like to look at others' pictures.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Social media safety",
          content: "Important to remember: Never share personal information like passwords or ID codes. Be careful what you share publicly. Only accept friend requests from people you know.",
          hint: "When in doubt, ask a relative or friend before sharing anything.",
        },
      ],
    },
    {
      id: "digital-banking",
      title: "Digital banking and Swish",
      description: "Learn to use Swish for easy payments and how to check your bank account online.",
      category: "e-services",
      difficulty: "intermediate",
      duration: 25,
      points: 225,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "Support us with Swish",
          content: "Support us with Swish!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Swish - Sweden's easiest payment",
          content: "Swish is a Swedish payment service that lets you send money directly from your mobile. Perfect for splitting a restaurant bill, giving money to grandchildren, or paying at the flea market!",
          hint: "Most Swedes have Swish - it's lightning fast!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "How Swish works",
          content: "To Swish you just need the recipient's phone number and the amount you want to send. Open the Swish app, enter the number and amount, and approve with BankID. Done in seconds!",
          hint: "The money arrives immediately - no waiting!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Check your bank account online",
          content: "With your bank's app you can: See your balance, check transactions you've made, pay bills, and transfer money between your accounts. All secure with BankID!",
          hint: "You can check your account anytime, anywhere.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Digital banking security",
          content: "Important security rules: Always use official bank apps, never share your BankID codes, always log out when done, and keep your phone updated. Your bank will NEVER ask for codes by phone or email!",
          hint: "At the slightest doubt - call your bank's customer service directly.",
        },
      ],
    },
    {
      id: "health-1177-en",
      title: "1177 & E-health - Healthcare online",
      description: "Log in, read messages, renew prescriptions, and book/change appointments on 1177 and other e-health services.",
      category: "e-services",
      difficulty: "beginner",
      duration: 20,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "What is 1177 and e-health?",
          content: "1177 is Sweden's healthcare guide. You can read advice, contact care providers, and view your healthcare matters. There are also other e-health services to manage your health online.",
          hint: "1177 is used by regions all over Sweden."
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Log in safely",
          content: "To see your personal information you log in with BankID. It is safe and quick. Only use the official 1177 website or app.",
          hint: "BankID protects your information."
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Renew prescriptions",
          content: "When logged in you can easily renew your prescriptions digitally. You get a message when your prescription is ready to pick up at the pharmacy.",
          hint: "You can renew prescriptions for yourself or children."
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Book and change appointments",
          content: "You can book, reschedule, or cancel healthcare appointments directly on your mobile. Choose a time that suits you and get confirmation by email or SMS.",
          hint: "You can always come back and see your bookings."
        },
        {
          id: "step-5",
          type: "quiz",
          title: "Check your knowledge",
          content: "What can you do on 1177 and other e-health services?",
          validation: {
            correctAnswer: "Renew prescriptions and book/change appointments online"
          }
        }
      ]
    },
    {
      id: "password-safety",
      title: "Safe passwords",
      description: "Create strong passwords and protect your accounts.",
      category: "security",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "What is a strong password?",
          content: "A strong password is long and hard to guess. A long phrase with several words works well.",
          hint: "Example: three words with spaces or hyphens.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "One password per service",
          content: "Use different passwords for different accounts. That way not everything is exposed if one account leaks.",
          hint: "The same password everywhere is a risk.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Helpful tools",
          content: "Password managers can store your passwords safely. You only need to remember one master password.",
          hint: "Do not write passwords on notes that others can see.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "Which password is strongest?",
          validation: {
            correctAnswer: "A long phrase with several words",
          },
        },
      ],
    },
    {
      id: "phone-settings",
      title: "Phone settings",
      description: "Adjust sound, brightness, and text size so the phone fits you.",
      category: "basics",
      difficulty: "beginner",
      duration: 12,
      points: 120,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Sound and brightness",
          content: "You can turn the sound up or down and make the screen brighter or darker. This makes the phone easier to use.",
          hint: "There are sliders for both sound and brightness in settings.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Text size",
          content: "If the text is small you can make it bigger. You find this in accessibility settings or display.",
          hint: "Try different sizes until it feels right.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Wi-Fi and mobile data",
          content: "At home you often use Wi-Fi. When you are out, mobile data is used. You can turn these on and off in settings.",
          hint: "Wi-Fi saves mobile data.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "Where do you change text size on your phone?",
          validation: {
            correctAnswer: "In accessibility settings",
          },
        },
      ],
    },
    {
      id: "photo-sharing",
      title: "Photos and sharing",
      description: "Take a photo, find it in the gallery, and share it.",
      category: "communication",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Take a photo",
          content: "Open the camera app and take a photo. Tap the big button to capture the image.",
          hint: "Hold the phone steady when taking the picture.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Find the photo",
          content: "The photo goes to your gallery or photos app. That is where all your pictures are stored.",
          hint: "The gallery is sometimes called \"Photos\" or \"Images\".",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Share safely",
          content: "Choose a photo and tap share. You can send it via SMS, email, or an app like WhatsApp.",
          hint: "Always double-check the recipient before sending.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What should you check before sharing a photo?",
          validation: {
            correctAnswer: "That the recipient is the right person",
          },
        },
      ],
    },
    {
      id: "swish-step-by-step",
      title: "Swish step by step",
      description: "Make a simple payment calmly and check the recipient.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Open Swish",
          content: "Open the Swish app and choose to send money. You need the recipient's phone number.",
          hint: "Ask the person to repeat the number.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Enter the amount",
          content: "Type the amount and add a short note, for example \"Fika\".",
          hint: "Check that the amount is correct.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Check and approve",
          content: "Check that the recipient is correct. Then approve with BankID.",
          hint: "If something looks wrong - cancel.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Check your knowledge",
          content: "What is the most important thing to check before you Swish?",
          validation: {
            correctAnswer: "The recipient and the amount",
          },
        },
      ],
    },
  ],
  ar: [
    {
      id: "sms-basics",
      title: "أرسل أول رسالة SMS",
      description: "تعلّم إرسال رسائل نصية إلى العائلة والأصدقاء. بسيط وآمن.",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "مرحبًا!",
          content: "في هذا الدرس ستتعلم إرسال رسائل SMS. SMS هي رسالة نصية يمكنك إرسالها إلى هاتف شخص آخر. الأمر بسيط وآمن!",
          hint: "اضغط على \"التالي\" عندما تكون جاهزًا.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "افتح الرسائل",
          content: "ابحث عن أيقونة الرسائل في هاتفك. غالبًا ما تكون على شكل فقاعة كلام. جرّب الضغط عليها.",
          component: "PhoneSimulator",
          hint: "ابحث عن أيقونة خضراء أو زرقاء مع فقاعة كلام.",
        },
        {
          id: "step-3",
          type: "interactive",
          title: "اكتب رسالة",
          content: "الآن اكتب رسالتك. جرّب كتابة \"مرحبا!\" في خانة الرسالة.",
          component: "MessageComposer",
          validation: {
            correctAnswer: "مرحبا!",
          },
        },
        {
          id: "step-4",
          type: "quiz",
          title: "تحقق من معلوماتك",
          content: "ماذا يحدث عندما تضغط على زر \"إرسال\"؟",
          validation: {
            correctAnswer: "يتم إرسال الرسالة إلى المستلم",
          },
        },
      ],
    },
    {
      id: "bankid-intro",
      title: "ما هو BankID؟",
      description: "افهم ما هو BankID ولماذا هو آمن الاستخدام.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "BankID - هويتك الرقمية",
          content: "BankID مثل رخصة القيادة أو جواز السفر، لكن رقمي. تستخدمه لإثبات هويتك على الإنترنت. جميع البنوك في السويد تستخدم BankID.",
          hint: "هذا جزء مهم من السويد الرقمية!",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "التعرف على BankID",
          content: "تطبيق BankID لديه شعار أزرق. هل يمكنك العثور عليه في هذه الشاشة؟",
          component: "AppFinder",
          validation: {
            correctAnswer: "bankid",
          },
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ممتاز!",
          content: "الآن تعرف تطبيق BankID! تستخدمه لتسجيل الدخول إلى بنكك، وتوقيع مستندات مهمة، والتعريف بنفسك في المواقع. إنه آمن جدًا!",
          hint: "BankID هو أكثر الطرق أمانًا للتعريف بنفسك رقميًا في السويد.",
        },
      ],
    },
    {
      id: "scam-awareness",
      title: "التعرف على الاحتيال",
      description: "تعلّم التعرف على عمليات الاحتيال الشائعة عبر SMS والبريد الإلكتروني.",
      category: "security",
      difficulty: "intermediate",
      duration: 20,
      points: 200,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "مهم: ابقَ آمنًا",
          content: "المحتالون يحاولون خداع الناس برسائل مزيفة. سنتعلم كيف نتعرف عليها. تذكر: بنكك لا يتصل أبدًا ويطلب رموزًا أو كلمات مرور!",
          hint: "هذا يمكن أن يحميك من خسارة المال.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "راجع الرسالة",
          content: "انظر إلى رسالة SMS هذه. هل هي حقيقية أم مزيفة؟ ابحث عن علامات التحذير.",
          component: "ScamDetector",
          hint: "تحقق من المرسل واللغة وما إذا كانوا يطلبون معلومات شخصية.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "أحسنت!",
          content: "الآن تعرف كيفية اكتشاف الاحتيال. تذكّر: إذا بدا الأمر غريبًا، فغالبًا هو كذلك. اتصل دائمًا ببنكك مباشرة على الرقم الموجود في بطاقتك إذا لم تكن متأكدًا.",
          hint: "احفظ هذا الرقم في هاتفك: خدمة عملاء البنك.",
        },
      ],
    },
    {
      id: "video-call",
      title: "إجراء مكالمة فيديو",
      description: "رأِ أحفادك وتحدث معهم وجهًا لوجه. تعلّم استخدام FaceTime أو واتساب فيديو.",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "مكالمات الفيديو - رؤية بعضكم عن بُعد",
          content: "مع مكالمات الفيديو يمكنك رؤية وسماع الشخص الذي تتحدث معه. مثالي للبقاء على تواصل مع الأحفاد أو التحدث مع الأصدقاء!",
          hint: "تحتاج إلى كاميرا وإنترنت لهذا.",
        },
      ],
    },
    {
      id: "email-basics",
      title: "إرسال وقراءة البريد الإلكتروني",
      description: "تعلّم أساسيات البريد الإلكتروني: الكتابة والإرسال والقراءة والرد على الرسائل.",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "مرحبًا بك في البريد الإلكتروني!",
          content: "البريد الإلكتروني هو مثل رسالة رقمية. يمكنك إرسال رسائل إلى أي شخص في العالم - تصل في ثوانٍ! البريد الإلكتروني مثالي للرسائل الأطول من الرسائل النصية.",
          hint: "البريد الإلكتروني مجاني للاستخدام!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "عنوان بريدك الإلكتروني",
          content: "يبدو عنوان بريدك الإلكتروني كهذا: yourname@example.com. إنه مثل عنوانك البريدي الرقمي. تحتاج إلى عنوان البريد الإلكتروني للمستلم لإرسال رسالة إليه.",
          hint: "لا تنسَ علامة '@' - يجب أن تكون دائمًا في عنوان البريد الإلكتروني!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "كتابة بريد إلكتروني",
          content: "يحتوي البريد الإلكتروني على ثلاثة أجزاء مهمة: إلى (عنوان المستلم)، الموضوع (ما هو الموضوع)، والرسالة (نصك). تمامًا مثل الرسالة العادية!",
          hint: "اكتب دائمًا سطر موضوع واضح حتى يعرف المستلم موضوع الرسالة.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معرفتك",
          content: "ما هو المهم أن يكون لديك عند إرسال بريد إلكتروني؟",
          validation: {
            correctAnswer: "عنوان البريد الإلكتروني للمستلم",
          },
        },
      ],
    },
    {
      id: "social-media-basics",
      title: "وسائل التواصل الاجتماعي - الأساسيات",
      description: "تعلّم عن فيسبوك وإنستغرام. شارك الصور، ابقَ على اتصال واتبع أحباءك.",
      category: "communication",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      requiredLessons: ["sms-basics", "email-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ما هي وسائل التواصل الاجتماعي؟",
          content: "وسائل التواصل الاجتماعي مثل فيسبوك وإنستغرام هي أماكن يشارك فيها الناس الصور والأفكار ويبقون على اتصال. إنها مثل مكان لقاء رقمي حيث يمكنك رؤية ما تفعله العائلة والأصدقاء.",
          hint: "الملايين من الناس يستخدمون وسائل التواصل الاجتماعي كل يوم.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "فيسبوك - ابقَ على اتصال",
          content: "على فيسبوك يمكنك: رؤية صور الأحفاد، مشاركة صورك الخاصة، كتابة رسائل، والانضمام إلى مجموعات ذات اهتمامات مشتركة. على سبيل المثال، يمكنك العثور على مجموعات لمسقط رأسك أو هواياتك!",
          hint: "أنت تقرر ما تريد مشاركته ومن يمكنه رؤيته.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "إنستغرام - شارك الصور",
          content: "إنستغرام يتعلق في الغالب بالصور ومقاطع الفيديو. مثالي لرؤية صور من العائلة والأصدقاء! يمكنك أيضًا متابعة هواياتك المفضلة مثل البستنة أو الطبخ أو السفر.",
          hint: "لا يتعين عليك النشر بنفسك - كثير من الناس يحبون فقط النظر إلى صور الآخرين.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "الأمان على وسائل التواصل الاجتماعي",
          content: "من المهم أن تتذكر: لا تشارك أبدًا المعلومات الشخصية مثل كلمات المرور أو رموز الهوية. كن حذرًا بشأن ما تشاركه علنًا. اقبل فقط طلبات الصداقة من الأشخاص الذين تعرفهم.",
          hint: "عند الشك، اسأل قريبًا أو صديقًا قبل مشاركة أي شيء.",
        },
      ],
    },
    {
      id: "digital-banking",
      title: "الخدمات المصرفية الرقمية و Swish",
      description: "تعلّم استخدام Swish للمدفوعات السهلة وكيفية التحقق من حسابك المصرفي عبر الإنترنت.",
      category: "e-services",
      difficulty: "intermediate",
      duration: 25,
      points: 225,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "swish-support-popup",
          type: "instruction",
          title: "ادعمنا عبر Swish",
          content: "ادعمنا عبر Swish!",
          component: "SupportPopup"
        },
        {
          id: "step-1",
          type: "instruction",
          title: "Swish - أسهل دفع في السويد",
          content: "Swish هي خدمة دفع سويدية تتيح لك إرسال الأموال مباشرةً من هاتفك المحمول. مثالي لتقسيم فاتورة مطعم، أو إعطاء المال للأحفاد، أو الدفع في سوق السلع المستعملة!",
          hint: "معظم السويديين لديهم Swish - إنه سريع جدًا!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "كيف يعمل Swish",
          content: "للاستخدام Swish تحتاج فقط رقم هاتف المستلم والمبلغ الذي تريد إرساله. افتح تطبيق Swish، أدخل الرقم والمبلغ، ووافق باستخدام BankID. تم في ثوانٍ!",
          hint: "تصل الأموال على الفور - لا انتظار!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "تحقق من حسابك المصرفي عبر الإنترنت",
          content: "مع تطبيق البنك الخاص بك يمكنك: رؤية رصيدك، التحقق من المعاملات التي أجريتها، دفع الفواتير، وتحويل الأموال بين حساباتك. كل ذلك آمن مع BankID!",
          hint: "يمكنك التحقق من حسابك في أي وقت، في أي مكان.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "أمان الخدمات المصرفية الرقمية",
          content: "قواعد الأمان المهمة: استخدم دائمًا تطبيقات البنوك الرسمية، لا تشارك أبدًا رموز BankID الخاصة بك، اخرج دائمًا من الحساب عند الانتهاء، وحافظ على تحديث هاتفك. لن يطلب البنك أبدًا رموزًا عبر الهاتف أو البريد الإلكتروني!",
          hint: "عند أدنى شك - اتصل بخدمة عملاء البنك مباشرةً.",
        },
      ],
    },
    {
      id: "health-1177-ar",
      title: "1177 - الرعاية الصحية عبر الإنترنت",
      description: "سجّل الدخول، اقرأ الرسائل، واحجز المواعيد في 1177.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ما هو 1177؟",
          content: "1177 هو دليل الرعاية الصحية في السويد. يمكنك قراءة النصائح والتواصل مع الرعاية الصحية ورؤية أمورك الطبية.",
          hint: "يُستخدم 1177 في جميع المناطق في السويد.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "سجّل الدخول بأمان",
          content: "لرؤية معلوماتك الشخصية تسجّل الدخول عبر BankID. إنه آمن وسريع.",
          hint: "استخدم فقط موقع 1177 الرسمي أو التطبيق الرسمي.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "الرسائل والحجوزات",
          content: "بعد تسجيل الدخول يمكنك قراءة الرسائل وتجديد الوصفات وحجز المواعيد أو إلغاؤها.",
          hint: "يمكنك دائمًا الرجوع وقراءة الرسائل مرة أخرى.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معلوماتك",
          content: "ماذا تحتاج لتسجيل الدخول إلى 1177؟",
          validation: {
            correctAnswer: "BankID",
          },
        },
      ],
    },
    {
      id: "password-safety",
      title: "كلمات مرور آمنة",
      description: "أنشئ كلمات مرور قوية واحمِ حساباتك.",
      category: "security",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ما هي كلمة المرور القوية؟",
          content: "كلمة المرور القوية طويلة وصعبة التخمين. عبارة طويلة من عدة كلمات تعمل جيدًا.",
          hint: "مثال: ثلاث كلمات مع مسافات أو شرطات.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "كلمة مرور لكل خدمة",
          content: "استخدم كلمات مرور مختلفة لكل حساب. هكذا لا تتعرض كل حساباتك للخطر إذا تسرب أحدها.",
          hint: "استخدام نفس كلمة المرور في كل مكان خطر.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "أدوات مساعدة",
          content: "مديرو كلمات المرور يمكنهم حفظ كلمات المرور بأمان. تحتاج فقط إلى تذكر كلمة مرور رئيسية واحدة.",
          hint: "لا تكتب كلمات المرور على أوراق يمكن للآخرين رؤيتها.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معلوماتك",
          content: "أي كلمة مرور هي الأقوى؟",
          validation: {
            correctAnswer: "عبارة طويلة من عدة كلمات",
          },
        },
      ],
    },
    {
      id: "phone-settings",
      title: "إعدادات الهاتف",
      description: "اضبط الصوت والسطوع وحجم النص ليصبح الهاتف مناسبًا لك.",
      category: "basics",
      difficulty: "beginner",
      duration: 12,
      points: 120,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "الصوت والسطوع",
          content: "يمكنك رفع أو خفض الصوت وجعل الشاشة أكثر سطوعًا أو أكثر ظلمة. هذا يجعل الهاتف أسهل في الاستخدام.",
          hint: "هناك أشرطة تحكم للصوت والسطوع في الإعدادات.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "حجم النص",
          content: "إذا كان النص صغيرًا يمكنك تكبيره. ستجد ذلك في إعدادات إمكانية الوصول أو العرض.",
          hint: "جرّب أحجامًا مختلفة حتى تشعر بالراحة.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Wi-Fi والبيانات",
          content: "في المنزل غالبًا تستخدم Wi-Fi. عندما تكون خارجًا تُستخدم البيانات المحمولة. يمكنك تشغيلها وإيقافها من الإعدادات.",
          hint: "Wi-Fi يوفر البيانات المحمولة.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معلوماتك",
          content: "أين تغيّر حجم النص على الهاتف؟",
          validation: {
            correctAnswer: "في إعدادات إمكانية الوصول",
          },
        },
      ],
    },
    {
      id: "photo-sharing",
      title: "الصور والمشاركة",
      description: "التقط صورة، اعثر عليها في المعرض، وشاركها.",
      category: "communication",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "التقط صورة",
          content: "افتح تطبيق الكاميرا والتقط صورة. اضغط على الزر الكبير لالتقاط الصورة.",
          hint: "امسك الهاتف بثبات عند التصوير.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "اعثر على الصورة",
          content: "تذهب الصورة إلى المعرض أو تطبيق الصور. هناك ستجد جميع صورك.",
          hint: "قد يسمى المعرض \"الصور\" أو \"الصور الفوتوغرافية\".",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "شارك بأمان",
          content: "اختر صورة واضغط مشاركة. يمكنك إرسالها عبر SMS أو البريد الإلكتروني أو تطبيق مثل WhatsApp.",
          hint: "تحقق دائمًا من المستلم قبل الإرسال.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معلوماتك",
          content: "ما الذي يجب أن تتحقق منه قبل مشاركة صورة؟",
          validation: {
            correctAnswer: "أن المستلم هو الشخص الصحيح",
          },
        },
      ],
    },
    {
      id: "swish-step-by-step",
      title: "Swish خطوة بخطوة",
      description: "قم بدفع بسيط بهدوء وتحقق من المستلم.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "افتح Swish",
          content: "افتح تطبيق Swish واختر إرسال المال. تحتاج إلى رقم هاتف المستلم.",
          hint: "اطلب من الشخص إعادة الرقم.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "أدخل المبلغ",
          content: "اكتب المبلغ وأضف ملاحظة قصيرة، مثل \"Fika\".",
          hint: "تأكد من أن المبلغ صحيح.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "تحقق ووافق",
          content: "تأكد أن المستلم صحيح. ثم وافق باستخدام BankID.",
          hint: "إذا بدا شيء غير صحيح - ألغِ العملية.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "اختبر معلوماتك",
          content: "ما أهم شيء يجب التحقق منه قبل استخدام Swish؟",
          validation: {
            correctAnswer: "المستلم والمبلغ",
          },
        },
      ],
    },
  ],
  ti: [
    {
      id: "sms-basics",
      title: "መጀመርያ SMS ልከት",
      description: "ናብ ቤተሰብን ጓደኛትን መልእኽቲ ልከት ተማሃር። ቀሊል እና ደሓን።",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "እንቋዕ በደሓን መጻእካ!",
          content: "ኣብዚ ትምህርቲ SMS ልከት ክትማሃር ኢኻ። SMS ናብ ሰብ ስልኪ ልከት ዝኽእል መልእኽቲ እዩ። ቀሊል እና ደሓን!",
          hint: "\"ቀጻሊ\" ትጽብጽብ እንተዘይትሃይስ ንቐጽል።",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "መልእኽታት ክፈት",
          content: "ኣብ ስልክኻ ናይ መልእኽቲ ኣይኮን ርኸብ። ብዙሕ ጊዜ ከም ብልሓት ተወላጅ ምስ ሓረግ ቃል ይትርአ። ፈትን እና ጸቅጥ።",
          component: "PhoneSimulator",
          hint: "ሰማያዊ ወይ ሓምላይ ምልክት ምስ ሓረግ ቃል ርኸብ።",
        },
        {
          id: "step-3",
          type: "interactive",
          title: "መልእኽቲ ጻፍ",
          content: "ሕጂ መልእኽትካ ጻፍ። \"ሰላም!\" ጻፍ ብምስና ፈትን።",
          component: "MessageComposer",
          validation: {
            correctAnswer: "ሰላም!",
          },
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍልጠትካ ርእ",
          content: "\"ልክእ\" ክትጽብጽብ እንታይ ይኸውን?",
          validation: {
            correctAnswer: "መልእኽቲ ናብ ተቐባሊ ይልከት",
          },
        },
      ],
    },
    {
      id: "bankid-intro",
      title: "BankID እንታይ እዩ?",
      description: "BankID እንታይ እዩ እና ስለምንታይ ደሓን እዩ ክትጠቀመሉ ተማሃር።",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "BankID - ዲጂታል መለለዪኻ",
          content: "BankID ከም ናይ ንቕናቕ ፍቓድ ወይ ፓስፖርት እዩ ግን ዲጂታል። ኣብ መስመር ኣንታ መን እዩ ንምርካብ ትጥቀም። ኩሉ ባንካት ኣብ ስዊድን BankID ይጥቀሙ።",
          hint: "ይህ ኣገልግሎት ኣብ ዲጂታል ስዊድን ኣስፈላጊ እዩ!",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "BankID ምርካብ",
          content: "BankID መተግበሪ ሰማያዊ ምልክት ኣለዎ። ኣብዚ ስክሪን ክትረኽቦ ትኽእል?",
          component: "AppFinder",
          validation: {
            correctAnswer: "bankid",
          },
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ፍጹም!",
          content: "ሕጂ BankID መተግበሪ ትፈልጥ! ንባንክካ ምግባር፣ ኣስፈላጊ ሰነዳት ምፅዳቕ፣ ኣብ መርከብታት ንምልላይ ትጥቀምሉ። ደሓን እዩ!",
          hint: "BankID ኣብ ስዊድን ዲጂታል መለለዪ ምርጫ እዩ።",
        },
      ],
    },
    {
      id: "scam-awareness",
      title: "ምትትላል ምርካብ",
      description: "ብSMS ወይ ኢ-መይል ዝመጹ ምትትላላት ክትፈልጥ ተማሃር።",
      category: "security",
      difficulty: "intermediate",
      duration: 20,
      points: 200,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ኣስፈላጊ: ደሓን ቆይታ",
          content: "ተታላሊዎም ሰባት ብሓሳብ የለዎ መልእኽቲ ንምታልል ይፈትኑ። ንእኛ እንታይ እዩ ንምርካብ ክንማሃር ኢና። ዝኽር: ባንካት መቼም ኮድ ወይ መክፈቲ ቃል ኣይሓትቱን!",
          hint: "እዚ ንገንዘብ ከም ትከላከል ይሕግዝ።",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "መልእኽቲ ተመልከት",
          content: "እዚ SMS ተመልከት። ሓቀኛ እዩ ወይ ሓሳብ የለዎ? ምልክታት ሓበሬታ ተመልከት።",
          component: "ScamDetector",
          hint: "ኣብ መልእኽቲ መልእኽቲ ላእኪ፣ ቋንቋ፣ ግላዊ ሓበሬታ ይሓትት እንተወይል ርአ።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ጽቡቕ ስራሕ!",
          content: "ሕጂ ምትትላላት ክትርክብ ትኽእል። ዝኽር: ነገር እንተ ተሳተፈ ምስጢሩ እዩ። እንተ ኣጠራጣር ንባንክካ ብቀጥታ ኣብ ካርድካ ዘሎ ቁጽሪ ደውል።",
          hint: "እዚ ቁጽሪ ኣብ ስልክኻ ኣክብ። ናይ ባንክ ኣገልግሎት ደንበኛታት።",
        },
      ],
    },
    {
      id: "video-call",
      title: "ቪዲዮ ጥሪ ግበር",
      description: "ሕጂን ርእን እና ከብዲ ተዛረብ። FaceTime ወይ WhatsApp Video ምጥቃም ተማሃር።",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ቪዲዮ ጥሪ - እርስካ ብሩቅ ርእ",
          content: "ብቪዲዮ ጥሪ ሰብ ምርእን ምስማዕን ትኽእል። ሕጂን ምስ ሓዋርያት ወይ ምስ ዓርከት ለመወዳእ ይመች!",
          hint: "ካሜራን ኢንተርኔትን ኣስፈላጊ እዮም።",
        },
      ],
    },
    {
      id: "email-basics",
      title: "ኢሜል ምልኣክን ምንባብን",
      description: "ኢሜል መሰረታት ተማሃር፦ ምጽሓፍ፣ ምልኣክ፣ ምንባብን ምምላስን መልእኽቲ።",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ናብ ኢሜል እንቋዕ ደሓን መጻእካ!",
          content: "ኢሜል ከም ዲጂታል ደብዳበ እዩ። ንዝኾነ ሰብ ኣብ ዓለም መልእኽቲ ክትልእክ ትኽእል - ብሰከንድ ይበጽሕ! ኢሜል ካብ SMS ንነዊሕ መልእኽቲ ዝበለጸ እዩ።",
          hint: "ኢሜል ብነጻ እዩ!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "ኢሜል አድራሻኻ",
          content: "ኢሜል አድራሻኻ ከምዚ ይመስል፦ yourname@example.com። ከም ዲጂታል ፖስታ አድራሻኻ እዩ። ንሱ ንምልኣክ ናይ መቀበሊ ኢሜል አድራሻ የድልየካ።",
          hint: "ናይ '@' ምልክት ኣይትረስዕ - ኣብ ኢሜል አድራሻ ኩሉ ግዜ ክህሉ አለዎ!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ኢሜል ምጽሓፍ",
          content: "ኢሜል ሰለስተ ኣገደስቲ ክፋላት አለዎ፦ ናብ (መቀበሊ አድራሻ)፣ ርእሲ (እንታይ እዩ)፣ እና መልእኽቲ (ጽሑፍካ)። ከም ንቡር ደብዳበ!",
          hint: "ኩሉ ግዜ ንጹር ርእሲ ጽሓፍ እታ መቀበሊ ርእሲ መልእኽቲ ንኸእምን።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍልጠትካ ፈትሽ",
          content: "ኢሜል ከለኣኽካ እንታይ ከም ዝኾነ ኣገዳሲ እዩ?",
          validation: {
            correctAnswer: "ናይ መቀበሊ ኢሜል አድራሻ",
          },
        },
      ],
    },
    {
      id: "social-media-basics",
      title: "ሶሻል ሚዲያ - መሰረታት",
      description: "ብዛዕባ ፌስቡክን ኢንስታግራምን ተማሃር። ፎቶታት ኣካፍል፣ ብምትእስሳር ተዋደብን ፍቁራትካ ተከተል።",
      category: "communication",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      requiredLessons: ["sms-basics", "email-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ሶሻል ሚዲያ እንታይ እዩ?",
          content: "ሶሻል ሚዲያ ከም ፌስቡክን ኢንስታግራምን ሰባት ፎቶታት፣ ሓሳባት ዝካፋፈሉን ብምትእስሳር ዝወድኡን ቦታታት እዮም። ከም ዲጂታል ምርኻብ ቦታ እዩ ናይ ስድራቤትን ዓርከትን እንታይ ይገብሩ ክትርእይ ትኽእል።",
          hint: "ሚልዮናት ሰባት ሶሻል ሚዲያ ኩሉ መዓልቲ ይጥቀሙ።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "ፌስቡክ - ብምትእስሳር ተዋደብ",
          content: "ኣብ ፌስቡክ ትኽእል፦ ናይ ሕጂን ፎቶታት ምርኣይ፣ ናይ ገዛእ ርእስካ ስእልታት ምካፍል፣ መልእኽቲ ምጽሓፍ፣ እና ተመሳሳሊ ድሌታት ዘለዎም ጉጅለታት ምእታው። ንኣብነት ናይ መበቆልካ ከተማ ወይ ናይ ትምህርቲ ጉጅለታት ክትረኽብ ትኽእል!",
          hint: "ንሱ እንታይ ክትካፈልን መን ክርእዮን ትወስን።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ኢንስታግራም - ስእልታት ኣካፍል",
          content: "ኢንስታግራም መብዛሕትኡ ግዜ ብስእልታትን ቪዲዮታትን እዩ። ካብ ስድራቤትን ዓርከትን ስእልታት ንምርኣይ ዝበለጸ! ከምኡ'ውን ፍቁር ትምህርትኻ ከም ገባራናን መግብን ጉዕዞን ክትከተል ትኽእል።",
          hint: "ንስኻ ምልኣክ ኣየድልየካን - ብዙሓት ሰባት ናይ ካልኦት ስእልታት ምርኣይ ጥራይ ይፈትዉ።",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "ሶሻል ሚዲያ ድሕንነት",
          content: "ክዝከር ኣገዳሲ፦ ናይ ውልቃዊ ሓበሬታ ከም ፓስወርድ ወይ ID ኮድ ሓበሬታ መጠን ኣይትካፈል። እንታይ በይንባዕ ከተካፍል ቆሩብ ተግባራዊ ግበር። ናይ ፍቁራትካ ሓሳባት ምዝገባ ጥራይ ተቀበል።",
          hint: "ክትጠራጠር ከለኻ፣ ገለ ኸተካፍል ቅድሚት ስድራቤት ወይ ዓርኪ ሕተት።",
        },
      ],
    },
    {
      id: "digital-banking",
      title: "ዲጂታል ባንክን Swish",
      description: "Swish ንቀሊል ክፍሊት ምጥቃምን ብኢንተርኔት ናይ ባንክ ሕሳብካ ምፍታሽን ተማሃር።",
      category: "e-services",
      difficulty: "intermediate",
      duration: 25,
      points: 225,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Swish - ናይ ስዊድን ቀሊል ክፍሊት",
          content: "Swish ስዊድናዊ ናይ ክፍሊት ኣገልግሎት ካብ ሞባይልካ ቀጥታ ገንዘብ ክትለኣኽ ዘኽእለካ እዩ። ናይ ሬስቶራንት ሕሳብ ምክፋፍል፣ ንሕጂን ገንዘብ ምሃብ፣ ወይ ኣብ ሱቕ ምክፋል ዝበለጸ!",
          hint: "መብዛሕትኦም ስዊድናውያን Swish አለዎም - በርቂ እዩ!",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Swish ከመይ ይሰርሕ",
          content: "ንSwish ምጥቃም ጥራይ ናይ መቀበሊ ቴሌፎን ቁጽርን ክትልእኾ እትደሊ መጠንን የድልየካ። Swish መተግበሪ ከፍት፣ ቁጽርን መጠንን ኣእቱ፣ እና ብBankID ተቀበል። ብሰከንድ ይወድእ!",
          hint: "ገንዘብ ብቕጽበት ይበጽሕ - ምጽባይ የለን!",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ናይ ባንክ ሕሳብካ ብኢንተርኔት ፈትሽ",
          content: "ብናይ ባንክካ መተግበሪ ትኽእል፦ ሚዛንካ ምርኣይ፣ ዝገበርካዮም ትራንዛክሽን ምፍታሽ፣ ሕሳባት ምክፋል፣ እና ገንዘብ ኣብ መንጎ ሕሳባትካ ምሽጋር። ኩሉ ብBankID ድሕነት!",
          hint: "ሕሳብካ ኣብ ዝኾነ ግዜ፣ ኣብ ዝኾነ ቦታ ክትፈትሽ ትኽእል።",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "ዲጂታል ባንክ ድሕንነት",
          content: "ኣገደስቲ ናይ ድሕንነት ሕግታት፦ ኩሉ ግዜ ወግዓዊ ባንክ መተግበርታት ተጠቐም፣ BankID ኮድካ መጠን ኣይትካፈል፣ ክትውድእ ከለኻ ኩሉ ግዜ ውጻእ፣ እና ቴሌፎንካ ዘመናዊ ግበር። ባንክካ መጠን ብቴሌፎን ወይ ኢሜል መጠን ኮድ ፈጺሙ ኣይሓቱን!",
          hint: "ብትሑት ጥርጣረ - ናይ ባንክካ ኣገልግሎት ዓማዊል ቀጥታ ደውል።",
        },
      ],
    },
    {
      id: "health-1177-ti",
      title: "1177 - ናይ ጥዕና ግልጋሎት ብኢንተርኔት",
      description: "ብ1177 ግባ፣ መልእኽቲ ኣንብብ፣ እና ቀጠሮ ምድላይ ተማሃር።",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "1177 እንታይ እዩ?",
          content: "1177 ናይ ስዊድን መምርሒ ጥዕና እዩ። ምኽሪ ኣንብብ፣ ሕክምና ተወሰን፣ እና ናይ ጥዕና ጉዳይካ ኣውጽእ።",
          hint: "1177 ብኹሎም ክልልታት ስዊድን ይጠቀሙ።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "ብደሓን ግባ",
          content: "ግልል መረጃኻ ንምርኣይ BankID ትጥቀም። ደሓን እና ቀሊል እዩ።",
          hint: "መሬት 1177 ወይ ውግዓዊ መተግበሪ ጥራይ ተጠቐም።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "መልእኽታትን ቀጠሮታትን",
          content: "ብዓይነት ግባን መልእኽቲ ኣንብብ፣ መድሃኒት ታዕይን እና ቀጠሮ ትምዝገብ ወይ ትቐልል።",
          hint: "መልእኽታት ዳግማይ ክትንበብ ትኽእል።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍትሑ ኣረጋግጽ",
          content: "ን1177 ክትኣቱ እንታይ የድልየካ?",
          validation: {
            correctAnswer: "BankID",
          },
        },
      ],
    },
    {
      id: "password-safety",
      title: "ደሓን ፓስወርድ",
      description: "ጽኑዕ ፓስወርድ ምፍጣርን ሕሳባትካ ምሕላውን ተማሃር።",
      category: "security",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ጽኑዕ ፓስወርድ እንታይ እዩ?",
          content: "ጽኑዕ ፓስወርድ ርግጽን ከባድን እዩ። ረጅም ሓረግ ምስ ብዙሕ ቃላት ጥቕም።",
          hint: "ኣብነት፦ ሶስተ ቃላት ምስ ቦታ ወይ ምስ ሓርግ ምልክት።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "ንእያቱ ሓደ ፓስወርድ",
          content: "ንኩሉ ሕሳብ ዝለዓለ ፓስወርድ ተጠቐም። ኣንዱ ሕሳብ እንተሓለፈ ካልኦት ኣይጎዱን።",
          hint: "ሓደ ፓስወርድ ንኩሉ ቦታ ኣይጥቀምን።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ሓጋዚ መሳርሒ",
          content: "ፓስወርድ ማናጀር ፓስወርድታትካ ብደሓን ይሓስቦም። ንኣንድ ዋና ፓስወርድ ጥራይ ትዝከር።",
          hint: "ፓስወርድ ኣብ ወረቐት ኣይትጻፍ።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍትሑ ኣረጋግጽ",
          content: "እቲ ዝበለጸ ፓስወርድ እንታይ እዩ?",
          validation: {
            correctAnswer: "ረጅም ሓረግ ምስ ብዙሕ ቃላት",
          },
        },
      ],
    },
    {
      id: "phone-settings",
      title: "ናይ ሞባይል ስእሊ ስነስርዓት",
      description: "ድምጺ፣ ብርሃንን መጠን ፊደልን ከም ዝሓሸ ኣቐጽል።",
      category: "basics",
      difficulty: "beginner",
      duration: 12,
      points: 120,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ድምጺን ብርሃንን",
          content: "ድምጺ ኣድንቕ ወይ ኣቕል ትኽእል። ስክሪን ከም ዝብርሃን ወይ ዝጸልም ትግበር።",
          hint: "ኣብ ስነስርዓት ናይ ድምጺን ብርሃንን ስሌይደር ኣሎ።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "መጠን ፊደል",
          content: "እንተ ንእሽቶ እዩ ትኽእል ኣብ ስርርዓት ምቕያር። ኣብ ተደሓነ ምድላይ ወይ ስክሪን ትረኽቦ።",
          hint: "ተመጣጣኒ መጠን ክትርክብ ተፈትን።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Wi-Fi እና ሞባይል ዳታ",
          content: "ኣብ ቤት ዝተለመደ Wi-Fi ትጥቀም። ከተማ እንተወጻእካ ሞባይል ዳታ ይጥቀም። እዚ ኣብ ስነስርዓት ትኽእል ታሕቲ ወይ ኣልዒል።",
          hint: "Wi-Fi ሞባይል ዳታ ይቆጽብ።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍትሑ ኣረጋግጽ",
          content: "መጠን ፊደል ኣበይ ትቕይር?",
          validation: {
            correctAnswer: "ኣብ ተደሓነ ስነስርዓት",
          },
        },
      ],
    },
    {
      id: "photo-sharing",
      title: "ፎቶን ምካፍልን",
      description: "ፎቶ ኣንሳ፣ ኣብ ጋለሪ ርኸብ፣ እና ኣካፍል።",
      category: "communication",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "ፎቶ ኣንሳ",
          content: "ናይ ካሜራ መተግበሪ ክፈት እና ፎቶ ኣንሳ። እቲ ትልቕ ቁልፊ ጸቕጥ።",
          hint: "ፎቶ እንተትኣንስ ስልኪ ድንጉጉ።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "ፎቶ ርኸብ",
          content: "ፎቶ ኣብ ጋለሪ ወይ ፎቶታት መተግበሪ ይኣትው። ኣብዚ ኩሉ ፎቶታትካ ኣሎ።",
          hint: "ጋለሪ እንከለ እቲ ስም ፎቶታት ክኸውን ይኽእል።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ብደሓን ኣካፍል",
          content: "ፎቶ ምርጫ ኣድርግ እና ምካፍል ጸቕጥ። ብSMS፣ ኢሜል ወይ WhatsApp ክትልእኽ ትኽእል።",
          hint: "ቀበሊ ትኽክል እዩ ወይ እንተዘይኮነ ርግጸ።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍትሑ ኣረጋግጽ",
          content: "ፎቶ ክትካፍል ቅድሚ እንታይ ትረጋገጽ?",
          validation: {
            correctAnswer: "እቲ ቀበሊ ትኽክል ምዃኑ",
          },
        },
      ],
    },
    {
      id: "swish-step-by-step",
      title: "Swish ቀሊል እና ብደረጃ",
      description: "ቀሊል ክፍሊት ኣድርግ እና ቀበሊ ኣረጋግጽ።",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Swish ክፈት",
          content: "Swish መተግበሪ ክፈት እና ገንዘብ ልከት ምረጽ። ናይ ቀበሊ ቁጽር የድልየካ።",
          hint: "ቀበሊ ቁጽር ዳግማይ ክትረጋግጽ ጠይቕ።",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "መጠን ኣእት",
          content: "መጠን ኣእት እና ንእሽቶ መልእኽቲ ሓርዝ፣ ለምሳሌ \"Fika\"።",
          hint: "መጠን ትኽክል ምዃኑ ኣረጋግጽ።",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "ኣረጋግጽ እና ኣፍልጥ",
          content: "ቀበሊ ትኽክል ምዃኑ ኣረጋግጽ። ሽዑ ብBankID ኣፍልጥ።",
          hint: "ግን እቲ ነገር ስንተ ከም ዘይትክክል እንተመስሎ - ተወይድ።",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "ፍትሑ ኣረጋግጽ",
          content: "Swish ቅድሚ ክትጥቀም እቲ ኣብራሪ እንታይ እዩ?",
          validation: {
            correctAnswer: "ቀበሊ እና መጠን",
          },
        },
      ],
    },
  ],
  fr: [
    {
      id: "sms-basics",
      title: "Envoyez votre premier SMS",
      description: "Apprenez à envoyer des SMS à votre famille et à vos amis. Simple et sûr.",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Bienvenue !",
          content: "Dans cette leçon, vous apprendrez à envoyer des SMS. Un SMS est un message texte que vous pouvez envoyer à un autre téléphone. C'est simple et sûr !",
          hint: "Appuyez sur \"Suivant\" quand vous êtes prêt(e).",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Ouvrir Messages",
          content: "Trouvez l'icône Messages sur votre téléphone. Elle ressemble souvent à une bulle. Essayez de cliquer dessus.",
          component: "PhoneSimulator",
          hint: "Cherchez une icône verte ou bleue avec une bulle.",
        },
        {
          id: "step-3",
          type: "interactive",
          title: "Écrire un message",
          content: "Maintenant, écrivez votre message. Essayez d'écrire \"Salut!\" dans le champ.",
          component: "MessageComposer",
          validation: {
            correctAnswer: "Salut!",
          },
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "Que se passe-t-il quand vous appuyez sur le bouton \"Envoyer\" ?",
          validation: {
            correctAnswer: "Le message est envoyé au destinataire",
          },
        },
      ],
    },
    {
      id: "bankid-intro",
      title: "Qu'est-ce que BankID ?",
      description: "Comprenez ce qu'est BankID et pourquoi il est sûr d'utiliser.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "BankID - Votre identité numérique",
          content: "BankID est comme votre permis de conduire ou passeport, mais numérique. Vous l'utilisez pour prouver qui vous êtes en ligne. Toutes les banques en Suède utilisent BankID.",
          hint: "C'est une partie importante de la Suède numérique !",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Reconnaître BankID",
          content: "L'app BankID a un logo bleu. Pouvez-vous la trouver à l'écran ?",
          component: "AppFinder",
          validation: {
            correctAnswer: "bankid",
          },
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Parfait !",
          content: "Vous reconnaissez maintenant l'app BankID ! Vous l'utilisez pour : vous connecter à votre banque, signer des documents importants et vous identifier sur des sites. C'est très sûr !",
          hint: "BankID est la façon la plus sûre de s'identifier numériquement en Suède.",
        },
      ],
    },
    {
      id: "scam-awareness",
      title: "Repérer les arnaques",
      description: "Apprenez à identifier et éviter les arnaques courantes via SMS et e-mail.",
      category: "security",
      difficulty: "intermediate",
      duration: 20,
      points: 200,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Important : restez en sécurité",
          content: "Les escrocs essaient de piéger les gens avec de faux messages. Nous allons apprendre à les reconnaître. Rappelez-vous : votre banque n'appelle JAMAIS pour demander des codes ou des mots de passe !",
          hint: "Cela peut vous protéger contre la perte d'argent.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Examiner le message",
          content: "Regardez ce SMS. Est-il réel ou faux ? Cherchez des signes d'alerte.",
          component: "ScamDetector",
          hint: "Vérifiez l'expéditeur, le langage et s'ils demandent des informations personnelles.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Bien joué !",
          content: "Vous savez maintenant repérer les arnaques. Si quelque chose semble étrange, c'est probablement le cas. Appelez toujours votre banque directement au numéro figurant sur votre carte si vous avez un doute.",
          hint: "Enregistrez ce numéro dans votre téléphone : service client de la banque.",
        },
      ],
    },
    {
      id: "video-call",
      title: "Passer un appel vidéo",
      description: "Voyez vos petits-enfants et parlez-leur en face à face. Apprenez à utiliser FaceTime ou WhatsApp Video.",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Appels vidéo - Se voir à distance",
          content: "Avec les appels vidéo, vous pouvez voir et entendre la personne. Parfait pour garder le contact avec les petits-enfants ou discuter avec des amis !",
          hint: "Vous avez besoin d'une caméra et d'internet pour cela.",
        },
      ],
    },
    {
      id: "email-basics",
      title: "Envoyer et lire des e-mails",
      description: "Apprenez les bases de l'e-mail : écrire, envoyer, lire et répondre aux messages.",
      category: "communication",
      difficulty: "beginner",
      duration: 20,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Bienvenue dans l'e-mail !",
          content: "L'e-mail est comme une lettre numérique. Vous pouvez envoyer des messages à n'importe qui dans le monde - ils arrivent en quelques secondes ! L'e-mail est parfait pour les messages plus longs que les SMS.",
          hint: "L'e-mail est gratuit !",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Votre adresse e-mail",
          content: "Votre adresse e-mail ressemble à ceci : votrenom@exemple.fr. C'est comme votre adresse postale numérique. Vous avez besoin de l'adresse e-mail du destinataire pour lui envoyer un message.",
          hint: "N'oubliez pas le signe '@' - il doit toujours être dans une adresse e-mail !",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Écrire un e-mail",
          content: "Un e-mail comporte trois parties importantes : À (adresse du destinataire), Objet (de quoi il s'agit) et Message (votre texte). Tout comme une lettre ordinaire !",
          hint: "Écrivez toujours une ligne d'objet claire pour que le destinataire sache de quoi parle le message.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Testez vos connaissances",
          content: "Qu'est-ce qui est important à avoir lors de l'envoi d'e-mails ?",
          validation: {
            correctAnswer: "L'adresse e-mail du destinataire",
          },
        },
      ],
    },
    {
      id: "social-media-basics",
      title: "Réseaux sociaux - Les bases",
      description: "Apprenez sur Facebook et Instagram. Partagez des photos, restez en contact et suivez vos proches.",
      category: "communication",
      difficulty: "intermediate",
      duration: 25,
      points: 200,
      requiredLessons: ["sms-basics", "email-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Qu'est-ce que les réseaux sociaux ?",
          content: "Les réseaux sociaux comme Facebook et Instagram sont des endroits où les gens partagent des photos, des pensées et restent en contact. C'est comme un lieu de rencontre numérique où vous pouvez voir ce que font la famille et les amis.",
          hint: "Des millions de personnes utilisent les réseaux sociaux chaque jour.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Facebook - Restez connecté",
          content: "Sur Facebook, vous pouvez : voir des photos des petits-enfants, partager vos propres photos, écrire des messages et rejoindre des groupes ayant des intérêts similaires. Par exemple, vous pouvez trouver des groupes pour votre ville natale ou vos passe-temps !",
          hint: "Vous décidez de ce que vous voulez partager et qui peut le voir.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Instagram - Partager des photos",
          content: "Instagram concerne principalement les photos et les vidéos. Parfait pour voir des photos de la famille et des amis ! Vous pouvez également suivre vos passe-temps préférés comme le jardinage, la cuisine ou les voyages.",
          hint: "Vous n'êtes pas obligé de publier vous-même - beaucoup de gens aiment simplement regarder les photos des autres.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Sécurité sur les réseaux sociaux",
          content: "Important à retenir : Ne partagez jamais d'informations personnelles comme des mots de passe ou des codes d'identification. Faites attention à ce que vous partagez publiquement. Acceptez uniquement les demandes d'amis de personnes que vous connaissez.",
          hint: "En cas de doute, demandez à un proche ou à un ami avant de partager quoi que ce soit.",
        },
      ],
    },
    {
      id: "digital-banking",
      title: "Banque numérique et Swish",
      description: "Apprenez à utiliser Swish pour des paiements faciles et comment vérifier votre compte bancaire en ligne.",
      category: "e-services",
      difficulty: "intermediate",
      duration: 25,
      points: 225,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Swish - Le paiement le plus simple de Suède",
          content: "Swish est un service de paiement suédois qui vous permet d'envoyer de l'argent directement depuis votre mobile. Parfait pour partager une note de restaurant, donner de l'argent aux petits-enfants ou payer au marché aux puces !",
          hint: "La plupart des Suédois ont Swish - c'est ultra rapide !",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Comment fonctionne Swish",
          content: "Pour utiliser Swish, vous avez juste besoin du numéro de téléphone du destinataire et du montant que vous souhaitez envoyer. Ouvrez l'application Swish, entrez le numéro et le montant, et approuvez avec BankID. Terminé en quelques secondes !",
          hint: "L'argent arrive immédiatement - pas d'attente !",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Vérifiez votre compte bancaire en ligne",
          content: "Avec l'application de votre banque, vous pouvez : voir votre solde, vérifier les transactions que vous avez effectuées, payer des factures et transférer de l'argent entre vos comptes. Tout est sécurisé avec BankID !",
          hint: "Vous pouvez vérifier votre compte à tout moment, n'importe où.",
        },
        {
          id: "step-4",
          type: "instruction",
          title: "Sécurité bancaire numérique",
          content: "Règles de sécurité importantes : Utilisez toujours les applications bancaires officielles, ne partagez jamais vos codes BankID, déconnectez-vous toujours lorsque vous avez terminé et maintenez votre téléphone à jour. Votre banque ne demandera JAMAIS de codes par téléphone ou par e-mail !",
          hint: "Au moindre doute - appelez directement le service client de votre banque.",
        },
      ],
    },
    {
      id: "health-1177-fr",
      title: "1177 - Soins en ligne",
      description: "Connectez-vous, lisez les messages et prenez rendez-vous sur 1177.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Qu'est-ce que 1177 ?",
          content: "1177 est le guide de santé suédois. Vous pouvez lire des conseils, contacter les soins et voir vos démarches de santé.",
          hint: "1177 est utilisé par les régions dans toute la Suède.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Se connecter en sécurité",
          content: "Pour voir vos informations personnelles, connectez-vous avec BankID. C'est sûr et rapide.",
          hint: "Utilisez uniquement le site ou l'application officielle 1177.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Messages et rendez-vous",
          content: "Une fois connecté, vous pouvez lire des messages, renouveler des ordonnances et prendre ou annuler des rendez-vous.",
          hint: "Vous pouvez toujours revenir et relire les messages.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "De quoi avez-vous besoin pour vous connecter à 1177 ?",
          validation: {
            correctAnswer: "BankID",
          },
        },
      ],
    },
    {
      id: "password-safety",
      title: "Mots de passe sûrs",
      description: "Créez des mots de passe solides et protégez vos comptes.",
      category: "security",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Qu'est-ce qu'un mot de passe solide ?",
          content: "Un mot de passe solide est long et difficile à deviner. Une longue phrase avec plusieurs mots fonctionne bien.",
          hint: "Exemple : trois mots avec des espaces ou des tirets.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Un mot de passe par service",
          content: "Utilisez des mots de passe différents pour chaque compte. Ainsi tout n'est pas exposé si un compte fuit.",
          hint: "Le même mot de passe partout est risqué.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Outils utiles",
          content: "Les gestionnaires de mots de passe peuvent stocker vos mots de passe en sécurité. Vous n'avez qu'à retenir un mot de passe principal.",
          hint: "N'écrivez pas les mots de passe sur des notes visibles.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "Quel mot de passe est le plus solide ?",
          validation: {
            correctAnswer: "Une longue phrase avec plusieurs mots",
          },
        },
      ],
    },
    {
      id: "phone-settings",
      title: "Réglages du téléphone",
      description: "Ajustez le son, la luminosité et la taille du texte selon vos besoins.",
      category: "basics",
      difficulty: "beginner",
      duration: 12,
      points: 120,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Son et luminosité",
          content: "Vous pouvez monter ou baisser le son et rendre l'écran plus clair ou plus sombre. Cela rend le téléphone plus facile à utiliser.",
          hint: "Il y a des curseurs pour le son et la luminosité dans les réglages.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Taille du texte",
          content: "Si le texte est petit, vous pouvez l'agrandir. C'est dans les réglages d'accessibilité ou d'affichage.",
          hint: "Essayez plusieurs tailles jusqu'à ce que cela vous convienne.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Wi-Fi et données mobiles",
          content: "À la maison, vous utilisez souvent le Wi-Fi. À l'extérieur, ce sont les données mobiles. Vous pouvez activer ou désactiver cela dans les réglages.",
          hint: "Le Wi-Fi économise les données mobiles.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "Où changez-vous la taille du texte sur le téléphone ?",
          validation: {
            correctAnswer: "Dans les réglages d'accessibilité",
          },
        },
      ],
    },
    {
      id: "photo-sharing",
      title: "Photos et partage",
      description: "Prenez une photo, trouvez-la dans la galerie et partagez-la.",
      category: "communication",
      difficulty: "beginner",
      duration: 15,
      points: 150,
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Prendre une photo",
          content: "Ouvrez l'application appareil photo et prenez une photo. Appuyez sur le grand bouton pour capturer l'image.",
          hint: "Tenez le téléphone bien stable lorsque vous prenez la photo.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Trouver la photo",
          content: "La photo va dans votre galerie ou l'application Photos. C'est là que toutes vos images sont stockées.",
          hint: "La galerie peut s'appeler \"Photos\" ou \"Images\".",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Partager en toute sécurité",
          content: "Choisissez une photo et appuyez sur partager. Vous pouvez l'envoyer par SMS, e-mail ou via une application comme WhatsApp.",
          hint: "Vérifiez toujours le destinataire avant d'envoyer.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "Que devez-vous vérifier avant de partager une photo ?",
          validation: {
            correctAnswer: "Que le destinataire est la bonne personne",
          },
        },
      ],
    },
    {
      id: "swish-step-by-step",
      title: "Swish pas à pas",
      description: "Effectuez un paiement simple calmement et vérifiez le destinataire.",
      category: "e-services",
      difficulty: "beginner",
      duration: 15,
      points: 175,
      requiredLessons: ["bankid-intro"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Ouvrir Swish",
          content: "Ouvrez l'application Swish et choisissez d'envoyer de l'argent. Vous avez besoin du numéro de téléphone du destinataire.",
          hint: "Demandez à la personne de répéter le numéro.",
        },
        {
          id: "step-2",
          type: "instruction",
          title: "Entrer le montant",
          content: "Saisissez le montant et ajoutez une courte note, par exemple \"Fika\".",
          hint: "Vérifiez que le montant est correct.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Vérifier et valider",
          content: "Vérifiez que le destinataire est correct. Validez ensuite avec BankID.",
          hint: "Si quelque chose semble faux - annulez.",
        },
        {
          id: "step-4",
          type: "quiz",
          title: "Vérifiez vos connaissances",
          content: "Quel est le point le plus important à vérifier avant un Swish ?",
          validation: {
            correctAnswer: "Le destinataire et le montant",
          },
        },
      ],
    },
  ],
};

const categoryNames: Record<Locale, Record<LessonCategory, string>> = {
  sv: {
    communication: "Håll kontakten",
    "e-services": "Svenska e-tjänster",
    security: "Håll dig säker",
    basics: "Grunderna",
  },
  en: {
    communication: "Stay in touch",
    "e-services": "Swedish e-services",
    security: "Stay safe",
    basics: "Basics",
  },
  ar: {
    communication: "ابقَ على تواصل",
    "e-services": "الخدمات الإلكترونية السويدية",
    security: "ابقَ آمنًا",
    basics: "الأساسيات",
  },
  ti: {
    communication: "ግንኙነት ቆይታ",
    "e-services": "ናይ ስዊድን ኢ-ኣገልግሎት",
    security: "ደሓን ቆይታ",
    basics: "መሰረታት",
  },
  fr: {
    communication: "Restez en contact",
    "e-services": "E-services suédois",
    security: "Restez en sécurité",
    basics: "Les bases",
  },
};

const difficultyLabelsByLocale: Record<Locale, Record<LessonDifficulty, string>> = {
  sv: {
    beginner: "Nybörjare",
    intermediate: "Fortsättning",
    advanced: "Avancerad",
  },
  en: {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  },
  ar: {
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم",
  },
  ti: {
    beginner: "ጀማሪ",
    intermediate: "መካእለኛ",
    advanced: "ኣውራ",
  },
  fr: {
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
  },
};

const categoryMetaBase = {
  communication: {
    icon: "💬",
    color: "bg-blue-100 text-blue-800 border-blue-300",
  },
  "e-services": {
    icon: "🏛️",
    color: "bg-green-100 text-green-800 border-green-300",
  },
  security: {
    icon: "🛡️",
    color: "bg-red-100 text-red-800 border-red-300",
  },
  basics: {
    icon: "📱",
    color: "bg-purple-100 text-purple-800 border-purple-300",
  },
};

export function getLessons(locale: string): Lesson[] {
  return lessonsByLocale[getLocaleOrDefault(locale)];
}

export function getLessonById(locale: string, id: string): Lesson | undefined {
  return getLessons(locale).find((lesson) => lesson.id === id);
}

export function getCategoryMeta(locale: string) {
  const currentLocale = getLocaleOrDefault(locale);
  return {
    communication: {
      ...categoryMetaBase.communication,
      name: categoryNames[currentLocale].communication,
    },
    "e-services": {
      ...categoryMetaBase["e-services"],
      name: categoryNames[currentLocale]["e-services"],
    },
    security: {
      ...categoryMetaBase.security,
      name: categoryNames[currentLocale].security,
    },
    basics: {
      ...categoryMetaBase.basics,
      name: categoryNames[currentLocale].basics,
    },
  };
}

export function getDifficultyLabels(locale: string) {
  return difficultyLabelsByLocale[getLocaleOrDefault(locale)];
}