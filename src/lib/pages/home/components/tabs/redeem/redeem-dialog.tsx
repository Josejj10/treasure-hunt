import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'
import type { Coupon } from '@/lib/data/coupon'
import { PrizeArtwork } from '../../prize-artwork'

export interface RedeemCouponProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
  coupon: Coupon
}

const WSP_BASE_URL = 'https://wa.me/51933698368?text='
const WSP_BASE_TEXT = 'Hola guapo, quiero canjear: '

export function RedeemCoupon({
  isActive,
  triggerActive,
  coupon,
}: RedeemCouponProps) {
  const onRedeem = () => {
    const encodedText = encodeURI(WSP_BASE_TEXT + coupon.name)
    const WSP_URL = `${WSP_BASE_URL}${encodedText}`
    window.open(WSP_URL, '_blank')
    triggerActive(false)
  }

  const onCancel = () => {
    triggerActive(false)
  }

  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Seguro?</DialogTitle>
          <DialogDescription>
            Sólo puedes canjearlo una vez...
          </DialogDescription>
        </DialogHeader>
        <PrizeArtwork
          coupon={coupon}
          className="w-[300px] md:w-[330px] lg:w-[230px] xl:w-[300px]"
          aspectRatio="square"
          width={300}
          height={230}
        />
        <DialogFooter className="gap-2">
          <Button onClick={onCancel} variant="outline">
            Ya no
          </Button>
          <Button onClick={onRedeem} variant="destructive">
            Sí, quiero
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
