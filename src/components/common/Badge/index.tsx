import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'

interface IBadge extends StrictPropsWithChildren {
  className?: string
}

export default function Badge({ className, children }: IBadge) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-accent-10 text-[14px] text-accent_100  px-8 py-2 rounded-6 w-fit whitespace-nowrap',
        className,
      )}
    >
      {children}
    </div>
  )
}
