import { StrictPropsWithChildren } from '@/types'
import { IconLeft } from '../Icons'

interface StartHeaderProps extends StrictPropsWithChildren {
  onBack: () => void
  title: string
}

export default function HeaderWithBack({
  children,
  onBack,
  title,
}: StartHeaderProps) {
  return (
    <div className="flex flex-col mt-10 overflow-hidden w-full h-full">
      <header className="relative font-semibold flex justify-center items-center py-4 min-h-52">
        <IconLeft className="absolute left-20" onClick={onBack} />
        <span>{title}</span>
      </header>
      <main className="h-[calc(100%-52px)] relative overflow-auto">
        {children}
      </main>
    </div>
  )
}
