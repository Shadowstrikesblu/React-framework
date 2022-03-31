/* eslint-disable prettier/prettier */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  )
}
