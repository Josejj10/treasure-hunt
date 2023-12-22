import { SnowGlobeIcon } from '@/icons/snowGlobe'
import { Button } from '@/lib/components/ui/button'

export interface ChallengeStartProps {
  onReady: () => void
}

export function ChallengeStart({ onReady }: ChallengeStartProps) {
  //  https://mywordle.strivemath.com/?word=bcphc // FOYER
  // https://mywordle.strivemath.com/?word=bocol // FALLA

  return (
    <div className="mx-auto flex max-w-[250px] flex-col items-center justify-center text-center">
      <h3 className="my-4 text-lg font-semibold">El PiterReto Navideño</h3>
      <SnowGlobeIcon height={96} width={96} />

      <h3 className="my-4 text-lg font-semibold text-slate-600 dark:text-slate-200">
        ¿Listo?
      </h3>
      <div className="flex justify-between space-x-4">
        <Button
          size="lg"
          className="relative bg-green-700 w-36 dark:text-white"
          onClick={onReady}
        >
          Sí
        </Button>
        <Button
          size="lg"
          className="relative w-36"
          variant="destructive"
          onClick={onReady}
        >
          Sí pero en rojo
        </Button>
      </div>
    </div>
  )
}
