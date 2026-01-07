'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <main style={{ padding: 20 }}>
      <h1>Next.js ↔ NestJS</h1>
      <p>{message}</p>
    </main>
  )
}
