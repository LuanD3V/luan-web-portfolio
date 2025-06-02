import Link from "next/link";
import { formatClassName } from "@/utils";
import styles from "./NavigationItem.module.scss";

export interface NavigationItemProps {
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  href: string;
  onClick?: () => void;
}

const NavigationItem = ({
  label,
  icon,
  disabled,
  selected,
  className = "",
  href,
  onClick,
}: NavigationItemProps) => {
  return (
    <Link
      href={href}
      className={formatClassName(styles.navigationItem, className)}
      onNavigate={onClick}
      aria-disabled={disabled}
      aria-selected={selected}
      aria-label={label}
      data-selected={selected}
      data-disabled={disabled}
      role="NavigationItem"
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export { NavigationItem };
