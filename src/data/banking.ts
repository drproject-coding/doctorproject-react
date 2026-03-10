import { faker } from "@faker-js/faker";

faker.seed(99);

/* ─── Types ───────────────────────────────── */

export interface BankCard {
  id: string;
  type: "debit" | "credit";
  number: string;
  maskedNumber: string;
  holder: string;
  valid: string;
  balance: number;
  blockedAmount: number;
  status: "Active" | "Blocked" | "Expired";
  color: string;
}

export interface Transaction {
  id: string;
  description: string;
  type: string;
  amount: number;
  fee: number;
  date: string;
  time: string;
  icon: string;
  iconBg: string;
}

export interface Balance {
  currency: string;
  amount: number;
  flag: string;
}

export interface Contact {
  id: string;
  name: string;
  accountEnding: string;
  currency: string;
  avatar: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface PaymentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface LimitItem {
  label: string;
  spent: number;
  total: number;
  color: string;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  category: string;
  courseCount: number;
  duration: string;
  type: "Remote" | "On-site" | "Hybrid";
  image: string;
}

export interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface HelpArticle {
  id: string;
  title: string;
  date: string;
  category: string;
}

export interface TeamMember {
  name: string;
  avatar: string;
}

/* ─── Banking Nav Items ──────────────────── */

export interface BankMenuItem {
  label: string;
  href: string;
  badge?: number;
  iconSvg: string;
}

export const bankingNavItems: BankMenuItem[] = [
  {
    label: "Dashboard",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="7" height="7"/><rect x="11" y="2" width="7" height="7"/><rect x="2" y="11" width="7" height="7"/><rect x="11" y="11" width="7" height="7"/></svg>`,
  },
  {
    label: "Accounts",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="16" height="12" rx="0"/><line x1="2" y1="8" x2="18" y2="8"/></svg>`,
  },
  {
    label: "Transactions",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4,8 4,2 16,2 16,8"/><polyline points="4,12 4,18 16,18 16,12"/><line x1="1" y1="10" x2="19" y2="10"/></svg>`,
  },
  {
    label: "Crypto Assets",
    href: "#",
    badge: 28,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="8"/><path d="M7 7h4c1.1 0 2 .9 2 2s-.9 2-2 2H7m0 0h5c1.1 0 2 .9 2 2s-.9 2-2 2H7m3-12v2m0 8v2"/></svg>`,
  },
  {
    label: "Payments",
    href: "#",
    badge: 14,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="18" height="12"/><circle cx="10" cy="10" r="3"/></svg>`,
  },
  {
    label: "Reports",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="10" width="3" height="8"/><rect x="8.5" y="5" width="3" height="13"/><rect x="14" y="2" width="3" height="16"/></svg>`,
  },
];

export const reportNavItems: BankMenuItem[] = [
  {
    label: "Dashboard",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="7" height="7"/><rect x="11" y="2" width="7" height="7"/><rect x="2" y="11" width="7" height="7"/><rect x="11" y="11" width="7" height="7"/></svg>`,
  },
  {
    label: "Products",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="16" height="14"/><polyline points="2,4 10,0 18,4"/></svg>`,
  },
  {
    label: "Contacts",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="6" r="4"/><path d="M2 18c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  },
  {
    label: "Customers",
    href: "#",
    badge: 15,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="7" r="3"/><circle cx="14" cy="7" r="3"/><path d="M1 17c0-3 2.5-5 6-5s6 2 6 5m-6 0c0-3 2.5-5 6-5s6 2 6 5"/></svg>`,
  },
  {
    label: "Sales",
    href: "#",
    badge: 14,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2l4 4m0 0l4-4m-4 4v12"/><path d="M18 18l-4-4m0 0l-4 4m4-4V2"/></svg>`,
  },
  {
    label: "Analytics",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2,16 6,8 10,12 14,4 18,9"/><line x1="2" y1="18" x2="18" y2="18"/></svg>`,
  },
];

export const educationNavItems: BankMenuItem[] = [
  {
    label: "Explore Courses",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="7"/><line x1="14" y1="14" x2="18" y2="18"/></svg>`,
  },
  {
    label: "Degrees",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8l8-4 8 4-8 4z"/><path d="M4 9v6l6 3 6-3V9"/></svg>`,
  },
  {
    label: "Students",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="6" r="4"/><path d="M2 18c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  },
  {
    label: "Universities",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="14" height="10"/><path d="M3 8l7-6 7 6"/><line x1="10" y1="12" x2="10" y2="18"/></svg>`,
  },
  {
    label: "Schedule",
    href: "#",
    badge: 32,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="16" height="14"/><line x1="2" y1="8" x2="18" y2="8"/><line x1="6" y1="2" x2="6" y2="6"/><line x1="14" y1="2" x2="14" y2="6"/></svg>`,
  },
  {
    label: "Knowledge Base",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2h6l2 2 2-2h6v14h-6l-2 2-2-2H2z"/></svg>`,
  },
];

export const supportNavItems: BankMenuItem[] = [
  {
    label: "Dashboard",
    href: "#",
    badge: 15,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="7" height="7"/><rect x="11" y="2" width="7" height="7"/><rect x="2" y="11" width="7" height="7"/><rect x="11" y="11" width="7" height="7"/></svg>`,
  },
  {
    label: "Projects",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="16" height="14"/><path d="M2 3l6 0 2 -2h8"/></svg>`,
  },
  {
    label: "Tasks",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4,10 8,14 16,6"/></svg>`,
  },
  {
    label: "Kanban Desk",
    href: "#",
    badge: 28,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="5" height="16"/><rect x="8" y="2" width="5" height="10"/><rect x="14" y="2" width="5" height="13"/></svg>`,
  },
  {
    label: "File Manager",
    href: "#",
    badge: 14,
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="2" width="14" height="16"/><line x1="7" y1="6" x2="13" y2="6"/><line x1="7" y1="10" x2="13" y2="10"/></svg>`,
  },
  {
    label: "Calendar",
    href: "#",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="16" height="14"/><line x1="2" y1="8" x2="18" y2="8"/><line x1="6" y1="2" x2="6" y2="6"/><line x1="14" y1="2" x2="14" y2="6"/></svg>`,
  },
];

/* ─── Generators ─────────────────────────── */

export function generateCards(): BankCard[] {
  return [
    {
      id: "1",
      type: "debit",
      number: "3400 5678 9804 3002",
      maskedNumber: "**** 7890",
      holder: "Barry Armstrong",
      valid: "06 / 26",
      balance: 42800,
      blockedAmount: 1200,
      status: "Active",
      color: "#631DED",
    },
    {
      id: "2",
      type: "credit",
      number: "4200 1234 5678 4340",
      maskedNumber: "**** 4340",
      holder: "Barry Armstrong",
      valid: "09 / 27",
      balance: 15600,
      blockedAmount: 500,
      status: "Active",
      color: "#FF6C01",
    },
  ];
}

export function generateTransactions(count = 10): Transaction[] {
  const types = [
    "Phone payment",
    "Bank transfer",
    "Cash",
    "Online payment",
    "Utility payment",
  ];
  const descriptions = [
    "Vodafone account top up ****04",
    "Money transfer to John Doe",
    "ATM Cash withdrawal",
    "Online purchase on Amazon.com",
    "Income payment for projects",
    "Monthly home rent",
    "Income payment for provided services",
    "Online purchase at Ebay.com",
    "IOfinance UI kit purchase",
    "Internet payment",
    "Grocery Store",
    "Netflix Subscription",
    "Spotify Premium",
    "Electric Bill Payment",
  ];
  const icons = ["V", "C", "M", "A", "B", "S", "N", "E"];
  const iconBgs = [
    "#FF4444",
    "#2196F3",
    "#FF9800",
    "#FF6C01",
    "#121212",
    "#631DED",
    "#4CAF50",
    "#E91E63",
  ];

  return Array.from({ length: count }, (_, i) => {
    const isIncome = faker.datatype.boolean({ probability: 0.3 });
    return {
      id: faker.string.uuid(),
      description: descriptions[i % descriptions.length],
      type: types[i % types.length],
      amount: isIncome
        ? faker.number.float({ min: 500, max: 12000, fractionDigits: 2 })
        : -faker.number.float({ min: 4, max: 10500, fractionDigits: 2 }),
      fee: faker.number.float({ min: 2, max: 9, fractionDigits: 2 }),
      date: faker.date
        .recent({ days: 30 })
        .toLocaleDateString("en-US", { day: "numeric", month: "short" }),
      time: faker.date.recent({ days: 30 }).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      icon: icons[i % icons.length],
      iconBg: iconBgs[i % iconBgs.length],
    };
  });
}

export function generateBalances(): Balance[] {
  return [
    { currency: "USD", amount: 100050.75, flag: "🇺🇸" },
    { currency: "EUR", amount: 10.4, flag: "🇪🇺" },
    { currency: "GBP", amount: 95.5, flag: "🇬🇧" },
  ];
}

export function generateContacts(count = 10): Contact[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    accountEnding: faker.finance.accountNumber(4),
    currency: faker.helpers.arrayElement(["USD", "EUR", "GBP"]),
    avatar: faker.image.avatar(),
  }));
}

export function generateLimits(): LimitItem[] {
  return [
    { label: "ATM Withdrawals", spent: 5100, total: 6900, color: "#98E9AB" },
    {
      label: "Daily ATM Withdrawals",
      spent: 600,
      total: 1000,
      color: "#FF6C01",
    },
    { label: "Cash In in ATMs", spent: 1500, total: 10000, color: "#631DED" },
    { label: "Online Purchase", spent: 1500, total: 10000, color: "#E99898" },
  ];
}

export function generateServiceProviders(): ServiceProvider[] {
  return [
    {
      id: "1",
      name: "Mobile Networks",
      description: "Top up your balance instantly",
      icon: "📱",
    },
    {
      id: "2",
      name: "Utilities",
      description: "Check your home utility bills",
      icon: "💡",
    },
    {
      id: "3",
      name: "Government",
      description: "Pay car fines, taxes, and service",
      icon: "🏛",
    },
    {
      id: "4",
      name: "Internet Providers",
      description: "Find Internet provider in your area",
      icon: "🌐",
    },
  ];
}

export function generatePaymentCategories(): PaymentCategory[] {
  return [
    {
      id: "1",
      name: "Transfer to someone",
      description: "156 contacts",
      icon: "💸",
    },
    {
      id: "2",
      name: "Pay for utilities",
      description: "98 service providers",
      icon: "🏠",
    },
  ];
}

export function generateCourses(count = 6): Course[] {
  const titles = [
    "Developing Applications with Google Cloud Platform",
    "Full Stack Web Development with Angular Specialization",
    "Web Design for Everybody: Basics of Web Development",
    "Responsive Development and Design Specialization",
    "Web Applications for Everybody Specialization",
    "Development and Design Specialization",
  ];
  const institutions = [
    "University of Indiana-Champaign",
    "The Hong Kong University of Science",
    "University of Michigan",
    "Arizona State University",
    "Imperial College London",
    "Stanford University",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: faker.string.uuid(),
    title: titles[i % titles.length],
    institution: institutions[i % institutions.length],
    category: faker.helpers.arrayElement([
      "Data Science",
      "Business Management",
      "Development",
      "Technologies",
      "Computer Science",
    ]),
    courseCount: faker.number.int({ min: 12, max: 78 }),
    duration: `${faker.number.int({ min: 6, max: 36 })} months`,
    type: faker.helpers.arrayElement(["Remote", "On-site", "Hybrid"] as const),
    image: `https://picsum.photos/seed/${i + 10}/400/250`,
  }));
}

export function generateHelpCategories(): HelpCategory[] {
  return [
    {
      id: "1",
      name: "Wallet",
      description: "The best self-hosted wallet",
      icon: "💳",
    },
    {
      id: "2",
      name: "Commerce",
      description: "Accept payments from anyone",
      icon: "🛒",
    },
    {
      id: "3",
      name: "Cloud",
      description: "Build the future of payments",
      icon: "☁️",
    },
    {
      id: "4",
      name: "Online Trading",
      description: "Trade with confidence",
      icon: "📈",
    },
    {
      id: "5",
      name: "Exchange",
      description: "Exchange currencies instantly",
      icon: "🔄",
    },
    {
      id: "6",
      name: "Query & Transactions",
      description: "Track all activity",
      icon: "🔍",
    },
    { id: "7", name: "Card", description: "Manage your cards", icon: "💳" },
    {
      id: "8",
      name: "Intelligence",
      description: "Smart financial insights",
      icon: "🧠",
    },
    {
      id: "9",
      name: "Apps downloads",
      description: "Get our mobile apps",
      icon: "📲",
    },
  ];
}

export function generateHelpArticles(): HelpArticle[] {
  return [
    {
      id: "1",
      title:
        "Waiting period for first payout on our fintech platform for marketplaces",
      date: "31 Dec 2021",
      category: "Payments",
    },
    {
      id: "2",
      title:
        "Strong Customer Authentication-related preparations for businesses",
      date: "04 Sep 2020",
      category: "Account and settings",
    },
    {
      id: "3",
      title:
        "Security, permissions, and access levels when connecting your account",
      date: "1 Feb 2022",
      category: "Payments",
    },
  ];
}

export function generateTeamMembers(): TeamMember[] {
  return [
    { name: "Alexandre Paiva", avatar: "https://i.pravatar.cc/40?img=11" },
    { name: "Thanawan Chadee", avatar: "https://i.pravatar.cc/40?img=25" },
    { name: "Justine Robinson", avatar: "https://i.pravatar.cc/40?img=32" },
  ];
}

export function generateChartBars(count = 12): number[] {
  return Array.from({ length: count }, () =>
    faker.number.int({ min: 150, max: 520 }),
  );
}

export function generateWaveData(count = 12): {
  primary: number[];
  secondary: number[];
} {
  return {
    primary: Array.from({ length: count }, () =>
      faker.number.int({ min: 50, max: 450 }),
    ),
    secondary: Array.from({ length: count }, () =>
      faker.number.int({ min: 50, max: 350 }),
    ),
  };
}

/* ─── Pre-generated data ─────────────────── */

export const cards = generateCards();
export const transactions = generateTransactions(10);
export const balances = generateBalances();
export const contacts = generateContacts(10);
export const limits = generateLimits();
export const serviceProviders = generateServiceProviders();
export const paymentCategories = generatePaymentCategories();
export const courses = generateCourses(6);
export const helpCategories = generateHelpCategories();
export const helpArticles = generateHelpArticles();
export const teamMembers = generateTeamMembers();
export const chartBars = generateChartBars(12);
export const waveData = generateWaveData(12);
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
