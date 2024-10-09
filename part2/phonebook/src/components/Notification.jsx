const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        //if message includes "Added" or "updated" then display message with .success styling from index.css. 
        //...otherwise apply .error styling from index.css
        <div className={message.includes("Added") || message.includes("updated") ? "success" : "error"}>
            {message}
        </div>
    )
}
  
export default Notification
