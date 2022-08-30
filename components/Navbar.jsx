import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import style from '../styles/navbar.module.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  return (
    <nav className={style.navigation}>
      <Avatar variant="square">
        <Image src="/favicon.ico" layout="fill" alt="FavIcon" />
      </Avatar>
      <Link href="/" className={style['brand-name']}>
        Dislyte Helper
      </Link>
      <button
        type="button"
        className={style.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? style['navigation-menu expanded']
            : style['navigation-menu']
        }
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/espers">Character dislyte</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/api/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/api/auth/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
