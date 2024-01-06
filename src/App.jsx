import './App.css'
import { Card, Layout } from './components'
import CardGrid from './components/CardGrid'
import { HeroPage } from './pages'
import {Footer} from './pages'

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
      <Footer/>
    </Layout>
    </>
  )
}

export default App
