import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        bone: "var(--color-bone)",
        concrete: "var(--color-concrete)",
        sage: "var(--color-sage)",
        clay: "var(--color-clay)",
        bg: {
          primary: "var(--color-bg-primary)",
          inverse: "var(--color-bg-inverse)",
          muted: "var(--color-bg-muted)",
        },
        text: {
          primary: "var(--color-text-primary)",
          inverse: "var(--color-text-inverse)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          primary: "var(--color-accent-primary)",
          secondary: "var(--color-accent-secondary)",
        },
        border: {
          DEFAULT: "var(--color-border-default)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        // beautiful-shadows sm — compact pills, quiet surfaces
        "beautiful-sm":
          "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
