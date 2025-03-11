import * as React from "react";
import type { SVGProps } from "react";
const SvgDeliveryTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8 9a.76.76 0 0 1 .12-1l1.49-1.21V4.94a.75.75 0 1 1 1.5 0v2.21a.75.75 0 0 1-.29.59L9.05 9.15a.72.72 0 0 1-.46.16A.77.77 0 0 1 8 9m14.88 4.13v4.06a3.54 3.54 0 0 1-3.53 3.53h-.84a2.74 2.74 0 0 1-5.27 0h-2.73a2.74 2.74 0 0 1-5.27 0h-.59a3.54 3.54 0 0 1-3.53-3.53V7.78a3.54 3.54 0 0 1 3.53-3.53h.52a6 6 0 0 1 10.38 0h.95a3.53 3.53 0 0 1 3.12 1.88l2.85 5.38c.264.51.405 1.075.41 1.65zm-3-3.41h-1a.24.24 0 0 0-.24.24v3a.24.24 0 0 0 .24.24h2.52v-.09a2 2 0 0 0-.24-.95zm-14-2.5a4.5 4.5 0 1 0 4.5-4.5 4.51 4.51 0 0 0-4.52 4.53zM9.12 20a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m8 0a1.25 1.25 0 1 0-2.501 0 1.25 1.25 0 0 0 2.501 0m4.26-5.25h-2.52A1.74 1.74 0 0 1 17.12 13v-3a1.74 1.74 0 0 1 1.74-1.74H19l-.75-1.42a2 2 0 0 0-1.75-1.09h-.34c.133.489.2.993.2 1.5A6 6 0 1 1 4.55 5.76a2 2 0 0 0-1.93 2v9.44a2 2 0 0 0 2 2h.59a2.74 2.74 0 0 1 5.27 0h2.73a2.74 2.74 0 0 1 5.27 0h.84a2 2 0 0 0 2-2z"
    />
  </svg>
);
export default SvgDeliveryTime;
