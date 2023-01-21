import { Grid } from "@material-ui/core";
import "./LoginPage.css";
import React, { Component} from "react";
import inst_image from "../../Images/ty.jpeg";
import insta_logo from "../../Images/logoinsta.png";
import fb from "../../Images/face.jpeg";
import appstore from "../../Images/appstore.png";
import playstore from "../../Images/playstore.png";

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state= { }
    }
    render(){
        return(
        <div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                        <div className="loginpage__main" >
                            <div>
                                <img src={inst_image} width="300" height="450" />
                            </div>
                        <div>
                        <div className="loginpage__rightcomponent">
                            <img className="loginpage__logo" src={insta_logo}  />
                            <div className="loginPage__singIn" >
                                <input className="loginpage__text" type="text" placeholder="Phone number, email or username"/>
                                <input className="loginpage__text" type="password" placeholder="Password"/>
                                <button className="login__button">Sign In</button>
                            </div>
                            <div className="login__ordiv">
                                
                                <div className="login__or">OR</div>
                                
                            </div>
                            <div className="login__fb">
                                <img src={fb} width="15px" style={{"marginRight":"5px"}} /> Log in with Facebook</div>
                                <div className="login__forgot">Forgot Password</div>
                        </div>
                        
                       
                        <div className="logimage__signupoption">
                            <div className="loginPage__signin">
                                Don't have an account ? Sign up
                            </div>
                            <div className="loginPage__downloadSection">
                                <div>
                                Get the app.
                                </div>
                                <div className="loginPage__option">
                            <img className="loginPage__dwing" src={appstore} width="190px" height="90px"/>
                            <img className="loginPage__dwing" src={playstore} width="90px"/>
                         </div>
                         </div>
                        </div>
                        </div>
                        </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            
        </div>
        )
    }
}

export default LoginPage

