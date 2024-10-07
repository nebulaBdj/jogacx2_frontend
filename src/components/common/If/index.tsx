import { StrictPropsWithChildren } from '@/types/react'

interface IfProps {
  condition: boolean | undefined
}

export default function If({
  condition,
  children,
}: StrictPropsWithChildren<IfProps>) {
  if (condition) {
    return <>{children}</>
  }

  return null
}
