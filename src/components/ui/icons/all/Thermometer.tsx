import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m7.108 20.012-2.33 2.342a2.208 2.208 0 0 1-3.121-3.122l2.34-2.341zM22.683 5.207a11.2 11.2 0 0 0-3.88-3.902 2.2 2.2 0 0 0-2.715.384l-.395.44 6.2 6.188.384-.385a2.2 2.2 0 0 0 .406-2.725m-11.42 1.319c-.685.683-1.27 1.46-1.736 2.308l-2.485 4.451a10.7 10.7 0 0 1-1.736 2.298l-.539.538 3.122 3.11.527-.527a10.8 10.8 0 0 1 2.309-1.736l4.473-2.485a10.4 10.4 0 0 0 2.297-1.736l3.65-3.65-6.233-6.243zm5.2-.528 1.571 1.56a1.1 1.1 0 0 1 0 1.562l-3.133 3.121a1.1 1.1 0 0 1-1.55 0l-1.56-1.56a1.1 1.1 0 0 1 0-1.561l3.121-3.144a1.1 1.1 0 0 1 1.55 0z"
    />
  </svg>
);
export default SvgThermometer;
