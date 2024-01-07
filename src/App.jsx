import './App.css'
import { Layout, PlaceContainer } from './components'
import { Footer, HeroPage, ImageGallery, LogoTitle, MiniSquareCard, Signup, TourService } from './pages'

const tabs = [
  {id: 0, title: "something"},
  {id: 1, title: "something"},
  {id: 2, title: "something"},
  {id: 5, title: "something"},
  {id: 'view_all', title: "view all"}
]

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
