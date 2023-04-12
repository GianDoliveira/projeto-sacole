import Home from "./assets/Home"
import Flavors from "./assets/Flavors"

function App() {

  return (
    <>
      <main className="image h-screen" id="start"> 
        <Home />
      </main>
      <main className="h-screen bg-zinc-50" id="flavors">
        <Flavors/>
      </main>
    </>
  )
}

export default App
