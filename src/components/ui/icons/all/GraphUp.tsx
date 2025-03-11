import * as React from "react";
import type { SVGProps } from "react";
const SvgGraphUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.84 2.67a5.56 5.56 0 0 1 5.51 5.61v7.44a5.56 5.56 0 0 1-5.51 5.61H8.16a5.56 5.56 0 0 1-5.51-5.61V8.28a5.56 5.56 0 0 1 5.51-5.61zM14.6 6.79h.7a11 11 0 0 1-7.25 3.87.71.71 0 1 0 0 1.42 12.26 12.26 0 0 0 8-4.05v.26a.7.7 0 0 0 1.4 0V5.88a.6.6 0 0 0-.05-.12.4.4 0 0 0-.07-.11l-.09-.11h-.07a.3.3 0 0 0-.17-.13.3.3 0 0 0-.14 0H14.6a.72.72 0 0 0 0 1.43m2.18 12.06a.7.7 0 0 0 .7-.71v-6.41a.7.7 0 1 0-1.4 0v6.36a.7.7 0 0 0 .7.71m-4.44 0a.7.7 0 0 0 .7-.71v-3.86a.7.7 0 0 0-1.4 0v3.86a.7.7 0 0 0 .7.71m-4.5 0a.7.7 0 0 0 .7-.71v-2.67a.7.7 0 1 0-1.39 0v2.67a.7.7 0 0 0 .69.71m8-17.6H8.16a7 7 0 0 0-6.91 7v7.44a7 7 0 0 0 6.91 7h7.68a7 7 0 0 0 6.91-7V8.28a7 7 0 0 0-6.91-7z"
    />
  </svg>
);
export default SvgGraphUp;
