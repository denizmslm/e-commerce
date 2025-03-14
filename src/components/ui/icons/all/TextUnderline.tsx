import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 22.75H8a6.71 6.71 0 0 1-6.7-6.7V8A6.71 6.71 0 0 1 8 1.25h8.1A6.71 6.71 0 0 1 22.75 8v8.1a6.71 6.71 0 0 1-6.7 6.65M8 2.75A5.21 5.21 0 0 0 2.75 8v8.1A5.21 5.21 0 0 0 8 21.25h8.1a5.21 5.21 0 0 0 5.2-5.2V8a5.21 5.21 0 0 0-5.2-5.2zm8.34 15.07a.74.74 0 0 0-.75-.75H8.46a.75.75 0 1 0 0 1.5h7.08a.75.75 0 0 0 .75-.75zm0-6.71V6.18a.75.75 0 1 0-1.5 0v4.93A3 3 0 0 1 12 14.19a3 3 0 0 1-2.79-3.08V6.18a.75.75 0 1 0-1.5 0v4.93A4.44 4.44 0 0 0 12 15.69a4.44 4.44 0 0 0 4.29-4.58z"
    />
  </svg>
);
export default SvgTextUnderline;
