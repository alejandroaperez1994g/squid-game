import { Toaster } from "react-hot-toast";
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
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default Home;
