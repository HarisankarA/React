import React from 'react'
import { useState } from 'react'

const UseStateFunction = () => {

        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const submithandler = event => {

           event.preventDefault()

            const dataSet = {

                username: username,
                password: password
            }

            console.log(dataSet);
        }

        return (
    
            <div>
                              
                <form>

                    <label htmlFor="">User Name</label>
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>

                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>

                    <input type="submit" onClick={event => submithandler(event)}/>

                </form>
    
            </div>
        )
}

export default UseStateFunction