import './App.css'
import { Layout, PlaceContainer } from './components'
import { Footer, HeroPage, ImageGallery, LogoTitle, MiniSquareCard, Signup, TourService } from './pages'
import { tabs } from './components'

function App() {

  return (
    <>
    <Layout>
      <HeroPage />
      <PlaceContainer tabs={tabs} label="Popular Places"/>
      <TourService />
      <PlaceContainer tabs={tabs} label="Popular Places"/>
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
