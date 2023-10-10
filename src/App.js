import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import Plan from "./components/plan";
import Rooms from "./components/rooms";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan/>
      <Rooms/>
    </div>
  );
}

export default App;
