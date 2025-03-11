import * as React from "react";
import type { SVGProps } from "react";
const SvgPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.11 1.25H7.89A6.72 6.72 0 0 0 1.25 8v8a6.74 6.74 0 0 0 .88 3.33l.1.18c.13.21.26.4.4.59l.17.22c.15.18.31.35.47.51l.29.27.38.3c.14.11.29.21.44.31s.31.19.46.27l.32.16c.21.09.42.18.64.25l.21.07q.365.108.74.17h.24q.443.065.89.07h8.22a6.72 6.72 0 0 0 6.65-6.7V8a6.72 6.72 0 0 0-6.64-6.75M21.25 16a5.19 5.19 0 0 1-5.14 5.24H7.89a5.6 5.6 0 0 1-.89-.09h-.21a5.1 5.1 0 0 1-1.69-.73L5 20.3a5 5 0 0 1-.67-.57 6 6 0 0 1-.67-.73l-.1-.17c-.07-.11-.13-.24-.19-.36l3-2.43a2.37 2.37 0 0 1 3.11.09 3 3 0 0 0 4.26-.21l2-2.18a2.39 2.39 0 0 1 3.48-.08l2.06 2.09zm0-2.43-1-1a3.9 3.9 0 0 0-2.85-1.16 3.83 3.83 0 0 0-2.79 1.29l-2 2.17a1.51 1.51 0 0 1-2.15.11 3.86 3.86 0 0 0-5-.15l-2.62 2.09a4.7 4.7 0 0 1-.09-.92V8a5.19 5.19 0 0 1 5.14-5.22h8.22A5.19 5.19 0 0 1 21.25 8zM7.79 5.32a2.8 2.8 0 1 0 2.75 2.8 2.77 2.77 0 0 0-2.75-2.8m0 4.08A1.28 1.28 0 1 1 9 8.12 1.27 1.27 0 0 1 7.79 9.4"
    />
  </svg>
);
export default SvgPicture;
