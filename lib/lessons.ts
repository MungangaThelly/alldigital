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
  title: string;
  content: string;
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
      id: "sms-basics",
      title: "Skicka ditt första SMS",
      description: "Lär dig skicka textmeddelanden till familj och vänner. Enkelt och tryggt.",
      category: "communication",
      difficulty: "beginner",
      duration: 10,
      points: 100,
      steps: [
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
      id: "scam-awareness",
      title: "Känna igen bedrägerier",
      description: "Lär dig identifiera och undvika vanliga bedrägerier via SMS och e-post.",
      category: "security",
      difficulty: "intermediate",
      duration: 20,
      points: 200,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Viktigt: Håll dig säker",
          content: "Bedragare försöker lura människor genom falska meddelanden. Vi ska lära dig hur du känner igen dem. Kom ihåg: Din bank ringer ALDRIG och ber om koder eller lösenord!",
          hint: "Detta kan skydda dig från att förlora pengar.",
        },
        {
          id: "step-2",
          type: "interactive",
          title: "Granska meddelandet",
          content: "Titta på detta SMS. Är det äkta eller falskt? Leta efter varningssignaler.",
          component: "ScamDetector",
          hint: "Kolla avsändaren, språket och om de ber om personlig information.",
        },
        {
          id: "step-3",
          type: "instruction",
          title: "Bra gjort!",
          content: "Nu vet du hur man känner igen bedrägerier. Kom ihåg: Om något känns konstigt, är det förmodligen det. Ring alltid din bank direkt på numret på ditt kort om du är osäker.",
          hint: "Spara detta nummer i din telefon: Bankens kundservice.",
        },
      ],
    },
    {
      id: "video-call",
      title: "Ring ett videosamtal",
      description: "Se dina barnbarn och prata med dem ansiktsikten. Lär dig använda FaceTime eller WhatsApp Video.",
      category: "communication",
      difficulty: "intermediate",
      duration: 15,
      points: 175,
      requiredLessons: ["sms-basics"],
      steps: [
        {
          id: "step-1",
          type: "instruction",
          title: "Videosamtal - Se varandra på distans",
          content: "Med videosamtal kan du både se och höra personen du pratar med. Perfect för att hänga med barnbarnen eller prata med vänner!",
          hint: "Du behöver ha kamera och internet för detta.",
        },
      ],
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
  ],
  en: [
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
