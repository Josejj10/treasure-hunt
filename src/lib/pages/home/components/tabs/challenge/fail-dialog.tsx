import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'

export interface WordleFailDialogProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
}

export function WordleFailDialog({
  isActive,
  triggerActive,
}: WordleFailDialogProps) {
  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Fallaste?</DialogTitle>
          <DialogDescription>
            Que gil, si el wordle te da la respuesta cuando fallas...
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">Intentalo de nuevo</div>
        <DialogFooter>
          <Button onClick={() => triggerActive(false)}>Gil</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
