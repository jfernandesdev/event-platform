import { Route, Routes, Navigate } from 'react-router-dom'

import { Subscribe } from './pages/Subscribe'
import { Event } from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route
        path="/event"
        element={<Navigate to="/event/lesson/abertura-do-evento-ignite-lab" />}
      />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}
