// ============================================================================
// SITE CONTENT
// All copy pulled from the WINFO 15th Hackathon Sponsorship Packet and the
// Website Copy doc. Edit this file to update text across the whole site.
// Placeholder arrays (committee, sponsors, faces, etc.) should be filled in
// with real data/images before launch.
// ============================================================================

export const event = {
  name: "Women in Informatics' 15th Annual Hackathon",
  theme: "Peaks of Possibility, Paths of Progress",
  lastYearTheme: "Depths of Discovery, Currents of Creation",
  dates: "January 30–31, 2027",
  hackingDate: "January 30, 2027",
  judgingDate: "January 31, 2027",
  hackingLocation: "University of Washington HUB, North Ballroom",
  judgingLocation: "University of Washington Maple Great Room",
  // ISO string used to drive the countdown component
  countdownTarget: "2027-01-30T09:00:00-08:00",
  registerUrl: "#", // TODO: replace with live registration form link
};

export const mission = {
  heading: "Ready to Reach New Heights?",
  blurb:
    `Women in Informatics is excited to invite you to our 15th Annual Hackathon, ` +
    `"Peaks of Possibility, Paths of Progress." Join us for a day of developing ` +
    `technology solutions for social good and celebrating equity and inclusion ` +
    `in the technology field.`,
};

export const themeStory = {
  heading: "Hackathon Theme",
  paragraphs: [
    `Last year, our theme, "Depths of Discovery, Currents of Creation" emphasized ` +
      `the power of exploration, creativity, and collaboration in shaping the future ` +
      `of technology. This year, we're setting out on a new path. Inspired by the ` +
      `winding trails, towering mountains, and the natural beauty of the Pacific ` +
      `Northwest, our theme reflects the journey of discovery in technology. We ` +
      `believe ingenuity emerges when participants venture beyond familiar ground ` +
      `and pursue bold, creative ideas.`,
    `Our theme celebrates creativity, collaboration, and problem-solving as powerful ` +
      `forces for shaping the future. We want to encourage our participants to explore ` +
      `emerging technologies, work together through challenges, and build solutions ` +
      `that create meaningful impact. Just as every trail leads to a new perspective, ` +
      `every project has the potential to guide us toward bold new possibilities.`,
  ],
  // TODO: drop in the embed / video file for the 2026 hackathon highlight reel
  highlightReelUrl: null,
};

export const goals = [
  {
    number: "01",
    title: "Successfully host our 15th Annual Hackathon",
    body: "...targeting 300+ students across different disciplines, backgrounds, and experience levels.",
  },
  {
    number: "02",
    title: "Provide hands-on learning opportunities",
    body: "...encouraging participants to explore emerging technologies, tools, and ideas.",
  },
  {
    number: "03",
    title: "Strengthen long-term partnerships",
    body: "...with corporate sponsors, information professionals, and the local community to support the event's continued growth and impact.",
  },
  {
    number: "04",
    title: "Enhance the hackathon experience",
    body: "...for participants, mentors, and sponsors through meaningful mentorship, stronger sponsor-participant engagement, and a transparent judging process.",
  },
];

export const tracks = [
  {
    id: "best-product",
    name: "Best Product",
    description:
      `This team brings it all: functionality, appeal, innovation, a working demo, ` +
      `and most of all, the potential to scale. Their hack is not only creative in ` +
      `thinking and delivers in its demo, but possesses the most promise to impart ` +
      `real-world impact. "Best Product" projects are ones that comprehensively ` +
      `understand their user by producing a solution that has a strong promise for ` +
      `real implementation.`,
    focus: ["Venture potential", "Solution originality", "Scalability & marketability"],
  },
  {
    id: "best-impact",
    name: "Best Impact",
    description:
      `This team has built a product that has the greatest potential to influence ` +
      `lives and bring about a positive change to a community. Their hack is ` +
      `thoroughly backed by research & statistics, demonstrating an elevated ` +
      `knowledge of their problem statement. A "Best Impact" solution addresses a ` +
      `real-world societal challenge, often at the local or regional level, and ` +
      `shows clear promise for measurable impact on its intended community.`,
    focus: ["Real-world impact", "Public value", "Accessibility & inclusion"],
  },
  {
    id: "best-design",
    name: "Best Design",
    description:
      `This team crafts a compelling narrative of its own, complemented by ` +
      `breathtaking visuals and intuitive user experiences. These hackers know their ` +
      `sans from their san-serifs, providing their intended audience with a clean, ` +
      `intuitive, and delightful user experience. "Best Design" projects design with ` +
      `the user in mind and present a prototype that feels natural and effortless to use.`,
    focus: ["Intentional design", "Visual creativity", "User Interface/User Experience"],
  },
  {
    id: "best-implementation",
    name: "Best Implementation",
    description:
      `This team excels in technical execution, showing exceptional software ` +
      `development and coding skills. This hack showcases clean, effective, and ` +
      `innovative code—whether through advanced software engineering, creative ` +
      `problem-solving, or impactful use of AI and emerging technologies. "Best ` +
      `Implementation" projects can balance their technical skillset with creativity ` +
      `in their final product.`,
    focus: ["Code readability", "Stability & functionality", "Integrated components"],
  },
];

export const hackingDaySchedule = [
  { time: "08:30 AM", label: "Doors open for sponsors & mentors" },
  { time: "09:00 AM", label: "Doors open for participants" },
  { time: "09:30 AM", label: "Opening Ceremony" },
  { time: "10:00 AM", label: "Hackathon Begins" },
  { time: "10:30 AM", label: "Mentoring Round 1" },
  { time: "12:00 PM", label: "Lunch" },
  { time: "01:30 PM", label: "Mentoring Round 2" },
  { time: "03:00 PM", label: "Mentoring Round 3" },
  { time: "05:00 PM", label: "Dinner" },
  { time: "05:30 PM", label: "Mentoring Round 4" },
  { time: "07:00 PM", label: "Project Submission Closes" },
  { time: "08:00 PM", label: "Finalists Announced" },
];

export const judgingDaySchedule = [
  { time: "11:30 AM", label: "Judges Sign-In" },
  { time: "12:00 PM", label: "Finalists Sign-In" },
  { time: "12:30 PM", label: "Welcome Presentation" },
  { time: "01:00 PM", label: "Best Product Presentations" },
  { time: "01:30 PM", label: "Best Impact Presentations" },
  { time: "02:00 PM", label: "Best Implementation Presentations" },
  { time: "02:30 PM", label: "Best Design Presentations" },
  { time: "03:30 PM", label: "Buffer Time" },
  { time: "04:00 PM", label: "Winners Announced" },
];

export const faqs = [
  {
    q: "Is this hackathon right for me?",
    a: "This is a beginner-friendly, high-level hackathon built to welcome participants from all backgrounds with no required coding experience. Whether you're interested in tech, design, problem-solving, or simply want to try something new, this is a great space for you to explore your ideas and grow your skills!",
  },
  {
    q: "How does mentorship work?",
    a: "Throughout the hackathon, we will have two shifts of industry professionals aligned with your track that will stop by to share their feedback and suggestions on your project as you work. During the hackathon, your team can use the provided flags to indicate when you are ready for mentoring.",
  },
  {
    q: "Are there any prerequisites or required skills?",
    a: "While there are no prerequisites or required skills, it will be an advantage if you have a team where each member has different skills like designing, coding, presentation, etc.",
  },
  {
    q: "Does my solution have to be coded?",
    a: "No! We intentionally designed this hackathon to be beginner-friendly, so you can submit any sort of solution (through a link and a PowerPoint slide), whether it's fully coded or just prototyped. This is a great chance to learn new skills or get more practice, so we encourage you to challenge yourself!",
  },
  {
    q: "How big are the teams?",
    a: "Teams are made up of up to 4 individuals! Due to limits on prizes, teams may be less than 4, but cannot exceed that number.",
  },
  {
    q: "Do I need to have a team before the event?",
    a: "You don't need to have a team before the day of the hackathon. You can find one before the day of the event, or during the event! WINFO will also host a Team Formation event before and during the Hackathon where you can meet other potential teammates and form your team!",
  },
  {
    q: "Do I need to have an idea before the event?",
    a: "You don't need to have an idea before the day of the hackathon. You can use the time that you have to brainstorm with your team. Even if you come up with an idea before the day of the hackathon, you are not allowed to start working on your project until the start of the event!",
  },
  {
    q: "Who can participate in the hackathon?",
    a: "Any current UW student is welcome to participate! 💗",
  },
  {
    q: "Can we network with the mentors/sponsors?",
    a: "Yes! Mentors are here to assist you in your project and give any advice. Sponsors would love to get to know you and hear what you're working on. Large companies love sponsoring our hackathon because of talented and passionate students like yourself!",
  },
  {
    q: "How long will the Hackathon be?",
    a: "The Hackathon runs for twelve hours on Hacking Day. Judging and presentations for finalists will be held the following day.",
  },
  {
    q: "Can I join remotely?",
    a: "This year's Hackathon will be fully in-person since we hope everyone will be able to socialize and connect with each other.",
  },
  {
    q: "Will there be training prior to the hackathon?",
    a: "This year, we're offering workshops prior to the hackathon. You can also find more resources on Figma and/or GitHub on the Internet. The WINFO team has also included a guide to Figma and GitHub for you to start with. For more information, visit the 'Resources' page.",
  },
  {
    q: "What do I need to prepare?",
    a: "Come with a fully charged laptop, your charger, and a creative mind.",
  },
  {
    q: "Will food be provided?",
    a: "Lunch and dinner will be provided. There will be several food options available, so do not worry if you have dietary restrictions.",
  },
];

export const preHackathonEvents = [
  "Design Workshop",
  "All about 'Best Implementation'",
  "Team Formation",
  "Hack the Hackathon",
];

export const projectResources = [
  { label: "Design Basics", url: "https://www.figma.com/resource-library/design-basics/" },
  { label: "How to use Figma", url: "https://www.figma.com/resource-library/k-12-design-basics/" },
  {
    label: "How to collaborate with GitHub",
    url: "https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67",
  },
  { label: "Intro to Web Dev", url: "https://www.youtube.com/watch?v=ysEN5RaKOlA" },
  { label: "Intro to CSS Animations", url: "https://www.youtube.com/watch?v=z2LQYsZhsFw" },
];

export const aboutWinfo = {
  blurb:
    `Women in Informatics (WINFO) is a diversity organization at the Information ` +
    `School at the University of Washington, Seattle, dedicated to empowering ` +
    `women and non-binary individuals to thrive as producers of technology. The ` +
    `purpose of our hackathon is to provide participants with a fun, safe, ` +
    `beginner-friendly, and collaborative environment in which they can develop ` +
    `new skills, network with industry professionals, and learn more about the ` +
    `tech industry.`,
  website: "https://winfo.ischool.uw.edu",
};

// Committee members grouped by role — TODO: add headshots + last names as available
export const committee = {
  intro:
    "Our team of 12 organizers are brought together by a shared passion for building spaces where everyone feels welcome to create, connect, and learn.",
  groups: [
    { role: "Directors", members: [] }, // TODO
    { role: "Logistics Leads", members: ["Rithika", "Shinaya"] },
    { role: "Outreach Leads", members: ["Tanya", "Shreya", "Katrina"] },
    { role: "Design Leads", members: ["Claire", "Thu", "Sarah"] },
    { role: "Tech Leads", members: ["Katie", "Mara"] },
    { role: "Finance", members: ["Tejaswi"] },
  ],
};

// The People — speakers / mentors / judges. TODO: fill in with real names,
// company, and (optionally) email once confirmed. Ask past mentors for consent
// before publishing their info.
export const people = {
  speakers: [], // { name, role, company, photo }
  mentors: [],
  judges: [],
};

export const pastWinners = [
  {
    emoji: "🌊",
    track: "Best Impact",
    project: "Canario",
    team: "Vania Benitez Salgado, Kai Barnum, Pimnipa Thawai",
  },
  {
    emoji: "🐟",
    track: "Best Product",
    project: "NewFuse",
    team: "Sophia Wei, Angela Yang, Thu Doan, Thu Nguyen",
  },
  {
    emoji: "🐚",
    track: "Best Implementation",
    project: "Nudge",
    team: "Sacchin Saravanan, Abhinav Vallabhaneni, Achintya Agrawal, Aashi Juneja",
  },
  {
    emoji: "🪼",
    track: "Best Design",
    project: "WNBA",
    team: "Isaiah Hoagland, Sunny Tian, Farrel Sudrajat",
  },
];

export const pastWinnersLinks = {
  recap: "https://www.instagram.com/p/DUl4qrAEp6-/?img_index=1",
  judgingSlides:
    "https://www.figma.com/slides/U9UfoWDtiYncSv54wT1lB5/judging-day?node-id=4108-116",
};

export const impactStats = [
  { number: "256", label: "student participants" },
  { number: "64", label: "projects submitted" },
  { number: "39", label: "industry mentors" },
];

export const testimonials = [
  {
    quote:
      "The WINFO Hackathon is one of the highlights of the year; seeing the inventive work that students create, all in a single day, meant to solve real problems in a human-centered and humane way, is always inspiring. Which makes judging challenging - and very rewarding!",
    name: "Joseph Janes",
    role: "iSchool Professor and Hackathon Judge",
  },
  {
    quote:
      "I joined the WINFO Hackathon without a team and wasn't sure what to expect, but I ended up finding a great group and learning so much. It was a fun, supportive experience that pushed me to try new things and build confidence in my skills.",
    name: "Shalomi Jobi",
    role: "Third Year Informatics Student",
  },
  {
    quote:
      "It was a fantastic experience. The event was very well-organized, the provided resources made collaboration easy, and the food was great. The welcoming environment made it easy to meet new people, and the overall experience was fun and rewarding!",
    name: "Isabella Petra",
    role: "",
  },
];

// TODO: replace filenames with real logo assets in /public/sponsors
export const sponsors = [
  { name: "Microsoft", logo: null },
  { name: "Accenture", logo: null },
  { name: "Adobe", logo: null },
  { name: "EY", logo: null },
  { name: "Cyborg Mobile", logo: null },
  { name: "lululemon", logo: null },
  { name: "Samuel E. Kelly Ethnic Cultural Center — UW Office of Minority Affairs & Diversity", logo: null },
  { name: "Costco Wholesale", logo: null },
  { name: "PitchBook", logo: null },
  { name: "UW Services + Activities Fee", logo: null },
  { name: "UW Alumni Association", logo: null },
];

export const contact = {
  email: "winfo@uw.edu",
  instagram: "https://www.instagram.com/uwwinfo/",
  linkedin: "https://www.linkedin.com/company/women-in-informatics/",
  youtube: "https://www.youtube.com/@uw_winfo",
  facebook: "https://www.facebook.com/groups/winfouw/",
};
