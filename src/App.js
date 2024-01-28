import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top"/>
      <Section title="New Albums" url="https://qtify-backend-labs.crio.do/albums/new"/>
      <Section title="Songs" url = "https://qtify-backend-labs.crio.do/songs" hideButton={true} filterUrl="https://qtify-backend-labs.crio.do/genres"/>
    </>
  );
}

export default App;
