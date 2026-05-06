// Lesson 2 data file
// Teachers can edit this file to update lesson content without changing HTML.

const lessonData = {
  title: "Lesson 2: AI History",
  subtitle: "From Early Computing to Modern AI Milestones",
  duration: "2.5 hours",
  gradeLevel: "High School CTE AI Beginners",
  unit: "Foundations of Artificial Intelligence",
  lessonNote: "This lesson focuses on the history and timeline of AI. Neural networks, deep learning, transformers, and modern generative AI are included here as important historical milestones. Students will study how these technologies work in more detail in Lesson 3.",
  learningGoals: [
    "Explain how early computing helped make AI possible.",
    "Identify major milestones in AI history, including Alan Turing, the Dartmouth Workshop, expert systems, AI winters, machine learning, deep learning, transformers, and modern generative AI.",
    "Describe why AI progress has not been a straight line.",
    "Connect AI history to modern industries and careers.",
    "Create a simple AI History Exhibit that explains one milestone clearly using words, visuals, dates, and real-world impact."
  ],
  vocabulary: [
    { term: "Artificial Intelligence", definition: "Computer systems designed to perform tasks that usually require human intelligence, such as recognizing patterns, making predictions, or generating language." },
    { term: "Algorithm", definition: "A step-by-step set of instructions used to solve a problem or complete a task." },
    { term: "Early Computing", definition: "The period when large machines began following programmed instructions using switches, punch cards, vacuum tubes, and stored programs." },
    { term: "Turing Test", definition: "Alan Turing’s idea that a machine might show intelligent behavior if a human could not easily tell whether they were communicating with a person or a machine." },
    { term: "Rule-Based AI", definition: "AI that uses hand-written rules such as IF a condition is true, THEN take an action." },
    { term: "Expert System", definition: "A rule-based AI program designed to imitate the decision-making of a human expert in a narrow area." },
    { term: "Neural Network", definition: "An AI model made of connected artificial nodes that can adjust connections to learn patterns from examples." },
    { term: "AI Winter", definition: "A period when funding, excitement, and progress in AI slowed because systems did not meet expectations." },
    { term: "Machine Learning", definition: "A type of AI where systems learn patterns from data instead of being programmed with every rule by hand." },
    { term: "Transformer", definition: "A modern AI architecture that uses attention to understand relationships between pieces of information, especially language." }
  ],
  bellRinger: {
    title: "Bell Ringer: Is AI New?",
    time: "8 minutes",
    where: "Student workbook or digital notebook",
    mode: "Individual first, then pair-share",
    expectation: "Write 4–6 complete sentences. Answers do not need to be correct yet. The goal is to activate prior knowledge and make predictions.",
    prompts: [
      "When do you think people first started asking whether machines could “think”?",
      "What invention or technology do you think had to exist before AI could become possible?",
      "Why do you think AI progress took so long?",
      "Name one modern AI tool or system you have heard of. What older technology do you think helped make it possible?"
    ],
    pairShare: "After writing, compare answers with a partner and add one new idea from your partner to your notes."
  },
  historyMap: {
    title: "AI History Map",
    image: "assets/images/ai-history-map.png",
    caption: "AI History Map: A visual timeline of major ideas, inventions, and breakthroughs that helped shape modern artificial intelligence.",
    directions: [
      "Circle or write down three milestones that seem most important.",
      "Put a star next to the milestone you think had the biggest impact on today’s AI.",
      "Write one question you have about the history of AI.",
      "Write one sentence explaining why AI did not appear “all at once.”"
    ],
    teacherTalkingPoints: [
      "AI did not begin with ChatGPT or image generators.",
      "AI history includes math, computing hardware, logic, data, algorithms, and human imagination.",
      "Some AI ideas existed before computers were powerful enough to make them practical.",
      "Progress happened in waves: excitement, limits, slowdowns, and breakthroughs."
    ]
  },
  timelineIntro: {
    title: "AI History Timeline",
    text: "AI history is not a straight road. It is more like a series of experiments, breakthroughs, disappointments, and new discoveries. Each generation of researchers built on earlier ideas.",
    focusQuestions: [
      "What problem were people trying to solve?",
      "What new idea or tool helped AI move forward?",
      "How did this milestone influence the AI tools we use today?"
    ]
  },
  milestones: [
    {
      id: 1,
      title: "Early Computing: Machines That Follow Instructions",
      dates: "1930s–1940s",
      icon: "🧮",
      explanation: "Before AI could exist, people needed machines that could follow instructions. Early computers were not “intelligent” the way we think of AI today. They were large machines designed to calculate, process information, and follow programmed steps. Early computers used technologies such as switches, vacuum tubes, punch cards, and stored instructions. These machines helped prove that complex tasks could be broken into smaller steps that a machine could follow.",
      why: "AI depends on computation. Before machines could learn, predict, or generate, they first had to be able to process instructions reliably.",
      analogy: "Early computers were like extremely fast rule-followers. They did not understand the task, but they could follow steps exactly.",
      examples: ["Military and scientific calculations", "Census and business data processing", "Weather and engineering calculations"],
      teacherTalk: ["Emphasize that early computers were not creative or flexible.", "Connect programming instructions to recipe-like steps.", "Ask students what tasks today still rely on exact instructions."],
      check: "What is one reason early computing was necessary before AI could develop?"
    },
    {
      id: 2,
      title: "Alan Turing: Asking “Can Machines Think?”",
      dates: "1950",
      icon: "💭",
      explanation: "Alan Turing was a mathematician and computer scientist who helped shape early ideas about machine intelligence. In 1950, he published a famous paper that asked whether machines could think. Instead of trying to define “thinking” perfectly, Turing suggested a practical test. If a machine could communicate in a way that seemed intelligent to a human, then maybe we should consider it intelligent behavior. This idea became known as the Turing Test.",
      why: "Turing helped move the conversation from “Can machines calculate?” to “Can machines show intelligent behavior?”",
      analogy: "Imagine texting with someone without knowing whether it is a person or a machine. If you cannot tell the difference based on the conversation, that is the basic idea behind the Turing Test.",
      examples: ["Chatbots", "Virtual assistants", "Customer support conversation tools"],
      teacherTalk: ["Do not present the Turing Test as the only definition of intelligence.", "Use texting as the main analogy.", "Ask whether sounding intelligent is the same as understanding."],
      check: "Why was Turing’s question important for the future of AI?"
    },
    {
      id: 3,
      title: "Dartmouth Workshop: AI Becomes a Field",
      dates: "1956",
      icon: "🏫",
      explanation: "In 1956, researchers met at Dartmouth College for a summer workshop focused on machine intelligence. This event is often remembered as a major starting point for artificial intelligence as a formal field of study. The researchers believed that aspects of learning, reasoning, and problem-solving could potentially be described so clearly that machines could simulate them.",
      why: "The Dartmouth Workshop helped give AI a name, a research community, and a shared goal.",
      analogy: "Before Dartmouth, AI ideas were scattered across math, logic, and computing. Dartmouth helped turn those ideas into a team sport with a shared name.",
      examples: ["University research labs", "Computer science departments", "AI research conferences"],
      teacherTalk: ["Explain why naming a field matters.", "Connect to how pathways and careers are organized.", "Clarify that many people contributed to AI history."],
      check: "Why is naming a field important for research and innovation?"
    },
    {
      id: 4,
      title: "Rule-Based AI and Expert Systems",
      dates: "1950s–1970s",
      icon: "🌳",
      explanation: "Early AI systems often used hand-written rules. A programmer or expert would write instructions like: IF a condition is true, THEN take an action. These systems were useful for narrow tasks, especially when experts could clearly explain their decision rules. However, they struggled when situations were messy, incomplete, or unexpected.",
      why: "Rule-based AI showed that computers could mimic some expert decision-making, but it also showed the limits of trying to hand-code intelligence.",
      analogy: "Rule-based AI is like a giant decision tree or troubleshooting guide. It works well when the answer is already covered, but it struggles when the situation does not match the guide.",
      examples: ["Medical expert systems", "Help desk troubleshooting scripts", "Loan application rule checks", "Manufacturing quality rules"],
      teacherTalk: ["Write a simple IF-THEN example on the board.", "Show how rule lists become hard to manage.", "Ask students where rule-based systems still make sense."],
      check: "Why might rule-based AI fail in a real-world situation?"
    },
    {
      id: 5,
      title: "Neural Networks as an Early AI Idea",
      dates: "1957–1980s",
      icon: "🧠",
      explanation: "Neural networks are AI models loosely inspired by the way brains use connected cells to process information. In an artificial neural network, simple units called nodes pass information to one another through connections. Early researchers hoped neural networks could learn patterns instead of depending only on hand-written rules. However, early neural networks were limited by slow computers, small datasets, and less advanced training methods.",
      why: "Neural networks introduced the idea that machines could improve by adjusting connections based on examples.",
      analogy: "A neural network is like a team of tiny pattern detectors. Each one notices a small clue, and together they help the system make a decision.",
      examples: ["Pattern recognition research", "Early character recognition", "Foundations for modern vision and language systems"],
      teacherTalk: ["Keep this historical, not highly technical.", "Tell students Lesson 3 will explain how networks learn.", "Compare nodes and connections to clues and weights."],
      check: "How are neural networks different from rule-based AI?",
      lesson3Note: "In this lesson, neural networks are introduced as a historical milestone. You will study how they work in more detail in Lesson 3."
    },
    {
      id: 6,
      title: "AI Winters: When Progress Slowed",
      dates: "1970s and 1980s",
      icon: "❄️",
      explanation: "AI researchers made bold promises, but early systems often could not deliver what people expected. Computers were expensive and limited. Data was harder to collect. Many AI systems worked only in narrow situations. As excitement dropped, funding and public confidence decreased. These slow periods became known as AI winters.",
      why: "AI winters show that technology progress is not always smooth. Big ideas often need better tools, better data, and more time before they succeed.",
      analogy: "AI winters were like a sports team with a great strategy but not enough training equipment, practice time, or players ready to execute the plan.",
      examples: ["Reduced research funding", "Companies losing confidence in AI tools", "Narrow systems that failed outside controlled settings"],
      teacherTalk: ["Frame failure as part of innovation.", "Discuss hype cycles.", "Connect to responsible claims about new technology."],
      check: "What were two reasons AI progress slowed during AI winters?"
    },
    {
      id: 7,
      title: "Machine Learning: Learning from Data",
      dates: "1990s–2010s",
      icon: "📊",
      explanation: "Over time, computers became faster, datasets became larger, and algorithms improved. Instead of programming every rule by hand, researchers increasingly used machine learning. Machine learning systems look for patterns in data and use those patterns to make predictions or decisions. For example, a system might study thousands of labeled images to learn the difference between cats and dogs.",
      why: "Machine learning shifted AI from “write all the rules” to “learn patterns from examples.”",
      analogy: "Instead of giving someone a recipe for every possible decision, machine learning is like showing many examples until the system starts noticing patterns.",
      examples: ["Spam filters", "Recommendation systems", "Fraud detection", "Predictive maintenance"],
      teacherTalk: ["Contrast rules with examples.", "Point out that data quality matters.", "Ask students what data a school app might learn from."],
      check: "Why did more data and faster computers help AI improve?"
    },
    {
      id: 8,
      title: "Deep Learning Breakthroughs",
      dates: "2010s, especially 2012",
      icon: "🐱",
      explanation: "Deep learning uses neural networks with many layers. These layers allow AI systems to detect patterns at different levels. In image recognition, early layers may detect edges, middle layers may detect shapes, and deeper layers may detect objects like faces, animals, or road signs. Around 2012, deep learning systems made major improvements in image recognition and helped renew excitement in AI.",
      why: "Deep learning helped AI perform much better on tasks involving images, speech, language, and large datasets.",
      analogy: "Deep learning is like a group of students working in layers. One group notices basic details, another combines those details into shapes, and another recognizes the full object.",
      examples: ["Medical image analysis", "Voice assistants", "Road sign detection", "Quality inspection in manufacturing"],
      teacherTalk: ["Use the edge-shape-object explanation.", "Keep math out of this lesson.", "Preview Lesson 3 for deeper learning."],
      check: "Why are multiple layers useful for recognizing complex patterns?",
      lesson3Note: "This lesson treats deep learning as a historical milestone. You will explore neural networks and deep learning more deeply in Lesson 3."
    },
    {
      id: 9,
      title: "Transformers: A Breakthrough for Language",
      dates: "2017",
      icon: "🔤",
      explanation: "Transformers are an AI architecture that became very important for language-based AI. They use a method called attention, which helps the model focus on relationships between words, phrases, or tokens. For example, in the sentence “The student opened her laptop because she needed to code,” attention helps the system connect words like “student,” “her,” and “she.”",
      why: "Transformers helped improve translation, summarization, chatbots, coding assistants, and many modern generative AI tools.",
      analogy: "Attention is like highlighting the most important words in a sentence so you can understand how they connect.",
      examples: ["Translation tools", "Summarizers", "Chatbots", "Coding assistants"],
      teacherTalk: ["Explain attention using highlighting.", "Do not go deep into architecture here.", "Preview that modern AI models will come next."],
      check: "Why would understanding relationships between words be important for AI?",
      lesson3Note: "Transformers are included here as a milestone in AI history. You will study modern AI models in more depth in Lesson 3."
    },
    {
      id: 10,
      title: "Modern Generative AI as a Historical Milestone",
      dates: "2020s",
      icon: "✨",
      explanation: "Modern generative AI tools can create new text, images, code, audio, and video based on patterns learned from large datasets. These tools feel new to many people, but they are built on decades of progress in computing, data, machine learning, neural networks, and transformers. Generative AI is now used in classrooms, businesses, design, customer service, software development, entertainment, and research.",
      why: "Generative AI shows how many earlier AI ideas came together into tools that millions of people can use.",
      analogy: "Modern generative AI is like a remix engine. It does not copy one exact example; it learns patterns from many examples and uses those patterns to generate something new.",
      examples: ["Writing assistants", "Image generation", "Code copilots", "Customer service chatbots"],
      teacherTalk: ["Keep focus on history, not detailed mechanics.", "Emphasize responsible use.", "Preview Lesson 3 for deeper exploration."],
      check: "Why is generative AI not really “brand new,” even though many tools became popular recently?",
      lesson3Note: "This lesson focuses on how generative AI fits into AI history. You will explore how generative AI works, how to use it responsibly, and its risks in Lesson 3."
    }
  ],
  industries: [
    {
      name: "Healthcare",
      icon: "🏥",
      text: "AI history connects to healthcare through expert systems, machine learning, and deep learning. Early rule-based systems showed that computers could support expert decisions. Later machine learning systems improved pattern recognition from large medical datasets.",
      workplace: "A hospital may use AI to help flag possible concerns in medical images. A human clinician still reviews the result and makes the final decision.",
      question: "Why should AI support doctors instead of replacing medical judgment completely?"
    },
    {
      name: "Transportation",
      icon: "🚗",
      text: "Transportation AI grew from rule-following systems, sensors, data, and machine learning. Navigation apps use data to predict traffic. Driver-assistance systems use cameras and sensors to detect lanes, cars, signs, and pedestrians.",
      workplace: "A delivery company may use AI to choose efficient routes, reduce fuel use, and estimate arrival times.",
      question: "What could go wrong if a transportation AI system makes a prediction using incomplete data?"
    },
    {
      name: "Entertainment and Media",
      icon: "🎬",
      text: "Entertainment AI is connected to recommendation systems, machine learning, and generative AI. Streaming services use AI to recommend shows and music based on patterns in viewing or listening behavior.",
      workplace: "A video platform may recommend content based on what similar users watched, liked, skipped, or searched for.",
      question: "How can recommendation systems be helpful? How can they also limit what people see?"
    },
    {
      name: "Customer Service",
      icon: "🎧",
      text: "Customer service AI connects to natural language processing, expert systems, and generative AI. Early systems followed scripts or decision trees. Modern chatbots can understand more flexible language and generate responses.",
      workplace: "A company may use a chatbot to answer common questions about orders, passwords, or appointments. If the problem is complex, the chatbot sends the customer to a human worker.",
      question: "When should a chatbot hand a conversation over to a human?"
    },
    {
      name: "Cybersecurity",
      icon: "🛡️",
      text: "Cybersecurity AI depends on pattern detection and anomaly detection. Security systems can learn what normal network activity looks like and then flag suspicious behavior.",
      workplace: "An AI system might notice unusual login attempts from a new location and alert a cybersecurity analyst.",
      question: "Why is human review important before taking action on a security alert?"
    }
  ],
  resources: [
    {
      title: "What Is Artificial Intelligence? Crash Course AI #1",
      platform: "YouTube / Crash Course",
      url: "https://www.youtube.com/watch?v=a0_lo_GDcFw",
      whyUseful: "A beginner-friendly overview that helps students connect AI history to modern uses.",
      worksheet: [
        "Write one definition or description of AI from the video in your own words.",
        "Name two examples of AI mentioned or shown.",
        "What is one question you still have after watching?"
      ]
    },
    {
      title: "Alan Turing: Crash Course Computer Science #15",
      platform: "PBS / Crash Course",
      url: "https://www.pbs.org/video/alan-turing-crash-course-computer-science-15-u2nkfs/",
      whyUseful: "Helps students understand Turing’s role in the foundations of computer science and AI.",
      worksheet: [
        "What problem or question was Turing trying to think through?",
        "Why do Turing’s ideas still matter for AI?",
        "Write one connection between Turing and modern chatbots."
      ]
    },
    {
      title: "Artificial Intelligence (AI) Coined at Dartmouth",
      platform: "Dartmouth",
      url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
      whyUseful: "A short primary-source style reading about the 1956 workshop that helped name AI as a field.",
      worksheet: [
        "What happened at Dartmouth in 1956?",
        "Why was naming the field “artificial intelligence” important?",
        "Which researchers or ideas from this event should go on your timeline?"
      ]
    },
    {
      title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
      platform: "Stanford-hosted PDF",
      url: "https://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
      whyUseful: "A historic document that shows how early AI researchers described their goals.",
      worksheet: [
        "Find one phrase that shows what researchers hoped machines could do.",
        "What seems ambitious about the proposal?",
        "How does the proposal connect to modern AI tools?"
      ]
    }
  ],
  activity: {
    title: "Student Project: Build an AI History Exhibit",
    time: "35–45 minutes",
    mode: "Partners or small groups of 3",
    where: "Student workbook and final exhibit slide/poster",
    finalProduct: "One exhibit panel about a major AI history milestone",
    choices: ["Early Computing", "Alan Turing and the Turing Test", "Dartmouth Workshop", "Rule-Based AI / Expert Systems", "Early Neural Networks", "AI Winters", "Machine Learning from Data", "Deep Learning Breakthroughs", "Transformers", "Modern Generative AI"],
    requirements: ["Milestone title", "Date or date range", "What happened", "Why it mattered", "Simple analogy", "One visual", "One industry connection", "One question for visitors", "One source or class resource used"],
    templateFields: ["Milestone", "Date / date range", "What happened? Write 2–3 student-friendly sentences.", "Why did it matter in AI history?", "Simple analogy: This milestone is like…", "Industry connection", "Visual idea", "Visitor question", "Source used"],
    doneLooksLike: ["Easy to read from a few feet away", "Includes the date/date range", "Explains the milestone in student-friendly language", "Includes at least one visual", "Connects the milestone to modern AI or an industry", "Includes one question for classmates", "Avoids copying long text directly from a source"],
    galleryWalk: ["Visit at least three other exhibits.", "Record one thing you learned from each exhibit.", "Answer the visitor question on each exhibit.", "Add one sticky note or comment with a compliment or question."],
    rubric: [
      { category: "Historical accuracy", points: 4, description: "Dates, people, and events are accurate and clearly explained." },
      { category: "Student-friendly explanation", points: 4, description: "The milestone is explained in clear language with a strong analogy." },
      { category: "Visual communication", points: 4, description: "The exhibit uses a visual that improves understanding." },
      { category: "Industry connection", points: 4, description: "The exhibit connects the milestone to a real workplace or modern AI use." },
      { category: "Professional quality", points: 4, description: "The exhibit is complete, organized, readable, and ready for a gallery walk." }
    ]
  },
  quiz: [
    { question: "Why were early computers important to AI history?", options: ["They could already think like humans.", "They showed machines could follow programmed instructions.", "They created images and songs.", "They replaced all scientists."], answer: 1, feedback: "Early computers made AI possible by proving machines could process instructions and calculations." },
    { question: "What question did Alan Turing famously ask in 1950?", options: ["Can machines think?", "Can computers become smaller?", "Can robots drive cars?", "Can phones use apps?"], answer: 0, feedback: "Turing’s question helped shape the field of machine intelligence." },
    { question: "Why was the 1956 Dartmouth Workshop important?", options: ["It invented smartphones.", "It helped establish AI as a formal field of study.", "It ended all AI research.", "It created the first internet browser."], answer: 1, feedback: "Dartmouth helped name and organize AI as a research field." },
    { question: "What is a weakness of rule-based AI?", options: ["It learns from huge datasets automatically.", "It never uses logic.", "It struggles when situations do not match its written rules.", "It only works with images."], answer: 2, feedback: "Rule-based AI can be brittle when real-world situations are messy or unexpected." },
    { question: "What is an AI winter?", options: ["A robot designed for snow", "A period when AI funding and excitement slowed", "A neural network layer", "A type of chatbot"], answer: 1, feedback: "AI winters happened when expectations were high but systems could not deliver enough results." },
    { question: "What major shift did machine learning introduce?", options: ["From learning patterns to hand-writing every rule", "From paper to punch cards only", "From hand-written rules to learning patterns from data", "From computers to no computers"], answer: 2, feedback: "Machine learning shifted AI toward learning from examples and data." },
    { question: "Why are transformers important in AI history?", options: ["They improved language AI by using attention to connect relationships between tokens.", "They replaced electricity.", "They were only used for early punch cards.", "They stopped generative AI from developing."], answer: 0, feedback: "Transformers became central to language models and many generative AI systems." }
  ],
  exitTicket: {
    title: "Exit Ticket: AI Did Not Happen Overnight",
    where: "Student workbook or LMS form",
    length: "5–7 sentences",
    prompts: [
      "Which AI history milestone do you think was most important? Why?",
      "What is one example of AI progress slowing down or facing limits?",
      "How does one older AI idea connect to a modern AI tool?",
      "What topic do you want to learn more about in Lesson 3?"
    ],
    sentenceStarter: "One AI milestone that helped shape modern AI was ______ because ______."
  },
  lesson3Preview: {
    title: "Coming Next: Lesson 3",
    text: "In this lesson, you traced the history of AI. You saw that modern AI tools did not appear suddenly. They were built from earlier work in computing, logic, data, neural networks, deep learning, and transformers.",
    bullets: ["How neural networks learn patterns", "How modern generative AI tools create text, images, code, and other content"]
  },
  standards: [
    "CTE AI/ML: Explain foundational concepts and historical developments in artificial intelligence.",
    "CTE AI/ML: Analyze how data, algorithms, and computing power influence AI systems.",
    "CTE Employability: Communicate technical information clearly using visuals and evidence.",
    "Digital Citizenship: Evaluate benefits, limitations, and responsible uses of emerging technology."
  ],
  teacherNotes: [
    "Keep the focus on history. Do not spend too long explaining how neural networks or generative AI work; those become Lesson 3.",
    "Use the AI History Map as a visual anchor before students read the detailed timeline.",
    "Require students to write in the workbook before building the exhibit. This improves clarity and reduces copied text.",
    "During the gallery walk, ask students to look for connections across milestones, not just isolated facts.",
    "Video links should be previewed before classroom use because availability and district access may vary."
  ]
};