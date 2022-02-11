import "./App.css";
import State from "./Components/State";
// import Props from "./Components/Props";
// import PrimerComponente from "./Components/PrimerComponente";

function App() {
  const lista = ["Pera ", "Manzana ", "Uva "];

  return (
    <>
      {/* <PrimerComponente /> */}

      {/* <Props frutas={lista} /> */}

      <State />
    </>
  );
}

export default App;
