import "./UserNamesPlaceholder.css";

function UserNamesPlaceholder() {
    return (
        <div className="containerUser text-white text-center">
            <h1 className="placeholderIcon"><i className="bi bi-emoji-frown"></i></h1>
            <h4>No baby names yet!</h4>
            <p>Check the suggestions below for inspiration</p>
            <div className="rotateIcon mb-3"><i className="bi bi-hand-index-thumb"></i></div>
        </div>
    );
}

export default UserNamesPlaceholder;