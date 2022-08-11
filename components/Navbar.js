import { useState } from 'react'
import Link from 'next/link'
import style from "../styles/navbar.module.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <nav className={style.navigation}>
          <img src='/favicon.ico' className='img-thumbnails-navbar'/>
          <a href="/" className={style['brand-name']}>
            Dislyte Helper
          </a>
          <button className={style.hamburger} onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
          }}>
          {/* icon from heroicons.com */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        </button>
        <div
          className={isNavExpanded ? style["navigation-menu expanded"] : style["navigation-menu"] }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/espers">Character dislyte</a>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <a href="/api/auth/login">Login</a>
            </li>
            <li>
              <a href="/api/auth/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      )
}