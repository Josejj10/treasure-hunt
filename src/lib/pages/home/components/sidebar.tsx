import { Button } from '@/lib/components/ui/button'
import { cn } from '@/lib/styles/utils'
import { NotAFeature } from './not-a-feature'
import { useState } from 'react'
import { PresentIcon } from '@/icons/present'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isActive, setIsActive] = useState(false)

  const triggerActive = (active: boolean) => {
    setIsActive(active)
  }

  return (
    <div className={cn('pb-12', className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Feliz
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="justify-start w-full">
              {/* <img height={24} width={24} src={present} alt="santa" /> */}
              <PresentIcon height={24} width={24} />
              Navidad
            </Button>
            <Button
              onClick={() => triggerActive(true)}
              variant="ghost"
              className="justify-start w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Pitertee
            </Button>
            <Button
              onClick={() => triggerActive(true)}
              variant="ghost"
              className="justify-start w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              Te desea lo mejor
            </Button>
            <Button
              onClick={() => triggerActive(true)}
              variant="ghost"
              className="justify-start w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Tu causa
            </Button>
            <Button
              onClick={() => triggerActive(true)}
              variant="ghost"
              className="justify-start w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Chiki
            </Button>
          </div>
        </div>
      </div>
      <NotAFeature isActive={isActive} triggerActive={triggerActive} />
    </div>
  )
}
