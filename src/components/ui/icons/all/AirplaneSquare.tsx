import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplaneSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.686 7.614a6.43 6.43 0 0 0-6.431-6.334H7.552A6.43 6.43 0 0 0 1.25 7.71v8.66a6.43 6.43 0 0 0 6.43 6.346h8.714a6.43 6.43 0 0 0 6.356-6.431zm-3.43 5.692a.73.73 0 0 1-1.008.664l-3.912-1.704a.493.493 0 0 0-.686.45v2.69a.5.5 0 0 0 .183.386l1.736 1.415a.72.72 0 0 1 .257.536v1.607a.697.697 0 0 1-1.072.536l-2.347-1.908a.665.665 0 0 0-.846 0l-2.38 1.908a.696.696 0 0 1-1.125-.536v-1.597a.7.7 0 0 1 .246-.546l1.887-1.533a.5.5 0 0 0 .182-.386v-2.615a.493.493 0 0 0-.686-.45L5.676 13.97a.73.73 0 0 1-1.007-.665v-1.693a.73.73 0 0 1 .44-.686l4.973-2.143a.48.48 0 0 0 .289-.45V5.727c0-.353.138-.692.386-.943l.493-.504a1.07 1.07 0 0 1 1.532 0l.493.504c.248.251.387.59.386.943v2.647a.49.49 0 0 0 .29.45l4.876 2.144a.73.73 0 0 1 .44.665z"
    />
  </svg>
);
export default SvgAirplaneSquare;
