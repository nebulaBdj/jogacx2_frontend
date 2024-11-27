'use client'

import { forwardRef } from 'react'
import { Caution } from '@/components/Icons'
import Image from 'next/image'
import { useInput, UseInputProps } from './useInput'

const Input = forwardRef<HTMLInputElement, UseInputProps>((props, ref) => {
  const { endContent, startContent, error, label, success, value } = props
  const { getBaseProps, getInputProps, isClearable, getClearButtonProps } =
    useInput({ ...props, ref })

  const img = '/images/blue-check.png'

  return (
    <>
      <div {...getBaseProps()}>
        {startContent}
        <input {...getInputProps()} />
        {/* eslint-disable-next-line */}
        {isClearable && <button {...getClearButtonProps()}>x</button>}
        {endContent}
      </div>
      <>
        {(() => {
          if (error) {
            return (
              <div className="absolute flex gap-8 text-system_red font-medium text-xs mt-4">
                <Caution />
                {error}
              </div>
            )
          }
          if (!!success && !error && !!value) {
            ;<div className="absolute flex gap-8 mt-4 ml-8 items-center">
              <Image
                loader={() => img}
                src={img}
                alt="checked"
                width={20}
                height={20}
              />
              <div className="text-sm text-system_blue">{success}</div>
            </div>
          }
          if (label) {
            ;<p className="absolute text-xs text-[#8d8d92] mt-4 ml-8">
              {label}
            </p>
          }
          return null
        })()}
      </>
    </>
  )
})

Input.displayName = 'fe-Input'

export default Input
