// Team content for Fi-Tek

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  type: "leadership" | "management";
}

export interface TeamHeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface TeamContent {
  hero: TeamHeroContent;
  leadership: TeamMember[];
  management: TeamMember[];
}

export const team: TeamContent = {
  hero: {
    title: "Our Team",
    subtitle: "Meet the leadership and management team behind Fi-Tek.",
    backgroundImage: "/media/team/hero-bg.png",
  },
  management: [
    {
    id: "2",
    name: "Surajit (Rana) Banerjee",
    title: "Managing Director – Offshore Operations and HedgeTek",
    image: "/media/team/unknown.png",
    type: "leadership",
    },
    {
    id: "3",
    name: "Ramsey El-Fakir",
    title: "Senior Managing Director & CIO - Technology and Infrastructure",
    image: "/media/team/unknown.png",
    type: "leadership",
    },
    {
    id: "4",
    name: "Kevin Fisher",
    title: "SMD - Head of Business Development",
    image: "/media/team/kevin-fisher.png",
    type: "leadership",
    },
    {
    id: "5",
    name: "Erik Forssman",
    title: "Senior Managing Director",
    image: "/media/team/erik-forssman.png",
    type: "leadership",
    },
    {
    id: "6",
    name: "Richard J. Gelinas",
    title: "Chief Financial Officer",
    image: "/media/team/richard-gelinas.png",
    type: "leadership",
    },
    {
    id: "7",
    name: "Stuart Hendry",
    title: "SMD - Head of Strategic Initiatives",
    image: "/media/team/unknown.png",
    type: "leadership",
    },
    {
    id: "8",
    name: "Frank Judisch",
    title: "Managing Director, Wealth Management",
    image: "/media/team/unknown.png",
    type: "leadership",
    },
    {
    id: "9",
    name: "James Okamura",
    title: "President, First State Trust Company",
    image: "/media/team/unknown.png",
    type: "leadership",
    },
    {
    id: "10",
    name: "Ranjan Roy",
    title: "CTO Offshore Operations",
    image: "/media/team/unknown.png",
    type: "leadership",
    },

  ],
  leadership: [
    {
    id: "1",
    name: "Subir Chatterjee",
    title: "President & Chief Executive Officer",
    image: "/media/team/subir-chatterjee.png",
    type: "leadership",
    },
    // Add more management members as needed
  ],
};
