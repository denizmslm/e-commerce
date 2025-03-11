import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M6.4 7.49a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M22.18 18.8a1.69 1.69 0 0 1-1.53 1h-4.54V22a.75.75 0 0 1-.75.75h-7a4.67 4.67 0 0 1-4.75-4.57 4.67 4.67 0 0 1 4.75-4.57h1.5a.73.73 0 0 0 .75-.69.72.72 0 0 0-.75-.68h-3.5a1.72 1.72 0 0 1-1.27-.58l-2.23-2.5a4.75 4.75 0 1 1 7.09 0l-1.42 1.59h1.33a2.19 2.19 0 1 1 0 4.37h-1.5a3.16 3.16 0 0 0-3.25 3.07 3.17 3.17 0 0 0 3.25 3.07h6.25v-8a.75.75 0 1 1 1.5 0h4.54A1.69 1.69 0 0 1 22 16l-.4.5.4.5a1.69 1.69 0 0 1 .18 1.8m-16-8.14c.13.15.24.15.37 0l2.24-2.5A3.25 3.25 0 0 0 6.4 2.74q-.391 0-.77.09a3.23 3.23 0 0 0-2.4 2.43A3.3 3.3 0 0 0 4 8.16zm13.43 5.85 1.15-1.44a.19.19 0 0 0 0-.2.2.2 0 0 0-.18-.11h-4.47v3.5h4.54a.2.2 0 0 0 .18-.11.19.19 0 0 0 0-.2z"
    />
  </svg>
);
export default SvgRoute;
