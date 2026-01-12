'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    console.log('API URL:', apiUrl)

    if (!apiUrl) {
      console.error('API URL is undefined')
      return
    }

    fetch(`${apiUrl}/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('FETCH ERROR:', err))
  }, [])

  return (
    <main style={{ padding: 20 }}>
      <h1>Next.js ↔ NestJS</h1>
      <p>{message}</p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Feature</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
          </tr>
        </thead>
      </table>    
    </main>
  )
}
