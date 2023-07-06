import { Navigate } from "react-router-dom"
import React from "react"

const Home = React.lazy(()=>import("../view/home"))
const Edit= React.lazy(()=>import('../view/edit'))
const User = React.lazy(()=>import('../view/user'))

const routes = [
    {
        path:"/",
        element:<Navigate to="/home"></Navigate>
    },
    {   
        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/edit",
        element:<Edit></Edit>
    }, {
        path:"/user",
        element:<User></User>
    } 
]

export default routes