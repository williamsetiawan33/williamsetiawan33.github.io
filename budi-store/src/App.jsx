import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App() {
  return (
    <>
      <div className="nav">
        <p className='navTitle' style={{ fontWeight: "bold" }}>Budi store</p>
        <div className="navLinkCon">
          <p className='navLink' onClick={() => window.location.href = "#topUpCon"}>Topup</p>
          <p className='navLink'>Cara topup</p>
          <p className='navLink' onClick={() => window.location.href = "#promoBannerCon"}>Promo</p>
        </div>
      </div>
      <div id="promoBannerCon" style={{paddingTop:"50px"}}>
        <div className="subPromoBannerCon">
          <div className="promoBanner"></div>
          <div className="promoBanner"></div>
          <div className="promoBanner"></div>
          <div className="promoBanner" style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"120px", color:"white"}}>
            +
          </div>
        </div>
      </div>
      <div id="topUpCon">
        <p className='topUpTitle' style={{paddingBottom:"20px"}}>TopUp</p>
        <label htmlFor="topUpSelect">Jenis topup : </label>
        <select name="" id="topUpSelect">
          <option value="gopay">(e-wallet) Gopay</option>
          <option value="gopay">(e-wallet) Dana</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
          <option value="gopay">(Game) Genshin Impact</option>
        </select>
      </div>
    </>
  )
}