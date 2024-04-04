const Notification = ({message, isError}) =>{
    let className = "error"
    if (message === null) {
        return null
    }
    if (!isError){
        className = "confirm"
    }

    return (
        <div className={className}>
            {message}
        </div>
    )
}
    
export default Notification