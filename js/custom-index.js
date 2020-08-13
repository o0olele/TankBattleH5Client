var httpURL = "127.0.0.1:8081"
var httpGetName = "/getname"
var htmlDomInputID = "inputNameID"

function OnStartGameBtnClick() {
    WebSocketTest();
}

function GetRandName() {
    $.ajax({
        url: httpURL + httpGetName,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            UpdateNameInput(htmlDomInputID, data);
        },
        error: function () {
            console.log("Get Rand Name Failed!");
        }
    });
}

function UpdateNameInput(id, name) {
    var dom = document.getElementById(id);
    dom.value = name;
}

function WebSocketTest() {
    if ("WebSocket" in window) {
        alert("您的浏览器支持 WebSocket!");

        // 打开一个 web socket
        var ws = new WebSocket("ws://localhost:9001");

        ws.onopen = function () {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("发送数据");
            alert("数据发送中...");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            alert("数据已接收...");
        };

        ws.onclose = function () {
            // 关闭 websocket
            alert("连接已关闭...");
        };
    }
    else {
        // 浏览器不支持 WebSocket
        alert("您的浏览器不支持 WebSocket!");
    }
}