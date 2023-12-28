import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({ children }) {

    const [loggedInUser, setLoggedInUser] = useState();

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider