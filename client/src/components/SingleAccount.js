import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

export default function SingleAccount({ data }) {
    const { id } = useParams()


    const [eachUser, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3008/accounts/:id')
            .then((users) => users.json())
            .then(usersData => setUser(usersData[id - 1]))
    }, [])

    if (eachUser) {

        return (

            <table>
                <tr>
                    <th>ID</th>
                    <th>{id}</th>
                </tr>
                <tr> <th>Name</th>
                    <th>{eachUser.name}</th>
                </tr>
                <tr>
                    <th>Owner</th>
                    <th>{eachUser.owner}</th>
                </tr>
                <tr>
                    <th>Created on</th>
                    <th>{eachUser.createdOn}</th>
                </tr>
                <tr>
                    <th>Updated on on</th>
                    <th>{eachUser.createdOn}</th>
                </tr>
            </table>

        )
    }

}

