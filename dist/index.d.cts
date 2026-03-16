import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, TextareaHTMLAttributes, CSSProperties, ElementType } from 'react';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    uppercase?: boolean;
    className?: string;
}
/**
 * Semantic heading element (`h1`–`h6`) with DS typography tokens — use `uppercase` for section labels and dashboard module titles that need extra visual weight.
 * @example
 * // Page title
 * <Heading level={1}>Patient Overview</Heading>
 * // Section label with caps treatment
 * <Heading level={3} uppercase>Recent Activity</Heading>
 */
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
/**
 * Body copy component with DS type scale and semantic weight variants — use `muted` or `secondary` for supporting text, and `as` to switch the rendered element without losing styling.
 * @example
 * // Body paragraph
 * <Text>Review the patient's records before proceeding with the referral.</Text>
 * // Supporting caption beneath a field
 * <Text size="xs" muted as="span">Last updated 2 hours ago</Text>
 */
declare function Text({ size, weight, muted, secondary, as: Tag, children, className, }: TextProps): react_jsx_runtime.JSX.Element;

type IconName = "dashboard" | "analytics" | "users" | "orders" | "products" | "settings" | "search" | "bell" | "mail" | "calendar" | "check" | "close" | "plus" | "minus" | "arrow-left" | "arrow-right" | "arrow-up" | "arrow-down" | "edit" | "trash" | "eye" | "eye-off" | "filter" | "download" | "more";
type IconSize = "sm" | "md" | "lg";
interface IconProps {
    name: IconName;
    size?: IconSize;
    /** Box background color. Defaults to var(--drp-mint). */
    bg?: string;
    className?: string;
}
/**
 * Brutalist functional icon — black filled icon inside a colored square with black border and offset shadow.
 * Matches the Pictogram design language: flat colored box, 1px black border, hard offset shadow, black icon.
 *
 * Use `size="sm"` (24px box) in tight UI, `size="md"` (32px box) as default,
 * and `size="lg"` (48px box) in navigation or feature contexts.
 * Use `bg` to set the box background color (defaults to var(--drp-mint)).
 *
 * @example
 * <Icon name="search" />
 * <Icon name="trash" bg="var(--drp-pink)" />
 * <Icon name="check" size="lg" bg="var(--drp-purple)" />
 */
declare function Icon({ name, size, bg, className, }: IconProps): react_jsx_runtime.JSX.Element;

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
/**
 * Primary interactive element for all user actions — use `variant="primary"` for the main CTA, `variant="danger"` for destructive actions (always pair with a confirmation dialog), and never use raw `<button>` elements.
 * @example
 * // Standard form submit
 * <Button variant="primary" onClick={handleSave}>Save Changes</Button>
 * // Destructive with icon
 * <Button variant="danger" iconLeft={<TrashIcon />}>Delete Account</Button>
 * // Icon-only (aria-label required)
 * <Button icon aria-label="Close dialog"><XIcon /></Button>
 */
declare function Button({ variant, size, block, icon, iconLeft, iconRight, className, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | boolean;
    success?: boolean;
}
/**
 * Standard text input with optional label, validation state, and auto-generated `id` linking — pass `error` as a string to render an inline error message below the field.
 * @example
 * // Labeled email field with validation
 * <Input
 *   label="Email address"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={emailError}
 * />
 * // Success state after verification
 * <Input label="National ID" value={nid} success />
 */
declare function Input({ label, error, success, className, id, spellCheck, type, ...props }: InputProps): react_jsx_runtime.JSX.Element;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string | boolean;
    success?: boolean;
    children: ReactNode;
}
/**
 * Dropdown selector for choosing from a predefined list of options — always pair with a `label` for accessibility and pass `error` as a string to show inline validation messages.
 * @example
 * <Select
 *   label="Appointment type"
 *   value={type}
 *   onChange={(e) => setType(e.target.value)}
 *   error={typeError}
 * >
 *   <option value="">Select a type…</option>
 *   <option value="checkup">General check-up</option>
 *   <option value="followup">Follow-up</option>
 *   <option value="urgent">Urgent care</option>
 * </Select>
 */
declare function Select({ label, error, success, className, children, id, ...props }: SelectProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    dark?: boolean;
}
/**
 * Accessible checkbox input with an associated visible label — use `dark` on dark-background surfaces such as panels with `var(--drp-purple)` fill.
 * @example
 * // Consent checkbox in a form
 * <Checkbox
 *   label="I agree to the terms and conditions"
 *   checked={agreed}
 *   onChange={(e) => setAgreed(e.target.checked)}
 * />
 * // Pre-checked option on a dark panel
 * <Checkbox label="Send appointment reminders via SMS" dark defaultChecked />
 */
declare function Checkbox({ label, dark, className, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    color?: "pink" | "purple";
    dark?: boolean;
    error?: boolean;
}
/**
 * Single radio button for mutually exclusive option groups — group multiple `Radio` elements under the same `name` attribute and use `error` to surface validation state.
 * @example
 * // Appointment type selector
 * <fieldset>
 *   <Radio name="apptType" label="In-person visit" value="in-person" color="purple" defaultChecked />
 *   <Radio name="apptType" label="Video consultation" value="video" color="purple" />
 *   <Radio name="apptType" label="Phone call" value="phone" color="purple" />
 * </fieldset>
 */
declare function Radio({ label, color, dark, error, className, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

type SwitchBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
type SwitchProps = (SwitchBaseProps & {
    label: string;
    "aria-label"?: string;
}) | (SwitchBaseProps & {
    label?: never;
    "aria-label": string;
});
/**
 * Toggle switch for boolean settings that take effect immediately — provide `label` when a visible text description is present, or `aria-label` when the switch is used without visible text.
 * @example
 * // Notification preference with visible label
 * <Switch
 *   label="Email appointment reminders"
 *   checked={emailReminders}
 *   onChange={(e) => setEmailReminders(e.target.checked)}
 * />
 * // Icon-only toggle (aria-label required)
 * <Switch aria-label="Dark mode" checked={darkMode} onChange={toggleDark} />
 */
declare function Switch({ label, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

interface CounterProps {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}
/**
 * Stepper control for selecting a small integer quantity — use when a numeric input alone is error-prone and the valid range is bounded (e.g. number of doses, session slots).
 * @example
 * // Appointment slot selector (1–10)
 * <Counter
 *   value={slots}
 *   min={1}
 *   max={10}
 *   onChange={(n) => setSlots(n)}
 * />
 */
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
/**
 * Compact label for categorizing or filtering content — use `closeable`/`onClose` for dismissible filter chips, `dot` or `legend` for color-coded legend items in charts or status lists.
 * @example
 * // Dismissible filter chip
 * <Tag color="purple" filled closeable onClose={() => removeFilter("cardiology")}>Cardiology</Tag>
 * // Legend item with dot
 * <Tag color="mint" legend>Completed</Tag>
 */
declare function Tag({ children, color, filled, dark, dot, legend, icon, closeable, onClose, className, }: TagProps): react_jsx_runtime.JSX.Element;

type BadgeVariant = "filled" | "primary" | "secondary" | "outline" | "mint" | "pink";
interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}
/**
 * Small label used to highlight status, counts, or categorical metadata inline with other content.
 * @example
 * // Status badge next to a plan name
 * <Badge variant="mint">Active</Badge>
 * // Count indicator
 * <Badge variant="pink">3 overdue</Badge>
 */
declare function Badge({ children, variant, className }: BadgeProps): react_jsx_runtime.JSX.Element;

type DotColor = "purple" | "mint" | "pink" | "yellow";
type StatusDotProps = {
    color?: DotColor;
    pulse?: boolean;
    className?: string;
    "aria-label": string;
    "aria-hidden"?: never;
} | {
    color?: DotColor;
    pulse?: boolean;
    className?: string;
    "aria-label"?: never;
    "aria-hidden": true;
};
/**
 * Small colored dot for conveying status at a glance — use `pulse` for live/active states and always provide either `aria-label` (for standalone use) or `aria-hidden={true}` (when a text label is adjacent).
 * @example
 * // Online indicator next to a user's name
 * <StatusDot color="mint" pulse aria-label="Online" />
 * // Decorative dot beside a status badge (text already describes the state)
 * <StatusDot color="pink" aria-hidden={true} /> Offline
 */
declare function StatusDot({ color, pulse, className, ...ariaProps }: StatusDotProps): react_jsx_runtime.JSX.Element;

type ProgressColor = "mint" | "pink" | "yellow" | "grey";
type ProgressSize = "sm" | "lg";
interface ProgressBarProps {
    value: number;
    color?: ProgressColor;
    size?: ProgressSize;
    label?: string;
    className?: string;
}
/**
 * Horizontal progress indicator for completion percentages and loading states — pass `label` to render the metric name and live percentage side-by-side above the bar.
 * @example
 * // Onboarding completion tracker
 * <ProgressBar value={65} color="mint" label="Profile completion" />
 * // Compact bar without label
 * <ProgressBar value={40} color="pink" size="sm" />
 */
declare function ProgressBar({ value, color, size, label, className, }: ProgressBarProps): react_jsx_runtime.JSX.Element;

type AvatarSize = "sm" | "lg";
interface AvatarProps {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    initials?: string;
    /** Required when no visible label is present (initials-only avatar) */
    "aria-label"?: string;
    className?: string;
}
/**
 * Displays a user's profile image or fallback initials — use `src` when a photo is available, `initials` as a fallback, and always provide `aria-label` on initials-only variants.
 * @example
 * // Photo avatar
 * <Avatar src="/avatars/dr-chen.jpg" alt="Dr. Sarah Chen" size="lg" />
 * // Initials fallback
 * <Avatar initials="SC" size="sm" aria-label="Dr. Sarah Chen" />
 */
declare function Avatar({ src, alt, size, initials, "aria-label": ariaLabel, className, }: AvatarProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    text: string;
    children: ReactNode;
    className?: string;
}
/**
 * On-focus tooltip that surfaces supplementary context for an interactive element — wrap a single focusable child (button, link, input) and set `text` to a concise non-essential description.
 * @example
 * // Explain an icon-only button
 * <Tooltip text="Export as CSV">
 *   <Button icon aria-label="Export"><DownloadIcon /></Button>
 * </Tooltip>
 * // Clarify a form field's requirement
 * <Tooltip text="Must match the name on your insurance card">
 *   <Input label="Full legal name" value={name} onChange={handleChange} />
 * </Tooltip>
 */
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
/**
 * General-purpose content container with brutalist offset-black shadow — use `variant="raised"` for prominent panels, `variant="interactive"` for clickable cards, and `accent` to add a branded left-border stripe.
 * @example
 * // Patient summary card
 * <Card variant="raised" accent="purple">
 *   <CardHeader title="Maria Gonzalez" subtitle="DOB: 12 Mar 1985" />
 *   <p>Last visit: 3 days ago</p>
 * </Card>
 */
declare function Card({ variant, accent, className, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
/**
 * Standardized header section for a `Card` — renders a bold title, optional subtitle, and an optional action node (e.g. a Button or Badge) pinned to the right.
 * @example
 * <CardHeader
 *   title="Recent Appointments"
 *   subtitle="Last 30 days"
 *   action={<Button variant="ghost" size="sm">View all</Button>}
 * />
 */
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
/**
 * Data table with typed columns and optional custom cell rendering.
 *
 * For row actions (edit, delete, view), use `<Icon size="sm">` wrapped in a plain `<button>` —
 * never use "..." or text-label buttons. This keeps action columns compact and visually consistent.
 *
 * @example
 * // Status badge + icon action buttons
 * <Table
 *   aria-label="Recent appointments"
 *   columns={[
 *     { key: "patient", header: "Patient" },
 *     { key: "status", header: "Status", render: (row) => <Badge variant="mint">{row.status}</Badge> },
 *     { key: "actions", header: "Actions", render: (row) => (
 *       <div style={{ display: "flex", gap: 8 }}>
 *         <button aria-label="Edit" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
 *           <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
 *         </button>
 *         <button aria-label="Delete" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
 *           <Icon name="trash" size="sm" bg="var(--drp-pink)" />
 *         </button>
 *       </div>
 *     )},
 *   ]}
 *   data={appointments}
 * />
 */
declare function Table<T extends Record<string, any>>({ columns, data, className, "aria-label": ariaLabel, caption, }: TableProps<T>): react_jsx_runtime.JSX.Element;

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    footer?: ReactNode;
}
/**
 * Accessible focus-trapped dialog for confirmations and multi-step flows — always wire `footer` with at least a Cancel and a primary action button so users have a clear escape path.
 * @example
 * <Modal
 *   open={isOpen}
 *   onClose={() => setOpen(false)}
 *   title="Confirm Cancellation"
 *   footer={
 *     <>
 *       <Button variant="outline" onClick={() => setOpen(false)}>Keep Appointment</Button>
 *       <Button variant="danger" onClick={handleCancel}>Cancel Appointment</Button>
 *     </>
 *   }
 * >
 *   Are you sure you want to cancel the appointment with Dr. Okafor on 14 Apr?
 * </Modal>
 */
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
/**
 * Keyboard-accessible tab bar for switching between content panels — manage active state externally via `activeKey`/`onChange` for controlled use, or let it self-manage for simple cases.
 * @example
 * <Tabs
 *   items={[
 *     { key: "overview", label: "Overview" },
 *     { key: "history", label: "Medical History" },
 *     { key: "billing", label: "Billing" },
 *   ]}
 *   activeKey={activeTab}
 *   onChange={setActiveTab}
 * />
 */
declare function Tabs({ items, activeKey, onChange, variant, className, }: TabsProps): react_jsx_runtime.JSX.Element;

type PaginationVariant = "dark" | "transparent";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    variant?: PaginationVariant;
    className?: string;
}
/**
 * Page navigation control for paginated lists and tables — use `variant="dark"` on surfaces with a dark background, and keep `totalPages` accurate to prevent dead-end states.
 * @example
 * <Pagination
 *   currentPage={page}
 *   totalPages={totalPages}
 *   onPageChange={(p) => setPage(p)}
 * />
 */
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
    mobileOpen?: boolean;
    onToggle?: () => void;
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
/**
 * Landmark navigation trail showing the user's location within the app hierarchy — always include an `href` on all items except the last (current page).
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: "Dashboard", href: "/dashboard" },
 *     { label: "Patients", href: "/patients" },
 *     { label: "Maria Gonzalez" },
 *   ]}
 * />
 */
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
/**
 * Multi-line text input for free-form content such as clinical notes or messages — mirrors `Input` API with `label`, `error`, and `success` states, and accepts all native `<textarea>` attributes.
 * @example
 * <Textarea
 *   label="Clinical notes"
 *   placeholder="Describe symptoms, observations, and treatment plan…"
 *   rows={6}
 *   value={notes}
 *   onChange={(e) => setNotes(e.target.value)}
 *   error={notesError}
 * />
 */
declare function Textarea({ label, error, success, className, id, ...props }: TextareaProps): react_jsx_runtime.JSX.Element;

type LoaderSize = "sm" | "lg";
interface LoaderProps {
    size?: LoaderSize;
    label?: string;
    className?: string;
}
/**
 * Spinning indicator for async operations — use `size="sm"` inline within buttons or table cells, `size="lg"` for full-section loading states, and `label` to provide screen-reader context.
 * @example
 * // Full-page loading state
 * <Loader size="lg" label="Loading patient records…" />
 * // Inline inside a data cell
 * <Loader size="sm" />
 */
declare function Loader({ size, label, className }: LoaderProps): react_jsx_runtime.JSX.Element;

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    variant?: "text" | "rectangular" | "circular";
    className?: string;
}
/**
 * Shimmering placeholder shown while content is loading — use `variant="circular"` for avatars, `variant="rectangular"` for cards and images, and `variant="text"` for inline copy.
 * @example
 * // Loading state for a patient card
 * <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
 *   <Skeleton variant="circular" width={48} />
 *   <div>
 *     <Skeleton variant="text" width={160} />
 *     <Skeleton variant="text" width={100} />
 *   </div>
 * </div>
 */
declare function Skeleton({ width, height, variant, className, }: SkeletonProps): react_jsx_runtime.JSX.Element;

type AlertVariant = "info" | "success" | "warning" | "error";
interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: ReactNode;
    onClose?: () => void;
    className?: string;
}
/**
 * Inline feedback banner for system messages — use `variant="error"` for form-level errors, `variant="success"` after a completed action, and `variant="warning"` for non-blocking risks.
 * @example
 * // Success confirmation after saving
 * <Alert variant="success" title="Profile updated" onClose={handleDismiss}>
 *   Your changes have been saved successfully.
 * </Alert>
 * // Error with no title
 * <Alert variant="error">Payment failed. Please check your card details and try again.</Alert>
 */
declare function Alert({ variant, title, children, onClose, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: string;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
/**
 * Centered placeholder shown when a list or data region has no content — always provide an `action` with a clear next step so users are never left without guidance.
 * @example
 * <EmptyState
 *   icon="📋"
 *   title="No appointments scheduled"
 *   description="Book your first appointment to get started."
 *   action={<Button variant="primary">Schedule Appointment</Button>}
 * />
 */
declare function EmptyState({ icon, title, description, action, className, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface DividerProps {
    label?: string;
    className?: string;
}
/**
 * Horizontal rule for visually separating sections — pass a `label` to render a centered uppercase text divider (e.g. "or", "Advanced settings") between two regions.
 * @example
 * // Plain separator between form sections
 * <Divider />
 * // Labeled separator between login options
 * <Divider label="or continue with" />
 */
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

interface StackProps extends HTMLAttributes<HTMLElement> {
    /** Stack direction. "column" (default) = vertical, "row" = horizontal */
    direction?: "column" | "row";
    /** Gap between children. Accepts CSS values (e.g. "8px", "var(--drp-space-4)") */
    gap?: string;
    /**
     * Responsive breakpoint at which a "row" stack switches to "column".
     * Only applies when direction="row". E.g. "768px".
     */
    wrap?: boolean;
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
    /** HTML element to render. Defaults to "div". */
    as?: ElementType;
}
declare function Stack({ direction, gap, wrap, align, justify, as: Tag, style, children, ...rest }: StackProps): react_jsx_runtime.JSX.Element;

interface ResponsiveGridProps extends HTMLAttributes<HTMLElement> {
    /**
     * Number of columns at each breakpoint.
     * Uses CSS custom properties for media query injection via inline class.
     * Falls back gracefully: mobile (1) → tablet (cols/2) → desktop (cols).
     */
    cols?: number;
    /** Desktop columns (≥1024px). Defaults to `cols`. */
    colsLg?: number;
    /** Tablet columns (≤768px). Defaults to Math.ceil(cols/2). */
    colsMd?: number;
    /** Mobile columns (≤390px). Defaults to 1. */
    colsSm?: number;
    gap?: string;
    as?: ElementType;
}
declare function ResponsiveGrid({ cols, colsLg, colsMd, colsSm, gap, as: Tag, style, className, children, ...rest }: ResponsiveGridProps): react_jsx_runtime.JSX.Element;

interface ContainerProps extends HTMLAttributes<HTMLElement> {
    /** Maximum width. Defaults to "1200px". */
    maxWidth?: string;
    /** Horizontal padding. Defaults to responsive via clamp. */
    padding?: string;
    as?: ElementType;
}
declare function Container({ maxWidth, padding, as: Tag, style, children, ...rest }: ContainerProps): react_jsx_runtime.JSX.Element;

declare function Dashboard(): react_jsx_runtime.JSX.Element;

declare const SignIn: React.FC;

declare const SignUp: React.FC;

interface PasswordResetProps {
    mode?: "request" | "reset";
}
declare const PasswordReset: React.FC<PasswordResetProps>;

declare const SignInWithQR: React.FC;

interface ListScreenProps {
    title: string;
    subtitle?: string;
    activeId?: string;
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

type TTNavId = "dashboard" | "analytics" | "reports" | "transactions" | "products" | "appsumo-catalog" | "admin-panel" | "import" | "logs" | "sync-jobs" | "settings";

type ProductStatus = "activated" | "redeemed" | "not-redeemed" | "outdated" | "refunded";
interface TTProduct {
    id: string;
    date: string;
    status: ProductStatus;
    thumbnail: string;
    name: string;
    subtitle: string;
    price: number;
    progressValue: number;
    isExpired?: boolean;
}
interface TTSyncStatus {
    lastSynced: string;
    invoices: string;
    products: string;
}
interface TTFinancialOverview {
    totalPurchases: number;
    totalSavings: number;
    totalRefunds: number;
    netSpent: number;
}
interface ToolsTrackerDashboardProps {
    syncStatus?: TTSyncStatus;
    financialOverview?: TTFinancialOverview;
    products?: TTProduct[];
    currentPage?: number;
    totalPages?: number;
    activeNav?: TTNavId;
    onNavClick?: (id: TTNavId) => void;
    onSync?: () => void;
    onRunSync?: () => void;
    onClearCache?: () => void;
    onPageChange?: (page: number) => void;
}
declare const ToolsTrackerDashboard: React.FC<ToolsTrackerDashboardProps>;

type AnalyticsTab = "spending-overview" | "visual-reports" | "category-analysis" | "payment-methods";
interface ToolsTrackerAnalyticsProps {
    defaultTab?: AnalyticsTab;
}
declare const ToolsTrackerAnalytics: React.FC<ToolsTrackerAnalyticsProps>;

type ReportsTab = "monthly-spending" | "purchases-vs-refunds" | "top-products" | "spending-trend" | "financial-health" | "portfolio-analysis" | "portfolio-breakdown" | "spending-by-vendor";
interface ToolsTrackerReportsProps {
    defaultTab?: ReportsTab;
}
declare const ToolsTrackerReports: React.FC<ToolsTrackerReportsProps>;

type TFilter = "all" | "paid" | "has-refund" | "refunded";
type TView = "card" | "table";
interface ToolsTrackerTransactionsProps {
    defaultView?: TView;
    defaultFilter?: TFilter;
}
declare const ToolsTrackerTransactions: React.FC<ToolsTrackerTransactionsProps>;

type ProductFilter = "all" | "favorites" | "urgent" | "soon" | "safe" | "expired" | "refunded";
interface ToolsTrackerProductsProps {
    defaultFilter?: ProductFilter;
}
declare const ToolsTrackerProducts: React.FC<ToolsTrackerProductsProps>;

type CatalogView = "home" | "browse";
interface ToolsTrackerCatalogProps {
    defaultView?: CatalogView;
    defaultCategory?: string;
    defaultOpenDealId?: string;
}
declare const ToolsTrackerCatalog: React.FC<ToolsTrackerCatalogProps>;

type AdminTab = "users" | "products" | "invoices" | "activity" | "audit-trail";
interface ToolsTrackerAdminPanelProps {
    defaultTab?: AdminTab;
}
declare const ToolsTrackerAdminPanel: React.FC<ToolsTrackerAdminPanelProps>;

type ImportMode = "ai" | "manual";
type ImportStep = "idle" | "form";
interface ToolsTrackerImportProps {
    defaultMode?: ImportMode;
    defaultStep?: ImportStep;
}
declare const ToolsTrackerImport: React.FC<ToolsTrackerImportProps>;

type LogLevel = "all" | "info" | "success" | "warning" | "error" | "debug";
interface ToolsTrackerLogsProps {
    defaultFilter?: LogLevel;
    defaultLogs?: "empty" | "recent" | "full";
    isLoading?: boolean;
}
declare const ToolsTrackerLogs: React.FC<ToolsTrackerLogsProps>;

type SyncScenario = "empty" | "job-list" | "partial-expanded" | "running-expanded" | "success-expanded" | "sync-early" | "sync-mid";
interface ToolsTrackerSyncJobsProps {
    defaultScenario?: SyncScenario;
}
declare const ToolsTrackerSyncJobs: React.FC<ToolsTrackerSyncJobsProps>;

type SettingsTab = "profile" | "security" | "api-keys" | "preferences";
interface ToolsTrackerSettingsProps {
    defaultTab?: SettingsTab;
}
declare const ToolsTrackerSettings: React.FC<ToolsTrackerSettingsProps>;

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

declare const PICTOGRAMS: Record<string, string>;
type PictogramName = keyof typeof PICTOGRAMS;

interface PictogramProps {
    name: PictogramName;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean;
    "aria-label"?: string;
}
declare const Pictogram: React.FC<PictogramProps>;

interface AppSidebarProps {
    activeId?: string;
    mobileOpen?: boolean;
    onToggle?: () => void;
}
declare const AppSidebar: React.FC<AppSidebarProps>;

interface AppTopBarProps {
    title: string;
    notificationCount?: number;
}
declare const AppTopBar: React.FC<AppTopBarProps>;

declare const AppFooter: React.FC;

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

export { AccountsList, Alert, type AlertProps, AppFooter, AppShell, type AppShellProps, AppSidebar, AppTopBar, Avatar, type AvatarProps, Badge, type BadgeProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, CalendarEvent, Card, CardHeader, type CardHeaderProps, type CardProps, CaseCard, type CaseCardProps, ChartBarVariant, ChartCard, type ChartCardProps, ChartContainer, type ChartContainerProps, ChartDoubleBarsVariant, ChartGeometricVariant, ChartHorizontalBarsVariant, ChartMiscVariant, ChartPolarVariant, ChartWaveVariant, Checkbox, type CheckboxProps, type Contact, ContactsList, Container, type ContainerProps, Counter, type CounterProps, CtaBanner, type CtaBannerProps, type Customer, CustomersList, Dashboard, DashboardLayout, type DashboardLayoutProps, Divider, type DividerProps, Dropzone, type DropzoneProps, EducationCourses, type EducationCoursesProps, type EducationView, EmptyState, type EmptyStateProps, type FeatureItem, FeatureList, type FeatureListProps, Footer, type FooterColumn, type FooterProps, Heading, type HeadingProps, Hero, type HeroProps, Icon, type IconProps, InboxList, Input, type InputProps, ListScreen, type ListScreenProps, Loader, type LoaderProps, Marquee, type MarqueeProps, type MenuItem, Modal, type ModalProps, Navbar, type NavbarProps, Pagination, type PaginationProps, PasswordReset, type PasswordResetProps, type Payment, PaymentsList, Pictogram, type PictogramName, type PictogramProps, PricingCard, type PricingCardProps, type ProductsListProps as Product, ProductsList, ProfileAccount, ProfileNotifications, ProfileSecurity, ProfileSocial, ProgressBar, type ProgressBarProps, Radio, type RadioProps, ResponsiveGrid, type ResponsiveGridProps, type SalesListProps as Sale, SalesList, Select, type SelectProps, Sidebar, type SidebarNavItem, type SidebarNavSection, type SidebarProps, type SidebarTeamMember, SignIn, SignInWithQR, SignUp, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Stack, type StackProps, type StatCard, type StatCardProps, StatusDot, type StatusDotProps, SupportHome, Switch, type SwitchProps, type TabItem, Table, type TableColumn, type TableProps, Tabs, type TabsProps, Tag, type TagProps, Testimonial, type TestimonialProps, Text, type TextProps, Textarea, type TextareaProps, Toast, type ToastProps, type ToastVariant, ToolsTrackerAdminPanel, type ToolsTrackerAdminPanelProps, ToolsTrackerAnalytics, type ToolsTrackerAnalyticsProps, ToolsTrackerCatalog, type ToolsTrackerCatalogProps, ToolsTrackerDashboard, ToolsTrackerImport, type ToolsTrackerImportProps, ToolsTrackerLogs, type ToolsTrackerLogsProps, ToolsTrackerProducts, type ToolsTrackerProductsProps, ToolsTrackerReports, type ToolsTrackerReportsProps, ToolsTrackerSettings, type ToolsTrackerSettingsProps, ToolsTrackerSyncJobs, type ToolsTrackerSyncJobsProps, ToolsTrackerTransactions, type ToolsTrackerTransactionsProps, Tooltip, type TooltipProps, TopBar, type TopBarProps, Topbar, type TopbarProps, type Transaction, TransactionsList, type User, chartData, generateChartData, generateMenuItems, generateStats, generateUsers, menuItems, stats, users };
