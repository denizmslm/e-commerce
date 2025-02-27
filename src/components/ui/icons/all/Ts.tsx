import * as React from "react";
import type { SVGProps } from "react";
const SvgTs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.686 5.98a4.734 4.734 0 0 0-4.755-4.67H5.95a4.734 4.734 0 0 0-4.7 4.755l.063 11.947a4.734 4.734 0 0 0 4.755 4.67h11.98a4.734 4.734 0 0 0 4.701-4.755zm-7.8 6.903a.534.534 0 0 1-.535.534h-1.614v5.706a.534.534 0 0 1-.534.535h-.908a.534.534 0 0 1-.535-.535v-5.706H9.158a.534.534 0 0 1-.535-.534v-.77a.534.534 0 0 1 .535-.534h5.193a.545.545 0 0 1 .534.534zm2.681 6.882a4.1 4.1 0 0 1-2.073-.535.534.534 0 0 1-.224-.598l.235-.759a.52.52 0 0 1 .32-.353.56.56 0 0 1 .47 0c.402.248.864.381 1.336.385.289 0 .94-.064.94-.662 0-.246 0-.524-.982-.898-.535-.182-2.19-.77-2.19-2.48a2.55 2.55 0 0 1 2.799-2.403 3.76 3.76 0 0 1 1.816.416.545.545 0 0 1 .236.642l-.246.737a.54.54 0 0 1-.31.32.51.51 0 0 1-.449 0 2.2 2.2 0 0 0-1.069-.267c-.577 0-.79.267-.79.513s.075.47 1.068.855a2.725 2.725 0 0 1 2.137 2.554c-.042 1.25-.95 2.533-3.024 2.533"
    />
  </svg>
);
export default SvgTs;
