import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/components/ui/dialog'

export interface RedeemSuccessProps {
  isActive: boolean
  triggerActive: (active: boolean) => void
}

export function RedeemSuccess({ isActive, triggerActive }: RedeemSuccessProps) {
  if (!isActive) return undefined
  return (
    <Dialog open={isActive} onOpenChange={triggerActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¡Felicitaciones!</DialogTitle>
          <DialogDescription>Ahora puedes ver los regalitos.</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <img
            src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
            alt="dancing-dog"
            height={96}
            width={96}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => triggerActive(false)}
            className="bg-green-700 dark:text-white"
          >
            Aber
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
