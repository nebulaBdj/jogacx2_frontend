import { SVGProps } from 'react'

export default function Left({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Left">
        <path
          id="Vector 140"
          d="M7 1L1.66939 7.21905C1.2842 7.66844 1.2842 8.33156 1.66939 8.78095L7 15"
          stroke="#31313B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
