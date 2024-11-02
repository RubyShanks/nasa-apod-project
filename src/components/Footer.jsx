export default function Footer(props) {
    const {showModal, handleToggleModal, data} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD Project</h1>
                <h2>{data?.title}</h2> { /* If data is null or undefined, the expression will short-circuit and return undefined instead of throwing an error. */ }
            </div> 
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}