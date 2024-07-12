

function Host ({name, picture}){
    const [firstName, lastName] = name.split (' ');
    return (
        <div className="host">
            <div className="host_name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <img className="host_picture" src={picture} alt={`${name}`}/>
        </div>
    );
}

export default Host