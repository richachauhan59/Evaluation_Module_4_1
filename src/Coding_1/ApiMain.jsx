import React , {createContext} from 'react';
import axios from 'axios';

// export const AuthContext = React.createContext();

export default class MainApi extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email : "",
            password : "",
            token : "",
            status : false,
            form: true,
            isAuth: false
        }
        this.makePostRequest = this.makePostRequest.bind(this)
    }


    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
    async makePostRequest(e) {
        e.preventDefault();
        console.log(this.state)
        var params =  {
            email: this.state.email,
            password: this.state.password
        }
        let res = await axios.post(`https://reqres.in/api/login`, params)
        console.log(res.data.token , res.status)
        this.setState({
            token: res.data.token
        })
        if(res.status == 200){
            this.setState({
               status: true,
               isAuth:true
            })
        }

    }

    onValueChange = (e) => {
        const {name, value, checked, type} = e.target;
        let val = type === "checkbox" ? checked : value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { isAuth } = this.state;
        const {email } = this.state
        const { token} = this.state
        const value = { isAuth, email, token };
        return (
            <div>
                {
                    this.state.status? 
                    <div style={{
                        border: "4px solid black",
                        marginLeft:"20%",
                        width: "50%",
                        height: "200px"
                    }}>
                    <h1>Token : : {this.state.token}</h1>
                    <h1>Email : : {this.state.email}</h1>
                    </div>
                    :
                    <div>
                        <div style={{ border: " 2px solid black", width: "35%", margin: "100px auto", height: "400px" }}>
                            <div>
                                <span style={{ border: " 2px solid black", width: "49.39%", float: "left", height: "30px" }}>Login</span>
                                <span style={{ border: " 2px solid black", width: "49%", float: "right", height: "30px", }}>Register</span>
                            </div>
                            <div style={{ margin: "100px auto" }}>
                                <form onSubmit={this.makePostRequest}>
                                <div style={{ marginTop: "20px", padding: "10px" }} >
                                    <label style={{ padding: "10px", margin: " 30px auto"}}>Email</label>
                                    <input type="text" value={this.state.email} name="email" onChange={this.onValueChange}/>
                                </div>
                                <div style={{ marginTop: "20px", padding: "10px" }} >
                                    <label style={{ padding: "10px", margin: " 30px auto" }}>Password</label>
                                    <input type="text" value={this.state.password} name="password" onChange={this.onValueChange} />
                                </div>
                                <input type="submit"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                }
                        {/* <AuthContext.Provider value={value}>
                            {this.props.children}
                        </AuthContext.Provider> */}
            </div>
        )
    }
}


