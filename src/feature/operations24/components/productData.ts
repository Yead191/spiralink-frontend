export interface CardContent {
  id: string;
  title: string | string[];
  description?: string;
  isLarge?: boolean;
  // For large cards with split layouts
  leftSection?: {
    asterisk?: boolean;
    header?: string;
    description?: string;
    subheader?: string;
    points?: string[];
  };
  rightSection?: {
    asterisk?: boolean;
    header?: string;
    description?: string;
    subheader?: string;
    points?: string[];
  };
  // For normal cards
  subheader?: string;
  points?: string[];
  footer?: string;
}

export const productCardsData: { cards: CardContent[] } = {
  cards: [
    {
      id: "slow-unavailable",
      isLarge: true,
      title: [
        "Predictable behavior",
        "when systems are slow",
        "or unavailable",
      ],
      leftSection: {
        asterisk: true,
        header: "Real operations depend on real systems.",
        description:
          "When an external system is slow, unavailable, or returns incomplete data, the voicebot does not improvise.",
      },
      rightSection: {
        subheader: "Instead, it:",
        points: [
          "Follows predefined fallback behavior",
          "Avoids giving uncertain or incorrect information",
          "Escalates to a human agent when required",
        ],
      },
    },
    {
      id: "real-call-volumes",
      title: ["Stable behavior under", "real call volumes"],
      description:
        "The system is designed to handle fluctuating inbound demand.",
      subheader:
        "Whether call volume is predictable or suddenly spikes, the voicebot continues to:",
      points: [
        "Answer calls consistently",
        "Follow defined call logic",
        "Respect escalation rules",
        "Avoid degraded behavior",
      ],
      footer:
        'There is no "demo mode" versus "production mode". The same behavior applies at all times.',
    },
    {
      id: "clear-boundaries",
      title: ["Clear boundaries prevent", "unexpected behavior"],
      description:
        "The voicebot operates within strict operational boundaries.",
      subheader: "It will not:",
      points: [
        "Invent answers when data is missing",
        "Continue a flow when conditions are unclear",
        "Perform actions outside approved permissions",
      ],
      footer:
        "When the system reaches a boundary, the correct outcome is chosen, not the fastest one. This is what makes 24/7 operation safe.",
    },
    {
      id: "manual-monitoring",
      isLarge: true,
      title: ["Continuous availability", "without manual monitoring"],
      leftSection: {
        subheader: "There is no need for agents or managers to:",
        points: [
          "Watch live conversations",
          "Intervene manually",
          "Correct AI behavior during calls",
        ],
      },
      rightSection: {
        asterisk: true,
        header:
          "The system does not require constant human supervision to remain reliable.",
        description:
          "Operations teams can trust the system to behave consistently, even outside business hours.",
      },
    },
    {
      id: "gradual-scaling",
      title: ["Designed for gradual", "scaling, not sudden", "exposure"],
      description:
        "24/7 readiness is not about switching everything on at once.",
      subheader: "The system is designed to:",
      points: [
        "Start with limited scope",
        "Expand call coverage gradually",
        "Maintain consistent behavior as volume grows",
      ],
      footer:
        "This allows teams to scale availability without increasing operational risk.",
    },
    {
      id: "operational-requirement",
      title: ["Reliability as an", "operational requirement"],
      description:
        "Reliability is treated as a core operational requirement, not a feature.",
      subheader: "The voicebot is designed to:",
      points: [
        "Behave consistently across time zones",
        "Maintain quality during peak moments",
        "Fail safely when something unexpected occurs",
      ],
      footer:
        "This is what allows inbound customer support to remain available at all times without compromising control.",
    },
  ],
};
