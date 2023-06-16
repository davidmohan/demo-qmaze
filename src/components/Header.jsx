"use client"

import { faBars, faBarsProgress, faBrain, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '@/scss/Header.scss'

export default function Header() {

  // const [collapse, setCollapse] = useState('none')
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className="menubar">
        <div className="menubar--brand">
          <span className="menubar--brand--text">Brand</span>
        </div>
        <div className="menubar--links">
          <span className="menubar--links--link">Home</span>
          <span className="menubar--links--link">General Instructions</span>
          <span className="menubar--links--link">Brochure</span>
          <span className="menubar--links--link">Schedule</span>
          <span className="menubar--links--link">Netmaze</span>
        </div>
        <div className='menubar--btn'>
          {
            (toggle) ? (
              <FontAwesomeIcon icon={faBarsProgress} onClick={() => {
                // setCollapse('none')
                setToggle(false)
              }} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={() => {
                setToggle(true)
                // setCollapse('block')
              }} />
            )
          }
        </div>
      </div>
      <div className={'collapse-nav ' + (toggle ? "toggle" : "")}>
        <div className="collapse-nav--link">Home</div>
        <div className="collapse-nav--link">General Instructions</div>
        <div className="collapse-nav--link">Brochure</div>
        <div className="collapse-nav--link">Schedule</div>
        <div className="collapse-nav--link">Netmaze</div>
      </div>
    </>
  )
}
