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
        <Theme className={cn('fixed left-7 xs:left-10 top-20 xs:top-24 p-2 xs:p-3 z-50 rounded-full bg-gray-600 dark:bg-gray-100 text-secondary dark:text-secondary')}/>
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
