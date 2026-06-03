import type { IconName } from "@/components/ui/Icon";

export type NavLink = { label: string; href: string };

export type Cta = { label: string; href: string };

export type IconCard = {
  icon: IconName;
  title: string;
  text?: string;
};

export type Step = {
  num: string;
  icon: IconName;
  title: string;
  text: string;
};

export type UseCase = {
  icon: IconName;
  title: string;
  text: string;
};

export type Package = {
  icon: IconName;
  name: string;
  text: string;
  highlight?: boolean;
};

export type FaqItem = { q: string; a: string };

export type FlowNode = { icon: IconName; label: string };

export type AssetSpoke = {
  icon: IconName;
  label: string;
  /** optional platform tint for the chip */
  tone?: "default" | "gold";
};

export type EmbedPlaceholder = {
  platform: "spotify" | "instagram" | "youtube";
  icon: IconName;
  title: string;
  note: string;
  exampleUrl?: string;
};

export type SocialLink = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
};
