import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'

export interface FailVerifyDialogProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
  goToChallenge: () => void
}

export function FailVerifyDialog({
  isActive,
  triggerActive,
  goToChallenge,
}: FailVerifyDialogProps) {
  const onGoToChallenge = () => {
    goToChallenge()
    triggerActive(false)
  }

  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> La clave que ingresaste es incorrecta</DialogTitle>
          <DialogDescription>¿Seguro que tienes la clave? </DialogDescription>
        </DialogHeader>
        <div className="text-sm text-center">
          Para conseguirla, cumple el PiterReto Navideño™.
        </div>
        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => triggerActive(false)}>
            Sí, ya la tengo
          </Button>
          <Button variant="default" onClick={onGoToChallenge}>
            Envíame al reto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
