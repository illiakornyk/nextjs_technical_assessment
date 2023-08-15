import { SVGProps } from 'react';

export type TIconSize = {
  width: string;
  height: string;
};

export interface IIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: TIconSize | string;
  className?: string;
}
