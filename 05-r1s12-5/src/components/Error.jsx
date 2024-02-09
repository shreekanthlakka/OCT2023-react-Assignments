/*eslint-disable react/prop-types*/

function Error({ message }) {
    return <div>{message === 404 ? <p>record not found</p> : null}</div>;
}

export default Error;
