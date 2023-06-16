import React from 'react'
import Header from './Header'

export default function LayoutRoot({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
