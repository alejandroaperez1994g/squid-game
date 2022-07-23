import "./Home.css";

import {
  NavBar,
  MainSection,
  Features,
  Catalog,
  Series,
  BottomSection,
  Footer,
} from "../../components";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <MainSection />
      <Features />
      <Catalog />
      <Series />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default Home;
