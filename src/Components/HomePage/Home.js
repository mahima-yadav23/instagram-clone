import React , {Component} from "react";
import MainComponent from "../MainComponent/MainComponent";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div>
                <NavBar />
                <MainComponent/>
            </div>
        )
    }
}

export default Home
