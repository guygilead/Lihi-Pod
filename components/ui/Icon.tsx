import type { LucideProps } from "lucide-react";
import {
  Tv,
  Newspaper,
  Mic,
  MessageSquareQuote,
  PenLine,
  Layers,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Fingerprint,
  Share2,
  Users,
  UserPlus,
  Infinity as InfinityIcon,
  Heart,
  Building2,
  Network,
  Megaphone,
  Compass,
  Award,
  DoorOpen,
  Cpu,
  Factory,
  Briefcase,
  TrendingUp,
  HandHeart,
  Video,
  Clapperboard,
  CalendarClock,
  Search,
  Target,
  Scissors,
  CheckCircle2,
  Phone,
  Mail,
  Music,
  Headphones,
  AudioLines,
  Sparkles,
  FileText,
  Quote,
} from "lucide-react";

/* Brand marks (lucide v1 removed brand icons). Typed as SVGProps so they sit
   in the registry alongside lucide icons and accept className/strokeWidth. */
type SvgProps = React.SVGProps<SVGSVGElement>;

const Linkedin = (props: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Instagram = ({ strokeWidth = 2, ...props }: SvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const Youtube = ({ strokeWidth = 2, ...props }: SvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
  </svg>
);

type IconComponent = React.ComponentType<LucideProps>;

/** String-keyed registry so content data stays serializable & decoupled. */
const registry = {
  // credibility
  tv: Tv,
  news: Newspaper,
  mic: Mic,
  branding: MessageSquareQuote,
  writing: PenLine,
  assets: Layers,
  guidance: HeartHandshake,
  // external benefits
  expertise: Lightbulb,
  trust: ShieldCheck,
  differentiation: Fingerprint,
  social: Share2,
  employer: UserPlus,
  longterm: InfinityIcon,
  // internal benefits
  share: Users,
  belonging: Heart,
  exposure: Building2,
  stage: Megaphone,
  values: Compass,
  pride: Award,
  crossdept: Network,
  onboarding: DoorOpen,
  // use cases
  tech: Cpu,
  industry: Factory,
  services: Briefcase,
  org: Building2,
  growth: TrendingUp,
  nonprofit: HandHeart,
  // process
  needs: Search,
  goals: Target,
  concept: Lightbulb,
  prep: Users,
  production: Video,
  editing: Scissors,
  contentPack: Share2,
  finalize: CheckCircle2,
  // packages
  video: Clapperboard,
  ongoing: CalendarClock,
  internal: Building2,
  // contact / social / platforms
  phone: Phone,
  mail: Mail,
  linkedin: Linkedin,
  instagram: Instagram,
  spotify: Music,
  youtube: Youtube,
  headphones: Headphones,
  audio: AudioLines,
  sparkle: Sparkles,
  document: FileText,
  quote: Quote,
  check: CheckCircle2,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof registry;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = registry[name];
  return <Cmp {...props} />;
}
