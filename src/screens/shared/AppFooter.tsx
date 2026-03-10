import React from "react";
import { Footer } from "../../components/Footer/Footer";

export const AppFooter: React.FC = () => (
  <Footer
    brand="Doctor Project"
    columns={[]}
    copyright="© 2026 Doctor Project. All rights reserved."
    bottomLinks={[
      { label: "Privacy Policy", href: "#" },
      { label: "License", href: "#" },
      { label: "API Reference", href: "#" },
    ]}
  />
);
