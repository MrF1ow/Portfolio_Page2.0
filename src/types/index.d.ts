import { Line } from "@react-three/drei";

interface HamburgerIconProps {
  toggleMenu: () => void;
}

interface ImageProperties {
  src: string;
  alt: string;
}

type AnimatedTextProps = {
  text: string;
};

interface AnimationValues {
  xTranslation: MotionValue<number>;
  totalWidth: React.MutableRefObject<number>;
  direction: React.MutableRefObject<"left" | "right">;
}

interface LinePercentProps {
  percent: number;
  color?: string;
}

interface ExSlotProps {
  title: string;
  years: string;
}

interface NavProps {
  activeNav: string;
  isMobile: boolean;
}

type ExperienceData = {
  title: string;
  years: number;
  color: string;
  percent: number;
}

interface ExperiencePanelProps {
  data: ExperienceData[];
}

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}
