import { useState } from 'react'

import type { GameOptionsProps } from '../types'

const TextBox = ({ text, valid }: { text: string; valid?: boolean }) => {
  const borderColorClass =
    valid === undefined
      ? 'border-black'
      : valid
        ? 'border-green-500'
        : 'border-red-500'

  return (
    <pre
      className={`overflow-auto rounded-md border-2 ${borderColorClass} p-2 whitespace-pre-wrap`}
    >
      {text}
    </pre>
  )
}

export const GameOptions = ({
  resetGameState,
  printGameState,
  checkGameState,
}: GameOptionsProps) => {
  const [text, setText] = useState('')
  const [valid, setValid] = useState<boolean | undefined>(undefined)

  const handlePrint = () => setText(printGameState())

  const handleCheck = () => {
    const { isValid, message } = checkGameState()
    setText(message)
    setValid(isValid)
  }

  const handleClear = () => {
    setText('')
    setValid(undefined)
  }

  const buttonClasses = 'border rounded-md p-2'

  return (
    <>
      <div className="flex justify-between">
        <button className={buttonClasses} onClick={resetGameState}>
          Reset
        </button>

        <button className={buttonClasses} onClick={handlePrint}>
          Print
        </button>

        <button className={buttonClasses} onClick={handleCheck}>
          Check
        </button>

        <button className={buttonClasses} onClick={handleClear}>
          Clear
        </button>
      </div>
      {text && <TextBox text={text} valid={valid} />}
    </>
  )
}
