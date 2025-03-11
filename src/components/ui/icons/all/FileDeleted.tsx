import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDeleted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.25 10.47a.7.7 0 0 0 0-.15.79.79 0 0 0-.25-.72l-7.66-8.13a.7.7 0 0 0-.21-.14h-.07a.6.6 0 0 0-.19 0H7.66c-3.34 0-6.09 2.8-6.41 6.59v5a.74.74 0 0 0 .72.76.74.74 0 0 0 .72-.76V7.91c.25-2.93 2.39-5.14 5-5.14h5.41v4A4 4 0 0 0 17 10.9h3.8v5.38a4.83 4.83 0 0 1-4.68 4.95H9.84a.76.76 0 1 0 0 1.52h6.31a6.3 6.3 0 0 0 6.12-6.47zM17 9.38a2.51 2.51 0 0 1-2.43-2.57v-3l5.23 5.53zM6.63 19.91a.8.8 0 0 1 0 1.08.68.68 0 0 1-.51.22.7.7 0 0 1-.52-.21l-1.22-1.3L3.16 21a.72.72 0 0 1-.51.22.74.74 0 0 1-.51-.22.8.8 0 0 1 0-1.08l1.23-1.3-1.22-1.35a.79.79 0 0 1 0-1.08.7.7 0 0 1 1 0l1.21 1.31 1.22-1.29a.69.69 0 0 1 1 0 .79.79 0 0 1 0 1.08L5.4 18.6z"
    />
  </svg>
);
export default SvgFileDeleted;
