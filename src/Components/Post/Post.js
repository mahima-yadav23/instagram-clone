import  Avatar  from "@material-ui/core/Avatar";
import React , { Component} from "react";
import "./Post.css";
import postimage from "../../Images/dp.jpeg";
import Header from "../../Images/lll.jpg";



class Post extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div className="post__container">
               {Header}
               
               <div className="post__container">
                <Avatar className="post__image" src="" />
                <div className="post__username">Username</div>
               </div>
               <div>
                 <img src={postimage} width="610px" />
               </div>
               <div>
                i
               </div>
               <div></div>

            </div>
        );
    }
}

export default Post
