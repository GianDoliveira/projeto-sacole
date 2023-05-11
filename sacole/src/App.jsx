import Home from "./assets/Home"
import Flavors from "./assets/Flavors"
import Prices from "./assets/Prices"
import Contacts from "./assets/Contacts"

function App() {
  return (
    <>
      <main className="image h-screen" id="start"> 
        <Home/>
      </main>
      <main className="bg-yellow-100" id="flavors">
        <Flavors/>
      </main>
      <main className="bg-orange-300 md:h-96" id="prices">
        <Prices/>
      </main>
      <main className="bg-yellow-200 h-screen md:h-96" id="contacts">
        <Contacts/>
      </main>
      <footer className="text-center bg-yellow-300">© Gian de Oliveira. All rigths reserved</footer>
    </>
  )
}

export default App