import React from 'react';
import { Navbar } from 'reactstrap'

export class Footer extends React.Component{
    render(){
        return(
            <Navbar style={{backgroundColor: 'yellow'}} color="faded" light>
            <div className="menu">
            <p></p>
            </div>
            </Navbar>
        );
    }
}