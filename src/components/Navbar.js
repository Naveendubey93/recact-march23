import React from 'react'
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> {props.title} </Link>
          {/* <a className="navbar-brand" href="/#"> {props.title} </a> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#/">Home</a> */}

            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/about">{props.aboutTxt}</Link>
             {/* <a className="nav-link" href="/about">{props.aboutTxt}</a> */}

            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div class=" my-2 mx-2 p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3" onClick={()=>props.toggleMode('danger')} style={{"width":"35px","height":"35px","cursor":"pointer"}}></div>
          <div class=" my-2 mx-2 p-3 text-info-emphasis bg-info-subtle border border-info-subtle rounded-3"  onClick={()=>props.toggleMode('info')} style={{"width":"35px","height":"35px","cursor":"pointer"}}></div>
          <div class=" my-2 mx-2 p-3 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3"  
           onClick={()=>props.toggleMode('warning')} style={{"width":"35px","height":"35px","cursor":"pointer"}}></div>


            {/* Example element with utilities */}
          {/* </div> */}
          <div className= {`form-check form-switch text-light text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Text React",
  aboutTxt: 'About Text'
}

