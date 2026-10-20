import { useState } from 'react'

import { COLOR_MAP } from '../constants'

import type { GameGridProps, GridCellProps, GridRowProps } from './types'

const GridCell = ({ cell }: GridCellProps) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <button
      className="flex aspect-square items-center justify-center rounded-sm"
      style={{ backgroundColor: COLOR_MAP[cell] }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? 'X' : ''}
    </button>
  )
}

const GridRow = ({ row, rowIndex }: GridRowProps) =>
  row.map((cell, cellIndex) => (
    <GridCell cell={cell} key={`${rowIndex}-${cellIndex}`} />
  ))

export const GameGrid = ({ game }: GameGridProps) => {
  return (
    <div className="grid w-full max-w-md grid-cols-8 gap-2 pt-8">
      {game.regions.map((row, rowIndex) => (
        <GridRow key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  )
}
