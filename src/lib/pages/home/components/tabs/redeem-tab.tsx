import { ScrollArea, ScrollBar } from '@/lib/components/ui/scroll-area'
import { Separator } from '@/lib/components/ui/separator'
import type { Coupon } from '@/lib/data/coupon'
import { availableCoupons } from '@/lib/data/coupon'
import { PrizeArtwork } from '../prize-artwork'
import { useEffect, useState } from 'react'
import { Input } from '@/lib/components/ui/input'
import { Button } from '@/lib/components/ui/button'
import { RedeemCoupon } from './redeem/redeem-dialog'
import { RedeemSuccess } from './redeem/redeem-success'
import ConfettiExplosion from 'react-confetti-explosion'
import { FailVerifyDialog } from './redeem/fail-dialog'

export const REDEEM_ANSWER = 'SOYFALLA2023'

export interface RedeemTabProps {
  goToChallenge: () => void
  isCorrect: boolean
  setIsCorrect: (correct: boolean) => void
}

export default function RedeemTab({
  goToChallenge,
  isCorrect,
  setIsCorrect,
}: RedeemTabProps) {
  const [answer, setAnswer] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [successTabActive, setSuccessTabActive] = useState(false)
  const [failVerifyActive, setFailVerifyActive] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [currentCoupon, setCurrentCoupon] = useState<Coupon | undefined>(
    undefined
  )

  useEffect(() => {
    if (currentCoupon) setIsActive(true)
  }, [currentCoupon])

  const triggerActive = (active: boolean) => {
    setIsActive(active)
    if (!active) setCurrentCoupon(undefined)
  }

  const triggerSuccessTabActive = (active: boolean) => {
    setSuccessTabActive(active)
  }

  const triggerFailVerifyActive = (active: boolean) => {
    setFailVerifyActive(active)
  }

  const checkAnswer = async () => {
    if (answer === REDEEM_ANSWER) {
      setConfetti(true)
      setSuccessTabActive(true)
      await setTimeout(() => {
        setIsCorrect(true)
      }, 1800)
    } else {
      setFailVerifyActive(true)
    }
  }

  const openCoupon = (coupon: Coupon) => {
    setCurrentCoupon(coupon)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {isCorrect ? 'Cupones Navideños' : '...'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {isCorrect ? 'Tócalos que son realidad.' : '...'}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      {isCorrect ? (
        <div className="relative">
          <ScrollArea>
            <div className="grid w-full grid-cols-1 gap-4 text-center justify-items-center md:text-start md:justify-items-start md:grid-cols-2 lg:grid-cols-3">
              {availableCoupons.map((coupon) => (
                <PrizeArtwork
                  key={coupon.name}
                  coupon={coupon}
                  className="w-[300px] md:w-[330px] lg:w-[230px] xl:w-[300px]"
                  aspectRatio="square"
                  width={300}
                  height={230}
                  openCoupon={openCoupon}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ) : (
        <div className="relative">
          <p className="text-slate-700 dark:text-slate-200">
            Ingresa la{' '}
            <span className="italic font-semibold">clave secreta</span>:
          </p>

          <Input
            type="text"
            id="secret-key"
            value={answer}
            onChange={(e) => setAnswer(e.target.value.toUpperCase())}
            className="my-2"
          />
          <div className="flex flex-col justify-between w-full">
            <Button
              size="lg"
              className="mb-2 bg-green-700 dark:text-white"
              onClick={checkAnswer}
            >
              Verificar clave
            </Button>
            <Button size="lg" variant="outline" onClick={goToChallenge}>
              Conseguir una clave
            </Button>
          </div>
        </div>
      )}
      {currentCoupon && (
        <RedeemCoupon
          coupon={currentCoupon}
          isActive={isActive}
          triggerActive={triggerActive}
        />
      )}
      <RedeemSuccess
        isActive={successTabActive}
        triggerActive={triggerSuccessTabActive}
      />
      <FailVerifyDialog
        isActive={failVerifyActive}
        triggerActive={triggerFailVerifyActive}
        goToChallenge={goToChallenge}
      />
      {confetti && (
        <ConfettiExplosion
          zIndex={9999999}
          colors={['	#ff0000', '#ff7878', '#ffffff', '#74d680', '#378b29']}
          force={0.9}
          duration={3000}
          particleCount={350}
          width={1600}
        />
      )}
    </>
  )
}
