'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Dاللوى تل</h1>

        <div className={styles.card}>
          <h2>Interactive Counter</h2>
          <div className={styles.counter}>
            <button onClick={() => setCount(count - 1)} className={styles.button}>-</button>
            <span className={styles.count}>{count}</span>
            <button onClick={() => setCount(count + 1)} className={styles.button}>+</button>
          </div>
          <button onClick={() => setCount(0)} className={styles.resetButton}>Reset</button>
        </div>

        <div className={styles.card}>
          <h2>Text Input</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className={styles.input}
          />
          {text && (
            <div className={styles.output}>
              <strong>You typed:</strong> {text}
            </div>
          )}
        </div>

        <div className={styles.card}>
          <h2>Features</h2>
          <ul className={styles.features}>
            <li>✨ Modern Next.js 14 App Router</li>
            <li>⚛️ React 18 with TypeScript</li>
            <li>🎨 Beautiful gradient design</li>
            <li>📱 Fully responsive layout</li>
            <li>🚀 Deployed on Vercel</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
