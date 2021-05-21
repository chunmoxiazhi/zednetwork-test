import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Questions from '../questions/Questions'

export default function MainLayout () {
  return (
    <>
      <Header/>
      <Questions/>
      <Footer/>
    </>
  )
}
