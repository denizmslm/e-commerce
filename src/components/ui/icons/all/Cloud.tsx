import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.05 19.7c.915 0 1.793-.407 2.44-1.131s1.01-1.707 1.01-2.731-.363-2.007-1.01-2.73c-.647-.725-1.525-1.132-2.44-1.132h-.219c.14-.411.215-.847.219-1.287 0-1.025-.364-2.007-1.01-2.731-.648-.724-1.525-1.131-2.44-1.131a3.2 3.2 0 0 0-1.932.67c-.634-1.22-1.609-2.171-2.774-2.71a5.18 5.18 0 0 0-3.673-.27c-1.218.362-2.295 1.163-3.067 2.278S3.96 9.278 3.95 10.689q.006.65.115 1.287H3.95c-.915 0-1.793.407-2.44 1.131S.5 14.814.5 15.838s.363 2.007 1.01 2.73c.647.725 1.525 1.132 2.44 1.132z"
    />
  </svg>
);
export default SvgCloud;
