function ListGroup() {
    let items = [
        "New York",
        "abcasfat",
        "fadsjgutharhi",
        "agfjdgijas"
    ];
    
    // items = [];

    return (
        <>
            <h1>List</h1>
            {items.length == 0 ? <p>No items found :(</p> : null}
            <ul className="list-group">
                {items.map(item => 
                    <li 
                    className = "list-group-item" 
                    key={item} 
                    onClick={() => console.log({item} + " has been clicked")}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;