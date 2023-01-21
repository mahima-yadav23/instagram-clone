import  Grid  from "@material-ui/core/Grid";
import React , {Component} from "react";
import "./MainComponent.css";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
class MainComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item ={2}></Grid>
                    <Grid item ={6} className="maincontent__container">
                        <div>
                        <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                        
                    <Grid>
                    <Grid item ={2}></Grid>
                    
                    <Grid>
                    <Grid item ={2}></Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainComponent