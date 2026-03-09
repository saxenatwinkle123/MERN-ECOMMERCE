import React from "react"
import Layout from "../components/Layout/Layout"
import { useAuth } from "../context/auth"

const HomePage =()=>{
    const [auth, setAuth] = useAuth()
    return(
             <Layout title={"Shop us now"}>
     
            <h1>About Page</h1>
        </Layout>
    )
}

export default HomePage