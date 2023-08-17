export const getIconColor = (
  isHovered: boolean,
  normalColor: string,
  hoverColor: string,
) => {
  return isHovered ? hoverColor : normalColor;
};
