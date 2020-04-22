/**
 * @fileoverview 腾迅视频HD去广告，手机版貌似请求不一样
 *
 * @supported 
 */

//hostname = *.qq.com
//^https?:\/\/lives.l.qq.com\/livemsg url script-response-body tenvideo.js

var body = $response.body;
var obj = JSON.parse(body);

obj["adList"]["item"] = [];

body = JSON.stringify(obj);
$done(body);

/*
Thor
包括域名：lives.l.qq.com
包括关键字：/livemsg
响应消息体回传前：^@rsp.bodyText ""item":" ""item":[],"ponyma":"
*/