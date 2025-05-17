import styles from "./MenuItem.module.css";

export interface MenuItemProps {
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

const MenuItem = ({
  label,
  icon,
  disabled,
  selected,
  className,
  onClick,
}: MenuItemProps) => {
  return <div></div>;
};

export { MenuItem };
