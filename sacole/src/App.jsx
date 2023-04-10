import Home from "./assets/Home"
import Flavors from "./assets/Flavors"

function App() {

  return (
    <>
      <main className="image h-screen" id="start"> 
        <Home />
      </main>
      <main className="h-screen bg-slate-300">
        <Flavors/>
      </main>
    </>
  )
}

export default App
