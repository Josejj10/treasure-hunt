import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/lib/components/ui/menubar'
import { useState } from 'react'
import { NotAFeature } from './not-a-feature'

export function Menu() {
  const [isActive, setIsActive] = useState(false)

  const triggerActive = (active: boolean) => {
    setIsActive(active)
  }

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <>
      <Menubar className="px-2 border-b border-none rounded-none lg:px-4">
        <MenubarMenu>
          <MenubarTrigger
            onClick={reloadPage}
            className="font-bold cursor-pointer"
          >
            PiterPage
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="cursor-pointer"
            onClick={() => triggerActive(true)}
          >
            Feliz Navidad
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="cursor-pointer"
            onClick={() => triggerActive(true)}
          >
            Te desea
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="cursor-pointer"
            onClick={() => triggerActive(true)}
          >
            Chiki
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <NotAFeature isActive={isActive} triggerActive={triggerActive} />
    </>
  )
}
