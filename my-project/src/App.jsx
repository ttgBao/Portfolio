import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import RunningCat from "./components/RunningCat";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <RunningCat />
      <Hero />
      <Skills />
      <Portfolio />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;