/*eslint-disable react/prop-types*/

function User({ user }) {
    return (
        <div>
            <p>Id: {user.id}</p>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
        </div>
    );
}

export default User;
