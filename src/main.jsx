import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TrendX } from './TrendX'
import { BrowserRouter } from 'react-router-dom'
import { Footer, FooterBanner, Header, Newsletter, Sitemap } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <TrendX/>
      <FooterBanner/>
      <Newsletter/>
      <Sitemap/>
      <Footer/> 
    </BrowserRouter>
  </React.StrictMode>
)
