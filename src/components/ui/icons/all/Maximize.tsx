import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.291 1H6.709A5.71 5.71 0 0 0 1 6.709v10.582A5.71 5.71 0 0 0 6.709 23h10.582A5.71 5.71 0 0 0 23 17.291V6.709A5.71 5.71 0 0 0 17.291 1m-15.4 6.523a5.665 5.665 0 0 1 5.632-5.654h1.914a.825.825 0 0 1 0 1.65H7.523a4.004 4.004 0 0 0-4.004 4.004v1.98a.825.825 0 0 1-1.65 0zm7.7 14.608H7.523a5.665 5.665 0 0 1-5.654-5.654v-1.991a.825.825 0 0 1 1.65 0v1.991a4.004 4.004 0 0 0 4.004 4.004H9.58a.825.825 0 0 1 0 1.65zm12.551-5.654a5.665 5.665 0 0 1-5.654 5.654h-1.925a.825.825 0 0 1 0-1.65h1.914a4.004 4.004 0 0 0 4.004-4.004v-2.134a.825.825 0 0 1 1.65 0zm0-7.128a.825.825 0 1 1-1.65 0V7.523a4.004 4.004 0 0 0-4.004-4.004H14.42a.825.825 0 0 1 0-1.65h2.057a5.665 5.665 0 0 1 5.654 5.654z"
    />
  </svg>
);
export default SvgMaximize;
