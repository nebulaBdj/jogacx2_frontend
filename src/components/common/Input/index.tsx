'use client'

import { forwardRef } from 'react'
import { Caution } from '@/components/Icons'
import Image from 'next/image'
import { useInput, UseInputProps } from './useInput'
import If from '../If'

const Input = forwardRef<HTMLInputElement, UseInputProps>((props, ref) => {
  const { endContent, startContent, error, label, success, value } = props
  const { getBaseProps, getInputProps, isClearable, getClearButtonProps } =
    useInput({ ...props, ref })

  return (
    <>
      <div {...getBaseProps()}>
        {startContent}
        <input {...getInputProps()} />
        {/* eslint-disable-next-line */}
        {isClearable && <button {...getClearButtonProps()}>x</button>}
        {endContent}
      </div>
      <If condition={!!label && !error && !value}>
        <p className="text-xs text-[#8d8d92] mt-4 ml-8">{label}</p>
      </If>
      <If condition={!!error}>
        <div className="absolute flex gap-8 text-system_red font-medium text-xs mt-4">
          <Caution />
          {error}
        </div>
      </If>
      <If condition={!!success && !error && !!value}>
        <div className="flex gap-8 mt-4 ml-8 items-center">
          <Image
            src="/images/blue-check.png"
            alt="checked"
            width={20}
            height={20}
          />
          <div className="text-sm text-system_blue">{success}</div>
        </div>
      </If>
    </>
  )
})

Input.displayName = 'fe-Input'

export default Input
