import React from 'react'

export default function Services() {
    return (
        <div className="services">
         <h3 className="service-heading">We offer free services</h3>
         <div className="row">
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-clock"></i></p>
             <p>99.99% uptime SLA</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
         <p><i class="fas fa-fire"></i></p>
             <p>Cloud firewalls</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-tv"></i></p>
             <p>Monitoring & alerting</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-server"></i></p>
             <p>DNS</p>
         </div>
         </div>
         <div className="row">
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-database"></i></p>
             <p>Global data centers</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-wifi"></i></p>
             <p>40GbE hypervisor connections</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-sun"></i></p>
             <p>Enterprise SSDs</p>
         </div>
         <div className="col card service-card mb-2 ms-2">
             <p><i class="fas fa-tape"></i></p>
             <p>Easy-to-use API</p>
         </div>
         </div>
        </div>
    )
}
