import { Div } from "../components/base"
import { cn } from "../utils"
import ExplorePlaces from "./ExplorePlaces"
import Footer from "./Footer"
import HeroPage from "./HeroPage"
import ImageGallery from "./ImageGallery"
import LogoTitle from "./LogoTitle"
import MiniSquareCard from "./MiniSquareCard"
import PopularPlaces from "./PopularPlaces"
import Signup from "./Signup"
import TourService from "./TourService"

const Home = () => {
  return (
    <Div className={cn('flex flex-col gap-12 ')}>
      <HeroPage />
      <PopularPlaces />
      <TourService />
      <ExplorePlaces />
      <MiniSquareCard />
      <ImageGallery />
      <LogoTitle />
      <Signup />
      <Footer />
    </Div>   
  )
}

export default Home
