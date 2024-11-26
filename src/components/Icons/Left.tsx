import { SVGProps } from 'react'

export default function Left({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="20" height="4" fill="#FF4F38" />
      <rect width="28" height="4" fill="#FF4F38" />
      <rect x="8" y="8" width="12" height="4" fill="#FF4F38" />
      <rect x="12" y="12" width="4" height="4" fill="#FF4F38" />
    </svg>
  )
}
