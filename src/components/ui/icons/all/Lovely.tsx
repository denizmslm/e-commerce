import * as React from "react";
import type { SVGProps } from "react";
const SvgLovely = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.17 10.4q.129-.78.15-1.57a6.1 6.1 0 0 0-4.1-5.7 6.56 6.56 0 0 0-5.64.67 6.57 6.57 0 0 0-5.2-.8 6.06 6.06 0 0 0-4.55 5.87c-.12 6.89 7.56 10.5 9.1 11.15a1.8 1.8 0 0 0 .68.14c.184.001.367-.03.54-.09.22-.08.54-.19.92-.36a13.6 13.6 0 0 0 2.48 1.4q.265.109.55.11c.146.001.292-.022.43-.07 1-.35 6.06-2.34 6.14-7.57a4.23 4.23 0 0 0-1.5-3.18m-9.51 8.25h-.14c-1.39-.59-8.29-3.82-8.19-9.75a4.57 4.57 0 0 1 3.43-4.45 5 5 0 0 1 4.36.86.77.77 0 0 0 .91 0 5.07 5.07 0 0 1 4.73-.75 4.62 4.62 0 0 1 3.06 4.24c0 .27 0 .54-.05.81a4.54 4.54 0 0 0-3.7.39 4.54 4.54 0 0 0-3.45-.47 4.21 4.21 0 0 0-3.16 4.07 6.77 6.77 0 0 0 2.29 5zm4.47 1.08c-.87-.37-5.23-2.41-5.17-6.1A2.73 2.73 0 0 1 13 11q.394-.093.8-.1a2.92 2.92 0 0 1 1.81.62.78.78 0 0 0 .92 0 3 3 0 0 1 2.83-.45 2.76 2.76 0 0 1 1.81 2.51c-.07 4.2-4.28 5.86-5.04 6.15"
    />
  </svg>
);
export default SvgLovely;
