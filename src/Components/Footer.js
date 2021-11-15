import React from 'react'

export default function Footer() {
    return (
        <div className="footer row pt-3 mt-2">
            
           <div className="copyright col d-block d-md-block d-sm-block d-lg-flex d-flex justify-content-around align-items-center">
               <h3 className="ocean-logo">hosting ocean</h3>
               <p>Copyrights @ hosting ocean</p>
           </div>
           <div className="terms col d-block d-md-block d-sm-block d-lg-flex d-flex justify-content-around align-items-center">
              <p>terms of service</p>
              <p>privacy policy</p>
           </div>

        </div>
    )
}
