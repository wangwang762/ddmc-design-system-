import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.css'
import { DevShell } from './DevShell'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevShell />
  </React.StrictMode>,
)
