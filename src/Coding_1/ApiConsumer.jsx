// on authentication Mounting of Dashboard component use the
//  https://jsonplaceholder.typicode.com/ api to list the all /posts on the page


import React from "react";
import axios from 'axios';
import { AuthContext } from "./ApiMain";
 


export default class Consumer extends React.Component {
    constructor(props){
        super(props)
    }
    

    async callPost() {
        console.log("callPost")
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(resp => {
            console.log(resp.data);
        });
    }
      


    render(){
       const  {isAuth} = this.context
        return(
            <AuthContext.Consumer>
           {
           ( isAuth )? this.callPost : <div></div>
           }
            </AuthContext.Consumer>
        )

    }
}

Consumer.contextType = AuthContext