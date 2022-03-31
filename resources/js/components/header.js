/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import logo_wymee from '../assets/logo_wymee_fond_blanc.webp'

export default function Header() {
  return (
    <header className="w-full text-gray-700 bg-white">
      <div className="flex flex-wrap place-items-center">
        <nav className="flex justify-between text-gray-900 bg-white w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading" href="#">
              <img className="h-9" src={logo_wymee} alt="logo" />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><Link to="/" className="hover:text-red-700" >Page d'acceuil</Link></li>
              <li><a className="hover:text-red-700" href="#">Matching</a></li>
              <li><Link className="hover:text-red-700" to="/createjobs"> Create Jobs</Link></li>
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <a className="flex items-center hover:text-red-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
              </span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>
    </div>
    </header>
  )
}
