import type { ReactNode } from "react";

export interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
  avatar?: ReactNode;
  className?: string;
}

export function Testimonial({
  quote,
  name,
  role,
  avatar,
  className = "",
}: TestimonialProps) {
  return (
    <div className={["drp-testimonial", className].filter(Boolean).join(" ")}>
      <p className="drp-testimonial__quote">{quote}</p>
      <div className="drp-testimonial__author">
        {avatar && <div className="drp-testimonial__avatar">{avatar}</div>}
        <div>
          <div className="drp-testimonial__name">{name}</div>
          {role && <div className="drp-testimonial__role">{role}</div>}
        </div>
      </div>
    </div>
  );
}
