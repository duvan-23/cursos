const socket = io.connect();

function addMessage(e) {
    const message = {
        author: document.getElementById("username").value,
        message: document.getElementById("text").value,
    }

    socket.emit("new-message", message);
    return false
}

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
        <strong>${elem.author}</strong>
        <em>${elem.message}</em>
        </div>`)
    }).join(" ")

    document.getElementById("messages").innerHTML = html
}
//.on en este archivo mustra al cliente la data que se envie(on es un punto de conección)
socket.on("messages", function(data) {render(data)})