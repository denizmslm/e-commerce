import * as React from "react";
import type { SVGProps } from "react";
const SvgVuesax = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.05 22.75a.72.72 0 0 1-.59-.31L3.08 9.85a.71.71 0 0 1 .19-1 .7.7 0 0 1 1 .2l7.8 11.7 7.7-11.56a.71.71 0 1 1 1.17.79l-8.3 12.46a.72.72 0 0 1-.59.31m1.11-5.54 7.17-11.06a1.37 1.37 0 0 0 .06-1.41A1.39 1.39 0 0 0 19.18 4H17.8a1.36 1.36 0 0 0-1.14.61l-4.68 7-4.67-7A1.38 1.38 0 0 0 6.16 4H4.91a1.37 1.37 0 0 0-1.2.72 1.35 1.35 0 0 0 0 1.4l7.13 11.08a1.4 1.4 0 0 0 1.16.64 1.39 1.39 0 0 0 1.16-.63M6.09 5.52l4.74 7.12a1.43 1.43 0 0 0 2.3 0l4.74-7.12H19l-7 10.71L5.14 5.52zM13.17 8l3.08-4.62a.77.77 0 0 0 0-.88.75.75 0 0 0-.84-.24l-1.53.53v-.16a1.39 1.39 0 0 0-1.39-1.39h-.92a1.39 1.39 0 0 0-1.39 1.39v.15l-1.6-.55a.77.77 0 0 0-.84.25.79.79 0 0 0 0 .88L10.79 8a1.43 1.43 0 0 0 2.38 0m-2.52-3.46a.78.78 0 0 0 .68-.1.75.75 0 0 0 .32-.61V2.74h.7v1.09a.76.76 0 0 0 1 .71l.41-.15L12 7.06l-1.8-2.68z"
    />
  </svg>
);
export default SvgVuesax;
