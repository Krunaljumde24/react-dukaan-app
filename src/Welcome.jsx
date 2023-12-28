import React, { useContext } from 'react'
import UserContext from './context/UserContext'

function Welcome() {

    const { loggedInUser } = useContext(UserContext)
    return (
        <div>
            <h2>Hello, {loggedInUser}</h2>
        </div>
    )
}

export default Welcome