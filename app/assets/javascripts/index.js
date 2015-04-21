/*
 * Código puro JavaScript, para conectarse al WebSocket
 */


$(function() {
  var ws;
  ws = new WebSocket($("body").data("ws-url")); //Toma La URL del Tag en Body
  ws.onmessage = function(event) {
    var message;
    message = JSON.parse(event.data);
    switch (message.type) {
      case "message":
        return $("#board tbody").append("<tr><td><div class='meta'>Usuario#" + message.uid +" dice: </div> "+ message.msg + "</td></tr>");
      default:
        return console.log(message);
    }
  };
  return $("#msgform").submit(function(event) {
    event.preventDefault();
    console.log($("#msgtext").val());
    ws.send(JSON.stringify({
      msg: $("#msgtext").val()
    }));
    return $("#msgtext").val("");
  });
});
