import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}
export const Private=({isLoggedIn,component:Component}:PrivateProps) =>{
    if(!isLoggedIn){
     return <Component name='nameprop'/>//here it throws the error why because profile props has not export
    }
    else{ return <Login/> }
}
