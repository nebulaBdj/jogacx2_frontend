import { StrictPropsWithChildren } from '@/types'
import { cn } from '@/util'
import { IconLeft } from '../Icons'

interface StartHeaderProps extends StrictPropsWithChildren {
  onBack: () => void
  title: string
  mainClassName?: string
}

export default function HeaderWithBack({
  children,
  onBack,
  title,
  mainClassName,
}: StartHeaderProps) {
  return (
    <div className="flex flex-col mt-10 overflow-hidden w-full h-full">
      <header className="relative font-semibold flex justify-center items-center py-4 min-h-52">
        <IconLeft className="absolute left-20" onClick={onBack} />
        <span>{title}</span>
      </header>
      <main
        className={cn(
          'h-[calc(100%-52px)] relative overflow-auto',
          mainClassName,
        )}
      >
        {children}
      </main>
    </div>
  )
}
