import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PageScroller from "./components/PageScroller";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageScroller>
        <Hero />
        <About />
      </PageScroller>
    </BrowserRouter>
  );
}