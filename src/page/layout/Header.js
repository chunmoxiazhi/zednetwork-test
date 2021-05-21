import React from 'react'
import { BsBrightnessHighFill } from 'react-icons/bs'
import { Navbar } from 'react-bootstrap'

export default function Header () {
  return (
    <>
      <Navbar id="header">
        <Navbar.Brand id="header-navbar-items">
          <div id="logo">
            <BsBrightnessHighFill/>
          </div>
          Simple Math
        </Navbar.Brand>
      </Navbar>
    </>
  )
}
