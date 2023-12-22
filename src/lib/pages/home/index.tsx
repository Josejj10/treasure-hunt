import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/lib/components/ui/tabs'

import { Menu } from './components/menu'
import { Sidebar } from './components/sidebar'
import ChallengeTab from './components/tabs/challenge-tab'
import RedeemTab from './components/tabs/redeem-tab'
import { useState } from 'react'
import { FeaturePending } from './components/tabs/redeem/feature-pending'

enum ETabs {
  CHALLENGE = 'challenge',
  REDEEM = 'redeem',
  PACKS = 'packs',
}

export default function StartPage() {
  const [currentTab, setCurrentTab] = useState(ETabs.CHALLENGE)
  const [tabsUnlocked, setTabsUnlocked] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const triggerActive = (active: boolean) => {
    setIsActive(active)
  }
  const setRedeemTab = () => {
    setCurrentTab(ETabs.REDEEM)
  }
  const setChallengeTab = () => {
    setCurrentTab(ETabs.CHALLENGE)
  }

  const setPacksTab = () => {
    triggerActive(true)
  }

  return (
    <div className="">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs value={currentTab} className="h-full space-y-6">
                  <div className="flex items-center space-between">
                    <TabsList>
                      <TabsTrigger
                        value={ETabs.CHALLENGE}
                        onClick={setChallengeTab}
                      >
                        Reto Navideño
                      </TabsTrigger>
                      <TabsTrigger
                        value={ETabs.REDEEM}
                        className="relative"
                        onClick={setRedeemTab}
                      >
                        {tabsUnlocked ? 'Regalos' : '...'}
                      </TabsTrigger>
                      {tabsUnlocked && (
                        <TabsTrigger value={ETabs.PACKS} onClick={setPacksTab}>
                          Pipol Packs
                        </TabsTrigger>
                      )}
                    </TabsList>
                  </div>
                  <TabsContent
                    value="redeem"
                    className="p-0 border-none outline-none"
                  >
                    <RedeemTab
                      goToChallenge={setChallengeTab}
                      isCorrect={tabsUnlocked}
                      setIsCorrect={() => setTabsUnlocked(true)}
                    />
                  </TabsContent>
                  <TabsContent
                    value="challenge"
                    className="h-full flex-col border-none p-0 data-[state=active]:flex"
                  >
                    <ChallengeTab changeTab={setRedeemTab} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturePending isActive={isActive} triggerActive={triggerActive} />
    </div>
  )
}
