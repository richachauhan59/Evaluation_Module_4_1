import React from 'react'
import SortFilter from './SortFilrerFun'
import InputForm from './FormInput'
import './FormMain.module.css'
import Profile from './ProfileComponent'


export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            title :"",
            salary :"",
            company : "",
            location: "",
            remote : false,
            logo:"",
            items:[],
            filter:"default",
            sort:""
        }
    }

    HandleSubmit= (e)=>{
        e.preventDefault();
        const {title, salary, company, location , remote, logo ,items} = this.state
 
        const data = {
            title:title,
            company:company,
            location:location,
            remote:remote,
            salary : salary,
            logo:logo
        }
        this.setState({
          items: [...items, data]
        });
        console.log(items)
      };

      HandleChange = (e) => {
          const {name, value, checked, type} = e.target;
         
          let val = type === "checkbox" ? checked : value

          this.setState({
              [name]: val
          })
      }

      HandleFilter = (e) =>{
          this.setState({
              filter:e.target.checked
          })
      }
      HandleSort = (e) =>{
          this.setState({
              sort:e.target.value
          })
      }

    render(){
        return(
            <div>
            <div style={{height:"500", display:"flex" , direction:"row"}}>
                <div style={{border:"2px solid black", height:"100%"}}>
                    <h1>Add a new Job</h1>
                    <form onSubmit={this.HandleSubmit}>
                        Title:
                        <InputForm
                        placeholder="Title"
                        onChange={this.HandleChange}
                        value={this.state.title}
                        name="title" 
                        type="text"
                    />
                    Salary:
                        <InputForm
                        placeholder="Salary"
                        onChange={this.HandleChange}
                        value={this.state.salary}
                        name="salary" 
                        type="number"
                    />
                        Company Name:
                        <InputForm
                        placeholder="Company"
                        type="text"
                        onChange={this.HandleChange}
                        value={this.state.company}
                        name="company" 
                    />
                    Company Logo:
                        <InputForm
                        placeholder="Logo"
                        type="text"
                        onChange={this.HandleChange}
                        value={this.state.logo}
                        name="logo" 
                    />
                    Location:
                    <select value={this.state.location} onChange={this.HandleChange} name="location">
                    {
                        ["Banglore", "Chennai", "Delhi"].map(a =>(
                          <option value={a}>{a}</option>    
                        ))
                    }
                    </select>
                    Remote:
                    <input type="checkbox" name="remote" value={this.state.remote} onChange={this.HandleChange}/>
                        <input type="submit"/>
                    </form>
                </div>                  
                <div>
                    <SortFilter state={this.state} handleFilter={this.HandleFilter} handleSort={this.HandleSort} />
                </div>
                
            </div>
                <div>
                    {/* <p>{this.state.items}</p> */}
                    <Profile sort={this.state.sort} filter={this.state.filter} data={this.state.items}/>
                </div>


           </div>
        )
    }
}