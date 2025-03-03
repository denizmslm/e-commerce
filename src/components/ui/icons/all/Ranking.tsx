import * as React from "react";
import type { SVGProps } from "react";
const SvgRanking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.639 23.25H8.361V12.31a2.175 2.175 0 0 1 2.185-2.186h2.907a2.175 2.175 0 0 1 2.186 2.186zm-8.405-8.754H3.246a2.187 2.187 0 0 0-2.186 2.186v6.568h6.174zm8.405 3.278v5.476zm5.115 0h-3.988v5.476h6.174v-3.29a2.186 2.186 0 0 0-2.186-2.186M14.58 6.97l-.101-1.127a.87.87 0 0 1 .225-.676l.788-.845a.88.88 0 0 0-.45-1.442l-1.127-.26a.86.86 0 0 1-.574-.427l-.564-1.003a.868.868 0 0 0-1.51 0l-.585.991a.9.9 0 0 1-.586.417l-1.127.226a.88.88 0 0 0-.496 1.385l.767.868a.82.82 0 0 1 .214.676L9.318 6.88a.868.868 0 0 0 1.206.9l1.059-.45a.9.9 0 0 1 .721 0l1.048.496a.867.867 0 0 0 1.228-.856"
    />
  </svg>
);
export default SvgRanking;
