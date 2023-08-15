export type TIconSize = {
  width: string;
  height: string;
};

export interface IIconProps {
  color?: string;
  size?: TIconSize | string;
  className?: string;
}
