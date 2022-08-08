import { Logo } from './Logo'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

import { List, X } from 'phosphor-react'

export function Header() {
  const [isActive, setIsActive] = useState(false)

  function menuToggle() {
    setIsActive(!isActive)
  }

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 fixed top-0 z-[1]">
      <div className="container">
        <div className="flex flex-wrap justify-between md:justify-center items-center mx-auto px-6">
          <Logo />

          <button
            type="button"
            className="inline-flex justify-center items-center gap-[7px] rounded-lg md:hidden text-blue-500"
            onClick={menuToggle}
          >
            <span className="text-gray-100">Aulas</span>
            {isActive ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
        <div className="md:hidden w-full md:w-auto transition">
          {isActive && <Sidebar />}
        </div>
      </div>
    </header>
  )
}
