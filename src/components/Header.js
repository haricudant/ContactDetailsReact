import React from 'react';
import Navbar from "react-bootstrap/Navbar";

const Header = props =>  {
        return (        
              <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#">
                    {props.branding}
                </Navbar.Brand>
              </Navbar>
         
        
        );
    }


export default Header;