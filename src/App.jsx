import "./App.css";
import { Layout } from "./components";
import {
  ExplorePlaces,
  Footer,
  HeroPage,
  ImageGallery,
  LogoTitle,
  MiniSquareCard,
  PopularPlaces,
  Signup,
  TourService,
} from "./pages";

function App() {
  return (
    <>
      <Layout>
        <HeroPage />
        <PopularPlaces />
        <TourService />
        <ExplorePlaces />
        <MiniSquareCard />
        <ImageGallery />
        <LogoTitle />
        <Signup />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
