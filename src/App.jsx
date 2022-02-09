import "./App.css";
import Props from "./Components/Props";
// import PrimerComponente from "./Components/PrimerComponente";

function App() {
  const lista = ["Pera ", "Manzana ", "Uva "];

  return (
    <>
      {/* <PrimerComponente /> */}

      <Props frutas={lista} />
    </>
  );
}

export default App;
