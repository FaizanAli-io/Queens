import { useState } from 'react'

import type { GameOptionsProps } from '../types'

const TextBox = ({ text }: { text: string }) => {
  return (
    <pre className="overflow-auto rounded-md border p-2 whitespace-pre-wrap">
      {text}
    </pre>
  )
}

export const GameOptions = ({
  onPrint,
  onReset,
  onValidate,
}: GameOptionsProps) => {
  const [text, setText] = useState('')

  const buttonClasses = 'border rounded-md p-2'

  return (
    <>
      <div className="flex justify-between">
        <button className={buttonClasses} onClick={() => setText('')}>
          Clear
        </button>

        <button className={buttonClasses} onClick={onPrint}>
          Print
        </button>

        <button className={buttonClasses} onClick={onReset}>
          Reset
        </button>

        <button className={buttonClasses} onClick={onValidate}>
          Validate
        </button>
      </div>
      {text && <TextBox text={text} />}
    </>
  )
}
