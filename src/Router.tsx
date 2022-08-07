import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Event } from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}
