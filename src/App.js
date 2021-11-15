import logo from './logo.svg';
import './App.css';
import Wave from '../src/wave.svg'
import Services from './Components/Services';
import Help from './Components/Help';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Action from './Components/Action';
import Started from './Components/started';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <div className="master-wrapper container-md ">
        <div className="hero-section ">

      <nav className="navigation d-flex align-items-center" >
      <a className="logo" href="#">Hosting Ocean</a>
       <a className="sign-in" href="#">Sign up</a>
        
      </nav>
      <div className="banner-image container-md">
        <div className="row">
        <div className="description col-md-6 col-sm-12 col-lg-4">
          <h3 className="description-heading">New Gen developer cloud</h3>
          <ul>
            <li> <span className="tick"><i class="fas fa-check-square"></i></span>Host websites with the simplest cloud hosting platform</li>
            <li> <span className="tick"><i class="fas fa-check-square"></i></span>Build web apps or API backends on robust infrastructure</li>
            <li> <span className="tick"><i class="fas fa-check-square"></i></span>Deploy container based apps with managed Kubernetes</li>
            <li> <span className="tick"><i class="fas fa-check-square"></i></span>Speed up development with intuitive API, developer tools </li>
            <li> <span className="tick"><i class="fas fa-check-square"></i></span>OR, simply learn the basics of cloud computing</li>
          </ul>
        </div>
        {/*description*/ }
        <div className="form col d-none d-lg-block col-lg-7 d-md-block col-md-3">
          <div className="make-flex">
          <h3 className="form-heading">Try Hosting Ocean for free with a $100 credit</h3>
          <input type="email" placeholder="Email Address" /> <br />
          <input type="password"  placeholder="Password" />
          <div className="button-container">
            <button>Create free account <span><i class="fas fa-arrow-right"></i></span> </button>
          </div>
          </div>
        </div>
        {/*visible in mobile*/}
      
       <div className=" email-wrapper  d-flex justify-content-center">
        <div className="email-form  d-none d-sm-block d-md-none d-lg-none ">
          <h4 className="chat">fancy a chat?</h4>
        <input type="email" placeholder="Email Address" />
          <input type="password"  placeholder="Password" />
          <div className="button-container">
            <button>Create free account <span><i class="fas fa-arrow-right"></i></span> </button>
          </div>
      </div> 
      </div>
      </div> 
        
      </div>
      {/*hero container*/}
      {/* <div className="waves ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,101.3C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div> */}
      </div>
      
      <div className="waves col-md-d-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,101.3C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      {/*features */ }
      <div className="features col-md  ">
        
          <h3 className="feature-heading ">Simple scalable solution</h3>
          
          <div className="row mb-2   d-flex justify-content-around ">
         
          <div className="col-lg-5 card col-md-4 me-2 me-lg-1 col-sm-12 mb-sm-2 mb-lg-0">
          <h4 className="feature">Complete set of building block services</h4>
          <p>Choose from a wide variety of services - Infrastructure as a Service (IaaS), Cloud-Native (managed Kubernetes) and Platform as a Service (PaaS) for all compute</p>
          </div>
          <div className="col-lg-5 card col-md-4 col-sm-12 ">
            <h4>Rich marketplace of 1-click apps</h4>
            <p>Rich set of learning content around technology topics - from the basics of virtual machines to database optimizations and container orchestration.</p>
          </div>
        
          </div>
          
          <div className="row d-flex justify-content-around ">
          
          <div className="col-lg-5 col-md-4 card me-2 me-lg-1 col-sm-12 mb-sm-2 mb-lg-0 ">
            <h4>Predictable cost</h4>
            <p>Always know what you’ll pay per month with a flat pricing structure across all data center regions</p>
          </div>
          <div className="col-lg-5 col-md-4 card  col-sm-12 ">
            <h4>Cloud computing demystified</h4>
            <p>Rich set of learning content around technology topics - from the basics of virtual machines to database optimizations and container orchestration.</p>
          </div>
          </div>
     
       {/*end of second row */}

      </div>
      {/*Additional services*/ }
      <Services/>
      {/*how we help*/}
      <Help/>
      {/*Testimonials*/}
      <Testimonials/>
      {/*Call to action */}
      <Action/>
      {/*get started */}
      <Started/>
      {/*faq */}
      <Faq/>
      {/**Footer */}
      <Footer/>
      </div>
      {/*master-wrapper*/}

    </div>
  );
}

export default App;
