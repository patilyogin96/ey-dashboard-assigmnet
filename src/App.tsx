
import './App.css'
import ActivityTimelineCard from './components/cards/ActivityTimelineCard'
import MeetingScheduleCard from './components/cards/MeetingScheduleCard'
import TransactionCard from './components/cards/TransactionCard'
import UpgradePlanCard from './components/cards/UpgradePlanCard'
import { MainLayout } from './components/layout/MainLayout'
import { MEETING_DATA, PLAN_DATA, SAMPLE_ACTIVITIES, TRANSACTIONS_DATA } from './data/dashboard-data'

function App() {

  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-3 gap-5">
          <TransactionCard transactions={TRANSACTIONS_DATA} />
          <UpgradePlanCard plan={PLAN_DATA} />
          <MeetingScheduleCard meetings={MEETING_DATA} />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-2">
            <ActivityTimelineCard activities={SAMPLE_ACTIVITIES} headerImage=''/>
          </div>
            
        </div>
      </MainLayout>
    </>
  )
}

export default App
