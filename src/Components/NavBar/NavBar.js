import React , {Component} from "react";
import  Grid  from "@material-ui/core/Grid";
import "./NavBar.css";
import insta_logo from "../../Images/logoinsta.png"
import home from "../../Images/home.png"
import message from "../../Images/message.png"
import find from "../../Images/find.png"
import react from "../../Images/react.png"
import Avatar  from "@material-ui/core/Avatar";
import dp from "../../Images/dp.jpeg"

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div>
            <div className="navbar__barContent">
                <Grid container >
                    <Grid item xs={2} >

                    </Grid>
                    <Grid item xs={3} > 
                    <img className="navbar_logo" width="105" src={insta_logo} />
                    </Grid>
                    
                    <Grid item xs={3} >
                    <input className="navbar__searchBar" text="text" placeholder="Search" />
                    </Grid>

                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navbar__img" src={home} width="25px"/>
                        <img className="navbar__img"  src={message} width="25px"/>
                        <img  className="navbar__img"src={find} width="25px"/>
                        <img className="navbar__img" src={react} width="25px"/>
                        <Avatar src={dp} className="navbar__img" style={{"maxheight":"25px", "maxwidth":"25px"}}/>
                    </Grid>
                   <Grid item xs={1} >

                   </Grid>
                </Grid>     
            </div>
            </div>
            
        )
    }
}

export default NavBar