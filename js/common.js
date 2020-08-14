/****************************************************************************************************************************
  common
 ****************************************************************************************************************************/

function concatenate(resultConstructor, ...arrays) {
    let totalLength = 0;
    for (let arr of arrays) {
        totalLength += arr.length;
    }
    let result = new resultConstructor(totalLength);
    let offset = 0;
    for (let arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

//构建一个视图，把字节数组写到缓存中，索引从0开始，大端字节序
function getView(bytes) {
    var view = new DataView(new ArrayBuffer(bytes.length));
    for (var i = 0; i < bytes.length; i++) {
        view.setUint8(i, bytes[i]);
    }
    return view;
}
//将字节数组转成有符号的8位整型，大端字节序
function toInt8(bytes) {
    return getView(bytes).getInt8();
}
//将字节数组转成无符号的8位整型，大端字节序
function toUint8(bytes) {
    return getView(bytes).getUint8();
}
//将字节数组转成有符号的16位整型，大端字节序
function toInt16(bytes) {
    return getView(bytes).getInt16();
}
//将字节数组转成无符号的16位整型，大端字节序
function toUint16(bytes) {
    return getView(bytes).getUint16();
}
//将字节数组转成有符号的32位整型，大端字节序
function toInt32(bytes) {
    return getView(bytes).getInt32();
}
//将字节数组转成无符号的32位整型，大端字节序
function toUint32(bytes) {
    return getView(bytes).getUint32();
}
//将字节数组转成32位浮点型，大端字节序
function toFloat32(bytes) {
    return getView(bytes).getFloat32();
}
//将字节数组转成64位浮点型，大端字节序
function toFloat64(bytes) {
    return getView(bytes).getFloat64();
}

//将数值写入到视图中，获得其字节数组，大端字节序
function getUint8Array(len, setNum) {
    var buffer = new ArrayBuffer(len);  //指定字节长度
    setNum(new DataView(buffer));  //根据不同的类型调用不同的函数来写入数值
    return new Uint8Array(buffer); //创建一个字节数组，从缓存中拿取数据
}
//得到一个8位有符号整型的字节数组，大端字节序
function getInt8Bytes(num) {
    return getUint8Array(1, function (view) { view.setInt8(0, num); })
}
//得到一个8位无符号整型的字节数组，大端字节序
function getUint8Bytes(num) {
    return getUint8Array(1, function (view) { view.setUint8(0, num); })
}
//得到一个16位有符号整型的字节数组，大端字节序
function getInt16Bytes(num) {
    return getUint8Array(2, function (view) { view.setInt16(0, num); })
}
//得到一个16位无符号整型的字节数组，大端字节序
function getUint16Bytes(num) {
    return getUint8Array(2, function (view) { view.setUint16(0, num); })
}
//得到一个32位有符号整型的字节数组，大端字节序
function getInt32Bytes(num) {
    return getUint8Array(4, function (view) { view.setInt32(0, num); })
}
//得到一个32位无符号整型的字节数组，大端字节序
function getUint32Bytes(num) {
    return getUint8Array(4, function (view) { view.setUint32(0, num); })
}
//得到一个32位浮点型的字节数组，大端字节序
function getFloat32Bytes(num) {
    return getUint8Array(4, function (view) { view.setFloat32(0, num); })
}
//得到一个64位浮点型的字节数组，大端字节序
function getFloat64Bytes(num) {
    return getUint8Array(8, function (view) { view.setFloat64(0, num); })
}
