const httpURL = "http://localhost"
const httpGetName = "/getname"
const httpGetRoom = "/getroom"
const htmlDomInputID = "inputNameID"


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

function GetRoom() {
    $.ajax({
        url: httpURL + httpGetRoom,
        type: 'GET',
        success: function (data) {
            console.log(data);
            location.href = "game.html?ip=" + data;
        },
        error: function () {
            console.log("Get Rand Name Failed!");
        }
    });
}





















/****************************************************************************************************************************
  nomal event
 ****************************************************************************************************************************/
function OnStartGameBtnClick(ip, port) {
    GetRoom();
}

function OnChangeNameBtnClick() {
    GetRandName();
}

function OnBodyLoad() {
    GetRandName();
}

















/****************************************************************************************************************************
  nomal view
 ****************************************************************************************************************************/

function UpdateNameInput(id, name) {
    var dom = document.getElementById(id);
    dom.value = name;
}
