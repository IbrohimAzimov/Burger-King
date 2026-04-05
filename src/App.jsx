import {
  Combo,
  Burger,
  Snacks,
  Drinks,
  Hot_Drinks,
  Footer,
  Sause,
  Navbar,
  Header,
  Hero,
} from "./components/Imports";

export default function App() {
  return (
    <>
      <Navbar />
      <br />
        <Header />
        <Hero />
      <Combo />
      <Burger />
      <Snacks />
      <Drinks />
      <Hot_Drinks />
      <Sause />
      <Footer />
    </>
  );
}
