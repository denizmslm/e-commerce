import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.785 2h-9.57a6.24 6.24 0 0 0-4.397 1.846A6.27 6.27 0 0 0 1 8.262v7.476a6.27 6.27 0 0 0 1.83 4.428A6.24 6.24 0 0 0 7.248 22h9.57a6.24 6.24 0 0 0 4.375-1.858A6.27 6.27 0 0 0 23 15.738V8.262a6.27 6.27 0 0 0-1.818-4.416A6.24 6.24 0 0 0 16.785 2M7.809 6.234a2.84 2.84 0 0 1 2.632 1.762 2.86 2.86 0 0 1-.617 3.112A2.848 2.848 0 0 1 4.96 9.09c0-.757.3-1.483.834-2.019a2.85 2.85 0 0 1 2.015-.836m0 12.04c-2.343 0-4.235-1.247-4.235-2.79 0-1.544 1.892-2.778 4.235-2.778S12 13.95 12 15.484s-1.859 2.79-4.191 2.79m11.396-3.077h-3.85a.824.824 0 0 1-.825-.827.83.83 0 0 1 .825-.827h3.85a.824.824 0 0 1 .825.827.83.83 0 0 1-.825.827m.418-4.233h-5.841a.824.824 0 0 1-.825-.827.83.83 0 0 1 .825-.827h5.841a.824.824 0 0 1 .825.827.83.83 0 0 1-.825.826"
    />
  </svg>
);
export default SvgBadge;
