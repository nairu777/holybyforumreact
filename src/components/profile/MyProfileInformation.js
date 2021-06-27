import { useEffect, useState } from 'react';
import UserContext from './../../context/UserContext';
import UserRenderer from './userRenderer';
import React, { useContext } from 'react'
import { MyContext } from './../../context/MyContext';

function MyProfileInformation () {
  const { rootState } = useContext(MyContext);
  const { isAuth, theUser } = rootState;

  return (isAuth) ? (
    <table>
      <thead>
        <tr>
          <td>Gebruikersnaam</td>
          <td>{theUser.username}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>{theUser.email}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{theUser.status}</td>
        </tr>
        <tr>
          <td>lid sinds</td>
          <td>{theUser.created_at.split('T')[0]}</td>
        </tr>
      </tbody>
    </table>
  ) :
  (
    <div>
      <p>no user found</p>
    </div>
  );
}

export default MyProfileInformation;