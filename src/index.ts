export * from "./components";
export * from "./screens";
export { AppSidebar } from "./screens/shared/AppSidebar";
export { AppTopBar } from "./screens/shared/AppTopBar";
export { AppFooter } from "./screens/shared/AppFooter";
export type { User, StatCard, MenuItem } from "./data/fake";
export {
  generateUsers,
  generateStats,
  generateChartData,
  generateMenuItems,
  users,
  stats,
  chartData,
  menuItems,
} from "./data/fake";
