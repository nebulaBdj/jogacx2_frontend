import { Left } from '@/components/Icons'
import { StrictPropsWithChildren } from '@/types'

interface StartHeaderProps extends StrictPropsWithChildren {
  onBack: () => void
}

export default function StartHeader({ children, onBack }: StartHeaderProps) {
  return (
    <div className="flex flex-col h-screen mt-10">
      <header className="relative font-semibold flex justify-center items-center py-4 min-h-52">
        <Left className="absolute left-20" onClick={onBack} />
        <span>조각조각 시작하기</span>
      </header>
      <main className="h-full relative">{children}</main>
    </div>
  )
}
