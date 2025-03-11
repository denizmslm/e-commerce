import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 7a2.94 2.94 0 0 0-2.81-3H18l-1.4-2.31a.74.74 0 0 0-1-.24.82.82 0 0 0-.23 1.09L16.26 4H7.73l.89-1.44a.82.82 0 0 0-.22-1.17.73.73 0 0 0-1 .23l-1.46 2.3H4.06A2.94 2.94 0 0 0 1.25 7a3 3 0 0 0 2.16 3l1.42 9.24a4.14 4.14 0 0 0 4 3.57h6.47a4.13 4.13 0 0 0 4-3.63L20.62 10a3 3 0 0 0 2.13-3m-5 11.9a2.62 2.62 0 0 1-2.49 2.31H8.79a2.63 2.63 0 0 1-2.49-2.3L4.94 10h14.12zm2.19-10.44H4.06A1.41 1.41 0 0 1 2.75 7a1.41 1.41 0 0 1 1.31-1.51h15.88A1.41 1.41 0 0 1 21.25 7a1.41 1.41 0 0 1-1.31 1.46m-11 8.64v-3.79a.75.75 0 1 1 1.5 0v3.79a.75.75 0 1 1-1.5 0m4.65 0v-3.79a.75.75 0 0 1 1.5 0v3.79a.75.75 0 1 1-1.5 0"
    />
  </svg>
);
export default SvgBasket;
