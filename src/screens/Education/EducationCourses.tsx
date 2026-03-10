import React from "react";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

// ─── Top Bar ──────────────────────────────────────────────────────────────────

// ─── Footer ───────────────────────────────────────────────────────────────────

// ─── Course Image Placeholders ────────────────────────────────────────────────

const courseImages: Record<string, string> = {
  "data-science":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=70",
  "business-management":
    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=400&q=70",
  development:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=70",
  technologies:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70",
  "computer-science":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=70",
  mba: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=70",
  "computer-science-online":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=70",
  "global-public-health":
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=70",
};

// ─── Trending Card ───────────────────────────────────────────────────────────

interface TrendingCardProps {
  title: string;
  duration: string;
  courseCount: number;
  imageKey: string;
  large?: boolean;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  duration,
  courseCount,
  imageKey,
  large,
}) => (
  <div
    className="drp-card--interactive"
    style={{
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      minHeight: large ? 220 : 100,
      gridRow: large ? "1 / 3" : undefined,
      border: "var(--drp-border)",
    }}
  >
    <img
      src={courseImages[imageKey]}
      alt={title}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "var(--drp-space-2)",
        right: "var(--drp-space-2)",
      }}
    >
      <span
        className="drp-tag drp-tag--filled"
        style={{ fontSize: "var(--drp-text-xs)" }}
      >
        {courseCount} Courses
      </span>
    </div>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "var(--drp-space-3)",
      }}
    >
      <p
        className="drp-text drp-text--bold"
        style={{ color: "#fff", fontSize: "var(--drp-text-sm)" }}
      >
        {title}
      </p>
      <p
        className="drp-text drp-text--sm"
        style={{ color: "var(--drp-grey-light)", marginTop: 2 }}
      >
        {duration}
      </p>
    </div>
  </div>
);

// ─── Degree Card ──────────────────────────────────────────────────────────────

interface DegreeCardProps {
  title: string;
  university: string;
  mode: string;
  icon?: React.ReactNode;
  imageKey: string;
}

const DegreeCard: React.FC<DegreeCardProps> = ({
  title,
  university,
  mode,
  icon,
  imageKey,
}) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: 0, overflow: "hidden" }}
  >
    <div style={{ height: 144, overflow: "hidden" }}>
      <img
        src={courseImages[imageKey]}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ padding: "var(--drp-space-3)" }}>
      <p
        className="drp-text drp-text--bold drp-text--sm"
        style={{ marginBottom: "var(--drp-space-1)" }}
      >
        {title}
      </p>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        {university}
      </p>
      <div className="drp-flex drp-items-center drp-justify-between">
        <span className="drp-tag" style={{ fontSize: "var(--drp-text-xs)" }}>
          {mode}
        </span>
        {icon && <span className="drp-text drp-text--muted">{icon}</span>}
      </div>
    </div>
  </div>
);

// ─── Pagination ───────────────────────────────────────────────────────────────

const CoursePagination: React.FC = () => (
  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
);

// ─── Hero Section ─────────────────────────────────────────────────────────────

const CoursesHero: React.FC<{ title?: string; placeholder?: string }> = ({
  title = "Explore Topics and Skills",
  placeholder = "What do you want to learn?",
}) => (
  <div
    style={{
      margin: "var(--drp-space-6)",
      padding: "var(--drp-space-10) var(--drp-space-8)",
      border: "var(--drp-border)",
      background:
        "radial-gradient(ellipse at 70% 50%, var(--drp-purple-20) 0%, transparent 65%), var(--drp-cream)",
      position: "relative",
    }}
  >
    <h2
      className="drp-h2 drp-text-center"
      style={{ marginBottom: "var(--drp-space-6)" }}
    >
      {title}
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
        placeholder={placeholder}
        readOnly
      />
      <button
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
      For example: UI and UX development
    </p>
  </div>
);

// ─── Category Card ────────────────────────────────────────────────────────────

interface CourseCategoryCardProps {
  title: string;
  university: string;
  duration: string;
  type: "Course" | "Specialization";
  imageKey: string;
}

const CourseCategoryCard: React.FC<CourseCategoryCardProps> = ({
  title,
  university,
  duration,
  type,
  imageKey,
}) => (
  <div
    className="drp-card drp-card--interactive"
    style={{ padding: 0, overflow: "hidden" }}
  >
    <div style={{ height: 144, overflow: "hidden" }}>
      <img
        src={courseImages[imageKey]}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ padding: "var(--drp-space-3)" }}>
      <p
        className="drp-text drp-text--bold drp-text--sm"
        style={{ marginBottom: "var(--drp-space-1)" }}
      >
        {title}
      </p>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        {university}
      </p>
      <div className="drp-flex drp-items-center drp-gap-2">
        <span className="drp-tag" style={{ fontSize: "var(--drp-text-xs)" }}>
          {type}
        </span>
        <span className="drp-text drp-text--sm drp-text--muted">
          {duration}
        </span>
      </div>
    </div>
  </div>
);

const categorySpecializations = [
  {
    title: "Developing Applications with Google Cloud Platform",
    university: "University of Illinois Urbana-Champaign",
    duration: "3-6 Weeks",
    type: "Course" as const,
    imageKey: "mba",
  },
  {
    title: "Full Stack Web Development with Angular Specialization",
    university: "The Hong Kong University of Science and Business",
    duration: "3 Weeks",
    type: "Course" as const,
    imageKey: "computer-science-online",
  },
  {
    title: "Web Design for Everybody: Basics of Web Development",
    university: "University of Michigan",
    duration: "4-6 Weeks",
    type: "Course" as const,
    imageKey: "global-public-health",
  },
  {
    title: "Responsive Development and Design Specialization",
    university: "University of London",
    duration: "3-5 Weeks",
    type: "Course" as const,
    imageKey: "development",
  },
  {
    title: "Web Applications for Everybody Specialization",
    university: "University of Illinois Urbana-Champaign",
    duration: "1 Week",
    type: "Course" as const,
    imageKey: "technologies",
  },
  {
    title: "Development and Design Specialization",
    university: "University of London",
    duration: "4-6 Weeks",
    type: "Course" as const,
    imageKey: "data-science",
  },
];

// ─── Suggested Searches ──────────────────────────────────────────────────────

const SuggestedSearches: React.FC = () => {
  const searches = [
    { label: "Frontend", active: false },
    { label: "JavaScript", active: true },
    { label: "Brand creation", active: false },
    { label: "Dropshipping in medicine", active: false },
    { label: "Founding partner", active: false },
    { label: "Project manager", active: false },
    { label: "Developer", active: false },
    { label: "Managing director", active: false },
  ];

  return (
    <div style={{ marginBottom: "var(--drp-space-5)" }}>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        Suggested course searches
      </p>
      <div className="drp-flex drp-flex-wrap drp-gap-2">
        {searches.map((s) => (
          <button
            key={s.label}
            className={`drp-tag${s.active ? " drp-tag--filled drp-tag--purple" : ""}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export type EducationView = "courses" | "category";

export interface EducationCoursesProps {
  theme?: "light" | "dark";
  view?: EducationView;
}

export const EducationCourses: React.FC<EducationCoursesProps> = ({
  view = "courses",
}) => {
  const trendingCards = [
    {
      title: "Data Science",
      duration: "14 - 18 months",
      courseCount: 64,
      imageKey: "data-science",
      large: true,
    },
    {
      title: "Business Management",
      duration: "14 - 18 months",
      courseCount: 56,
      imageKey: "business-management",
    },
    {
      title: "Development",
      duration: "17 - 24 months",
      courseCount: 78,
      imageKey: "development",
    },
    {
      title: "Technologies",
      duration: "12 months",
      courseCount: 35,
      imageKey: "technologies",
    },
    {
      title: "Computer Science",
      duration: "12 - 36 months",
      courseCount: 46,
      imageKey: "computer-science",
    },
  ];

  const degreeCards = [
    {
      title: "Master of Business Administration",
      university: "University of Urbana-Champaign",
      mode: "Remote",
      icon: "G",
      imageKey: "mba",
    },
    {
      title: "Online Master of Computer Science",
      university: "Arizona State University",
      mode: "Remote",
      icon: "\u2699",
      imageKey: "computer-science-online",
    },
    {
      title: "Global Master of Public Health and Science",
      university: "Imperial College London",
      mode: "Remote",
      icon: "\u2666",
      imageKey: "global-public-health",
    },
  ];

  return (
    <div className="app-layout">
      <AppSidebar activeId="education" />
      <div className="main-content">
        <AppTopBar title="Courses" />

        <div style={{ flex: 1, overflow: "auto" }}>
          {view === "courses" ? (
            <>
              <CoursesHero />
              <div
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-2)" }}
              >
                <div style={{ marginBottom: "var(--drp-space-6)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Trending today
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridTemplateRows: "auto auto",
                      gap: "var(--drp-space-3)",
                    }}
                  >
                    <div style={{ gridRow: "1 / 3" }}>
                      <TrendingCard {...trendingCards[0]} large />
                    </div>
                    <TrendingCard {...trendingCards[1]} />
                    <TrendingCard {...trendingCards[2]} />
                    <TrendingCard {...trendingCards[3]} />
                    <TrendingCard {...trendingCards[4]} />
                  </div>
                </div>

                <div style={{ marginBottom: "var(--drp-space-4)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Earn Your Degree
                  </h3>
                  <div className="drp-grid-3">
                    {degreeCards.map((card) => (
                      <DegreeCard key={card.title} {...card} />
                    ))}
                  </div>
                </div>

                <CoursePagination />
              </div>
            </>
          ) : (
            <>
              <CoursesHero
                title="Software Development"
                placeholder="Mobile and Web Design"
              />
              <div
                style={{ padding: "0 var(--drp-space-6) var(--drp-space-2)" }}
              >
                <SuggestedSearches />
                <div style={{ marginBottom: "var(--drp-space-3)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Earn Your Degree
                  </h3>
                  <div className="drp-grid-3">
                    {categorySpecializations.map((card) => (
                      <CourseCategoryCard key={card.title} {...card} />
                    ))}
                  </div>
                </div>
                <CoursePagination />
              </div>
            </>
          )}
        </div>

        <AppFooter />
      </div>
    </div>
  );
};
