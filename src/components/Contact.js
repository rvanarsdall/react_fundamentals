const Contacts = (props) => {
    return (
        <>
        <h3>{props.name}</h3>
        <p>I'm {props.age} years old, graduated from {props.school} in {props.graduationYear}</p>
        </>

    )
}

export default Contacts;