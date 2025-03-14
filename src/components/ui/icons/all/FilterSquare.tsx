import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.4 18.59a1.86 1.86 0 0 1-.89-.22 1.94 1.94 0 0 1-1-1.72v-3a1.55 1.55 0 0 0-.43-1l-2.24-2.32a2 2 0 0 1-.59-1.43V7.45a2 2 0 0 1 2-2h7.42a2 2 0 0 1 2 2v1.4a2 2 0 0 1-.68 1.52l-2.47 2.2a1.5 1.5 0 0 0-.5 1.12v2.45a1.86 1.86 0 0 1-.79 1.53l-.79.56a1.94 1.94 0 0 1-1.04.36M8.29 6.91a.54.54 0 0 0-.54.54V8.9a.54.54 0 0 0 .15.38l2.19 2.22a3 3 0 0 1 .91 2.1v3a.42.42 0 0 0 .24.39.46.46 0 0 0 .45 0l.8-.57a.37.37 0 0 0 .15-.3v-2.43a3 3 0 0 1 1-2.24l2.47-2.2a.54.54 0 0 0 .18-.4v-1.4a.54.54 0 0 0-.54-.54zm7.76 15.84H8a6.71 6.71 0 0 1-6.7-6.7V8A6.71 6.71 0 0 1 8 1.25h8.1A6.71 6.71 0 0 1 22.75 8v8.1a6.71 6.71 0 0 1-6.7 6.65M8 2.75A5.21 5.21 0 0 0 2.75 8v8.1A5.21 5.21 0 0 0 8 21.25h8.1a5.2 5.2 0 0 0 5.2-5.2V8a5.2 5.2 0 0 0-5.2-5.2z"
    />
  </svg>
);
export default SvgFilterSquare;
