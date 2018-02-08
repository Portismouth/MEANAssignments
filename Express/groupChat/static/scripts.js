$(document).ready(function () {
    console.log("ready");
    var socket = io.connect();
    var user;
    // var txt;
    // var person = prompt("Welcome! Please enter your name.");
    // if(person == null || person == "") {
    //     person = prompt("You must enter a name to proceed.")
    // } else {
    //     txt = "Hello " + person +"!";
    // }

    // console.log(txt);
    // socket.emit("newUser", { response: person });
    $(".alert").hide();
    $("#join").click( function () {
        user = $("#name").val()
        socket.emit("newUser", user);
    })
    $("#send").click( function () {
        let message = $("#message").val();
        socket.emit("newMessage", { user: user, message: message})
    });
    socket.on("joined", function (data) {
        console.log(data);
        $("#joined").html(data + " has joined the chat").show().fadeOut(2500);
    });
    socket.on("showMessages", function (messages) {
        $(".chat-area").empty();
        messages.forEach(message => {
            $(".chat-area").append("<p>" + message.user + ": " + message.message + "</p>" )
        });
    })
    socket.on("userDisconnect", function (name) {
        $("#left").html(name + " has left the chat").show().fadeOut(1500);
    })
})