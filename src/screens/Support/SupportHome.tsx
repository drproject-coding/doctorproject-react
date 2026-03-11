import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

// ─── Top Bar ──────────────────────────────────────────────────────────────────

// ─── Footer ───────────────────────────────────────────────────────────────────

// ─── Hero / Search ────────────────────────────────────────────────────────────

interface SupportHeroProps {
  searchPlaceholder?: string;
  searchValue?: string;
}

const SupportHero: React.FC<SupportHeroProps> = ({
  searchPlaceholder = "Search help articles",
  searchValue,
}) => (
  <div
    style={{
      margin: "var(--drp-space-6)",
      padding: "var(--drp-space-10) var(--drp-space-8)",
      border: "var(--drp-border)",
      background:
        "radial-gradient(ellipse at 70% 50%, var(--drp-purple-20) 0%, transparent 65%), var(--drp-cream)",
    }}
  >
    <h2
      className="drp-h2 drp-text-center"
      style={{ marginBottom: "var(--drp-space-6)" }}
    >
      How can we help you?
    </h2>
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
        marginBottom: "var(--drp-space-3)",
      }}
    >
      <input
        className="drp-input"
        style={{ width: "100%", paddingRight: 44 }}
        placeholder={searchPlaceholder}
        defaultValue={searchValue}
        readOnly
      />
      <button
        aria-label="Search"
        className="drp-btn drp-btn--primary drp-btn--icon drp-btn--sm"
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </div>
    <p className="drp-text drp-text--sm drp-text--muted drp-text-center">
      For example: How to create an account
    </p>
  </div>
);

// ─── Product Category Card ────────────────────────────────────────────────────

interface ProductCategoryProps {
  letter: string;
  color: string;
  title: string;
  description: string;
}

const ProductCategoryCard: React.FC<ProductCategoryProps> = ({
  letter,
  color,
  title,
  description,
}) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: "var(--drp-space-3)" }}
  >
    <div className="drp-flex drp-items-center drp-gap-3">
      <div
        style={{
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: color,
          color: "#fff",
          fontWeight: "var(--drp-weight-bold)" as any,
          fontSize: "var(--drp-text-sm)",
          flexShrink: 0,
        }}
      >
        {letter}
      </div>
      <div>
        <p className="drp-text drp-text--bold drp-text--sm">{title}</p>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

// ─── Help Article Card ───────────────────────────────────────────────────────

interface HelpArticleProps {
  title: string;
  category: string;
  description: string;
}

const HelpArticleCard: React.FC<HelpArticleProps> = ({
  title,
  category,
  description,
}) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: "var(--drp-space-4)" }}
  >
    <span
      className="drp-tag drp-tag--filled drp-tag--purple"
      style={{ fontSize: "var(--drp-text-xs)" }}
    >
      {category}
    </span>
    <p
      className="drp-text drp-text--bold drp-text--sm"
      style={{
        marginTop: "var(--drp-space-2)",
        marginBottom: "var(--drp-space-1)",
      }}
    >
      {title}
    </p>
    <p
      className="drp-text drp-text--sm drp-text--muted"
      style={{ lineHeight: "var(--drp-leading-loose)" }}
    >
      {description}
    </p>
    <button
      className="drp-btn drp-btn--ghost drp-btn--sm drp-btn--purple"
      style={{
        marginTop: "var(--drp-space-2)",
        padding: 0,
        textTransform: "none",
        border: "none",
        boxShadow: "none",
        color: "var(--drp-purple)",
      }}
    >
      Read more
    </button>
  </div>
);

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

const Breadcrumb: React.FC<{ items: string[] }> = ({ items }) => (
  <div
    className="drp-flex drp-items-center drp-gap-1"
    style={{
      padding: "var(--drp-space-4) var(--drp-space-6) var(--drp-space-2)",
    }}
  >
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && (
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--drp-grey)"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        )}
        <span
          className={`drp-text drp-text--sm ${i === items.length - 1 ? "drp-text--bold" : "drp-text--muted"}`}
          style={{ cursor: i < items.length - 1 ? "pointer" : "default" }}
        >
          {item}
        </span>
      </React.Fragment>
    ))}
  </div>
);

// ─── Article Sidebar Nav ─────────────────────────────────────────────────────

const ArticleSidebarNav: React.FC = () => {
  const items = [
    { label: "Getting started", active: true },
    { label: "Managing my account" },
    { label: "Trading and funding" },
    { label: "Taxes and financial services" },
    { label: "Privacy and security" },
    { label: "Other topics" },
    { label: "Asset Directory" },
    { label: "Top of mind" },
  ];

  return (
    <div
      style={{ width: 192, flexShrink: 0, paddingTop: "var(--drp-space-2)" }}
    >
      <nav>
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`drp-text drp-text--sm ${item.active ? "drp-text--purple drp-text--bold" : ""}`}
            style={{
              padding: "6px var(--drp-space-3)",
              cursor: "pointer",
              background: "none",
              border: "none",
              display: "block",
              width: "100%",
              textAlign: "left",
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// ─── Related Article Row ────────────────────────────────────────────────────

interface RelatedArticleProps {
  icon: string;
  iconBg: string;
  title: string;
  date: string;
  tag: string;
}

const RelatedArticleRow: React.FC<RelatedArticleProps> = ({
  icon,
  title,
  date,
  tag,
}) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: "var(--drp-space-4)" }}
  >
    <div className="drp-flex drp-items-center drp-gap-4">
      <div
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--drp-cream)",
          border: "var(--drp-border-thin)",
          flexShrink: 0,
          fontSize: 16,
        }}
      >
        {icon}
      </div>
      <div>
        <p className="drp-text drp-text--bold drp-text--sm">{title}</p>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          {date} &bull; {tag}
        </p>
      </div>
    </div>
  </div>
);

// ─── Search Result Row ──────────────────────────────────────────────────────

interface SearchResultProps {
  title: string;
  excerpt: string;
}

const SearchResultRow: React.FC<SearchResultProps> = ({ title, excerpt }) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: "var(--drp-space-4)" }}
  >
    <p
      className="drp-text drp-text--bold drp-text--sm"
      style={{ marginBottom: "var(--drp-space-1)" }}
    >
      {title}
    </p>
    <p
      className="drp-text drp-text--sm drp-text--muted"
      style={{ lineHeight: "var(--drp-leading-loose)" }}
    >
      {excerpt}
    </p>
    <button
      className="drp-btn drp-btn--ghost drp-btn--sm"
      style={{
        marginTop: "var(--drp-space-2)",
        padding: 0,
        textTransform: "none",
        border: "none",
        boxShadow: "none",
        color: "var(--drp-purple)",
      }}
    >
      See more articles
    </button>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export type SupportView = "home" | "categories" | "article" | "search";

export interface SupportHomeProps {
  view?: SupportView;
}

const products: ProductCategoryProps[] = [
  {
    letter: "W",
    color: "var(--drp-info)",
    title: "Wallet",
    description: "The full Doctor Project wallet",
  },
  {
    letter: "C",
    color: "var(--drp-success)",
    title: "Commerce",
    description: "Accept payments from anyone",
  },
  {
    letter: "C",
    color: "var(--drp-purple)",
    title: "Cloud",
    description: "Scale the future of payments",
  },
  {
    letter: "O",
    color: "var(--drp-orange)",
    title: "Online Trading",
    description: "Grow your trading business",
  },
  {
    letter: "E",
    color: "#14b8a6",
    title: "Exchange",
    description: "Global marketplace for trading",
  },
  {
    letter: "Q",
    color: "var(--drp-pink)",
    title: "Query & Transactions",
    description: "Stay on top of compliance",
  },
  {
    letter: "C",
    color: "var(--drp-warning)",
    title: "Card",
    description: "Earn points and rewards",
  },
  {
    letter: "I",
    color: "#6366f1",
    title: "Intelligence",
    description: "Automate your compliance",
  },
  {
    letter: "A",
    color: "var(--drp-error)",
    title: "Apps downloads",
    description: "More apps for your wallet",
  },
];

const popularArticles: HelpArticleProps[] = [
  {
    title: "Taxes and Fees",
    category: "Taxes and Fees",
    description:
      "What is an NFT? What if you don't always want to save more than $1M in the same accounts. Unfortunately, it can happen by accident. If you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title: "Helpdesk",
    category: "Helpdesk",
    description:
      "How to verify your identity on our marketplace. Don't worry about not trading. You will NFT 1M of the same amounts. Unfortunately, it can happen by accident.",
  },
  {
    title: "Marketplace",
    category: "Marketplace",
    description:
      "Keep your account safe by adding an extra layer. It's not about not trading. You will NFT always want to save more than $1M in the same amounts. Unfortunately, it can happen.",
  },
];

const relatedArticles: RelatedArticleProps[] = [
  {
    icon: "\u2709",
    iconBg: "",
    title:
      "Waiting period for first payout on our fintech platform for marketplaces",
    date: "31 Dec 2021",
    tag: "Payments",
  },
  {
    icon: "\u23F0",
    iconBg: "",
    title: "Strong Customer Authentication-related preparations for businesses",
    date: "04 Sep 2020",
    tag: "Account and settings",
  },
  {
    icon: "\u25A3",
    iconBg: "",
    title:
      "Security, permissions, and access levels when connecting your account",
    date: "1 Feb 2022",
    tag: "Payments",
  },
];

const topCommunityPosts = [
  {
    icon: "\u2709",
    iconBg: "",
    title:
      "Waiting period for first payout on our fintech platform for marketplaces",
    date: "31 Dec 2021",
    tag: "Payments",
  },
  {
    icon: "\u23F0",
    iconBg: "",
    title: "Strong Customer Authentication-related preparations for businesses",
    date: "04 Sep 2020",
    tag: "Account and settings",
  },
  {
    icon: "\u25A3",
    iconBg: "",
    title:
      "Security, permissions, and access levels when connecting your account",
    date: "1 Feb 2022",
    tag: "Payments",
  },
];

const searchResults: SearchResultProps[] = [
  {
    title:
      "Access levels when connecting your account to a third-party platform",
    excerpt:
      "It's better than an NFT 1M of the same amounts. Unfortunately, it can happen by accident. It can happen if you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title: "Setting up your Xero account with Stripe",
    excerpt:
      "It's better than an NFT 1M of the same amounts. Unfortunately, it can happen by accident. It can happen if you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title:
      "Integrate your Corporate Card with QuickBooks Online or QuickBooks Desktop",
    excerpt:
      "In our accounting platform, portals and having lessons when you provide, you can NFT 1M of the same amounts. Unfortunately, it can happen by accident.",
  },
];

export const SupportHome: React.FC<SupportHomeProps> = ({ view = "home" }) => {
  return (
    <div className="app-layout">
      <AppSidebar activeId="support" />
      <div className="main-content">
        <AppTopBar title="Help Center" />

        <div style={{ flex: 1, overflow: "auto" }}>
          {view === "home" && (
            <>
              <SupportHero />
              <div
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-4)" }}
              >
                <div style={{ marginBottom: "var(--drp-space-6)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Products
                  </h3>
                  <div className="drp-grid-3">
                    {products.map((p) => (
                      <ProductCategoryCard
                        key={`${p.title}-${p.description}`}
                        {...p}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Popular help topics
                  </h3>
                  <div className="drp-grid-3">
                    {popularArticles.map((a) => (
                      <HelpArticleCard key={a.title} {...a} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {view === "categories" && (
            <>
              <Breadcrumb items={["Help Center", "Categories", "..."]} />
              <SupportHero />
              <div
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-4)" }}
              >
                <div style={{ marginBottom: "var(--drp-space-6)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Product categories
                  </h3>
                  <div className="drp-grid-3">
                    {[
                      {
                        letter: "G",
                        color: "var(--drp-info)",
                        title: "Getting started with platform",
                        description: "Verify my account\nManage my details",
                        articles: 3,
                      },
                      {
                        letter: "M",
                        color: "var(--drp-success)",
                        title: "Managing my account",
                        description:
                          "Not have any NFT 1M\nAdd a payment method\nManage my details",
                        articles: 3,
                      },
                      {
                        letter: "T",
                        color: "var(--drp-purple)",
                        title: "Trading and funding",
                        description:
                          "Buying, selling or transferring crypto\nUnderstanding crypto compliance",
                        articles: 3,
                      },
                    ].map((cat) => (
                      <div
                        key={cat.title}
                        className="drp-card drp-card--interactive"
                        style={{ padding: "var(--drp-space-4)" }}
                      >
                        <div
                          className="drp-flex drp-items-center drp-gap-3"
                          style={{ marginBottom: "var(--drp-space-3)" }}
                        >
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: cat.color,
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "var(--drp-text-sm)",
                              flexShrink: 0,
                            }}
                          >
                            {cat.letter}
                          </div>
                          <p className="drp-text drp-text--bold drp-text--sm">
                            {cat.title}
                          </p>
                        </div>
                        <div style={{ marginBottom: "var(--drp-space-3)" }}>
                          {cat.description.split("\n").map((line) => (
                            <p
                              key={line}
                              className="drp-text drp-text--sm drp-text--muted"
                              style={{ marginBottom: 4 }}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                        <button
                          className="drp-btn drp-btn--ghost drp-btn--sm"
                          style={{
                            padding: 0,
                            textTransform: "none",
                            border: "none",
                            boxShadow: "none",
                            color: "var(--drp-purple)",
                          }}
                        >
                          See more articles
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Top community posts
                  </h3>
                  <div className="drp-flex-col drp-gap-2">
                    {topCommunityPosts.map((post) => (
                      <RelatedArticleRow key={post.title} {...post} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {view === "article" && (
            <>
              <Breadcrumb items={["Help Center", "Account", "Funds reports"]} />
              <div
                className="drp-flex drp-gap-6"
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-4)" }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h1
                    className="drp-h2"
                    style={{ marginBottom: "var(--drp-space-6)" }}
                  >
                    Getting started: funds reports
                  </h1>
                  <div
                    className="drp-card"
                    style={{ marginBottom: "var(--drp-space-4)" }}
                  >
                    <p
                      className="drp-text drp-text--sm"
                      style={{
                        lineHeight: "var(--drp-leading-loose)",
                        marginBottom: "var(--drp-space-4)",
                        color: "var(--drp-text-secondary)",
                      }}
                    >
                      There is no better advertisement campaign that is low cost
                      and also successful at the same time. Great business ideas
                      when utilized effectively can save lots of money. This is
                      not only easy for those who work full-time as an
                      advertiser.
                    </p>
                    <div
                      style={{
                        border: "var(--drp-border-dashed)",
                        padding: "var(--drp-space-4)",
                        marginBottom: "var(--drp-space-4)",
                      }}
                    >
                      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                          "Fliers and business cards can be tacked on such bulletin boards.",
                          "But before doing so, check out with the human resource department",
                          "Parents are required to be in regular touch with the teachers to know",
                          "Do not miss this opportunity and spread the word. Hand them the business card",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="drp-text drp-text--sm drp-text--bold"
                            style={{ marginBottom: "var(--drp-space-1)" }}
                          >
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <p
                      className="drp-text drp-text--sm"
                      style={{
                        lineHeight: "var(--drp-leading-loose)",
                        marginBottom: "var(--drp-space-4)",
                        color: "var(--drp-text-secondary)",
                      }}
                    >
                      Get involved with fundraiser at schools, as it&apos;s a
                      nice approach to market business. Prior to handing out the
                      order received, collect all necessary information like
                      business card pack, fliers, with proper information.
                    </p>
                    <p
                      className="drp-text drp-text--sm drp-text--muted"
                      style={{ lineHeight: "var(--drp-leading-loose)" }}
                    >
                      Note: Voice mails can be put to good use, other than
                      recording messages. They can help to deliver the marketing
                      message.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="drp-h6"
                      style={{ marginBottom: "var(--drp-space-3)" }}
                    >
                      This also may help you
                    </h3>
                    <div className="drp-flex-col drp-gap-2">
                      {relatedArticles.map((a) => (
                        <RelatedArticleRow key={a.title} {...a} />
                      ))}
                    </div>
                  </div>
                </div>
                <ArticleSidebarNav />
              </div>
            </>
          )}

          {view === "search" && (
            <>
              <SupportHero
                searchPlaceholder="Search help articles"
                searchValue="Account"
              />
              <div
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-4)" }}
              >
                <p
                  className="drp-text drp-text--bold drp-text--sm"
                  style={{ marginBottom: "var(--drp-space-3)" }}
                >
                  Search results
                </p>
                <div
                  className="drp-flex-col drp-gap-3"
                  style={{ marginBottom: "var(--drp-space-6)" }}
                >
                  {searchResults.map((r) => (
                    <SearchResultRow key={r.title} {...r} />
                  ))}
                </div>
                <Pagination
                  currentPage={1}
                  totalPages={10}
                  onPageChange={() => {}}
                />
              </div>
            </>
          )}
        </div>

        <AppFooter />
      </div>
    </div>
  );
};
