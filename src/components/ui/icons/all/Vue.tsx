import * as React from "react";
import type { SVGProps } from "react";
const SvgVue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m23.04 4.263-4.832 8.49-4.922 8.661a1.47 1.47 0 0 1-.533.54 1.44 1.44 0 0 1-1.99-.54l-4.92-8.66L.92 4.046a1.5 1.5 0 0 1 .03-1.443 1.441 1.441 0 0 1 1.226-.73h1.748c.001.298.079.592.224.852l3.195 5.611 2.12 3.733c.255.45.623.822 1.066 1.081a2.88 2.88 0 0 0 2.912 0c.442-.26.81-.632 1.066-1.08l2.12-3.734 3.205-5.61c.146-.26.223-.555.225-.854h1.636c.275.002.544.078.78.218.237.141.433.343.57.585a1.61 1.61 0 0 1-.004 1.587m-12.12 6.954c.11.189.265.345.452.454a1.22 1.22 0 0 0 1.228 0c.187-.109.342-.265.45-.454l2.13-3.756 3.185-5.611H5.607L8.79 7.46z"
    />
  </svg>
);
export default SvgVue;
