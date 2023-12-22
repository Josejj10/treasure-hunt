import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'

export interface NotAFeatureProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
}

export function NotAFeature({ isActive, triggerActive }: NotAFeatureProps) {
  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Caiste we</DialogTitle>
          <DialogDescription>
            Este botón es como tú, puro humo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">Toma un caramelo: 🍬.</div>
        <DialogFooter>
          <Button onClick={() => triggerActive(false)}>CTM</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
