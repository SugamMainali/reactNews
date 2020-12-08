import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavMenuLink,
} from "./NavbarElement";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import * as actions from "../../Store/Action/index";
// import { Redirect } from "react-router";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const onChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onChangeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let navValue = null;

  if (props.isAutherized) {
    navValue = <NavMenuLink>MENU</NavMenuLink>;
  }

  const style = {
    background: props.isAutherized ? "#000" : null,
    marginTop: props.isAutherized ? "80px" : null,
    height: props.isAutherized ? "-80px" : null,
  };

  const logOutUserHandler = () => {
    props.onLogOut(props.history.push("/"));
    // <Redirect to="/" />;
  };
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer style={style}>
            <NavLogo to="/" onClick={toggleHome}>
              Listen
              <span>NEWS</span>
            </NavLogo>
            <MobileIcon onClick={props.toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to="about"
                  spy={true}
                  exact="true"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  About
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="discover"
                  spy={true}
                  exact="true"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Discover
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="services"
                  spy={true}
                  exact="true"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Services
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="signup"
                  spy={true}
                  exact="true"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Sign Up
                </NavLinks>
              </NavItems>
              {navValue}
            </NavMenu>
            <NavBtn>
              {props.isAutherized ? (
                <NavBtnLink onClick={logOutUserHandler}>Log Out</NavBtnLink>
              ) : (
                <NavBtnLink to="/singin">Lets Go</NavBtnLink>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAutherized: state.token !== null,
  };
};

const mapDiasptchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actions.logOutUser()),
  };
};
export default connect(mapStateToProps, mapDiasptchToProps)(Navbar);
