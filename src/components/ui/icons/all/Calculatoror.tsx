import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculatoror = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.423 1H6.577A4.477 4.477 0 0 0 2.1 5.477v13.046A4.477 4.477 0 0 0 6.577 23h10.846a4.477 4.477 0 0 0 4.477-4.477V5.477A4.477 4.477 0 0 0 17.423 1m-6.699 16.434a.825.825 0 0 1 0 1.166.78.78 0 0 1-.594.264.85.85 0 0 1-.55-.264l-.671-.649-.671.649a.85.85 0 0 1-.572.231.825.825 0 0 1-.572-1.43l.616-.583-.616-.594a.825.825 0 1 1 1.1-1.188l.671.638.671-.638a.825.825 0 0 1 1.1 1.188l-.616.594zm4.015 1.694a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2m2.2-2.365a1.1 1.1 0 1 1 .011 0zM18.6 8.986a1.914 1.914 0 0 1-1.914 1.914H7.314A1.914 1.914 0 0 1 5.4 8.986V6.214A1.914 1.914 0 0 1 7.314 4.3h9.372A1.914 1.914 0 0 1 18.6 6.214z"
    />
  </svg>
);
export default SvgCalculatoror;
