import React from "react"
import Layout from "../components/Layout/Layout"
import { BiMailSend, BiPhone, BiSupport } from "react-icons/bi"


const Contact =()=>{
    return(
        <Layout title={"Contact us"}>
            <div className="row-contactus">
                <div className="col-md-12">
                    <div className="col-md-6">
                        <h1 className="bg dark p-2 text-white text-center">CONTACT US</h1>
                        <p className="text-justify mt-2">
                            any query and info about product feel free to call anytime we 24/7 variable 
                        </p>
                        <p className="mt-3"><BiMailSend /> : wwww.help@ecommerce.com</p>
                        <p className="mt-3"><BiMailSend /> : 012-2545454</p>
                    </div>
                </div>






            </div>
        </Layout>
    )
}

export default Contact