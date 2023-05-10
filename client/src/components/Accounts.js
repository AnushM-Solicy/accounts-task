import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Table.css'

export default function MainContent() {
    const [data, setData] = useState([])
    const baseUrl = process.env.REACT_APP_API_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}accounts`)
            .then((users) => users.json())
            .then(usersData => {
                if (usersData) {
                    setData(usersData)
                }
            })
    }, [])

    return (
        <table>
            <thead>
                <tr><th>ID</th>
                    <th>Name</th>
                    <th>Created On</th>
                    <th>Owner</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.createdOn}</td>
                        <td>{item.owner}</td>
                        <td>
                            <Link to={`/accounts/${item.id}`}>
                                {item.action}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
