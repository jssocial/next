import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";


export default function Nav() {
return (
<div>
  <div className="side-bar"></div>
      <header>
        <div className="header-sec">
          <div className="container">
            <div className="header-sec-in">
              <div className="logo">
                <Link href="index.html"
                  ><img
                    src="images/logo.png"
                    alt="logo"
                    width="156"
                    height="75"
                /></Link>
              </div>
              <button type="button" className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="header-right">
                <nav>
                  <ul className="clearfix">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/mentors">Mentors</Link></li>
                    <li><Link href="/programs">Programs</Link></li>
                    <li><Link href="/membership"> Membership </Link></li>
                  </ul>
                </nav>
                <div className="login">
                  <Link href="https://discord.gg/yDjJhmx" target="_blank" >Login</Link>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </header>
      </div>
)}