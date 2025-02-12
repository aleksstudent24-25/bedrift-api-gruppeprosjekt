import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Layout/Home";
import { About } from "./Layout/About";
import { PageLayout } from "./Layout/PageLayout";
function App() {
  return (
    <>
     <Router>
      {"  "}
      <header className="App-header">
        <div className="detteHer">
          <h1>Aleks og Lillian sin Bedrift sjekker</h1>
        </div>
      </header>
      {"  "}
      <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </PageLayout>
      <footer className="App-footer">
        Laget av Aleks og Lillian
      </footer>
    </Router>
      
    </>
  );
}

export default App;
