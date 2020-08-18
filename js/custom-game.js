function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串,如"?p=1"
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function UserObject() {
    this.id = 0;
    this.x = 0;
    this.y = 0;
    this.mesh = null;
}

UserObject.prototype.Init = function (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;

    var geo = new THREE.BoxGeometry(1, 1, 1);
    var mtr = new THREE.MeshBasicMaterial({ color: 0x66ccff });
    this.mesh = new THREE.Mesh(geo, mtr);
}

UserObject.prototype.UpdatePos = function (x, y) {
    this.x = x;
    this.y = y;

    this.UpdateMesh();
}

UserObject.prototype.UpdateMesh = function () {
    this.mesh.position.x = this.x;
    this.mesh.position.y = this.y;
}
