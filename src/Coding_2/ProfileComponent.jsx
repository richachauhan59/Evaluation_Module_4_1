import React from 'react'
import style from  './FormMain.module.css'

export default class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.data)
        const data = this.props.data
        return(
            <div style={{border:"2px solid black" , width:"60%", padding:"20px", margin:"20px"}}>
                {
                    data
                    .filter(elem => {
                        if(this.props.filter == true){
                            return elem.remote
                        }
                        else{
                            return elem
                        }
                      } 
                    )
                    .sort((a,b) => {
                        if(this.props.sort == "asc"){
                            return a.salary - b.salary
                        }
                        if(this.props.sort == "dsc"){
                            return b.salary - a.salary
                        }
                        if(this.props.sort == ""){
                            return 0
                        }
                    })
                    .map(elem => {
                        return(
                            <div >
                            <div style={{
                                border: " 2px solid black",
                                width: "70%",
                                margin: "20px auto",
                                height: "auto"
                            }}>
                                <div style={{ width: "40%", height: "100px", float: "left" }}>
                                    <img style={{ borderRadius: '50%', height: "80px", marginTop:"10px" }} src={elem.logo}></img>
                                </div>
                                <div className={style.cardDiv} style={{display:"flex", direction:"row", width: "60%", height: "100px"}}>
                                   <div>
                                       <h3>Title</h3>
                                       <p>{elem.title}</p>
                                    </div> 
                                    <div>
                                       <h3>Company</h3>
                                       <p>{elem.company}</p>
                                    </div> 
                                    <div>
                                       <h3>Salary</h3>
                                       <p>{elem.salary}</p>
                                    </div> 
                                    <div>
                                       <h3>Location</h3>
                                       <p>{elem.location}</p>
                                    </div>
                                    <div>
                                       <h3>Remote</h3>
                                       <div>{elem.remote? 
                                       <div style={{height:"20px", width:"20px", borderRadius:"50%",background:"green"}}></div>
                                       :<div style={{height:"20px", width:"20px", borderRadius:"50%",background:"red"}}></div>
                                       }
                                       </div>
                                    </div> 
                                </div>
                            </div>
                          </div>  
                        )
                    })
                }
            </div>
        )
    }
}