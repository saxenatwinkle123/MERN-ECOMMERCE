import React, {useState} from "react"
import Layout from "../../components/Layout/Layout.js"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth.js"

const Register = () => {

const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const [auth,setAuth] = useAuth()
const navigate = useNavigate()

//form function for not refresh the webpage
const handleSubmit=async(e)=>{
     e.preventDefault(); 
    console.log(email,password)
    try{
        const res = await axios.post('/api/v1/auth/login',{
             email, password
        })
        if(res && res.data.success){
            toast.success(res.data && res.data.message)
       
       setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token
       })
       localStorage.setItem('auth',JSON.stringify(res.data))
            navigate('/')
        }else{
            toast.error(res.data.message)
        }
    } catch(error)
    {
        console.log(error)
        toast.error("Something went wrong")
    }

}

    return (
        <Layout title="Login into Account">
            <div className="register">
                <form onSubmit={handleSubmit}>
                  
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password"/>
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}
export default Register