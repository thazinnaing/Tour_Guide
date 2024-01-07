import './App.css'
import { Card, Layout } from './components'
import CardGrid from './components/CardGrid'
import { HeroPage, Footer, Signup, MiniSquareCard, ImageGallery, LogoTitle, TourService } from './pages'

function App() {

  return (
    <>
    <Layout>
      <HeroPage />
      <CardGrid>
        <Card />
        <Card />
        <Card />
      </CardGrid>
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
