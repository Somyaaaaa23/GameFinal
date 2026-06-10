import type { GameState, GameCard } from '../../types/game'
import { useIsMobile } from '../../hooks/useIsMobile'
import { GameBoardDesktop } from './GameBoardDesktop'
import { GameBoardMobile } from './GameBoardMobile'

export type UIPhase = 'playing' | 'decision' | 'targeting'

export interface GameBoardProps {
  gameState: GameState
  myPlayerId: string
  isMultiplayer: boolean
  uiPhase: UIPhase
  onlinePlayers?: Set<string>
  onDrawCard: () => void
  onPlayCard: (card: GameCard) => void
  onTargetSelect: (targetIndex: number) => void
  onDecision: (type: 'spend' | 'save' | 'invest') => void
  onTimeout: () => void
  onCancelTargeting: () => void
  daanikCoins: number
  onBuyExtraCard: () => void
  activeEmotes?: Record<string, string>
  onSendEmote?: (emoji: string) => void
}

export function GameBoard(props: GameBoardProps) {
  const isMobile = useIsMobile(768);

  if (isMobile) {
    return <GameBoardMobile {...props} />
  }

  return <GameBoardDesktop {...props} />
}
