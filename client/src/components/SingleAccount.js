import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

export default function SingleAccount() {
    const { id } = useParams()
    const [singleAccount, setSingleAccount] = useState({})
    const baseUrl = process.env.REACT_APP_API_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}accounts/${id}`)
            .then((user) => user.json())
            .then(userData => setSingleAccount(userData))
            .catch(err => {
                console.error("error fetching account", err)
                setSingleAccount(null)
            })
    }, [])

    if (singleAccount) {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>{id}</th>
                </tr>
                <tr> <th>Name</th>
                    <th>{singleAccount.name}</th>
                </tr>
                <tr>
                    <th>Owner</th>
                    <th>{singleAccount.owner}</th>
                </tr>
                <tr>
                    <th>Created on</th>
                    <th>{singleAccount.createdOn}</th>
                </tr>
                <tr>
                    <th>Updated on</th>
                    <th>{singleAccount.createdOn}</th>
                </tr>
            </table>
        )
    } else if (singleAccount === null) {
        return (
            <h1>Account not found</h1>
        )
    }
}