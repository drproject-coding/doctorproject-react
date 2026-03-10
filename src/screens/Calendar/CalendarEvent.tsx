import React, { useState } from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

type CalendarView = 'month' | 'week' | 'day';

const CalendarNav: React.FC<{
  view: CalendarView;
  onViewChange: (v: CalendarView) => void;
  dateLabel: string;
}> = ({ view, onViewChange, dateLabel }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{ padding: "var(--drp-space-4) var(--drp-space-6)" }}
  >
    <div className="drp-flex drp-items-center drp-gap-3">
      <div className="drp-btn-group">
        <button className="drp-btn drp-btn--sm drp-btn--outline">
          &#8249;
        </button>
        <button className="drp-btn drp-btn--sm drp-btn--outline">
          &#8250;
        </button>
      </div>
      <span className="drp-h5">{dateLabel}</span>
    </div>
    <div className="drp-flex drp-items-center drp-gap-3">
      <div className="drp-tabs">
        {(["Month", "Week", "Day"] as const).map((v) => (
          <button
            key={v}
            onClick={() => onViewChange(v.toLowerCase() as CalendarView)}
            className={`drp-tab${view === v.toLowerCase() ? " drp-tab--active" : ""}`}
          >
            {v}
          </button>
        ))}
      </div>
      <button className="drp-btn drp-btn--sm drp-btn--outline">
        Sort: A-Z
      </button>
    </div>
  </div>
);

type EventColor = "green" | "purple" | "yellow";

const eventColorMap: Record<EventColor, { tag: string; dot: string }> = {
  green: { tag: "drp-tag--mint", dot: "var(--drp-mint)" },
  purple: { tag: "drp-tag--purple", dot: "var(--drp-purple)" },
  yellow: { tag: "drp-tag--yellow", dot: "var(--drp-yellow)" },
};

const EventPill: React.FC<{
  label: string;
  color: EventColor;
  small?: boolean;
}> = ({ label, color, small }) => (
  <span
    className={`drp-tag drp-tag--dot ${eventColorMap[color].tag}`}
    style={
      small
        ? { maxWidth: 100, fontSize: "var(--drp-text-xs)", padding: "2px 8px" }
        : undefined
    }
  >
    <span className="drp-truncate">{label}</span>
  </span>
);

const EventModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "var(--drp-z-modal)",
    }}
    onClick={onClose}
  >
    <div
      className="drp-card"
      style={{
        width: 480,
        padding: "var(--drp-space-6)",
        boxShadow: "var(--drp-shadow-xl)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="drp-flex drp-items-center drp-justify-between"
        style={{ marginBottom: "var(--drp-space-1)" }}
      >
        <span className="drp-tag drp-tag--filled">7:30 am</span>
        <button className="drp-btn drp-btn--ghost drp-btn--sm">...</button>
      </div>
      <h2
        className="drp-h3"
        style={{
          marginTop: "var(--drp-space-3)",
          marginBottom: "var(--drp-space-1)",
        }}
      >
        Design a new dashboard for client
      </h2>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{ marginBottom: "var(--drp-space-5)" }}
      >
        Task created on 7 Jun 2022
      </p>

      <div
        className="drp-flex drp-gap-6"
        style={{ marginBottom: "var(--drp-space-5)" }}
      >
        <div>
          <p
            className="drp-label"
            style={{ marginBottom: "var(--drp-space-2)" }}
          >
            Assigned to
          </p>
          <div className="drp-flex drp-items-center">
            {[
              "var(--drp-orange)",
              "var(--drp-purple)",
              "var(--drp-info)",
              "var(--drp-mint)",
            ].map((c, i) => (
              <div
                key={i}
                className="sidebar-avatar"
                style={{
                  background: c,
                  width: 28,
                  height: 28,
                  border: "2px solid var(--drp-white)",
                  marginLeft: i === 0 ? 0 : -4,
                }}
              />
            ))}
            <div
              style={{
                width: 28,
                height: 28,
                border: "var(--drp-border-dashed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--drp-grey)",
                fontSize: "var(--drp-text-xs)",
                marginLeft: -4,
              }}
            >
              +
            </div>
          </div>
        </div>
        <div>
          <p
            className="drp-label"
            style={{ marginBottom: "var(--drp-space-2)" }}
          >
            Due to
          </p>
          <div className="drp-flex drp-items-center drp-gap-2">
            <span className="drp-tag">15 Aug 2023</span>
            <span className="drp-tag drp-tag--filled drp-tag--purple">
              Business
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "var(--drp-border-thin)",
          paddingTop: "var(--drp-space-4)",
          marginBottom: "var(--drp-space-4)",
        }}
      >
        <h3 className="drp-h6" style={{ marginBottom: "var(--drp-space-2)" }}>
          Description
        </h3>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ lineHeight: "var(--drp-leading-loose)" }}
        >
          When I first got into the online advertising business, I was looking
          for the magical combination that would put my website
        </p>
      </div>

      <div
        className="drp-flex drp-items-center drp-gap-2"
        style={{
          border: "var(--drp-border)",
          padding: "var(--drp-space-2) var(--drp-space-3)",
        }}
      >
        <input
          className="drp-input"
          style={{
            flex: 1,
            border: "none",
            boxShadow: "none",
            padding: "4px 0",
          }}
          placeholder="Type to add your comment"
          readOnly
        />
        <button className="drp-btn drp-btn--ghost drp-btn--sm">+</button>
        <button className="drp-btn drp-btn--primary drp-btn--icon drp-btn--sm">
          &#8250;
        </button>
      </div>
    </div>
  </div>
);

// Month view data
const weeks = [
  [
    { day: null, events: [] },
    { day: null, events: [] },
    { day: null, events: [] },
    { day: null, events: [] },
    {
      day: 30,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 1, events: [{ label: "Call", color: "green" as EventColor }] },
    { day: 2, events: [] },
  ],
  [
    {
      day: 5,
      events: [
        { label: "Meeting", color: "purple" as EventColor },
        { label: "Call", color: "green" as EventColor },
        { label: "+1 more", color: "purple" as EventColor },
      ],
    },
    { day: 6, events: [] },
    { day: 7, events: [] },
    { day: 8, events: [] },
    {
      day: 9,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 8, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    { day: 9, events: [] },
  ],
  [
    { day: 12, events: [{ label: "Call", color: "green" as EventColor }] },
    { day: 13, events: [] },
    { day: 14, events: [] },
    { day: 15, events: [] },
    { day: 15, events: [] },
    {
      day: 15,
      events: [
        { label: "Meeting", color: "purple" as EventColor },
        { label: "Call", color: "green" as EventColor },
        { label: "+1 more", color: "purple" as EventColor },
      ],
    },
    { day: 16, events: [] },
  ],
  [
    {
      day: 19,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 20, events: [] },
    { day: 21, events: [] },
    { day: 22, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    { day: 22, events: [] },
    { day: 22, events: [] },
    { day: 23, events: [] },
  ],
  [
    { day: 26, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    {
      day: 27,
      events: [
        { label: "Call", color: "green" as EventColor },
        { label: "Meeting", color: "purple" as EventColor },
      ],
    },
    { day: 28, events: [] },
    { day: 29, events: [] },
    { day: 29, events: [] },
    {
      day: 30,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 30, events: [] },
  ],
];

const MonthView: React.FC<{ showModal: boolean; onToggle: () => void }> = ({
  showModal,
  onToggle,
}) => (
  <div
    style={{
      flex: 1,
      overflow: "auto",
      padding: "0 var(--drp-space-6) var(--drp-space-6)",
      position: "relative",
    }}
  >
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderBottom: "var(--drp-border-thin)",
        }}
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            key={d}
            className="drp-label drp-text-center"
            style={{ padding: "var(--drp-space-2)" }}
          >
            {d}
          </div>
        ))}
      </div>
      {weeks.map((week, wi) => (
        <div
          key={wi}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            borderBottom:
              wi < weeks.length - 1 ? "var(--drp-border-thin)" : "none",
          }}
        >
          {week.map((cell, ci) => (
            <div
              key={ci}
              onClick={cell.day ? onToggle : undefined}
              style={{
                minHeight: 90,
                borderRight: ci < 6 ? "var(--drp-border-thin)" : "none",
                padding: "var(--drp-space-2)",
                cursor: cell.day ? "pointer" : "default",
                background: cell.day ? "var(--drp-white)" : "var(--drp-cream)",
              }}
            >
              {cell.day && (
                <>
                  <div
                    className="drp-text drp-text--sm drp-text--bold"
                    style={{
                      marginBottom: "var(--drp-space-1)",
                      color: "var(--drp-grey)",
                    }}
                  >
                    {cell.day}
                  </div>
                  <div className="drp-flex-col drp-gap-1">
                    {cell.events.map((e, ei) => (
                      <EventPill
                        key={ei}
                        label={e.label}
                        color={e.color}
                        small
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    {showModal && <EventModal onClose={onToggle} />}
  </div>
);

const timeSlots = [
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "13am",
  "1pm",
  "2pm",
];

const dayEvents = [
  { time: "7:30 am", label: "Call", color: "green" as EventColor },
  { time: "8:30 am", label: "Meeting", color: "purple" as EventColor },
  { time: "9:00 am", label: "Meeting", color: "purple" as EventColor },
  { time: "10:30 am", label: "Call", color: "green" as EventColor },
  null,
  { time: "7:30 am", label: "Meeting", color: "yellow" as EventColor },
  null,
  { time: "7:30 am", label: "Call", color: "green" as EventColor },
  { time: "7:30 am", label: "Meeting", color: "purple" as EventColor },
];

const eventBgMap: Record<EventColor, string> = {
  green: "rgba(152, 233, 171, 0.2)",
  purple: "var(--drp-purple-20)",
  yellow: "rgba(250, 232, 164, 0.2)",
};

const DayView: React.FC = () => (
  <div
    style={{
      flex: 1,
      overflow: "auto",
      padding: "0 var(--drp-space-6) var(--drp-space-6)",
    }}
  >
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <div
        className="drp-text drp-text--bold drp-text-center"
        style={{
          padding: "var(--drp-space-3) var(--drp-space-4)",
          borderBottom: "var(--drp-border-thin)",
        }}
      >
        Monday, 3
      </div>
      {timeSlots.map((slot, i) => {
        const ev = dayEvents[i];
        return (
          <div
            key={slot}
            style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr",
              borderBottom:
                i < timeSlots.length - 1 ? "var(--drp-border-thin)" : "none",
            }}
          >
            <div
              className="drp-text drp-text--sm drp-text--muted drp-text-right"
              style={{
                padding: "var(--drp-space-3)",
                borderRight: "var(--drp-border-thin)",
                alignSelf: "center",
              }}
            >
              {slot}
            </div>
            <div
              style={{
                padding: "var(--drp-space-2) var(--drp-space-3)",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
            >
              {ev && (
                <div
                  className="drp-flex drp-items-center drp-gap-2"
                  style={{
                    padding: "6px var(--drp-space-3)",
                    background: eventBgMap[ev.color],
                    width: "100%",
                  }}
                >
                  <span
                    className="drp-dot"
                    style={{
                      background: eventColorMap[ev.color].dot,
                      width: 8,
                      height: 8,
                    }}
                  ></span>
                  <span className="drp-text drp-text--sm drp-text--muted">
                    {ev.time}
                  </span>
                  <span className="drp-text drp-text--sm drp-text--bold">
                    {ev.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const weekCols = [
  {
    label: "Mon, 3",
    events: {
      0: { label: "Call", color: "green" as EventColor },
      2: { label: "Meeting", color: "purple" as EventColor },
      3: { label: "Call", color: "green" as EventColor },
      5: { label: "Present...", color: "yellow" as EventColor },
    },
  },
  {
    label: "Tue, 4",
    events: {
      1: { label: "Meeting", color: "purple" as EventColor },
      2: { label: "Call", color: "green" as EventColor },
      6: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Wed, 5",
    events: {
      0: { label: "Meeting", color: "purple" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
      6: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Thu, 6",
    events: {
      1: { label: "Present...", color: "yellow" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Fri, 7",
    events: {
      0: { label: "Call", color: "green" as EventColor },
      2: { label: "Present...", color: "yellow" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Sat, 8",
    events: {
      2: { label: "Meeting", color: "purple" as EventColor },
      3: { label: "Call", color: "green" as EventColor },
      6: { label: "Present...", color: "yellow" as EventColor },
    },
  },
  { label: "Sun, 9", events: {} },
];

const WeekView: React.FC = () => (
  <div
    style={{
      flex: 1,
      overflow: "auto",
      padding: "0 var(--drp-space-6) var(--drp-space-6)",
    }}
  >
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "64px repeat(7, 1fr)",
          borderBottom: "var(--drp-border-thin)",
        }}
      >
        <div style={{ borderRight: "var(--drp-border-thin)" }}></div>
        {weekCols.map((d) => (
          <div
            key={d.label}
            className="drp-label drp-text-center"
            style={{
              padding: "var(--drp-space-2)",
              borderRight: "var(--drp-border-thin)",
            }}
          >
            {d.label}
          </div>
        ))}
      </div>
      {timeSlots.map((slot, si) => (
        <div
          key={slot}
          style={{
            display: "grid",
            gridTemplateColumns: "64px repeat(7, 1fr)",
            borderBottom:
              si < timeSlots.length - 1 ? "var(--drp-border-thin)" : "none",
          }}
        >
          <div
            className="drp-text drp-text--sm drp-text--muted drp-text-right"
            style={{
              padding: "var(--drp-space-3)",
              borderRight: "var(--drp-border-thin)",
            }}
          >
            {slot}
          </div>
          {weekCols.map((day, di) => {
            const ev = (
              day.events as Record<number, { label: string; color: EventColor }>
            )[si];
            return (
              <div
                key={di}
                style={{
                  padding: "var(--drp-space-1)",
                  borderRight: di < 6 ? "var(--drp-border-thin)" : "none",
                  minHeight: 44,
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "var(--drp-space-2)",
                }}
              >
                {ev && <EventPill label={ev.label} color={ev.color} small />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

export interface CalendarEventProps {
  defaultView?: CalendarView;
}

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  defaultView = "month",
}) => {
  const [view, setView] = useState<CalendarView>(defaultView);
  const [showModal, setShowModal] = useState(defaultView === "month");

  const dateLabels: Record<CalendarView, string> = {
    month: "September 2022",
    week: "September 3 - 9, 2022",
    day: "September 3 - 9, 2022",
  };

  return (
    <div className="app-layout">
      <AppSidebar activeId="calendar" />
      <div className="main-content">
        <AppTopBar title="Calendar" />
        <CalendarNav
          view={view}
          onViewChange={(v) => {
            setView(v);
            setShowModal(v === "month");
          }}
          dateLabel={dateLabels[view]}
        />
        {view === "month" && (
          <MonthView
            showModal={showModal}
            onToggle={() => setShowModal((s) => !s)}
          />
        )}
        {view === "day" && <DayView />}
        {view === "week" && <WeekView />}
        <AppFooter />
      </div>
    </div>
  );
};
