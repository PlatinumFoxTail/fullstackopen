const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        /*if message includes "Added" or "updated" then display message with .success styling from index.css. 
        if message includes "removed from server" then display message with .error styling from index.css, if not no styling */
        <div className={message.includes("Added") || message.includes("updated") ? "success" :
            message.includes("removed from server") ? "error" : ""}>
            {message}
        </div>
    )
}
  
export default Notification
