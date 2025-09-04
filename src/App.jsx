import { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Contribution from './components/Contribution';
import FAQ from './components/FAQ';

function App() {
  const contributionSection = useRef(null);

  function scrollToSection(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Header section={contributionSection} scrollTo={scrollToSection} />
      <ProgressBar />
      <Contribution section={contributionSection}/>
      <FAQ />
    </>
  );
}

export default App;
