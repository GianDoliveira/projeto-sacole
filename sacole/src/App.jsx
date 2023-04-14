import Home from "./assets/Home"
import Flavors from "./assets/Flavors"
import Prices from "./assets/Prices"

function App() {

  return (
    <>
      <main className="image h-screen" id="start"> 
        <Home />
      </main>
      <main className=" bg-zinc-200" id="flavors">
        <Flavors/>
      </main>
      <main className="h-screen bg-orange-300" id="prices">
        <Prices/>
      </main>
    </>
  )
}

export default App
