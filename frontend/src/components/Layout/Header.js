import React from "react"
import { NavLink, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast"


const Header=()=>{
  const [auth, setAuth] = useState()
  const handleLogout = ()=>{
    setAuth({
      ...auth, user : null,


    })

    localStorage.removeItem('token')
    toast.success('Logout Successfully')
  }
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <Link to="/" className="navbar-brand">
            
        <FaShoppingCart />   StyleKart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/home" className="nav-link" >Home</NavLink>

        </li>
        
         <li className="nav-item">
          <NavLink to="/category" className="nav-link" >Category</NavLink>
        </li>
      
{
  !auth.user ? ( <>
  
    <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/login" className="nav-link"  >
            Login
          </NavLink>
         
        </li>
  
  </>) : (
    <>
      <li className="nav-item">
          <NavLink onClick={handleLogout} to="/logout" className="nav-link" >Logout</NavLink>
        </li>
    </>
  )
}
          <li className="nav-item dropdown">
          <NavLink to="/cart" className="nav-link"  >
            Cart(0)
          </NavLink>
         
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Header