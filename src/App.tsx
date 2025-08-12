import {AppNavigation} from "@/components/app-sidebar.tsx";

function App() {
  return (
      <AppNavigation>
          <div className="flex flex-1 flex-col gap-4 p-4">
              {Array.from({ length: 24 }).map((_, index) => (
                  <div
                      key={index}
                      className="bg-foreground aspect-video h-12 w-full rounded-lg"
                  />
              ))}
          </div>
      </AppNavigation>
  )
}

export default App
