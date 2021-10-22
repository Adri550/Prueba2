import { Component } from "react";
import './Header.css'
import logo from '../Imagen/logo.jpg'

class Header extends Component{

render(){

    return(

        <div className= "Header">
            <img className= "Header-logo" src ={logo} alt='logo.jpg' id='loguito' ></img>
            

        </div>
    );
}

}
export default Header; 