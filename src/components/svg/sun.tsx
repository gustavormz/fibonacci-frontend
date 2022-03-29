import * as React from 'react';
import { SVGProps } from 'react';

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlSpace='preserve'
    width={111.69}
    height={111.69}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      style={{
        fill: '#fcdd66',
      }}
      cx={55.845}
      cy={55.845}
      r={55.845}
    />
    <circle
      style={{
        fill: '#fbd009',
      }}
      cx={55.845}
      cy={55.845}
      r={46.174}
    />
  </svg>
);

export default SvgSun;
