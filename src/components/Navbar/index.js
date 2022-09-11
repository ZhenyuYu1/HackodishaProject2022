import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbarElements";
  
import logo from "../images/logo.jpg";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
          <img src={logo} alt="logo" class = "logo">

          </img>
          </NavLink>
          <NavLink to="/location" activeStyle>
            Location
          </NavLink>
          <NavLink to="/createPost" activeStyle>
            CreatePost
          </NavLink>
          {/* <NavLink to="/disastersOdisha" activeStyle>
            DisastersOdisha
          </NavLink>
          <NavLink to="/preDisasters" activeStyle>
            PreDisaster
          </NavLink>
          <NavLink to="/afterDisasters" activeStyle>
            AfterDisaster
          </NavLink> */}
          <NavLink to="/sign-up" activeStyle>
            SignUp
          </NavLink>
          <NavLink to="/social" activeStyle>
            Social
          </NavLink>
          <NavLink to="/contacts" activeStyle>
            Emergency Contacts
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;