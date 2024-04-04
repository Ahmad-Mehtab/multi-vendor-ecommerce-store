import React from 'react'
import Header from '../components/layout/Header'
import EventCard from './../components/Event/EventCard'

function EventsPage() {
  return (
    <div>
        <Header />
        <EventCard />
        <EventCard />

    </div>
  )
}

export default EventsPage