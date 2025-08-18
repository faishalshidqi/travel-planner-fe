import {AppNavigation} from "@/components/app-sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage.tsx";

function App() {
  return (
      <AppNavigation>
          <div className="flex flex-1 flex-col gap-4 p-4">
              <Routes>
                  <Route path='/' element={<DashboardPage />} />
              </Routes>
          </div>
      </AppNavigation>
  )
}

export default App
