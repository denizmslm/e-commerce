import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.72 1.25H7.28a6 6 0 0 0-6 6v9.44a6 6 0 0 0 6 6h9.44a6 6 0 0 0 6-6V7.28a6 6 0 0 0-6-6.03m0 1.5q.459 0 .91.09l.33.1q.264.072.52.17.192.086.37.2c.13.07.27.13.4.21l.35.29c.1.09.22.17.32.27s.19.23.29.35q.138.148.26.31c.08.13.14.26.21.39s.15.25.21.38.08.27.12.4q.086.22.14.45c0 .13 0 .27.05.41q.04.243.05.49H2.75a4 4 0 0 1 0-.49v-.41c0-.13.09-.29.14-.43q.05-.214.13-.42a4 4 0 0 1 .18-.33c.08-.15.15-.3.24-.44l.2-.24q.162-.225.35-.43l.31-.17q.214-.203.45-.38L5 3.38a5 5 0 0 1 .51-.27c.13-.06.26-.08.39-.13s.3-.11.46-.14q.45-.09.91-.09zm0 18.5H7.28a4.53 4.53 0 0 1-4.53-4.53v-8h18.5v8a4.53 4.53 0 0 1-4.53 4.53m-7.79-3.49a.8.8 0 0 1-.53-.22l-2-2a.74.74 0 0 1-.23-.54.83.83 0 0 1 .23-.54l2-1.92a.75.75 0 1 1 1 1.08L8 15l1.46 1.43a.75.75 0 0 1 0 1.06.78.78 0 0 1-.53.27m6.14 0a.78.78 0 0 1-.54-.23.75.75 0 0 1 0-1.06L16 15l-1.45-1.39a.75.75 0 0 1 1-1.08l2 1.92a.83.83 0 0 1 .23.54.74.74 0 0 1-.23.54l-2 2a.8.8 0 0 1-.48.23"
    />
  </svg>
);
export default SvgCode;
