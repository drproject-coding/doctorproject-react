import { faker } from "@faker-js/faker";

faker.seed(42);

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive" | "Pending";
  avatar: string;
  joinDate: string;
  lastActive: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface MenuItem {
  label: string;
  href: string;
  badge?: number;
  icon: string;
  iconSvg: string;
}

export function generateUsers(count = 12): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["Admin", "Editor", "Viewer"] as const),
    status: faker.helpers.arrayElement([
      "Active",
      "Inactive",
      "Pending",
    ] as const),
    avatar: faker.image.avatar(),
    joinDate: faker.date.past({ years: 2 }).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    lastActive: faker.date.recent({ days: 30 }).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));
}

export function generateStats(): StatCard[] {
  return [
    { label: "Total Revenue", value: "$48,290", change: "+12.5%", trend: "up" },
    { label: "Active Users", value: "2,847", change: "+8.2%", trend: "up" },
    { label: "New Orders", value: "384", change: "-3.1%", trend: "down" },
    { label: "Conversion Rate", value: "3.24%", change: "+0.8%", trend: "up" },
  ];
}

export function generateChartData() {
  const months = [
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
  return {
    labels: months,
    revenue: months.map(() => faker.number.int({ min: 20000, max: 60000 })),
    users: months.map(() => faker.number.int({ min: 500, max: 3000 })),
    orders: months.map(() => faker.number.int({ min: 100, max: 500 })),
  };
}

export function generateMenuItems(): MenuItem[] {
  return [
    {
      label: "Dashboard",
      href: "#",
      icon: "dashboard",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="7" height="7"/><rect x="11" y="2" width="7" height="7"/><rect x="2" y="11" width="7" height="7"/><rect x="11" y="11" width="7" height="7"/></svg>`,
    },
    {
      label: "Analytics",
      href: "#",
      icon: "analytics",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2,16 6,8 10,12 14,4 18,9"/><line x1="2" y1="18" x2="18" y2="18"/></svg>`,
      badge: 3,
    },
    {
      label: "Users",
      href: "#",
      icon: "users",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="6" r="4"/><path d="M2 18c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
    },
    {
      label: "Orders",
      href: "#",
      icon: "orders",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="2" width="14" height="16"/><line x1="7" y1="6" x2="13" y2="6"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="14" x2="10" y2="14"/></svg>`,
      badge: 12,
    },
    {
      label: "Products",
      href: "#",
      icon: "products",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="16" height="14"/><polyline points="2,4 10,0 18,4"/></svg>`,
    },
    {
      label: "Settings",
      href: "#",
      icon: "settings",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="3"/><path d="M10 2v2m0 12v2M2 10h2m12 0h2M4.2 4.2l1.4 1.4m8.8 8.8l1.4 1.4M15.8 4.2l-1.4 1.4M5.6 14.2l-1.4 1.4"/></svg>`,
    },
  ];
}

export const users = generateUsers();
export const stats = generateStats();
export const chartData = generateChartData();
export const menuItems = generateMenuItems();
