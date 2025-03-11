import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.24 13.69a.88.88 0 1 1-.87-.85.86.86 0 0 1 .87.85m3.25 0a.87.87 0 1 1-.87-.85.86.86 0 0 1 .87.85m-3.26 3.23a.88.88 0 0 1-1.75 0 .88.88 0 0 1 1.75 0m9.15 6.73a4.75 4.75 0 1 1 4.75-4.75 4.76 4.76 0 0 1-4.75 4.75m0-8a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m2.26 2.9-1.71 2.18a.74.74 0 0 1-.59.28.7.7 0 0 1-.59-.28l-1.23-1.58a.752.752 0 0 1 1.19-.92l.63.82 1.12-1.43a.75.75 0 0 1 1.05-.12.74.74 0 0 1 .13 1.05M17.19 3.29V1.8a.7.7 0 1 0-1.4 0v1.26h-3.31V1.8a.7.7 0 1 0-1.39 0V3H7.5V1.8a.7.7 0 0 0-1.4 0v1.49A6.17 6.17 0 0 0 1.62 9.2v7.25a6.18 6.18 0 0 0 6.2 6.15h4.82a.69.69 0 1 0 0-1.38H7.82A4.787 4.787 0 0 1 3 16.45V9.89h17.27V13a.7.7 0 0 0 .7.69.69.69 0 0 0 .7-.69V9.2a6.17 6.17 0 0 0-4.48-5.91M3.09 8.51a4.76 4.76 0 0 1 3-3.75v.8a.7.7 0 1 0 1.4 0v-1.1h3.64v1.1a.7.7 0 1 0 1.39 0V4.43h3.31v1.1a.7.7 0 0 0 1.4 0v-.8a4.76 4.76 0 0 1 3 3.75z"
    />
  </svg>
);
export default SvgCalendarTick;
