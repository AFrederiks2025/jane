import type { SiteContent } from "./types";

export const en: SiteContent = {
  common: {
    langName: "English",
    switchTo: "Nederlands",
    nav: {
      home: "Home",
      about: "About",
      methodology: "Talent methodology",
      coaches: "Coaches",
      experiences: "Experiences",
      institute: "Jane institute",
      books: "Books",
      contact: "Contact",
    },
    account: {
      label: "Account",
      coachLogin: "Coach login",
      studentLogin: "Student login",
      trainerLogin: "Trainer login",
      myAccount: "My account",
      noAccount: "No account yet?",
      register: "Get started",
    },
    cta: {
      header: "YES, I’M IN",
      forMe: "Discover this for myself!",
      forOthers: "Help others discover!",
    },
    footer: {
      tagline: "Discover identity and purpose.",
      contactTitle: "Contact",
      email: "jamila@jane.nl",
      phone: "+31 6 49749381",
      phoneHref: "tel:+31649749381",
      address: "Koningin Julianastraat 33\n6668 AG Randwijk, the Netherlands",
      social: "Follow us",
      legal: "Privacy Policy",
      legalHref: "/en/privacy",
      credit: "© 2026 VanderSchaaf Publications BV. All rights reserved.",
    },
    chat: "Hi, ask JANE a question!",
    readMore: "Read more »",
    download: "Download sample report",
    downloadBrochure: "Download brochure",
  },
  home: {
    metaTitle: "Jane® — Discover identity and purpose",
    metaDescription:
      "Discover identity and purpose with the Jane® Talent Methodology. Personal insight for individuals, teams and organisations.",
    hero: {
      eyebrow: "Jane® Talent Methodology",
      title: "Discover identity and purpose with the Jane® Talent Methodology",
      subtitle:
        "A reliable way to get to the core of your unique identity, based on your natural talent.",
    },
    unique: {
      eyebrow: "We are unique",
      title: "It starts with talent",
      paragraphs: [
        "Personal insight is at the heart of coaching. When people learn to understand themselves (and others) better, that is the first step towards improvement, growth or recovery.",
        "Identity is what is unique to a person and offers valuable insight into the (unconscious) self-image. The same applies to the collective identity of teams and organisations.",
        "The Jane® Talent Methodology offers a reliable way to get to the core of this unique identity — based on talent.",
      ],
    },
    value: {
      eyebrow: "Why others work with Jane®",
      title: "The added value of Jane®",
      items: [
        {
          title: "Scientifically grounded",
          body: "A full psychological assessment with IQ test, questionnaires and validation interview — developed by an NIP-certified assessment psychologist.",
        },
        {
          title: "27 talents in one diagram",
          body: "The Jane® Talent diagram shows your talents, powerful combinations and growth inhibitors at a single glance.",
        },
        {
          title: "For individuals, teams and organisations",
          body: "A group diagram integrates the results of two or more people — powerful for partners, teams and departments.",
        },
        {
          title: "Always with personal guidance",
          body: "A certified coach translates the insights into real-world growth. No report in a drawer — change that sticks.",
        },
      ],
    },
    blogs: {
      eyebrow: "Short stories from coaches and clients",
      title: "Personal blogs with experiences from the field",
      filterLabel: "Filter by",
      filters: { all: "All", participants: "Participants", professionals: "Professionals" },
    },
    coaches: {
      eyebrow: "Our certified coaches",
      title: "They apply the Jane® Talent Methodology every day",
      cta: "View all coaches",
    },
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "About Jane® — we believe every person has a unique value that needs to be discovered and known.",
    quote: "You are simply far more effective when you know your talents!",
    intro: {
      title: "Our vision",
      paragraphs: [
        "Jane® believes every person has a unique value that needs to be discovered and known — individually and together. The Jane® Talent Methodology makes this unique value visible.",
        "Development happens through interaction with others. That’s why Jane® believes in personal guidance from a certified coach, trainer or facilitator.",
        "Jane works together with trusted professionals and agencies in the Netherlands and abroad.",
      ],
    },
    people: [
      {
        name: "Jamila de Jong-van der Schaaf",
        role: "Proud owner",
        photo: "/photos/about/jamila.jpg",
        bio: "I believe people are uniquely made by God and have a personal purpose here on earth. I’m still amazed at how few people today are able to name their natural talents, let alone realise their value to others and to the world around them. Organisations, teams and departments also leave much potential — and financial results — untapped. I refuse to accept that. Together with others, I’m committed to offering people unique insight, so they can be effective, successful, and enjoy more of themselves.",
      },
      {
        name: "Dirk van der Schaaf",
        role: "Founder of Jane (1950–2017)",
        photo: "/photos/about/dirk.jpg",
        bio: "Fascinated by mapping personality, Dirk believed in a God who created people to be of value to one another. As an NIP-certified assessment psychologist, he missed an effective instrument for matching people, role and organisation. He developed his own scientifically grounded evaluation method and named it ‘Jane’ — after his wife, who had taught him that ‘it’s not about what you do, but about who you are’.",
      },
    ],
  },
  methodology: {
    metaTitle: "Jane® Talent Methodology",
    metaDescription:
      "The Jane® Talent Methodology maps natural talents using a full psychological assessment and validation interview.",
    hero: {
      eyebrow: "Scientifically grounded",
      title: "Jane® Talent Methodology",
      lead: "The Jane® methodology maps your natural talents using a full psychological assessment (IQ test and questionnaires) and a validation interview.",
    },
    explainer: [
      "Natural talents are the lens through which we see the world. They form the basis of motivation, skills and competencies, and explain the ‘why’ behind who we are, what we can do and what we want.",
      "This insight reveals unique value and potential — for yourself and for the people around you.",
    ],
    blocks: [
      {
        eyebrow: "For others",
        title: "27 talents in one diagram",
        body: "The Talent Evaluation measures 27 talents shown in the Jane® Talent diagram. At a glance you see the talents, the combinations that lead to specific performances, and the growth inhibitor(s). A group diagram integrates the results of two or more people — insight for partners and teams.",
      },
      {
        eyebrow: "For ourselves",
        title: "Understand, develop, apply",
        body: "We learn to understand, develop and apply ourselves and others. We make important choices more effectively (personal and work, study, career), break through personal growth inhibitors, realise ambitions and communicate our added value to those around us.",
      },
    ],
    portfolio: {
      title: "Product portfolio",
      subtitle: "Downloadable sample reports (available in EN and NL).",
      items: [
        {
          name: "Jane® Talent Report",
          description: "Full insight into your natural talents, talent combinations and growth inhibitors.",
          href: "#",
        },
        {
          name: "Jane® Role Report",
          description: "Makes the match between person, role and organisation concrete and actionable.",
          href: "#",
        },
        {
          name: "Jane® Young Talent Report",
          description: "Specifically for young people — provides direction for study and career choices.",
          href: "#",
        },
      ],
    },
  },
  experiences: {
    metaTitle: "Experiences",
    metaDescription: "Personal blogs with unique experiences from Jane® certified coaches and participants.",
    hero: {
      eyebrow: "Stories from the field",
      title: "Personal blogs with unique experiences",
      lead: "Click any of the photos to read more.",
    },
    filters: { all: "All", participants: "Participants", professionals: "Professionals" },
  },
  institute: {
    metaTitle: "Jane institute",
    metaDescription:
      "Bring the Jane® Talent Methodology into your own practice — certification, basic training and intervision.",
    hero: {
      eyebrow: "Jane® Institute",
      title: "You are the starting point — before and during our trainings",
      lead: "The Jane® Talent Methodology in your own practice.",
    },
    certification: {
      title: "Basic certification training",
      body: "During the basic training you are educated in the Jane® Talent Methodology and equipped to guide others in discovering their natural talents, unique purpose (work/personal) and personal growth inhibitor(s). On completion you receive the Jane® Certificate and access to the online web application. Certified coaches work together under a licensing agreement.",
    },
    intervision: {
      title: "Intervision",
      body: "The Jane® Institute offers annual intervision sessions for certified coaches — sharing knowledge and experience with fellow coaches and continuing to grow in your craft.",
    },
    practical: {
      title: "Practical information",
      lines: [
        "Location: Marten Meesweg 8, Rotterdam",
        "Time: 12:00 – 17:00",
        "Dates: 13, 20 and 27 January + 3, 10 and 17 February 2026",
      ],
    },
    trainings: [
      {
        name: "Basic certification training — Jane® Talent Methodology",
        description: "The foundational training for coaches, trainers and facilitators.",
        href: "#",
      },
      {
        name: "Follow-up training — Coaching with Jane® Basic Plus",
        description: "A deeper dive for certified coaches who want to apply the methodology with even more power.",
        href: "#",
      },
      {
        name: "Basic certification training — Jane® Young Talent",
        description: "Specifically for those who guide young people in study and career choices.",
        href: "#",
      },
    ],
    quote: "As a coach you play an essential role — you create the magic in the conversation.",
    selfWorth: {
      title: "Get to know your own unique value as a person and coach",
      body: "‘You take yourself with you everywhere you go’ applies to you as a coach, trainer or advisor too. Your unique combination of talents shapes how you approach your work, the style that fits you, the clients who fit you, and how you position yourself in the market. The Jane® Talent Journey provides insight, helps you to make your added value concrete and to communicate it to (prospective) clients, and supports the strategic choices for the further development of your practice.",
      tagline: "Cash in on your own unique value!",
    },
  },
  experiencesData: [
    {
      slug: "volke-hoekstra",
      name: "Volke Hoekstra",
      role: "Jane® certified coach",
      category: "professionals",
      excerpt:
        "Jane® certified coach. Coaching for employees, starters, outplacement and reintegration.",
      story: [
        "As a certified coach I work with Jane® because in my practice I see that people only really start moving when they see and understand their own talents. The Jane® Talent Methodology offers that insight at a deep level.",
        "I use the methodology for very different questions — from employees who get stuck, to starters looking for direction, to people in outplacement or reintegration. The starting point is always the same: who someone is, not what they do.",
        "That brings calm, direction and confidence. That’s exactly why this work is so valuable.",
      ],
    },
    {
      slug: "siebe-slagter",
      name: "Siebe Slagter",
      role: "Consultant and coach",
      category: "professionals",
      excerpt:
        "Works from his consulting practice on selection, deployment and development — with a focus on corporate identity.",
      story: [
        "From my consulting practice I work on questions around selection, deployment and development. The common thread: corporate identity. How do you arrive at the identity of a team, department or organisation — and how do you make that identity productive?",
        "Jane® helps me to approach that identity not from roles or job descriptions, but from talent. That opens conversations that would otherwise not happen.",
      ],
    },
    {
      slug: "sebastiaan-kuijt",
      name: "Sebastiaan Kuijt",
      role: "CDD Analyst, Rabobank",
      category: "participants",
      excerpt: "CDD Analyst at Rabobank. Shares how Jane® made his talents visible and got him moving.",
      story: [
        "Before the Jane® journey I had words for the things I was good at — but I couldn’t explain why. The assessment and validation conversation finally gave me a grip on that.",
        "What I took away above all: I now know what gives me energy and what drains me, and I can explain it to those around me. That helped me make more conscious choices in my work at Rabobank.",
      ],
    },
    {
      slug: "saskia-roelofsen",
      name: "Saskia Roelofsen",
      role: "Coach",
      category: "professionals",
      excerpt:
        "“Why do I prefer to work with Jane®? Because Jane® gives sharp, precise insight into the heart of a person’s identity.”",
      story: [
        "Why do I prefer to work with Jane®? Because Jane® gives sharp, precise insight into the heart of a person’s identity. Not just a type or a profile, but a living picture of who someone truly is.",
        "In my coaching practice, that is the starting point for growth. Without that foundation, guidance often stays on the surface.",
      ],
    },
    {
      slug: "richard-calandt",
      name: "Richard Calandt",
      role: "Coach",
      category: "professionals",
      excerpt:
        "As a coach, Jane reveals the deeper meaning of talent for him — the best starting point for an intensive coaching journey.",
      story: [
        "As a coach, Jane reveals the deeper meaning of talent for me. For an intensive coaching journey, that’s the best starting point I know.",
        "What I love is that the methodology offers both structure and room for the personal story behind the data.",
      ],
    },
    {
      slug: "rob-zigter-podcast",
      name: "Podcast with Rob Zigter",
      role: "Conversation on personal leadership",
      category: "professionals",
      excerpt:
        "A conversation about personal leadership: knowing when to say ‘yes’ and ‘no’, and taking responsibility.",
      story: [
        "In this podcast we talk with Rob Zigter about personal leadership. How do you know when to say ‘yes’ and ‘no’? How do you take responsibility for your own course — at work and at home?",
        "A conversation that gets right to the heart of what Jane® is about: acting from who you really are.",
      ],
    },
    {
      slug: "andrea-cramer-kieboom",
      name: "Andrea Cramer Kieboom",
      role: "Coach",
      category: "professionals",
      excerpt: "A coach with a heart for talent — uses Jane® to help people flourish.",
      story: [
        "I believe every person has a unique set of talents. My work as a coach is to help people see, name and apply those talents.",
        "Jane® gives me the sharpest instrument I know for that — and with it, I can help people truly flourish.",
      ],
    },
    {
      slug: "marieke-van-de-vegt",
      name: "Marieke van de Vegt",
      role: "Coach",
      category: "professionals",
      excerpt:
        "Helps people recognise their unique value and apply it concretely in work and life.",
      story: [
        "People often know what they are ‘good at’, but far less often why they make a difference exactly there. With Jane® I help people to recognise that unique value.",
        "And above all: to do something concrete with it — at work and at home.",
      ],
    },
    {
      slug: "marten-schippers",
      name: "Marten Schippers",
      role: "Participant",
      category: "participants",
      excerpt:
        "Participant in a Jane® journey. Shares how he learned to name his talents and turn them into choices.",
      story: [
        "I thought I knew myself pretty well. During the Jane® journey I discovered that I had words for what I thought, but not for who I am.",
        "That difference has helped me make clearer choices — choices I still stand by today.",
      ],
    },
    {
      slug: "petra-van-gans",
      name: "Petra van Gans",
      role: "Coach",
      category: "professionals",
      excerpt: "Certified coach. Works from her practice on personal growth and team development.",
      story: [
        "In my practice I work on personal growth and team development. Jane® works for both — and that’s quite special.",
        "With teams, I often see that the group diagram starts conversations that didn’t happen before. That’s exactly what a team needs to move forward.",
      ],
    },
  ],
  coachesData: [
    {
      slug: "jamila-de-jong",
      name: "Jamila de Jong-van der Schaaf",
      role: "Owner & coach",
      location: "Rotterdam",
      specialties: ["Talent coaching", "Team development", "Career guidance"],
      bio: "Jamila is the owner of Jane® and a certified coach. She guides individuals and teams in discovering and applying their unique talents — with an eye for both the person and the result.",
      photo: "/photos/about/jamila.jpg",
      email: "jamila@jane.nl",
      acceptingClients: true,
    },
    {
      slug: "volke-hoekstra",
      name: "Volke Hoekstra",
      role: "Coach & trainer",
      location: "Friesland",
      specialties: ["Outplacement", "Reintegration", "Starters"],
      bio: "Volke works from his practice with employees, starters and people in transition. The Jane® methodology is his starting point: who someone is, not what they do.",
      storySlug: "volke-hoekstra",
      acceptingClients: true,
    },
    {
      slug: "siebe-slagter",
      name: "Siebe Slagter",
      role: "Consultant & coach",
      location: "Utrecht",
      specialties: ["Corporate identity", "Selection & assessment", "Team development"],
      bio: "From his consulting practice, Siebe works on selection, deployment and development with a focus on the identity of teams and organisations. Jane® opens conversations that wouldn’t otherwise happen.",
      storySlug: "siebe-slagter",
      acceptingClients: true,
    },
    {
      slug: "saskia-roelofsen",
      name: "Saskia Roelofsen",
      role: "Coach",
      location: "Zwolle",
      specialties: ["Personal leadership", "Identity", "Coaching"],
      bio: "Saskia prefers to work with Jane® because it gives sharp, precise insight into the heart of someone’s identity — the starting point for real growth.",
      storySlug: "saskia-roelofsen",
      acceptingClients: true,
    },
    {
      slug: "richard-calandt",
      name: "Richard Calandt",
      role: "Coach",
      location: "Amsterdam",
      specialties: ["Intensive coaching", "Life questions", "Career"],
      bio: "Richard uses Jane® as the starting point for intensive coaching journeys. The methodology maps out the deeper meaning of talent for him.",
      storySlug: "richard-calandt",
      acceptingClients: true,
    },
    {
      slug: "andrea-cramer-kieboom",
      name: "Andrea Cramer Kieboom",
      role: "Coach",
      location: "Gelderland",
      specialties: ["Personal growth", "Women", "Talent"],
      bio: "A coach with a heart for talent. Andrea uses Jane® to help people flourish — by seeing, naming and applying their talents.",
      storySlug: "andrea-cramer-kieboom",
      acceptingClients: true,
    },
    {
      slug: "marieke-van-de-vegt",
      name: "Marieke van de Vegt",
      role: "Coach",
      location: "Overijssel",
      specialties: ["Career", "Life-stage coaching", "Work and life"],
      bio: "Marieke helps people recognise their unique value and apply it concretely. Not just in words — most of all, in new choices.",
      storySlug: "marieke-van-de-vegt",
      acceptingClients: true,
    },
    {
      slug: "petra-van-gans",
      name: "Petra van Gans",
      role: "Coach",
      location: "Brabant",
      specialties: ["Personal growth", "Team development", "Group diagram"],
      bio: "Petra works from her practice on personal growth and team development. The Jane® group diagram surfaces conversations that didn’t happen before.",
      storySlug: "petra-van-gans",
      acceptingClients: true,
    },
  ],
};
