import React, { useState, useMemo } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Pagination } from "../../../components/Pagination";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

type CatalogView = "home" | "browse";

interface TDeal {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
  category: string;
  price: number;
  originalPrice: number;
  plusPrice?: number;
  rating: number;
  reviews: number;
  dealType: string;
  platforms: string;
  listing: string;
  startDate: string;
  endDate?: string;
  daysLeft?: number;
  whatYouGet: string[];
  bestFor: string[];
  alternativeTo: string[];
  integrations: string[];
  features: string[];
  tags: string[]; // "featured", "last-call", "ending"
}

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const CATEGORIES: {
  name: string;
  deals: number;
  color: string;
  textColor: string;
  pictogram: string;
}[] = [
  {
    name: "Marketing & sales",
    deals: 101,
    color: "#f5e6c8",
    textColor: "#1a1a1a",
    pictogram: "📣",
  },
  {
    name: "Operations",
    deals: 52,
    color: "#f5c8c8",
    textColor: "#1a1a1a",
    pictogram: "⚙️",
  },
  {
    name: "Development & IT",
    deals: 32,
    color: "#c8f5d4",
    textColor: "#1a1a1a",
    pictogram: "💻",
  },
  {
    name: "Media tools",
    deals: 27,
    color: "#7c3aed",
    textColor: "#ffffff",
    pictogram: "🎬",
  },
  {
    name: "Build it yourself",
    deals: 23,
    color: "#ffffff",
    textColor: "#1a1a1a",
    pictogram: "🔧",
  },
  {
    name: "Business strategy & skills",
    deals: 21,
    color: "#111111",
    textColor: "#ffffff",
    pictogram: "📊",
  },
  {
    name: "Customer experience",
    deals: 18,
    color: "#c8e8f5",
    textColor: "#1a1a1a",
    pictogram: "💬",
  },
  {
    name: "Finance",
    deals: 15,
    color: "#d4f5c8",
    textColor: "#1a1a1a",
    pictogram: "💰",
  },
  {
    name: "Free",
    deals: 12,
    color: "#f5f5c8",
    textColor: "#1a1a1a",
    pictogram: "🎁",
  },
];

const ALL_DEALS: TDeal[] = [
  {
    id: "1",
    name: "Reoon Email Verifier",
    description:
      "The most accurate email validation service that cleans invalid, temporary & unsafe email addresses.",
    logoUrl: "https://picsum.photos/seed/reoon/80/80",
    imageUrl: "https://picsum.photos/seed/reoon_screen/600/360",
    category: "Marketing & sales",
    price: 79,
    originalPrice: 419,
    plusPrice: 71,
    rating: 4.9,
    reviews: 739,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Sep 29, 2022",
    whatYouGet: [
      "Role account detection",
      "Individual inbox status detection",
      "MTA validation of domain",
    ],
    bestFor: ["Marketers", "Marketing agencies", "Small businesses"],
    alternativeTo: ["Hunter.io", "ZeroBounce"],
    integrations: ["Excel", "Rest API", "WordPress"],
    features: ["AI"],
    tags: ["featured"],
  },
  {
    id: "2",
    name: "Screpy",
    description:
      "Analyze your website and track your keywords in one dashboard.",
    logoUrl: "https://picsum.photos/seed/screpy/80/80",
    imageUrl: "https://picsum.photos/seed/screpy_screen/600/360",
    category: "Marketing & sales",
    price: 59,
    originalPrice: 204,
    rating: 4.6,
    reviews: 901,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Oct 10, 2022",
    whatYouGet: ["SEO audits", "Keyword tracking", "Uptime monitoring"],
    bestFor: ["SEO professionals", "Agencies", "Bloggers"],
    alternativeTo: ["Ahrefs", "SEMrush"],
    integrations: ["Google Search Console", "Slack"],
    features: ["AI"],
    tags: ["featured"],
  },
  {
    id: "3",
    name: "ReplySync",
    description:
      "Build automated Instagram DM workflows to engage leads, customers, and followers.",
    logoUrl: "https://picsum.photos/seed/replysync/80/80",
    imageUrl: "https://picsum.photos/seed/replysync_screen/600/360",
    category: "Marketing & sales",
    price: 59,
    originalPrice: 348,
    rating: 5.0,
    reviews: 4,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Jan 12, 2026",
    endDate: "Mar 12, 2026",
    daysLeft: 5,
    whatYouGet: ["DM automation", "Lead capture", "Analytics dashboard"],
    bestFor: ["Social media managers", "E-commerce stores", "Agencies"],
    alternativeTo: ["ManyChat", "MobileMonkey"],
    integrations: ["Instagram", "Zapier"],
    features: ["Automation"],
    tags: [],
  },
  {
    id: "4",
    name: "Opticks",
    description:
      "Detect fake or invalid traffic and prevent ad fraud with an analytics-based security solution.",
    logoUrl: "https://picsum.photos/seed/opticks/80/80",
    imageUrl: "https://picsum.photos/seed/opticks_screen/600/360",
    category: "Marketing & sales",
    price: 69,
    originalPrice: 300,
    rating: 5.0,
    reviews: 3,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Feb 15, 2023",
    whatYouGet: [
      "Ad fraud detection",
      "Real-time blocking",
      "Detailed reports",
    ],
    bestFor: ["Performance marketers", "Media buyers", "E-commerce"],
    alternativeTo: ["ClickCease", "TrafficGuard"],
    integrations: ["Google Ads", "Facebook Ads"],
    features: [],
    tags: [],
  },
  {
    id: "5",
    name: "DodgePrint",
    description:
      "Manage products, orders, and analytics across all your ecommerce shops from one dashboard.",
    logoUrl: "https://picsum.photos/seed/dodgeprint/80/80",
    imageUrl: "https://picsum.photos/seed/dodgeprint_screen/600/360",
    category: "Marketing & sales",
    price: 49,
    originalPrice: 199,
    rating: 5.0,
    reviews: 8,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Mar 1, 2023",
    whatYouGet: ["Multi-store management", "Order analytics", "Inventory sync"],
    bestFor: ["E-commerce stores", "Print-on-demand sellers"],
    alternativeTo: ["Printify", "Printful"],
    integrations: ["Shopify", "Etsy", "WooCommerce"],
    features: [],
    tags: [],
  },
  {
    id: "6",
    name: "Rayo",
    description:
      "Create, publish, and track SEO blogs with AI-powered research and WordPress publishing.",
    logoUrl: "https://picsum.photos/seed/rayo/80/80",
    imageUrl: "https://picsum.photos/seed/rayo_screen/600/360",
    category: "Marketing & sales",
    price: 79,
    originalPrice: 480,
    rating: 5.0,
    reviews: 5,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Mar 10, 2023",
    whatYouGet: ["AI blog writer", "SEO research", "WordPress publish"],
    bestFor: ["Bloggers", "Content marketers", "SEO agencies"],
    alternativeTo: ["Jasper", "Surfer SEO"],
    integrations: ["WordPress", "Google Search Console"],
    features: ["AI"],
    tags: [],
  },
  {
    id: "7",
    name: "LinkCentral",
    description:
      "Smarter short links for affiliates & bloggers to track clicks and redirect users with ease.",
    logoUrl: "https://picsum.photos/seed/linkcentral/80/80",
    imageUrl: "https://picsum.photos/seed/linkcentral_screen/600/360",
    category: "Marketing & sales",
    price: 59,
    originalPrice: 228,
    rating: 5.0,
    reviews: 22,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Apr 5, 2023",
    whatYouGet: ["Link shortening", "Click analytics", "Geo targeting"],
    bestFor: ["Affiliate marketers", "Bloggers", "Content creators"],
    alternativeTo: ["Bitly", "Rebrandly"],
    integrations: ["Zapier", "WordPress"],
    features: [],
    tags: [],
  },
  {
    id: "8",
    name: "Only Sheets 2.0 by Better Sheets",
    description:
      "Sell Your Google Sheets. Protect your sheets while you sell your sheets via Stripe.",
    logoUrl: "https://picsum.photos/seed/onlysheets/80/80",
    imageUrl: "https://picsum.photos/seed/onlysheets_screen/600/360",
    category: "Marketing & sales",
    price: 30,
    originalPrice: 99,
    rating: 5.0,
    reviews: 1,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Apr 20, 2023",
    whatYouGet: ["Sheet protection", "Stripe payments", "Digital delivery"],
    bestFor: ["Template creators", "Freelancers", "Small businesses"],
    alternativeTo: ["Gumroad", "Lemon Squeezy"],
    integrations: ["Google Sheets", "Stripe"],
    features: [],
    tags: [],
  },
  {
    id: "9",
    name: "Respona - Plus Exclusive",
    description:
      "Land high-authority backlinks on listicles, product reviews, and other content for SEO growth.",
    logoUrl: "https://picsum.photos/seed/respona/80/80",
    imageUrl: "https://picsum.photos/seed/respona_screen/600/360",
    category: "Marketing & sales",
    price: 79,
    originalPrice: 1188,
    rating: 5.0,
    reviews: 1,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "May 1, 2023",
    whatYouGet: ["Link prospecting", "Email outreach", "Campaign tracking"],
    bestFor: ["SEO agencies", "Link builders", "Content marketers"],
    alternativeTo: ["BuzzStream", "Pitchbox"],
    integrations: ["Gmail", "Outlook", "Ahrefs"],
    features: [],
    tags: ["last-call"],
  },
  {
    id: "10",
    name: "GSpeech",
    description:
      "Convert any text content into engaging audio with this realistic AI voice generator.",
    logoUrl: "https://picsum.photos/seed/gspeech/80/80",
    imageUrl: "https://picsum.photos/seed/gspeech_screen/600/360",
    category: "Marketing & sales",
    price: 69,
    originalPrice: 588,
    rating: 5.0,
    reviews: 41,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "May 15, 2023",
    whatYouGet: ["120+ AI voices", "Multiple languages", "WordPress plugin"],
    bestFor: ["Content creators", "Podcasters", "Bloggers"],
    alternativeTo: ["ElevenLabs", "Murf"],
    integrations: ["WordPress", "Elementor"],
    features: ["AI"],
    tags: [],
  },
  {
    id: "11",
    name: "SEO Checker for Windows",
    description:
      "Website analyzer and SEO audit tool built natively for Windows.",
    logoUrl: "https://picsum.photos/seed/seochecker/80/80",
    imageUrl: "https://picsum.photos/seed/seochecker_screen/600/360",
    category: "Marketing & sales",
    price: 9,
    originalPrice: 59,
    rating: 5.0,
    reviews: 30,
    dealType: "Lifetime Deal",
    platforms: "Windows",
    listing: "Active",
    startDate: "Jun 1, 2023",
    whatYouGet: ["Full site crawl", "On-page analysis", "Export reports"],
    bestFor: ["SEO professionals", "Webmasters", "Small businesses"],
    alternativeTo: ["Screaming Frog", "Sitebulb"],
    integrations: ["Google Analytics"],
    features: [],
    tags: [],
  },
  {
    id: "12",
    name: "SiteGuru",
    description:
      "Run SEO audits, track rankings, and optimize your site with personalized to-do lists.",
    logoUrl: "https://picsum.photos/seed/siteguru/80/80",
    imageUrl: "https://picsum.photos/seed/siteguru_screen/600/360",
    category: "Marketing & sales",
    price: 79,
    originalPrice: 948,
    rating: 5.0,
    reviews: 517,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Jun 20, 2023",
    whatYouGet: ["SEO audit", "Rank tracking", "Actionable to-dos"],
    bestFor: ["SEO agencies", "Freelancers", "Website owners"],
    alternativeTo: ["Moz", "Ahrefs"],
    integrations: ["Google Search Console", "WordPress"],
    features: [],
    tags: ["featured"],
  },
  // Operations category
  {
    id: "13",
    name: "Taskade",
    description:
      "AI-powered project management and team collaboration tool for remote teams.",
    logoUrl: "https://picsum.photos/seed/taskade/80/80",
    imageUrl: "https://picsum.photos/seed/taskade_screen/600/360",
    category: "Operations",
    price: 59,
    originalPrice: 348,
    rating: 4.8,
    reviews: 1240,
    dealType: "Lifetime Deal",
    platforms: "Web, iOS, Android",
    listing: "Active",
    startDate: "Jan 15, 2023",
    whatYouGet: ["Project management", "AI assistant", "Team collaboration"],
    bestFor: ["Remote teams", "Project managers", "Startups"],
    alternativeTo: ["Notion", "ClickUp"],
    integrations: ["Slack", "GitHub", "Zapier"],
    features: ["AI"],
    tags: ["featured"],
  },
  {
    id: "14",
    name: "Pabbly Connect",
    description:
      "Automate workflows by connecting 1000+ apps without any coding required.",
    logoUrl: "https://picsum.photos/seed/pabbly/80/80",
    imageUrl: "https://picsum.photos/seed/pabbly_screen/600/360",
    category: "Operations",
    price: 249,
    originalPrice: 1188,
    rating: 4.7,
    reviews: 892,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Feb 20, 2023",
    whatYouGet: [
      "1000+ app integrations",
      "Multi-step workflows",
      "Webhook support",
    ],
    bestFor: ["Businesses", "Agencies", "Developers"],
    alternativeTo: ["Zapier", "Make"],
    integrations: ["Salesforce", "HubSpot", "Shopify"],
    features: ["Automation"],
    tags: [],
  },
  // Development & IT
  {
    id: "15",
    name: "Appflowy",
    description:
      "Open-source alternative to Notion for project management and note-taking.",
    logoUrl: "https://picsum.photos/seed/appflowy/80/80",
    imageUrl: "https://picsum.photos/seed/appflowy_screen/600/360",
    category: "Development & IT",
    price: 59,
    originalPrice: 240,
    rating: 4.6,
    reviews: 340,
    dealType: "Lifetime Deal",
    platforms: "Web, Desktop",
    listing: "Active",
    startDate: "Mar 5, 2023",
    whatYouGet: ["Unlimited docs", "Kanban boards", "Self-host option"],
    bestFor: ["Developers", "Teams", "Freelancers"],
    alternativeTo: ["Notion", "Coda"],
    integrations: ["GitHub"],
    features: ["Open-source"],
    tags: [],
  },
  // Media tools
  {
    id: "16",
    name: "InVideo",
    description:
      "Create professional videos with AI-powered templates for social media and marketing.",
    logoUrl: "https://picsum.photos/seed/invideo/80/80",
    imageUrl: "https://picsum.photos/seed/invideo_screen/600/360",
    category: "Media tools",
    price: 119,
    originalPrice: 600,
    rating: 4.5,
    reviews: 2100,
    dealType: "Lifetime Deal",
    platforms: "Browser-based",
    listing: "Active",
    startDate: "Apr 1, 2023",
    whatYouGet: ["5000+ templates", "AI script writer", "Voiceover generation"],
    bestFor: ["Content creators", "Marketers", "Agencies"],
    alternativeTo: ["Animoto", "Lumen5"],
    integrations: ["YouTube", "Canva"],
    features: ["AI"],
    tags: ["featured"],
  },
];

const PRICE_FILTERS = ["$1-$49", "$50-$99", "$100+"];
const TAG_FILTERS = [
  "4+ Stars",
  "3+ Stars",
  "Active",
  "Featured",
  "Ending",
  "Last Call",
];

const ITEMS_PER_PAGE = 10;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

const StarRating: React.FC<{
  rating: number;
  reviews: number;
  size?: number;
}> = ({ rating, reviews, size = 12 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <div style={{ display: "flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            fontSize: size,
            color: i <= Math.round(rating) ? "#f59e0b" : "#d1d5db",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
    <span
      style={{
        fontSize: size - 1,
        color: "var(--drp-grey)",
        fontFamily: "var(--drp-font-primary)",
      }}
    >
      {rating} ({reviews})
    </span>
  </div>
);

const DealLogo: React.FC<{ src: string; name: string; size?: number }> = ({
  src,
  name,
  size = 40,
}) => (
  <img
    src={src}
    alt={name}
    width={size}
    height={size}
    style={{
      width: size,
      height: size,
      objectFit: "cover",
      flexShrink: 0,
      border: "var(--drp-border)",
    }}
    onError={(e) => {
      const t = e.currentTarget;
      t.style.background = "#7c3aed22";
      t.style.display = "flex";
    }}
  />
);

/* -------------------------------------------------------------------------- */
/* Sub-components                                                              */
/* -------------------------------------------------------------------------- */

/** Hero search banner */
const HeroBanner: React.FC<{
  onSearch: (q: string) => void;
  onBrowseAll: () => void;
}> = ({ onSearch, onBrowseAll }) => {
  const [q, setQ] = useState("");
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
        borderRadius: 0,
        padding: "var(--drp-space-8) var(--drp-space-6)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        marginBottom: "var(--drp-space-6)",
      }}
    >
      {/* Subtle background circles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
      </div>

      <h1
        style={{
          color: "#fff",
          fontSize: "1.75rem",
          fontWeight: 800,
          fontFamily: "var(--drp-font-primary)",
          marginBottom: "var(--drp-space-2)",
          position: "relative",
        }}
      >
        Explore AppSumo Deals
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "var(--drp-text-sm)",
          marginBottom: "var(--drp-space-5)",
          position: "relative",
        }}
      >
        {ALL_DEALS.length}+ deals across {CATEGORIES.length} categories
      </p>

      <div
        style={{
          display: "flex",
          maxWidth: 520,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search deals by name, category, or keyword..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(q)}
          style={{
            flex: 1,
            padding: "10px 16px",
            fontSize: "var(--drp-text-sm)",
            fontFamily: "var(--drp-font-primary)",
            border: "none",
            outline: "none",
            background: "#fff",
          }}
        />
        <button
          onClick={() => onSearch(q)}
          className="drp-btn drp-btn--primary"
          style={{ borderRadius: 0, padding: "10px 24px" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

/** 6-card trending categories grid */
const CategoryGrid: React.FC<{
  onSelect: (name: string) => void;
}> = ({ onSelect }) => (
  <div style={{ marginBottom: "var(--drp-space-6)" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "var(--drp-space-4)",
      }}
    >
      <h2 className="drp-text drp-text--bold" style={{ fontSize: "1rem" }}>
        Trending Categories
      </h2>
      <button
        className="drp-btn drp-btn--ghost drp-btn--sm"
        style={{ color: "var(--drp-purple)", fontWeight: 600 }}
      >
        View All →
      </button>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--drp-space-3)",
      }}
    >
      {CATEGORIES.slice(0, 6).map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          style={{
            background: cat.color,
            border: "var(--drp-border)",
            padding: "var(--drp-space-4)",
            cursor: "pointer",
            textAlign: "left",
            position: "relative",
            transition: "transform 0.12s ease, box-shadow 0.12s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          {/* Deal count badge */}
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              padding: "2px 7px",
              background: "rgba(0,0,0,0.18)",
              color: cat.textColor,
              fontSize: "0.6rem",
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)",
              letterSpacing: "0.04em",
            }}
          >
            {cat.deals} deals
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              display: "block",
              marginBottom: "var(--drp-space-2)",
            }}
          >
            {cat.pictogram}
          </span>
          <p
            style={{
              color: cat.textColor,
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)",
              fontSize: "var(--drp-text-sm)",
              marginBottom: 4,
            }}
          >
            {cat.name}
          </p>
          <p
            style={{
              color: cat.textColor,
              opacity: 0.65,
              fontSize: "0.7rem",
              fontFamily: "var(--drp-font-primary)",
            }}
          >
            Browse deals →
          </p>
        </button>
      ))}
    </div>
  </div>
);

/** 2-col featured deal cards with real images */
const FeaturedDeals: React.FC<{
  deals: TDeal[];
  onSelect: (deal: TDeal) => void;
  onBrowseAll: () => void;
}> = ({ deals, onSelect, onBrowseAll }) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "var(--drp-space-4)",
      }}
    >
      <h2 className="drp-text drp-text--bold" style={{ fontSize: "1rem" }}>
        Featured Deals
      </h2>
      <button
        onClick={onBrowseAll}
        className="drp-btn drp-btn--ghost drp-btn--sm"
        style={{ color: "var(--drp-purple)", fontWeight: 600 }}
      >
        Browse All →
      </button>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "var(--drp-space-4)",
      }}
    >
      {deals
        .filter((d) => d.tags.includes("featured"))
        .slice(0, 4)
        .map((deal) => (
          <button
            key={deal.id}
            onClick={() => onSelect(deal)}
            className="drp-card"
            style={{
              padding: 0,
              overflow: "hidden",
              cursor: "pointer",
              textAlign: "left",
              display: "block",
              border: "var(--drp-border)",
            }}
          >
            {/* Screenshot image */}
            <div
              style={{ height: 160, overflow: "hidden", position: "relative" }}
            >
              <img
                src={deal.imageUrl}
                alt={deal.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Card body */}
            <div style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}>
              <p
                className="drp-text drp-text--sm drp-text--bold"
                style={{ marginBottom: 4 }}
              >
                {deal.name}
              </p>
              <p
                className="drp-text drp-text--xs drp-text--muted"
                style={{ marginBottom: "var(--drp-space-3)", lineHeight: 1.4 }}
              >
                {deal.description.slice(0, 72)}…
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <StarRating rating={deal.rating} reviews={deal.reviews} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--drp-space-2)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontFamily: "var(--drp-font-primary)",
                      fontSize: "var(--drp-text-sm)",
                    }}
                  >
                    ${deal.price}
                  </span>
                  <span
                    className="drp-text drp-text--xs drp-text--muted"
                    style={{ textDecoration: "line-through" }}
                  >
                    ${deal.originalPrice}
                  </span>
                  <span
                    style={{
                      padding: "2px 7px",
                      background: "#f3f4f6",
                      color: "var(--drp-grey)",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    {deal.category}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
    </div>
  </div>
);

/** Browse view — deal list rows */
const BrowseView: React.FC<{
  initialCategory?: string;
  initialSearch?: string;
  onBack: () => void;
  onSelect: (deal: TDeal) => void;
}> = ({ initialCategory, initialSearch = "", onBack, onSelect }) => {
  const [category, setCategory] = useState(initialCategory ?? "");
  const [search, setSearch] = useState(initialSearch);
  const [priceFilter, setPriceFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return ALL_DEALS.filter((d) => {
      if (category && d.category !== category) return false;
      if (
        search &&
        !d.name.toLowerCase().includes(search.toLowerCase()) &&
        !d.description.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (priceFilter === "$1-$49" && d.price >= 50) return false;
      if (priceFilter === "$50-$99" && (d.price < 50 || d.price >= 100))
        return false;
      if (priceFilter === "$100+" && d.price < 100) return false;
      if (tagFilter === "4+ Stars" && d.rating < 4) return false;
      if (tagFilter === "3+ Stars" && d.rating < 3) return false;
      if (tagFilter === "Featured" && !d.tags.includes("featured"))
        return false;
      if (tagFilter === "Last Call" && !d.tags.includes("last-call"))
        return false;
      return true;
    });
  }, [category, search, priceFilter, tagFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const togglePrice = (f: string) => {
    setPriceFilter((p) => (p === f ? "" : f));
    setPage(1);
  };
  const toggleTag = (f: string) => {
    setTagFilter((t) => (t === f ? "" : f));
    setPage(1);
  };

  return (
    <div>
      {/* Top bar: back + search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-3)",
          marginBottom: "var(--drp-space-3)",
        }}
      >
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          onClick={onBack}
        >
          ← Back
        </button>
        <input
          type="text"
          className="drp-input"
          placeholder="Search deals..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          style={{ flex: 1, fontSize: "var(--drp-text-sm)" }}
        />
      </div>

      {/* Category pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--drp-space-2)",
          marginBottom: "var(--drp-space-2)",
        }}
      >
        {CATEGORIES.map((c) => (
          <button
            key={c.name}
            onClick={() => {
              setCategory((prev) => (prev === c.name ? "" : c.name));
              setPage(1);
            }}
            style={{
              padding: "6px 14px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "var(--drp-text-sm)",
              fontWeight: 600,
              background:
                category === c.name ? "var(--drp-purple)" : "transparent",
              color: category === c.name ? "#fff" : "var(--drp-grey)",
              border: "var(--drp-border)",
              cursor: "pointer",
              transition: "background 0.12s ease, color 0.12s ease",
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Price + tag filter pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--drp-space-2)",
          marginBottom: "var(--drp-space-4)",
          alignItems: "center",
        }}
      >
        {PRICE_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => togglePrice(f)}
            style={{
              padding: "4px 12px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "var(--drp-text-sm)",
              fontWeight: 600,
              background:
                priceFilter === f ? "var(--drp-black)" : "transparent",
              color: priceFilter === f ? "#fff" : "var(--drp-grey)",
              border: "var(--drp-border)",
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
        {TAG_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => toggleTag(f)}
            style={{
              padding: "4px 12px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "var(--drp-text-sm)",
              fontWeight: 600,
              background: tagFilter === f ? "var(--drp-black)" : "transparent",
              color: tagFilter === f ? "#fff" : "var(--drp-grey)",
              border: "var(--drp-border)",
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
        {(priceFilter || tagFilter || category || search) && (
          <button
            onClick={() => {
              setCategory("");
              setSearch("");
              setPriceFilter("");
              setTagFilter("");
              setPage(1);
            }}
            style={{
              padding: "4px 12px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "var(--drp-text-sm)",
              fontWeight: 600,
              background: "transparent",
              color: "var(--drp-grey)",
              border: "var(--drp-border)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Reset all
          </button>
        )}
      </div>

      {/* Count */}
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{ marginBottom: "var(--drp-space-3)" }}
      >
        {filtered.length} deal{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Deal rows */}
      <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
        {paged.length === 0 ? (
          <div style={{ padding: "var(--drp-space-8)", textAlign: "center" }}>
            <p className="drp-text drp-text--sm drp-text--muted">
              No deals found.
            </p>
          </div>
        ) : (
          paged.map((deal) => (
            <button
              key={deal.id}
              onClick={() => onSelect(deal)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-3)",
                padding: "var(--drp-space-3) var(--drp-space-4)",
                background: "transparent",
                border: "none",
                borderBottom: "var(--drp-border)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <DealLogo src={deal.logoUrl} name={deal.name} size={44} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  className="drp-text drp-text--sm drp-text--bold"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    marginBottom: 2,
                  }}
                >
                  {deal.name}
                </p>
                <p
                  className="drp-text drp-text--xs drp-text--muted"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {deal.description.slice(0, 80)}…
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--drp-space-3)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    padding: "3px 8px",
                    background: "#f3f4f6",
                    color: "var(--drp-grey)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    fontFamily: "var(--drp-font-primary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {deal.category}
                </span>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontFamily: "var(--drp-font-primary)",
                      fontSize: "var(--drp-text-sm)",
                    }}
                  >
                    ${deal.price}
                  </span>
                  {deal.originalPrice > deal.price && (
                    <span
                      className="drp-text drp-text--xs drp-text--muted"
                      style={{ textDecoration: "line-through", marginLeft: 4 }}
                    >
                      ${deal.originalPrice}
                    </span>
                  )}
                </div>
                <StarRating rating={deal.rating} reviews={deal.reviews} />
                {deal.tags.includes("last-call") && (
                  <span
                    style={{
                      padding: "3px 8px",
                      background: "#fee2e2",
                      color: "#dc2626",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      fontFamily: "var(--drp-font-primary)",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LAST CALL
                  </span>
                )}
              </div>
            </button>
          ))
        )}
      </div>

      {/* Pagination */}
      <div
        style={{
          marginTop: "var(--drp-space-4)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

/** Deal detail slide-over panel */
const DealDetailPanel: React.FC<{
  deal: TDeal;
  onClose: () => void;
}> = ({ deal, onClose }) => (
  <>
    {/* Backdrop */}
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 40,
      }}
    />

    {/* Panel */}
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: 480,
        background: "var(--drp-white)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
        overflowY: "auto",
      }}
    >
      {/* Panel header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--drp-space-4) var(--drp-space-5)",
          borderBottom: "var(--drp-border)",
          flexShrink: 0,
        }}
      >
        <span className="drp-text drp-text--sm drp-text--bold">
          Deal details
        </span>
        <button
          className="drp-btn drp-btn--ghost drp-btn--sm"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Panel body: 2-column */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left column */}
        <div
          style={{
            width: 220,
            borderRight: "var(--drp-border)",
            padding: "var(--drp-space-5)",
            flexShrink: 0,
            overflowY: "auto",
          }}
        >
          <img
            src={deal.logoUrl}
            alt={deal.name}
            style={{
              width: 72,
              height: 72,
              objectFit: "cover",
              border: "var(--drp-border)",
              marginBottom: "var(--drp-space-3)",
              display: "block",
            }}
          />
          <p
            className="drp-text drp-text--bold"
            style={{
              fontSize: "1rem",
              marginBottom: "var(--drp-space-2)",
              lineHeight: 1.3,
            }}
          >
            {deal.name}
          </p>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{ lineHeight: 1.5, marginBottom: "var(--drp-space-3)" }}
          >
            {deal.description}
          </p>

          <div style={{ marginBottom: "var(--drp-space-4)" }}>
            <StarRating rating={deal.rating} reviews={deal.reviews} size={13} />
          </div>

          {/* Metadata */}
          {[
            { label: "Category", value: deal.category },
            { label: "Deal Type", value: deal.dealType },
            { label: "Platforms", value: deal.platforms },
            { label: "Listing", value: deal.listing },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                gap: "var(--drp-space-2)",
                alignItems: "flex-start",
                marginBottom: "var(--drp-space-2)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: "1.5px solid var(--drp-grey)",
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              <div>
                <p
                  className="drp-text drp-text--xs drp-text--muted"
                  style={{ marginBottom: 1 }}
                >
                  {row.label}
                </p>
                <p className="drp-text drp-text--xs drp-text--bold">
                  {row.value}
                </p>
              </div>
            </div>
          ))}

          {/* Price box */}
          <div
            style={{
              border: "var(--drp-border)",
              padding: "var(--drp-space-3)",
              marginTop: "var(--drp-space-4)",
              marginBottom: "var(--drp-space-3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "var(--drp-space-2)",
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                ${deal.price}
              </span>
              <span
                className="drp-text drp-text--sm drp-text--muted"
                style={{ textDecoration: "line-through" }}
              >
                ${deal.originalPrice}
              </span>
            </div>
            {deal.plusPrice && (
              <p
                style={{
                  color: "var(--drp-purple)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Plus price: ${deal.plusPrice}
              </p>
            )}
          </div>

          <button
            className="drp-btn drp-btn--primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            View on AppSumo →
          </button>
        </div>

        {/* Right column */}
        <div
          style={{ flex: 1, padding: "var(--drp-space-5)", overflowY: "auto" }}
        >
          <Section title="Overview">
            <p
              className="drp-text drp-text--sm drp-text--muted"
              style={{ lineHeight: 1.5 }}
            >
              {deal.description}
            </p>
          </Section>

          <Section title="What you get">
            {deal.whatYouGet.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--drp-space-2)",
                  marginBottom: "var(--drp-space-1)",
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span className="drp-text drp-text--sm">{item}</span>
              </div>
            ))}
          </Section>

          <Section title="Best for">
            <TagGroup items={deal.bestFor} filled />
          </Section>

          {deal.alternativeTo.length > 0 && (
            <Section title="Alternative to">
              <TagGroup items={deal.alternativeTo} />
            </Section>
          )}

          {deal.integrations.length > 0 && (
            <Section title="Integrations">
              <TagGroup items={deal.integrations} />
            </Section>
          )}

          {deal.features.length > 0 && (
            <Section title="Features">
              <TagGroup items={deal.features} />
            </Section>
          )}

          <Section title="Deal Timing">
            <div style={{ display: "flex", gap: 24 }}>
              <div>
                <p
                  className="drp-text drp-text--xs drp-text--muted"
                  style={{ marginBottom: 2 }}
                >
                  Start Date
                </p>
                <p className="drp-text drp-text--sm drp-text--bold">
                  {deal.startDate}
                </p>
              </div>
              {deal.endDate && (
                <div>
                  <p
                    className="drp-text drp-text--xs drp-text--muted"
                    style={{ marginBottom: 2 }}
                  >
                    End Date
                  </p>
                  <p className="drp-text drp-text--sm drp-text--bold">
                    {deal.endDate}
                    {deal.daysLeft !== undefined && (
                      <span
                        className="drp-text drp-text--xs drp-text--muted"
                        style={{ marginLeft: 6, fontWeight: 400 }}
                      >
                        ({deal.daysLeft} days left)
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  </>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div
    style={{
      marginBottom: "var(--drp-space-4)",
      paddingBottom: "var(--drp-space-4)",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <p
      className="drp-text drp-text--xs drp-text--bold"
      style={{ marginBottom: "var(--drp-space-2)", letterSpacing: "0.04em" }}
    >
      {title}
    </p>
    {children}
  </div>
);

const TagGroup: React.FC<{ items: string[]; filled?: boolean }> = ({
  items,
  filled,
}) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--drp-space-1)" }}>
    {items.map((item) => (
      <span
        key={item}
        style={{
          padding: "3px 10px",
          background: filled ? "var(--drp-black)" : "transparent",
          color: filled ? "#fff" : "var(--drp-black)",
          border: "1px solid",
          borderColor: filled ? "var(--drp-black)" : "var(--drp-grey-85)",
          fontSize: "0.65rem",
          fontWeight: 600,
          fontFamily: "var(--drp-font-primary)",
        }}
      >
        {item}
      </span>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/* Main component                                                              */
/* -------------------------------------------------------------------------- */

export interface ToolsTrackerCatalogProps {
  defaultView?: CatalogView;
  defaultCategory?: string;
  defaultOpenDealId?: string;
}

export const ToolsTrackerCatalog: React.FC<ToolsTrackerCatalogProps> = ({
  defaultView = "home",
  defaultCategory,
  defaultOpenDealId,
}) => {
  const [view, setView] = useState<CatalogView>(defaultView);
  const [browseCat, setBrowseCat] = useState(defaultCategory ?? "");
  const [browseSearch, setBrowseSearch] = useState("");
  const [selectedDeal, setSelectedDeal] = useState<TDeal | null>(
    defaultOpenDealId
      ? (ALL_DEALS.find((d: TDeal) => d.id === defaultOpenDealId) ?? null)
      : null,
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleSearch = (q: string) => {
    setBrowseSearch(q);
    setView("browse");
  };

  const handleCategorySelect = (name: string) => {
    setBrowseCat(name);
    setBrowseSearch("");
    setView("browse");
  };

  const handleBrowseAll = () => {
    setBrowseCat("");
    setBrowseSearch("");
    setView("browse");
  };

  return (
    <div
      className={`drp-app-shell${theme === "dark" ? " drp-theme--dark" : ""}`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <ToolsTrackerSidebar activeId="appsumo-catalog" />

      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar
          title="AppSumo Catalog"
          actions={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
              }}
            >
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                onClick={() =>
                  setTheme((t) => (t === "light" ? "dark" : "light"))
                }
                aria-label="Toggle theme"
                style={{ fontSize: 16, lineHeight: 1 }}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <button className="drp-btn drp-btn--primary drp-btn--sm">
                ↻ Sync Catalog
              </button>
            </div>
          }
        />

        <div
          style={{ flex: 1, overflowY: "auto", padding: "var(--drp-space-6)" }}
        >
          {view === "home" ? (
            <>
              <HeroBanner
                onSearch={handleSearch}
                onBrowseAll={handleBrowseAll}
              />
              <CategoryGrid onSelect={handleCategorySelect} />
              <FeaturedDeals
                deals={ALL_DEALS}
                onSelect={setSelectedDeal}
                onBrowseAll={handleBrowseAll}
              />
            </>
          ) : (
            <BrowseView
              initialCategory={browseCat}
              initialSearch={browseSearch}
              onBack={() => setView("home")}
              onSelect={setSelectedDeal}
            />
          )}
        </div>

        <ToolsTrackerFooter />
      </div>

      {/* Deal detail panel */}
      {selectedDeal && (
        <DealDetailPanel
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
        />
      )}
    </div>
  );
};
