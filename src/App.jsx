import "./App.css";
import Header from "./components/Header";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Info1></Info1>
        <Info2></Info2>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
