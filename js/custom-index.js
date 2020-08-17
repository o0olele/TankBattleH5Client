const httpURL = "http://localhost"
const httpGetName = "/getname"
const htmlDomInputID = "inputNameID"


/****************************************************************************************************************************
  ws
 ****************************************************************************************************************************/
var ws

function WebSocketStart() {
    if ("WebSocket" in window) {
        console.log("WebSocket Available!")
        // 打开一个 web socket
        ws = new WebSocket("ws://localhost:9001");

        ws.onopen = function () {
            // Web Socket 已连接上，使用 send() 方法发送数据
            //ws.send("发送数据");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            alert("数据已接收...");
        };

        ws.onclose = function () {
            // 关闭 websocket
            console.log("连接已关闭...");
        };
    }
    else {
        // 浏览器不支持 WebSocket
        console.log("WebSocket not available!");
    }
}

function SendMoveMsg(direct) {
    var h = concatenate(Uint8Array, getUint8Bytes(0), getUint8Bytes(0), getUint8Bytes(1), getUint8Bytes(0));
    h.reverse()
    var head = concatenate(Uint8Array, getUint16Bytes(1), getUint16Bytes(8));
    head.reverse();
    var value = getUint32Bytes(direct);
    value.reverse();

    var packet = concatenate(Uint8Array, h, head, value);
    ws.send(packet);
    console.log(packet);
}


function test() {
    var bytes1 = getUint16Bytes(1);
    var bytes2 = getUint16Bytes(2);
    alert(concatenate(Uint8Array, bytes1, bytes2, bytes2));
    alert(toUint16(bytes));
}



















/****************************************************************************************************************************
  http
 ****************************************************************************************************************************/
function GetRandName() {
    $.ajax({
        url: httpURL + httpGetName,
        type: 'GET',
        data: { "DeviceId": "sgdgsd24sf", "Ip": "sd4f5sd4f" },
        success: function (data) {
            console.log(data)
            UpdateNameInput(htmlDomInputID, data.id);
        },
        error: function () {
            console.log("Get Rand Name Failed!");
        }
    });
}



















/****************************************************************************************************************************
  nomal event
 ****************************************************************************************************************************/
function OnStartGameBtnClick() {
    WebSocketStart();
    location.href="game.html?ip=lksdhfjlk";
}

function OnChangeNameBtnClick() {
    GetRandName();
}

$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        console.log("you pressed enter!")
    } else if (event.keyCode == 87) {
        SendMoveMsg(0); // w
    } else if (event.keyCode == 68) {
        SendMoveMsg(90); // d
    } else if (event.keyCode == 83) {
        SendMoveMsg(180); // s
    } else if (event.keyCode == 65) {
        SendMoveMsg(270); // a
    }
});

















/****************************************************************************************************************************
  nomal view
 ****************************************************************************************************************************/

function UpdateNameInput(id, name) {
    var dom = document.getElementById(id);
    dom.value = name;
}
