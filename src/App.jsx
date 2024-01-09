import "./App.css";
import { Layout, Theme } from "./components";
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
import ColorSchemeProvider from "./provider/ColorScheme";
import { cn } from "./utils";

function App() {
  return (
    <ColorSchemeProvider>
      <Layout>
        <Theme className={cn('fixed right-10 top-32 p-3 rounded-full bg-gray-100 text-secondary dark:text-red-600')}/>
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
    </ColorSchemeProvider>
  );
}

export default App;
