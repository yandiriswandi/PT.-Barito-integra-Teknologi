import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import {
  Link,

} from "react-router-dom"
import folder from '../assets/folder.png' // relative path to image 

export default function Nav() {
  return (
    <div>
    <Navbar >
      <Container>
        <Navbar.Brand  as={Link} to="/" className='h1'>
          <img src={folder} alt={"logo"} className="image"/>
          Aplikasi Data Pribadi
        </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    </div>
  )
}
