import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from '../actions/authActions';
import DasboardBanner from '../layout/DashboardBanner'
import { Container } from '@material-ui/core';
import dashboard2 from '../assets/dashboard2.jpeg'
import styled from 'styled-components';
import GameBanner from '../layout/GameBanner';
import dashboard3 from '../assets/dashboard3.jpg'


var heroBox = {
  minHeight: "100%",
  minWidth: '1024px',
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  position: "absolute",
  backgroundImage: `url(${dashboard3})`,
 
  backgroundSize: "cover"
}

var innerBox = {
  marginTop: '9em',
  zIndex: '49999'
}




class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={heroBox}>
      <Container>
        <div style={innerBox}>
          <DasboardBanner />
          <GameBanner/>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable red accent-4">Logout
            </button>
        </div>
      </Container>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  data: state.character
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);