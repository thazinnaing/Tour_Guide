import './App.css'
import { Card, Layout } from './components'
import CardGrid from './components/CardGrid'

function App() {

  return (
    <>
    <Layout>
      <CardGrid>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </Layout>
    </>
  )
}

export default App
