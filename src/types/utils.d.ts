/// <reference types="react" />

declare module '*/utils/LightRays/LightRays' {
  export interface LightRaysProps {
    raysOrigin?: 'top-left' | 'top-center' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    raysColor?: string;
    raysSpeed?: number;
    lightSpread?: number;
    rayLength?: number;
    pulsating?: boolean;
    fadeDistance?: number;
    saturation?: number;
    followMouse?: boolean;
    mouseInfluence?: number;
    noiseAmount?: number;
    distortion?: number;
    className?: string;
  }

  const LightRays: React.FC<LightRaysProps>;
  export default LightRays;
}

declare module '*/utils/DecryptedText/DecryptedText' {
  export interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'hover' | 'view';
    [key: string]: any;
  }

  const DecryptedText: React.FC<DecryptedTextProps>;
  export default DecryptedText;
}


declare module '*/utils/LogoLoop/LogoLoop' {
  export interface LogoItem {
    node?: React.ReactElement;
    src?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
    alt?: string;
    title?: string;
    href?: string;
    ariaLabel?: string;
  }

  export interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right';
    width?: string | number;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  const LogoLoop: React.FC<LogoLoopProps>;
  export default LogoLoop;
}
