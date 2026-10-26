// ============================================================================
// SITE CONTENT
// All copy pulled from the WINFO 15th Hackathon Sponsorship Packet and the
// Website Copy doc. Edit this file to update text across the whole site.
// Placeholder arrays (committee, sponsors, faces, etc.) should be filled in
// with real data/images before launch.
// ============================================================================

export const event = {
  name: "Women in Informatics' 15th Annual Hackathon",
  heroDates: "January 30-31, 2027",
  heroLocation: "University of Washington Husky Union Building",
  theme: "Peaks of Possibility",
  lastYearTheme: "Depths of Discovery, Currents of Creation",
  dates: "January 30–31, 2027",
  hackingDate: "January 30, 2027",
  judgingDate: "January 31, 2027",
  hackingLocation: "University of Washington HUB, North Ballroom",
  hubMapUrl: "https://www.google.com/maps/dir/?api=1&destination=4001+E+Stevens+Way+NE,+Seattle,+WA+98195",
  judgingLocation: "University of Washington Maple Great Room",
  mapleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=1135+NE+Campus+Pkwy,+Seattle,+WA+98105",
  // ISO string used to drive the countdown component
  countdownTarget: "2027-01-30T09:00:00-08:00",
  registerUrl: "#", // TODO: replace with live registration form link
};

export const mission = {
  heading: "Ready to Reach New Heights?",
  blurb1:
    `Women in Informatics is excited to invite you to our 15th Annual Hackathon, `,
  blurb2:
    `. Join us for a day of developing ` +
    `technology solutions for social good and celebrating equity and inclusion ` +
    `in the technology field.`,
};

export const themeStory = {
  heading: "Hackathon Theme",
  paragraph1:
    `Inspired by the ` +
    `winding trails, towering mountains, and the natural beauty of the Pacific ` +
    `Northwest, our theme reflects the journey of discovery in`,
  paragraph2:
    `We believe ingenuity emerges when participants venture beyond familiar ground ` +
    `and pursue bold, creative ideas.`,
  paragraph3:
    `Our theme celebrates creativity, collaboration, and problem-solving as powerful ` +
    `forces for shaping the future. We want to encourage our participants to explore ` +
    `emerging technologies, work together through challenges, and build solutions ` +
    `that create meaningful impact.`,

  paragraph4:
    `Just as every trail leads to a new perspective, ` +
    `every project has the potential to guide us toward `,
  highlightReelUrl: null,
};

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
  { time: "08:30 AM - 9:30 AM", label: "Participants & Sponsors Check-In" },
  { time: "09:30 AM - 9:50 AM", label: "Opening Ceremony" },
  { time: "9:50 AM", label: "Hacking Begins!" },
  { time: "10:00 AM", label: "Mentors Check-In" },
  { time: "10:50 AM - 11:50 AM", label: "Mentoring Round 1" },
  { time: "11:50 AM", label: "Complimentary Lunch" },
  { time: "01:20 PM - 02:20 PM", label: "Mentoring Round 2" },
  { time: "02:50 PM - 03:50 PM", label: "Mentoring Round 3" },
  { time: "04:00 PM", label: "Complimentary Dinner" },
  { time: "05:00 PM - 06:00 PM", label: "Mentoring Round 4" },
  { time: "07:00 PM", label: "Final Project Submissions Due" },
  { time: "07:00 PM - 08:15 PM", label: "Pitching" },
  { time: "08:15 PM - 09:00 PM", label: "Closing Ceremony" },
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
    a: "This is a beginner-friendly, high-level hackathon built to welcome participants from all backgrounds with no required coding experience. If you're interested in tech, design, problem-solving, or simply want to try something new, this is a great space for you to explore your ideas and grow your skills.",
  },
  {
    q: "Are there any prerequisites or required skills?",
    a: "While no prerequisites are required, it helps to have a team where each member brings something different \u2014 design, coding, presentation, or research. Curiosity is all you really need.",
  },
  {
    q: "How big are the teams?",
    a: "Teams can include 3-4 individuals.",
  },
  {
    q: "Do I need to have an idea before the event?",
    a: "Nope. Use the time before kickoff to brainstorm with your team. We ask that you don't start building until hacking officially begins, but prep those brainstorms early!",
  },
  {
    q: "Can we network with the mentors or sponsors?",
    a: "Absolutely. Mentors and sponsors are excited to learn about your project, offer feedback, and share advice. It's a fantastic opportunity to build connections.",
  },
  {
    q: "Can I join remotely?",
    a: "This year's hackathon is in-person only so we can foster community and collaboration.",
  },
  {
    q: "What do I need to prepare?",
    a: "Bring your laptop, charger, water bottle, and creative energy. Optional: headphones, sketchbook, or anything that supports your workflow.",
  },
  {
    q: "How does mentorship work?",
    a: "Throughout the hackathon, we'll host two shifts of industry professionals aligned with your track. Mentors stop by to share feedback and suggestions as you work. When you're ready, signal your team's flag and they'll dive in.",
  },
  {
    q: "Does my solution have to be coded?",
    a: "No! This hackathon welcomes prototypes, slide decks, and concept demos just as much as polished builds. Show your idea in the format that best highlights its impact.",
  },
  {
    q: "Do I need to have a team before the event?",
    a: "Not at all. You'll have chances to meet collaborators before and during the hackathon. Join our Team Formation event to connect with other participants.",
  },
  {
    q: "Who can participate in the hackathon?",
    a: "Any current undergraduate UW student is welcome to participate. Come as you are \u2014 we can't wait to see what you build.",
  },
  {
    q: "How long will the hackathon be?",
    a: "The hackathon runs a full day (roughly 8:30 AM \u2013 8:30 PM), with judging and presentations for finalists happening the following afternoon from 12:00 PM \u2013 4:00 PM.",
  },
  {
    q: "Will there be training prior to the hackathon?",
    a: "Yes! We're hosting two workshops before the event, plus sharing guides on Figma and GitHub to help you get started. Watch our socials for details.",
  },
  {
    q: "Will food be provided?",
    a: "Lunch and dinner are provided, with several dietary options available. Snacks and hydration stations will be stocked all day.",
  },
  {
    q: "My question isn't here!",
    a: "Reach out to winfo@uw.edu \u2014 we're happy to help.",
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
  website: "https://winfo.ischool.uw.edu"
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
    image: "/assets/about/winners/canario.png",
    team: "Vania Benitez Salgado, Kai Barnum, Pimnipa Thawai",
    about: "Reducing confusion, improving preparedness, and supporting safer encounters.",
  },
  {
    emoji: "🐟",
    track: "Best Product",
    project: "NewFuse",
    image: "/assets/about/winners/newfuse.png",
    team: "Sophia Wei, Angela Yang, Thu Doan, Thu Nguyen",
    about: "Exploring the depths of news! Making today's news understandable, not overwhelming.",
  },
  {
    emoji: "🐚",
    track: "Best Implementation",
    project: "Nudge",
    image: "/assets/about/winners/nudge.png",
    team: "Sacchin Saravanan, Abhinav Vallabhaneni, Achintya Agrawal, Aashi Juneja",
    about: "Nudge doesn't block your escape - it builds your bridge to focus.",
  },
  {
    emoji: "🪼",
    track: "Best Design",
    project: "WNBA",
    image: "/assets/about/winners/wnba.png",
    team: "Isaiah Hoagland, Sunny Tian, Farrel Sudrajat",
    about: "Introducing the WNBA to new fans through an improved fantasy experience.",
  },
];

export const pastWinnersLinks = {
  recap: "https://www.instagram.com/p/DUl4qrAEp6-/?img_index=1",
  judgingSlides:
    "https://www.figma.com/slides/U9UfoWDtiYncSv54wT1lB5/judging-day?node-id=4108-116",
};

export const contact = {
  email: "winfo@uw.edu",
  instagram: "https://www.instagram.com/uwwinfo/",
  linkedin: "https://www.linkedin.com/company/women-in-informatics/",
  youtube: "https://www.youtube.com/@uw_winfo",
  facebook: "https://www.facebook.com/groups/winfouw/",
};
export const workshops = [
  {
    icon: "/assets/resources/icon-design.png",
    title: "Design Workshop",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "🏔️ Interested in leveling up your Figma skills before the WINFO Hackathon? Now's your chance!\n\nJoin Figma Campus Leaders for a hands-on workshop covering Auto Layout, Components, and Variables! These are three essential tools for designing faster, smarter, and more scalable interfaces.\n\nWhether you’re new to Figma or looking to sharpen your skills, this workshop will help you build flexible designs, collaborate more efficiently, and move seamlessly from idea to prototype. Come learn, ask questions, and get hackathon-ready with confidence.",
  },
  {
    icon: "/assets/resources/icon-code.png",
    title: "All about ‘Best Implementation’",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
];

export const events = [
  {
    icon: "/assets/resources/icon-team.png",
    title: "Team Formation",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "lorem ipsum dolor sit amet consectetur adipiscing elit voluptas anim accusamus quas optio in adipiscing optio officia.",
  },
  {
    icon: "/assets/resources/icon-laptop.png",
    title: "Hack the Hackathon",
    when: "Thursday, January 15, from 5:30 to 7pm | HUB 214",
    desc: "New to the hackathon or still searching for a team? Hack the Hackathon has you covered 🥾\n\nThis session gives you the opportunity to:\n🥾 Meet other participants and potential teammates\n🌲 Learn more about the hackathon structure, expectations, and tips & tricks\n🏔️ Get your brain working on early ideation and making the most out of our hackathon!\n\nDive in early, explore new ideas, and kick off the hackathon with confidence.",
  },
];

export const designResources = [
  { label: "Design Basics", url: "https://www.figma.com/resource-library/design-basics/" },
  { label: "How to use Figma", url: "https://www.figma.com/resource-library/k-12-design-basics/" },
];
export const devResources = [
  { label: "How to collaborate with Github", url: "https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67" },
  { label: "Intro to Web Dev", url: "https://www.youtube.com/watch?v=ysEN5RaKOlA" },
  { label: "Intro to CSS Animations", url: "https://www.youtube.com/watch?v=z2LQYsZhsFw" },
];

export const whatIsWinfo = {
  aboutParagraph1: `Women in Informatics (WINFO) is a diversity organization at the Information School at the University` +
    ` of Washington, Seattle, dedicated to empowering women and non-binary individuals to thrive as producers of technology.`,

  aboutParagraph2: `The purpose of our hackathon is to provide participants with a fun, safe, beginner-friendly, and` +
    ` collaborative environment in which they can develop new skills, network with industry professionals, and learn` +
    ` more about the tech industry.`,
}