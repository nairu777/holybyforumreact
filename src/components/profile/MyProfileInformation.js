import {useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import UserRenderer from "./userRenderer";
import React, {useContext} from 'react'
import {MyContext} from "../../context/MyContext";


function MyProfileInformation () {
    const {rootState} = useContext(MyContext);
    const {isAuth, theUser} = rootState;


    if (isAuth) {
        return (
            <table>
                <thead>
                <tr>
                    <td >username</td>
                    <td >{theUser.username}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td >email</td>
                    <td>{theUser.email}</td>
                </tr>
                <tr>
                    <td >status</td>
                    <td>{theUser.status}</td>
                </tr>
                <tr>
                    <td >lid sinds</td>
                    <td>{theUser.created_at.split("T")[0]}</td>
                </tr>
                </tbody>
            </table>
            // <div>
            //     <p>username = {theUser.username}</p>
            //     <p>email = {theUser.email}</p>
            //     <p>status = {theUser.status}</p>
            //     <p>lid geworden op = {theUser.created_at.split("T")[0]}</p>
            // </div>
        )
    }
    else{
        return (
            <div>
                <p>no user found</p>
            </div>)
    }
}


export default MyProfileInformation;