export interface ThemeOption {
  id: string;
  name: string;
  tag: string;
  bgDark: string;
  cardBg: string;
  accentPrimary: string;
  accentSecondary: string;
  glowColor: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cyber-graphite',
    name: 'Cyber Graphite',
    tag: 'Default Cinematic Tech',
    bgDark: '#08080C',
    cardBg: '#0F0F16',
    accentPrimary: '#3B82F6',
    accentSecondary: '#06B6D4',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    description: 'Deep graphite background with electric blue, cyan, and violet ambient glow.',
  },
  {
    id: 'obsidian-luxury',
    name: 'Obsidian Minimal',
    tag: 'Apple-Level Luxury',
    bgDark: '#000000',
    cardBg: '#0A0A0E',
    accentPrimary: '#10B981',
    accentSecondary: '#38BDF8',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    description: 'Pure obsidian black background, crisp silver typography, and emerald highlights.',
  },
  {
    id: 'neospectra-violet',
    name: 'NeoSpectra Violet',
    tag: 'Futuristic Studio',
    bgDark: '#090714',
    cardBg: '#120E24',
    accentPrimary: '#A855F7',
    accentSecondary: '#00F0FF',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    description: 'Deep midnight violet with vivid purple, neon cyan, and dynamic visual energy.',
  },
  {
    id: 'titanium-stealth',
    name: 'Titanium Stealth',
    tag: 'Enterprise Security',
    bgDark: '#0D1117',
    cardBg: '#161B22',
    accentPrimary: '#14B8A6',
    accentSecondary: '#2563EB',
    glowColor: 'rgba(20, 184, 166, 0.3)',
    description: 'Charcoal slate background with titanium teal, cobalt blue, and crisp engineering structure.',
  },
];
