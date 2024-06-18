import { Outlet, ScrollRestoration } from "react-router-dom";
function App() {
  return (
    <>
      <header>
        <title>Denver Judo</title>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
