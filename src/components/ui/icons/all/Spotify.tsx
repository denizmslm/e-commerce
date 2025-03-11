import * as React from "react";
import type { SVGProps } from "react";
const SvgSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.31 11.06a.72.72 0 0 1-.47-.17c-4.37-3.55-10-1.26-10.07-1.23a.753.753 0 1 1-.58-1.39c.26-.11 6.52-2.67 11.6 1.46a.75.75 0 0 1-.48 1.33m-.69 2.27a.76.76 0 0 0-.21-1 9 9 0 0 0-8.69-1 .75.75 0 0 0 .089 1.38.74.74 0 0 0 .571-.04 7.52 7.52 0 0 1 7.2.88.8.8 0 0 0 .41.12.74.74 0 0 0 .63-.34m-1.19 2.88a.74.74 0 0 0-.19-1 7.73 7.73 0 0 0-6.8-.86.75.75 0 0 0 .56 1.36 6.24 6.24 0 0 1 5.42.69.75.75 0 0 0 .42.14.76.76 0 0 0 .59-.33M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75"
    />
  </svg>
);
export default SvgSpotify;
