import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M21.664 5.926a1.15 1.15 0 0 1 0 1.624L11.137 18.077a1.15 1.15 0 0 1-1.624 0L2.336 10.9A1.148 1.148 0 1 1 3.96 9.276l6.365 6.365 9.715-9.715a1.15 1.15 0 0 1 1.624 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
