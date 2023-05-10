import { useState, useEffect } from 'react';
import './Table.css'
import { Link } from 'react-router-dom';

export default function MainContent() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch('http://localhost:3008/accounts')
        .then((users) => users.json())
        .then(usersData => setData(usersData))
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
                        <td> <Link to={`/accounts/${item.id}`}> {item.action}</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
