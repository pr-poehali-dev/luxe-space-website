import { icons, LucideIcon } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className = "",
}: IconProps) => {
  const IconComponent = icons[name] as LucideIcon;
  const FallbackIcon = icons[fallback] as LucideIcon;

  const ActualIcon = IconComponent || FallbackIcon;

  return <ActualIcon size={size} className={className} />;
};

export default Icon;
