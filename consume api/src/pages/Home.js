import {Container, 
       } from 'react-bootstrap'
import Tabel from '../components/Table'
import Navbar from '../components/Navbar'

function Home() {

  return (
    <Container>
      <Navbar/>
      <Tabel />
    </Container>
  )
}

export default Home