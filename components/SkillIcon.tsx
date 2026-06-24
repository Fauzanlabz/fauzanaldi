import Image from 'next/image';
import {
  SiBurpsuite,
  SiMetasploit,
  SiParrotsecurity,
  SiSnort,
  SiWireshark,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiPython,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiSpringboot,
  SiDjango,
  SiFlask,
  SiPhp,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

const ICON_MAP: Record<string, IconType> = {
  burpsuite: SiBurpsuite,
  metasploit: SiMetasploit,
  parrot: SiParrotsecurity,
  wireshark: SiWireshark,
  snort: SiSnort,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  firebase: SiFirebase,
  python: SiPython,
  git: SiGit,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  graphql: SiGraphql,
  vue: SiVuedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  springboot: SiSpringboot,
  django: SiDjango,
  flask: SiFlask,
  php: SiPhp,
};

const IMAGE_ICONS: Record<string, string> = {
  nmap: '/icons/nmap.svg',
  'john-the-ripper': '/icons/john-the-ripper.jpg',
  osint: '/icons/osint.svg',
};

type SkillIconProps = {
  slug: string;
  color: string;
  size?: number;
  name: string;
};

export default function SkillIcon({ slug, color, size = 28, name }: SkillIconProps) {
  const imageSrc = IMAGE_ICONS[slug];
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain rounded-md"
      />
    );
  }

  const Icon = ICON_MAP[slug];
  if (!Icon) return null;

  return <Icon size={size} color={color} aria-hidden />;
}
