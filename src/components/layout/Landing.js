import React, { Component } from "react";
import { Link } from "react-router-dom";
import heroImage from '../assets/heroImage.jpg'
import hero2 from '../assets/hero2.jpg'
import { connect } from "react-redux";

var heroBox = {
  minHeight: "100%",
  minWidth: '1024px',
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  position: "absolute",
  backgroundImage: `url(${hero2})`,

  backgroundSize: "cover"
}






class Landing extends Component {
  

  render() {

    return (
      <div style={heroBox}>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4 style={{color: 'black', textTransform: 'uppercase', fontSize: '4em', fontFamily: 'Apple Color Emoji', textShadow: '2px 4px 3px rgba(0,0,0,0.3)'}}>
                Welcome to the hall of heroes!
            </h4>
              <p style={{textShadow: '2px 4px 3px rgba(0,0,0,0.3)'}}className="flow-text black-text text-darken-1">
                Create, share and explore the various games our DM's have ready for you
            </p>
              <br />
              
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable red accent-4"
                >
                  Register
              </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large  waves-effect red accent-4"
                >
                  Log In
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Landing);