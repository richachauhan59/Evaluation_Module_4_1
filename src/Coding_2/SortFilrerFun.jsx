import React from 'react'
import './FormMain.module.css'

export default class SortFilter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <div>
                <div style={{border:"3px solid black" , height:"550px" ,width:"600px"}} > 
                    
                    <div>
                        Sort by Salary:
                    <select value={this.props.state.sort} onChange={this.props.handleSort}>
                        <option value="asc"> Asc</option>
                        <option value="dsc"> Dsc </option>
                    </select>
                    </div>
                    <div>
                        Remote Only:
                        <input value={this.props.state.filter} onChange={this.props.handleFilter} type="checkbox"></input>
                    </div>
                </div>
            </div>
        )
    }
}