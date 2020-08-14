const httpURL = "http://localhost"
const httpGetName = "/getname"
const htmlDomInputID = "inputNameID"

function OnStartGameBtnClick() {
    WebSocketTest();
}

function OnChangeNameBtnClick() {
    GetRandName()
}

function GetRandName() {
    /*$.ajax({
        url: httpURL + httpGetName,
        type: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        crossDomain:true,
        success: function (data) {
            UpdateNameInput(htmlDomInputID, data);
        },
        error: function () {
            console.log("Get Rand Name Failed!");
        }
    });*/

    try {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", httpURL + httpGetName, false);
        xhttp.setRequestHeader("Content-type", "text/html");
        xhttp.send();
        //var response = JSON.parse(xhttp.response);
        UpdateNameInput(htmlDomInputID, xhttp.response);
        alert(xhttp.response);
    } catch (error) {
        alert(error.message);
    }
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