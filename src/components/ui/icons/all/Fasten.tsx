import * as React from "react";
import type { SVGProps } from "react";
const SvgFasten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.653 14.508q.08-.481.092-.97a6.5 6.5 0 0 0-.32-1.929l3.367-3.344a2.865 2.865 0 0 0-4.052-4.051l-3.32 3.32-.731.731a2.864 2.864 0 0 0 0 4.052 1.72 1.72 0 0 1 0 2.442l-.194.183a5.136 5.136 0 0 1-2.59-6.517q.003-.075 0-.148a5.2 5.2 0 0 1 1.14-1.62l4.052-4.052a5.17 5.17 0 0 1 7.304 7.304L17.35 13.96a5.4 5.4 0 0 1-.697.548m-9.86-4.565-4.029 3.994a5.16 5.16 0 0 0 7.293 7.304l4.063-4.051q.308-.32.56-.685c.287-.408.51-.859.661-1.335a4.9 4.9 0 0 0 .285-1.632q.002-.525-.102-1.039a4.8 4.8 0 0 0-.411-1.14 5.1 5.1 0 0 0-.993-1.439 5.3 5.3 0 0 0-1.438-1.004l-.194.194a1.724 1.724 0 0 0 0 2.442c.437.429.718.991.799 1.598a2.87 2.87 0 0 1-.617 2.282c-.068.069-.114.149-.182.217l-.708.708-3.344 3.264a2.865 2.865 0 1 1-4.051-4.052l3.332-3.332a4 4 0 0 1-.125-.49c0-.126-.057-.252-.08-.377a5.6 5.6 0 0 1-.091-.89 3 3 0 0 1 0-.309q.016-.427.102-.844-.381.244-.707.559z"
    />
  </svg>
);
export default SvgFasten;
