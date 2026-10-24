import { getGameList } from '../utils/games'

type GameSelectorProps = {
  selectedGame: number
  onChange: (index: number) => void
}

export const GameSelector = ({ selectedGame, onChange }: GameSelectorProps) => (
  <select
    value={selectedGame}
    className="rounded-md border px-4 py-2 font-bold"
    onChange={(e) => onChange(Number(e.target.value))}
  >
    {getGameList().map((game) => (
      <option key={game.index} value={game.index}>
        {game.name} ({game.size})
      </option>
    ))}
  </select>
)
