import React from 'react'

export default function Testimonials() {
    return (
        <div className="testimonial">
            <h3 className="testimonial-heading">What People say about us</h3>
             {/*first card */} 
            <div className="row">
            <div class=" col img-card mb-4 me-md-2" >
         <img className="testimonial-image" src="https://randomuser.me/api/portraits/men/23.jpg"  />
        <div class="card-body">
       <h5 class="card-title">Zoe</h5>
       <p class="card-text">Excellent service</p>
      <a href="#" class="btn btn-primary">learn more</a>
       </div>
      </div>
        {/*first card */}
        <div class="col img-card mb-4 me-md-2" >
         <img className="testimonial-image" src="https://randomuser.me/api/portraits/women/23.jpg"  />
        <div class="card-body">
       <h5 class="card-title">Zen</h5>
       <p class="card-text">Excellent service</p>
      <a href="#" class="btn btn-primary">learn more</a>
       </div>
      </div>
      {/*second card */}
      <div class="col img-card" >
         <img className="testimonial-image" src="https://randomuser.me/api/portraits/men/51.jpg" />
        <div class="card-body">
       <h5 class="card-title">Ren</h5>
       <p class="card-text">Excellent service</p>
      <a href="#" class="btn btn-primary">learn more</a>
       </div>
      </div>
            </div>

        </div>
    )
}
