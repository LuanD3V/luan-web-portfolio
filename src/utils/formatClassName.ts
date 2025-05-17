export const formatClassName = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ");
};
