import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlSpace='preserve'
    width={495}
    height={495}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      style={{
        fill: '#3e3d42',
      }}
      d='M247.5 0v495C383.972 495 495 383.972 495 247.5 495 111.028 383.972 0 247.5 0Z'
    />
    <path
      style={{
        fill: '#57565c',
      }}
      d='M0 247.5C0 383.972 111.028 495 247.5 495V0C111.028 0 0 111.028 0 247.5Z'
    />
  </svg>
);

export default SvgMoon;