import { Button } from '@/lib/components/ui/button'
import { Input } from '@/lib/components/ui/input'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { WordleFailDialog } from './fail-dialog'

export interface ChallengeWordleProps {
  onWordleDone: () => void
  onFinishWordle1: () => void
}

const WORDLE_1 = 'https://mywordle.strivemath.com/?word=bcphc'
const WORDLE_2 = 'https://mywordle.strivemath.com/?word=bocol'
const ANSWER_1 = 'FOYER'
const ANSWER_2 = 'FALLA'

export function ChallengeWordle({
  onWordleDone,
  onFinishWordle1,
}: ChallengeWordleProps) {
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [isCorrect1, setIsCorrect1] = useState(false)
  const [isCorrect2, setIsCorrect2] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const isQ1 = isCorrect1 === false

  const setAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    if (isQ1) setAnswer1(event.target.value.toUpperCase())
    else setAnswer2(event.target.value.toUpperCase())
  }

  const checkAnswer = () => {
    if (isQ1 && answer1 === ANSWER_1) {
      setIsCorrect1(true)
      onFinishWordle1()
    } else if (!isQ1 && answer2 === ANSWER_2) {
      setIsCorrect2(true)
    } else {
      setIsActive(true)
    }
  }

  const triggerActive = (active: boolean) => {
    setIsActive(active)
  }

  return (
    <div className="mx-auto flex max-w-[320px] flex-col items-center">
      {isCorrect2 && (
        <>
          <h2 className="mb-2">Felicidades! Eres un hombre que resuelve</h2>
          <img
            src="https://media.tenor.com/soCyR7I18DYAAAAi/dance-dancing-dog.gif"
            alt="dancing-dog"
            height={96}
            width={96}
          />
          <div className="flex justify-between space-x-4">
            <Button
              size="lg"
              className="relative bg-green-700 dark:text-white"
              onClick={onWordleDone}
            >
              Ya quiero mi regalo
            </Button>
          </div>
        </>
      )}
      {!isCorrect2 && (
        <>
          <a
            className="font-semibold text-blue-700 underline dark:text-blue-400"
            href={isQ1 ? WORDLE_1 : WORDLE_2}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isQ1 ? 'Resuelve' : 'Resuelve más'}
          </a>

          <Input
            type="text"
            id={isQ1 ? 'first-wordle' : 'second-wordle'}
            value={isQ1 ? answer1 : answer2}
            onChange={setAnswer}
            className="my-2"
          />
          <div className="flex justify-between space-x-4">
            <Button
              size="lg"
              className="relative bg-green-700 dark:text-white"
              onClick={checkAnswer}
            >
              Verificar
            </Button>
          </div>
        </>
      )}
      <WordleFailDialog isActive={isActive} triggerActive={triggerActive} />
    </div>
  )
}
