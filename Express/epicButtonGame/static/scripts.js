$(document).ready(function () {
    $("#count").html(0)
    var socket = io.connect();
    $('#counter').click(function () {
        socket.emit("counter_clicked", {response: "talking to server"})
    });
    $("#reset").click(function () {
        socket.emit("reset_count", {response: "still talking"})
    });
    socket.on('server_response', function (data) {
        $("#count").html(data.count)
    });
})