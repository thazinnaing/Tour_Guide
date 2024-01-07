import './App.css'
import { Layout, PlaceContainer } from './components'
import { Footer, HeroPage, ImageGallery, LogoTitle, MiniSquareCard, Signup, TourService } from './pages'

const places = [
  {id: 1, title: "something", description: "some description"},
  {id: 2, title: "something", description: "some description"},
  {id: 3, title: "something", description: "some description"},
  {id: 4, title: "something", description: "some description"}
]

const tabs = [
  {id: 1, title: "something"},
  {id: 2, title: "something"},
  {id: 3, title: "something"},
  {id: 4, title: "something"}
]

function App() {

  return (
    <>
    <Layout>
      <HeroPage />
      <PlaceContainer places={places} tabs={tabs} label="Popular Places"/>
      <TourService />
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
