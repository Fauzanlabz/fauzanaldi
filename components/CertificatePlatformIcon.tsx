import Image from 'next/image';
import { SiHackthebox } from 'react-icons/si';

const PLATFORM_CONFIG = {
  hackthebox: {
    label: 'Hack The Box Academy',
    color: '#9FEF00',
  },
  ine: {
    label: 'INE Security',
    src: '/certifications/ine.svg',
  },
  'ine-elearn': {
    label: 'INE Security / eLearnSecurity',
    src: '/certifications/ine.svg',
  },
  'altered-security': {
    label: 'Zero Point Security (Altered Security)',
    src: '/certifications/altered-security.ico',
  },
} as const;

export type CertPlatform = keyof typeof PLATFORM_CONFIG;

type CertificatePlatformIconProps = {
  platform: CertPlatform;
  size?: number;
};

export function getPlatformLabel(platform: CertPlatform) {
  return PLATFORM_CONFIG[platform].label;
}

export default function CertificatePlatformIcon({
  platform,
  size = 24,
}: CertificatePlatformIconProps) {
  const config = PLATFORM_CONFIG[platform];

  if ('src' in config) {
    const isIneLogo = platform === 'ine' || platform === 'ine-elearn';

    return (
      <Image
        src={config.src}
        alt={`${config.label} logo`}
        width={isIneLogo ? Math.round(size * 2.24) : size}
        height={size}
        className="object-contain"
      />
    );
  }

  return <SiHackthebox size={size} color={config.color} aria-hidden />;
}
