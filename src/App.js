import logo from "./logo.svg";
import { Forming, forms } from "./form";

function App() {
  return (
    <>
      <h1>App render</h1>
      {<Forming />}
      {forms()}
    </>
  );
}

export default App;
