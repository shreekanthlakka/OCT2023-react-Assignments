/*eslint-disable react/prop-types*/

function UsersList({ users }) {
    return (
        <>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>city</th>
                <th>position</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>
                        {user.address.geo.lat} , {user.address.geo.lng}
                    </td>
                </tr>
            ))}
        </>
    );
}

export default UsersList;
