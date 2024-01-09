import './App.css'
import { Layout } from './components'
import { Footer, HeroPage, ImageGallery, LogoTitle, MiniSquareCard, PlaceContainer, Signup, TourService } from './pages'
import ExplorePlaceContainer from './pages/ExplorePlaceContainer'

function App() {

  return (
    <>
    <Layout>
      <HeroPage />
      <PlaceContainer />
      <TourService />
      <ExplorePlaceContainer />
      <MiniSquareCard />
      <ImageGallery />
      <LogoTitle />
      <Signup />
      <Footer/>
    </Layout>
    </>
  )
}

export default App
