/**
 * @fileoverview bilibili去广告
 *
 * @supported 
 */

//hostname = *.bilibili.com
//^https?:\/\/app.bilibili.com\/x\/v2\/account\/myinfo url script-response-body bilibili.js

var body = $response.body;
var obj = JSON.parse(body);

obj["data"]["vip"]["status"] = 1;

body = JSON.stringify(obj);
$done(body);

/*
Thor
包括域名：app.bilibili.com
包括关键字：/x/v2/account/myinfo
响应消息体回传前：^@rsp.bodyText ""status"[\s\s]+:[\s\s]+\d" ""status" : 1"
*/