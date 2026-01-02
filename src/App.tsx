
import './App.css'
import { MainLayout } from './components/layout/MainLayout'

function App() {

  return (
    <>
    <MainLayout>
      <div className="space-y-6">
        {/* Empty body for your development */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Your Content Goes Here
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This is the main body area where you can develop your dashboard content
          </p>
        </div>
      </div>
    </MainLayout>
    </>
  )
}

export default App
