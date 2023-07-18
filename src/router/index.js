import { Navigate } from "react-router-dom"
import React from "react"

const Home = React.lazy(()=>import("../view/home"))
const Edit= React.lazy(()=>import('../view/edit'))
const User = React.lazy(()=>import('../view/user'))
const Login = React.lazy(()=>import('../view/login'))
const Album =  React.lazy(()=>import('../view/album-content'))
const UserMain = React.lazy(()=>import('../view/user/c-cpns/user-main'))
const UserMoment = React.lazy(()=>import('../view/user/c-cpns/user-moment'))
const UserBlog = React.lazy(()=>import('../view/user/c-cpns/user-blog'))


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
        element:<User></User>,
        children:[
            {
            path:"/user",
            element:<UserMain></UserMain>,
            },
            {
            path:"/user/moment",
            element:<UserMoment></UserMoment>,   
            },{
                path:"/user/blog",
                element:<UserBlog></UserBlog>,     
            }
        ]
    } , {
        path:"/login",
        element:<Login></Login>
    } , {
        path:"/album/:id",
        element:<Album></Album>
    } 
]

export default routes