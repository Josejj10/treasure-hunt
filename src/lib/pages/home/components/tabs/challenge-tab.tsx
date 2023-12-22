import { Separator } from '@/lib/components/ui/separator'
import { ChallengeStart } from './challenge/challenge-start'
import { useState } from 'react'
import { ChallengeWordle } from './challenge/challenge-wordle'
import { Progress } from '@/lib/components/ui/progress'
import { Button } from '@/lib/components/ui/button'
import { REDEEM_ANSWER } from './redeem-tab'

export enum EChallengeState {
  PREPARATION = 0,
  WORDLE_1 = 22,
  WORDLE_2 = 69,
  COMPLETE = 100,
  COMPLETE_2 = 120,
  COMPLETE_3 = 9000,
}

export interface ChallengeTabProps {
  changeTab: () => void
}

const TEXT_PREPARATION = 'Espero que disfrutes tu regalo :)'
const TEXT_WORDLE = 'Crees que vas a poder?'
const TEXT_WORDLE_2 = 'A ver si esto es de tu talla'
const TEXT_COMPLETE = 'Si fue de tu talla, Pedro Falla'
const TEXT_COMPLETE_2 = 'Jejeje'
const TEXT_COMPLETE_3 = 'xdxdxdxdxd'

export default function ChallengeTab({ changeTab }: ChallengeTabProps) {
  const [challengeState, setChallengeState] = useState(
    EChallengeState.PREPARATION
  )

  const isPreparation = challengeState === EChallengeState.PREPARATION
  const isWordle1 = challengeState === EChallengeState.WORDLE_1
  const isWordle2 = challengeState === EChallengeState.WORDLE_2
  const isWordle =
    challengeState === EChallengeState.WORDLE_1 ||
    challengeState === EChallengeState.WORDLE_2
  const isComplete = challengeState === EChallengeState.COMPLETE
  const isComplete2 = challengeState === EChallengeState.COMPLETE_2
  const isComplete3 = challengeState === EChallengeState.COMPLETE_3

  const onReady = () => {
    setChallengeState(EChallengeState.WORDLE_1)
  }

  const onFinishWordle1 = () => {
    setChallengeState(EChallengeState.WORDLE_2)
  }

  const onWordleDone = () => {
    setChallengeState(EChallengeState.COMPLETE)
  }
  const onCompleteDone = () => {
    setChallengeState(EChallengeState.COMPLETE_2)
  }
  const onComplete2Done = () => {
    setChallengeState(EChallengeState.COMPLETE_3)
  }
  const onFinish = () => {
    changeTab()
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Feliz Merry Christmas!
          </h2>
          <p className="text-sm text-muted-foreground">
            {isPreparation && TEXT_PREPARATION}
            {isWordle1 && TEXT_WORDLE}
            {isWordle2 && TEXT_WORDLE_2}
            {isComplete && TEXT_COMPLETE}
            {isComplete2 && TEXT_COMPLETE_2}
            {isComplete3 && TEXT_COMPLETE_3}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      {!isPreparation && (
        <div className="flex items-center">
          <span className="mr-2 text-xs text-slate-600">{challengeState}%</span>
          <Progress value={challengeState} />
        </div>
      )}
      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
        {isPreparation && <ChallengeStart onReady={onReady} />}
        {isWordle && (
          <ChallengeWordle
            onWordleDone={onWordleDone}
            onFinishWordle1={onFinishWordle1}
          />
        )}
        {isComplete && (
          <div className="flex items-start w-full">
            <Button size="lg" onClick={onCompleteDone} variant="secondary">
              Obtener clave regalo
            </Button>
            <img
              src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
              alt="dancing-dog"
              height={96}
              width={96}
            />
          </div>
        )}
        {isComplete2 && (
          <div className="flex justify-end w-full">
            <img
              src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
              alt="dancing-dog"
              height={96}
              width={96}
            />
            <Button size="lg" onClick={onComplete2Done} variant="ghost">
              Obtener clave regalo
            </Button>
          </div>
        )}
        {isComplete3 && (
          <div className="flex flex-col ">
            <div className="flex justify-around">
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
            </div>
            <p className="mb-2 text-xl text-slate-800 dark:text-slate-50">
              La clave es:{' '}
              <p className="text-[4px] font-semibold text-slate-500 dark:text-slate-300">
                {REDEEM_ANSWER}
              </p>
            </p>
            <Button size="lg" onClick={onFinish} variant="default">
              Ahora si puedes irte
            </Button>
            <div className="flex justify-around">
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
              <img
                src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
                alt="dancing-dog"
                height={96}
                width={96}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
