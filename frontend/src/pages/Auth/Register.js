import React, {useState} from "react"
import Layout from "../../components/Layout/Layout.js"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Register = () => {
const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const[phone,setPhone] = useState("")
const[address,setAddress] = useState("")

const navigate = useNavigate()

//form function for not refresh the webpage
const handleSubmit=async(e)=>{
     e.preventDefault(); 
    console.log(name,email,password,address,phone)
    try{
        const res = await axios.post('/api/v1/auth/register',{
            name, email, password, phone,address
        })
        if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
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
        <Layout title="Regsiter Yourself">
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password"/>
                    </div>
                     <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter your phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" value={address} onChange={(e)=> setAddress(e.target.value)} placeholder="Enter your address"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}
export default Register