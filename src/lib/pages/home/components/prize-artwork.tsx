import type { Coupon } from '@/lib/data/coupon'
import { cn } from '@/lib/styles/utils'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  coupon: Coupon
  openCoupon?: (coupon: Coupon) => void
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function PrizeArtwork({
  coupon,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  openCoupon,
  ...props
}: AlbumArtworkProps) {
  const onOpenCoupon = () => {
    if (openCoupon) openCoupon(coupon)
  }

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <button
        type="button"
        className={cn(
          'overflow-hidden rounded-md cursor-default',
          openCoupon && 'cursor-pointer'
        )}
        onClick={onOpenCoupon}
      >
        <img
          src={coupon.cover}
          alt={coupon.name}
          width={width}
          height={height}
          className={cn(
            'h-auto w-auto object-cover transition-all',
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            openCoupon && 'hover:scale-110'
          )}
        />
      </button>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{coupon.name}</h3>
        <p className="text-xs text-muted-foreground">{coupon.artist}</p>
      </div>
    </div>
  )
}
