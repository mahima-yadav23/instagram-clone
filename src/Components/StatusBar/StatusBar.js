import  Avatar  from "@material-ui/core/Avatar";
import React , { Component} from "react";
import "./StatusBar.css";
import statusimg from "../../Images/dp.jpeg";


class StatusBar extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div className="statusbar__container" >
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={statusimg} />
                    <div className="statusbar__text" >Mahima Yadav</div>
                </div>
                
            </div>
        );
    }
}

export default StatusBar