import React from 'react'

export default function Help() {
    return (
        <div className="help">
         <h3 className="help-heading">How we help</h3>
         <div className="row">
             <div className="col card help-card ">
                 <p><i class="fas fa-chalkboard"></i></p>
                 <h3 className="tutorial-heading">3,000 tutorials</h3>
                 <p>Our cloud-agnostic open source guides help millions of developers learn and build new software every day.</p>
             </div>
             <div className="col card ms-4 help-card">
                 <p><i class="far fa-comment-alt"></i></p>
                 <h3 className="tutorial-heading">3,000 tutorials</h3>
                 <p>Our cloud-agnostic open source guides help millions of developers learn and build new software every day.</p>
             </div>
             <div className="col  card ms-4 help-card">
             <p><i class="fas fa-headset"></i></p>
                 <h3 className="tutorial-heading">3,000 tutorials</h3>
                 <p>Our cloud-agnostic open source guides help millions of developers learn and build new software every day.</p>
             </div>
         </div>

        </div>
    )
}
