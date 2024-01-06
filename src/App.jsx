import './App.css'
import { Card, Layout } from './components'
import CardGrid from './components/CardGrid'
import { HeroPage, Footer, Signup } from './pages'

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
      <Signup />
      <Footer/>
    </Layout>
    </>
  )
}

export default App
