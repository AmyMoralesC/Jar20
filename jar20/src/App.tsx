import { AppLayout } from './components/layout/AppLayout'
import { TavernBackground, TavernHeader } from './features/tavern'
import { HistoryPanel } from './features/history'
import { ConfigPanel } from './features/config-panel'
import { DiceBoard } from './features/dice-roller'

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <TavernBackground />
      <AppLayout
        header={<TavernHeader />}
        leftPanel={<HistoryPanel />}
        rightPanel={<ConfigPanel />}
        board={<DiceBoard />}
      />
    </div>
  )
}
