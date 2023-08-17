export const getIconSize = (isMenuHidden: boolean) => {
  return !isMenuHidden ? '1.125rem' : '2rem';
};

export const getIconColor = (
  isMenuHidden: boolean,
  styles: { [key: string]: string },
) => {
  return !isMenuHidden ? styles.black : styles.white;
};
