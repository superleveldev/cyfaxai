import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const IconArrowUp = (props: Props) => (
  <svg
    viewBox="0 0 12 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.6967 5.24264C0.403806 5.53553 0.403806 6.01041 0.6967 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 23L6.75 1L5.25 1L5.25 23L6.75 23Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowUp;
