export const messages = {
  // Navigation
  'nav.work': 'Work',
  'nav.experiments': 'Experiments',
  'nav.cv': 'CV',
  'nav.contact': 'Contact',
  
  // Home page
  'home.tagline': 'Your next founding designer',
  'home.featuredWork.title': 'Featured Work',
  'home.featuredWork.description': 'A selection of projects showcasing design, strategy, and product development across diverse industries.',
  'home.experiments.title': 'Creative Explorations',
  'home.experiments.description': 'A collection of design experiments, prototypes, and creative projects exploring new ideas and techniques.',
  'home.cv.title': 'Professional Journey',
  'home.cv.description': 'Over 15 years of experience shaping products and leading design teams across diverse industries.',
  'home.contact.title': "Let's Connect",
  'home.contact.description': "I'm always interested in new opportunities, collaborations, and conversations about design, product, and innovation.",
  'home.contact.email': 'Email',
  'home.contact.emailSubtitle': 'Click to copy to clipboard',
  'home.contact.linkedin': 'LinkedIn',
  'home.contact.linkedinSubtitle': 'Professional Network',
  'home.contact.availability': 'Available for freelance projects and full-time opportunities',
  'home.contact.emailCopied': 'Email copied to clipboard!',
  
  // Work pages
  'work.allWork.title': 'All work',
  'work.close': 'Close and return to home',
  'work.client': 'Client',
  'work.role': 'Role',
  'work.impact': 'Impact',
  'work.previous': 'Previous',
  'work.next': 'Next',
  
  // CV page
  'cv.title': 'CV',
  
  // Experiments page
  'experiments.title': 'Experiments',
  
  // WIP Banner
  'wip.title': 'Work In Progress',
  'wip.subtitle': 'Please come back later — things are being built!',
  'wip.close': 'Close',
  
  // Language switcher
  'lang.en': 'English',
  'lang.fr': 'Français',
  
  // CV content
  'cv.coreExpertise': 'Core Expertise',
  'cv.design': 'Design',
  'cv.designDescription': 'User Research, Prototyping, Design Systems, Strategy',
  'cv.product': 'Product',
  'cv.productDescription': 'Roadmapping, Product-Market Fit, User Interviews',
  'cv.leadership': 'Leadership',
  'cv.leadershipDescription': 'Team Management, Design Vision, Strategic Direction',
  'cv.professionalExperience': 'Professional Experience',
} as const;

export type MessageKey = keyof typeof messages;
