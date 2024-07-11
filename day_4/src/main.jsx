import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Login } from './Component/Loginn'
import { Signup } from './Component/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Login/>
<Signup/>
  </React.StrictMode>,
)
