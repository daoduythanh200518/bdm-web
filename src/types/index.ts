export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ServiceSummary = {
  slug: string;
  title: string;
  short: string;
  price: string;
  image: string;
};

export type ServiceHighlight = {
  title: string;
  text: string;
};

export type ServiceDetailSection = {
  heading: string;
  paragraphs: string[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  heroVariant: "orange" | "blue" | "purple" | "dark";
  image: string;
  imageFit?: "cover" | "contain";
  intro: string;
  highlights: ServiceHighlight[];
  benefits: string[];
  details?: ServiceDetailSection[];
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  variant: "orange" | "blue" | "purple" | "dark" | "light";
  image: string;
  content: string[];
};
