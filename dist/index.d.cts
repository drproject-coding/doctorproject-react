import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, TextareaHTMLAttributes } from 'react';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    uppercase?: boolean;
    className?: string;
}
declare function Heading({ level, children, uppercase, className, }: HeadingProps): react_jsx_runtime.JSX.Element;

type TextSize = "xs" | "sm" | "md" | "lg";
type TextWeight = "regular" | "medium" | "semibold" | "bold";
interface TextProps {
    size?: TextSize;
    weight?: TextWeight;
    muted?: boolean;
    secondary?: boolean;
    as?: "p" | "span" | "div" | "label";
    children: ReactNode;
    className?: string;
}
declare function Text({ size, weight, muted, secondary, as: Tag, children, className, }: TextProps): react_jsx_runtime.JSX.Element;

type IconName = "dashboard" | "analytics" | "users" | "orders" | "products" | "settings" | "search" | "bell" | "mail" | "calendar" | "check" | "close" | "plus" | "minus" | "arrow-left" | "arrow-right" | "arrow-up" | "arrow-down" | "edit" | "trash" | "eye" | "eye-off" | "filter" | "download";
type IconSize = "sm" | "md" | "lg";
interface IconProps {
    name: IconName;
    size?: IconSize;
    color?: string;
    className?: string;
}
declare function Icon({ name, size, color, className, }: IconProps): react_jsx_runtime.JSX.Element;

type ButtonVariant = "primary" | "outline" | "ghost" | "ghost-bordered" | "danger" | "secondary" | "dark";
type ButtonSize = "sm" | "lg";
type ButtonBaseProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    block?: boolean;
    /** Icon element placed before the label */
    iconLeft?: ReactNode;
    /** Icon element placed after the label */
    iconRight?: ReactNode;
    children: ReactNode;
};
type ButtonProps = (ButtonBaseProps & {
    icon?: false;
    "aria-label"?: string;
}) | (ButtonBaseProps & {
    icon: true;
    "aria-label": string;
});
declare function Button({ variant, size, block, icon, iconLeft, iconRight, className, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | boolean;
    success?: boolean;
}
declare function Input({ label, error, success, className, id, spellCheck, type, ...props }: InputProps): react_jsx_runtime.JSX.Element;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string | boolean;
    success?: boolean;
    children: ReactNode;
}
declare function Select({ label, error, success, className, children, id, ...props }: SelectProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    dark?: boolean;
}
declare function Checkbox({ label, dark, className, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    color?: "pink" | "purple";
    dark?: boolean;
    error?: boolean;
}
declare function Radio({ label, color, dark, error, className, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}
declare function Switch({ label, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

interface CounterProps {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}
declare function Counter({ value: controlledValue, min, max, onChange, }: CounterProps): react_jsx_runtime.JSX.Element;

type TagColor = "purple" | "mint" | "pink" | "yellow" | "grey" | "orange" | "light" | "teal" | "black";
interface TagProps {
    children: ReactNode;
    color?: TagColor;
    filled?: boolean;
    dark?: boolean;
    dot?: boolean;
    /** Alias for `dot` — show a leading legend dot */
    legend?: boolean;
    /** Icon element placed before the label */
    icon?: ReactNode;
    closeable?: boolean;
    onClose?: () => void;
    className?: string;
}
declare function Tag({ children, color, filled, dark, dot, legend, icon, closeable, onClose, className, }: TagProps): react_jsx_runtime.JSX.Element;

type BadgeVariant = "filled" | "primary" | "secondary" | "outline" | "mint" | "pink";
interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}
declare function Badge({ children, variant, className }: BadgeProps): react_jsx_runtime.JSX.Element;

type DotColor = "purple" | "mint" | "pink" | "yellow";
interface StatusDotProps {
    color?: DotColor;
    pulse?: boolean;
    className?: string;
}
declare function StatusDot({ color, pulse, className }: StatusDotProps): react_jsx_runtime.JSX.Element;

type ProgressColor = "mint" | "pink" | "yellow" | "grey";
type ProgressSize = "sm" | "lg";
interface ProgressBarProps {
    value: number;
    color?: ProgressColor;
    size?: ProgressSize;
    label?: string;
    className?: string;
}
declare function ProgressBar({ value, color, size, label, className, }: ProgressBarProps): react_jsx_runtime.JSX.Element;

type AvatarSize = "sm" | "lg";
interface AvatarProps {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    initials?: string;
    className?: string;
}
declare function Avatar({ src, alt, size, initials, className, }: AvatarProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    text: string;
    children: ReactNode;
    className?: string;
}
declare function Tooltip({ text, children, className }: TooltipProps): react_jsx_runtime.JSX.Element;

type CardVariant = "raised" | "flat" | "interactive" | "sm";
type CardAccent = "purple" | "mint" | "pink" | "yellow";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    accent?: CardAccent;
    children: ReactNode;
}
interface CardHeaderProps {
    title: string;
    subtitle?: string;
    action?: ReactNode;
}
declare function Card({ variant, accent, className, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
declare function CardHeader({ title, subtitle, action }: CardHeaderProps): react_jsx_runtime.JSX.Element;

interface TableColumn<T> {
    key: string;
    header: string;
    render?: (row: T) => ReactNode;
}
interface TableProps<T> {
    columns: TableColumn<T>[];
    data: T[];
    className?: string;
    "aria-label"?: string;
    caption?: string;
}
declare function Table<T extends Record<string, any>>({ columns, data, className, "aria-label": ariaLabel, caption, }: TableProps<T>): react_jsx_runtime.JSX.Element;

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    footer?: ReactNode;
}
declare function Modal({ open, onClose, title, children, footer }: ModalProps): react_jsx_runtime.JSX.Element | null;

interface TabItem {
    label: string;
    key: string;
}
interface TabsProps {
    items: TabItem[];
    activeKey?: string;
    onChange?: (key: string) => void;
    variant?: "underline";
    className?: string;
}
declare function Tabs({ items, activeKey, onChange, variant, className, }: TabsProps): react_jsx_runtime.JSX.Element;

type PaginationVariant = "dark" | "transparent";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    variant?: PaginationVariant;
    className?: string;
}
declare function Pagination({ currentPage, totalPages, onPageChange, variant, className, }: PaginationProps): react_jsx_runtime.JSX.Element;

interface AppShellProps {
    sidebar: ReactNode;
    topbar: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
}
interface TopbarProps {
    children: ReactNode;
}
declare function AppShell({ sidebar, topbar, children, footer }: AppShellProps): react_jsx_runtime.JSX.Element;
declare function Topbar({ children }: TopbarProps): react_jsx_runtime.JSX.Element;

interface TopBarProps {
    title?: string;
    actions?: React.ReactNode;
    menuButton?: boolean;
    onMenuClick?: () => void;
    className?: string;
}
declare const TopBar: React.FC<TopBarProps>;

interface SidebarNavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: string | number;
    badgeVariant?: "purple" | "green";
    active?: boolean;
    href?: string;
    onClick?: () => void;
}
interface SidebarNavSection {
    label: string;
    items: SidebarNavItem[];
}
interface SidebarTeamMember {
    name: string;
    avatar?: string;
    initials?: string;
}
interface SidebarProps {
    brandName?: string;
    sections?: SidebarNavSection[];
    teamMembers?: SidebarTeamMember[];
    teamLabel?: string;
    collapsed?: boolean;
    onItemClick?: (id: string) => void;
    className?: string;
}
declare const Sidebar: React.FC<SidebarProps>;

interface DashboardLayoutProps {
    children: React.ReactNode;
    sidebarProps?: SidebarProps;
    topBarProps?: TopBarProps;
    showSidebar?: boolean;
}
declare const DashboardLayout: React.FC<DashboardLayoutProps>;

interface NavbarProps {
    brand: ReactNode;
    children: ReactNode;
    actions?: ReactNode;
    className?: string;
}
declare function Navbar({ brand, children, actions, className, }: NavbarProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}
declare function Breadcrumbs({ items, className }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

type ChartSize = "sm" | "md" | "lg" | "xl";
interface ChartCardProps {
    title: string;
    subtitle?: string;
    size?: ChartSize;
    children: ReactNode;
    legend?: ReactNode;
    action?: ReactNode;
    className?: string;
}
declare function ChartCard({ title, subtitle, size, children, legend, action, className, }: ChartCardProps): react_jsx_runtime.JSX.Element;

interface HeroProps {
    badge?: ReactNode;
    title: ReactNode;
    subtitle?: string;
    actions?: ReactNode;
    visual?: ReactNode;
    className?: string;
}
declare function Hero({ badge, title, subtitle, actions, visual, className, }: HeroProps): react_jsx_runtime.JSX.Element;

interface MarqueeProps {
    items: string[];
    separator?: string;
    speed?: number;
    className?: string;
}
declare function Marquee({ items, separator, speed, className, }: MarqueeProps): react_jsx_runtime.JSX.Element;

interface StatCardProps {
    value: string;
    label: string;
    className?: string;
}

interface PricingCardProps {
    title: string;
    price: string;
    period?: string;
    features: string[];
    featured?: boolean;
    badge?: string;
    action?: ReactNode;
    className?: string;
}
declare function PricingCard({ title, price, period, features, featured, badge, action, className, }: PricingCardProps): react_jsx_runtime.JSX.Element;

interface CaseCardProps {
    image?: ReactNode;
    imageLabel?: string;
    imageColor?: string;
    stat: string;
    statLabel: string;
    title: string;
    description: string;
    className?: string;
}
declare function CaseCard({ image, imageLabel, imageColor, stat, statLabel, title, description, className, }: CaseCardProps): react_jsx_runtime.JSX.Element;

interface FooterColumn {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
}
interface FooterProps {
    brand: string;
    tagline?: string;
    columns: FooterColumn[];
    copyright?: string;
    bottomLinks?: {
        label: string;
        href: string;
    }[];
    className?: string;
}
declare function Footer({ brand, tagline, columns, copyright, bottomLinks, className, }: FooterProps): react_jsx_runtime.JSX.Element;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string | boolean;
    success?: boolean;
}
declare function Textarea({ label, error, success, className, id, ...props }: TextareaProps): react_jsx_runtime.JSX.Element;

type LoaderSize = "sm" | "lg";
interface LoaderProps {
    size?: LoaderSize;
    label?: string;
    className?: string;
}
declare function Loader({ size, label, className }: LoaderProps): react_jsx_runtime.JSX.Element;

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    variant?: "text" | "rectangular" | "circular";
    className?: string;
}
declare function Skeleton({ width, height, variant, className, }: SkeletonProps): react_jsx_runtime.JSX.Element;

type AlertVariant = "info" | "success" | "warning" | "error";
interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: ReactNode;
    onClose?: () => void;
    className?: string;
}
declare function Alert({ variant, title, children, onClose, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: string;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
declare function EmptyState({ icon, title, description, action, className, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface DividerProps {
    label?: string;
    className?: string;
}
declare function Divider({ label, className }: DividerProps): react_jsx_runtime.JSX.Element;

interface TestimonialProps {
    quote: string;
    name: string;
    role?: string;
    avatar?: ReactNode;
    className?: string;
}
declare function Testimonial({ quote, name, role, avatar, className, }: TestimonialProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps {
    className?: string;
}
declare function Spinner({ className }: SpinnerProps): react_jsx_runtime.JSX.Element;

type ToastVariant = "success" | "error" | "warning" | "info";
interface ToastProps {
    variant?: ToastVariant;
    message: string;
    icon?: ReactNode;
    className?: string;
}
declare function Toast({ variant, message, icon, className }: ToastProps): react_jsx_runtime.JSX.Element;

interface DropzoneProps {
    onFiles?: (files: File[]) => void;
    accept?: string;
    hint?: string;
    icon?: ReactNode;
    className?: string;
    "aria-label"?: string;
}
declare function Dropzone({ onFiles, accept, hint, icon, className, "aria-label": ariaLabel, }: DropzoneProps): react_jsx_runtime.JSX.Element;

interface FeatureItem {
    icon: ReactNode;
    title: string;
    text: string;
}
interface FeatureListProps {
    features: FeatureItem[];
    className?: string;
}
declare function FeatureList({ features, className }: FeatureListProps): react_jsx_runtime.JSX.Element;

interface CtaBannerProps {
    title: string;
    text?: string;
    children?: ReactNode;
    className?: string;
}
declare function CtaBanner({ title, text, children, className, }: CtaBannerProps): react_jsx_runtime.JSX.Element;

declare const SignIn: React.FC;

declare const SignUp: React.FC;

interface PasswordResetProps {
    mode?: "request" | "reset";
}
declare const PasswordReset: React.FC<PasswordResetProps>;

interface ListScreenProps extends Omit<DashboardLayoutProps, "children"> {
    title: string;
    subtitle?: string;
    data: any[];
    columns: Array<{
        key: string;
        label: string;
        render?: (value: any) => React.ReactNode;
    }>;
    onAddClick?: () => void;
    onRowClick?: (row: any) => void;
    showSearch?: boolean;
    itemsPerPage?: number;
}
declare const ListScreen: React.FC<ListScreenProps>;

interface ProductsListProps {
    theme?: "light" | "dark";
    variant?: "v1" | "v2" | "v3" | "details";
}
declare const ProductsList: React.FC<ProductsListProps>;

interface Customer {
    id: string;
    name: string;
    email: string;
    status: "Tag" | "Pending" | "center";
}
interface CustomersListProps {
    theme?: "light" | "dark";
    variant?: "v1" | "v2" | "v3" | "details";
}
declare const CustomersList: React.FC<CustomersListProps>;

interface AccountsListProps {
    theme?: "light" | "dark";
    variant?: "v1" | "v2";
}
declare const AccountsList: React.FC<AccountsListProps>;

type TransactionVariant = "listV1" | "listV2" | "invoice" | "empty";
/** @deprecated Legacy interface kept for backwards-compatible re-exports */
interface Transaction {
    id: string;
    description: string;
    amount: number;
    date: string;
    status: "Completed" | "Pending" | "Failed";
    type: "Income" | "Expense";
}
interface TransactionsListProps {
    theme?: "light" | "dark";
    variant?: TransactionVariant;
}
declare const TransactionsList: React.FC<TransactionsListProps>;

interface Contact {
    id: string;
    name: string;
    email: string;
    service: string;
    status: "Online" | "Away" | "Offline";
    color: string;
}
interface ContactsListProps {
    theme?: "light" | "dark";
    variant?: "v1" | "v2" | "new-contact" | "empty";
}
declare const ContactsList: React.FC<ContactsListProps>;

interface SalesListProps {
    theme?: "light" | "dark";
    variant?: "v1" | "v2";
}
declare const SalesList: React.FC<SalesListProps>;

type InboxVariant = "mail-list" | "chat" | "mail-compose" | "empty";
interface InboxListProps {
    theme?: "light" | "dark";
    variant?: InboxVariant;
}
declare const InboxList: React.FC<InboxListProps>;

type PaymentsTheme = "light" | "dark";
interface Payment {
    id: string;
    method: string;
    amount: number;
    date: string;
    recipient: string;
    status: "Completed" | "Pending" | "Failed";
}
type PaymentsVariant = "list" | "details" | "send-money" | "pay-utilities";
interface PaymentsListProps {
    theme?: PaymentsTheme;
    variant?: PaymentsVariant;
}
declare const PaymentsList: React.FC<PaymentsListProps>;

type EducationView = "courses" | "category";
interface EducationCoursesProps {
    theme?: "light" | "dark";
    view?: EducationView;
}
declare const EducationCourses: React.FC<EducationCoursesProps>;

type CalendarView = "month" | "week" | "day";
interface CalendarEventProps {
    defaultView?: CalendarView;
}
declare const CalendarEvent: React.FC<CalendarEventProps>;

type SupportView = "home" | "categories" | "article" | "search";
interface SupportHomeProps {
    view?: SupportView;
}
declare const SupportHome: React.FC<SupportHomeProps>;

declare const ProfileAccount: React.FC;

declare const ProfileNotifications: React.FC;

declare const ProfileSecurity: React.FC;

declare const ProfileSocial: React.FC;

interface ChartContainerProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}
declare const ChartContainer: React.FC<ChartContainerProps>;
declare const ChartBarVariant: React.FC;
declare const ChartPolarVariant: React.FC;
declare const ChartWaveVariant: React.FC;
declare const ChartGeometricVariant: React.FC;
declare const ChartHorizontalBarsVariant: React.FC;
declare const ChartDoubleBarsVariant: React.FC;
declare const ChartMiscVariant: React.FC;

interface User {
    id: string;
    name: string;
    email: string;
    role: "Admin" | "Editor" | "Viewer";
    status: "Active" | "Inactive" | "Pending";
    avatar: string;
    joinDate: string;
    lastActive: string;
}
interface StatCard {
    label: string;
    value: string;
    change: string;
    trend: "up" | "down";
}
interface MenuItem {
    label: string;
    href: string;
    badge?: number;
    icon: string;
    iconSvg: string;
}
declare function generateUsers(count?: number): User[];
declare function generateStats(): StatCard[];
declare function generateChartData(): {
    labels: string[];
    revenue: number[];
    users: number[];
    orders: number[];
};
declare function generateMenuItems(): MenuItem[];
declare const users: User[];
declare const stats: StatCard[];
declare const chartData: {
    labels: string[];
    revenue: number[];
    users: number[];
    orders: number[];
};
declare const menuItems: MenuItem[];

export { AccountsList, Alert, type AlertProps, AppShell, type AppShellProps, Avatar, type AvatarProps, Badge, type BadgeProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, CalendarEvent, Card, CardHeader, type CardHeaderProps, type CardProps, CaseCard, type CaseCardProps, ChartBarVariant, ChartCard, type ChartCardProps, ChartContainer, type ChartContainerProps, ChartDoubleBarsVariant, ChartGeometricVariant, ChartHorizontalBarsVariant, ChartMiscVariant, ChartPolarVariant, ChartWaveVariant, Checkbox, type CheckboxProps, type Contact, ContactsList, Counter, type CounterProps, CtaBanner, type CtaBannerProps, type Customer, CustomersList, DashboardLayout, type DashboardLayoutProps, Divider, type DividerProps, Dropzone, type DropzoneProps, EducationCourses, type EducationCoursesProps, type EducationView, EmptyState, type EmptyStateProps, type FeatureItem, FeatureList, type FeatureListProps, Footer, type FooterColumn, type FooterProps, Heading, type HeadingProps, Hero, type HeroProps, Icon, type IconProps, InboxList, Input, type InputProps, ListScreen, type ListScreenProps, Loader, type LoaderProps, Marquee, type MarqueeProps, type MenuItem, Modal, type ModalProps, Navbar, type NavbarProps, Pagination, type PaginationProps, PasswordReset, type PasswordResetProps, type Payment, PaymentsList, PricingCard, type PricingCardProps, type ProductsListProps as Product, ProductsList, ProfileAccount, ProfileNotifications, ProfileSecurity, ProfileSocial, ProgressBar, type ProgressBarProps, Radio, type RadioProps, type SalesListProps as Sale, SalesList, Select, type SelectProps, Sidebar, type SidebarNavItem, type SidebarNavSection, type SidebarProps, type SidebarTeamMember, SignIn, SignUp, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, type StatCard, type StatCardProps, StatusDot, type StatusDotProps, SupportHome, Switch, type SwitchProps, type TabItem, Table, type TableColumn, type TableProps, Tabs, type TabsProps, Tag, type TagProps, Testimonial, type TestimonialProps, Text, type TextProps, Textarea, type TextareaProps, Toast, type ToastProps, type ToastVariant, Tooltip, type TooltipProps, TopBar, type TopBarProps, Topbar, type TopbarProps, type Transaction, TransactionsList, type User, chartData, generateChartData, generateMenuItems, generateStats, generateUsers, menuItems, stats, users };
