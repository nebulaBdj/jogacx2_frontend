import { SVGProps } from 'react'

export default function Caution({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7036 3.61333C12.354 2.96196 13.4089 2.96156 14.0597 3.61244L16.1363 5.68898C16.7816 6.3343 16.7883 7.37901 16.1513 8.03256L14.768 9.45189L10.3176 5.00148L11.7036 3.61333ZM9.43434 5.88604L13.8954 10.3471L8.45703 15.9269C7.98668 16.4095 7.34157 16.6816 6.66795 16.6816L4.3745 16.6815C3.6638 16.6815 3.09624 16.0891 3.12613 15.3785L3.22459 13.0376C3.25092 12.4116 3.51111 11.8182 3.95367 11.375L9.43434 5.88604ZM17.0959 17.246C17.4409 17.246 17.7207 16.966 17.7207 16.6207C17.7207 16.2754 17.4409 15.9955 17.0959 15.9955H11.9945C11.6494 15.9955 11.3697 16.2754 11.3697 16.6207C11.3697 16.966 11.6494 17.246 11.9945 17.246H17.0959Z"
        fill="#484851"
      />
    </svg>
  )
}
