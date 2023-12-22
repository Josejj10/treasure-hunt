import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'

export interface FeaturePendingProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
}

export function FeaturePending({
  isActive,
  triggerActive,
}: FeaturePendingProps) {
  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bloqueadito</DialogTitle>
          <DialogDescription>
            Iba a hacer algo acá, pero me dio flojera.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">Toma un tecito: 🍵.</div>
        <DialogFooter>
          <Button onClick={() => triggerActive(false)}>CTM</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
