
/**
 * @fileoverview 通用的测试代码
 *
 * @supported 
 */
var body = $response.body;
const url = $request.url;
/^([\s\S]*:\/\/[^\/]+\/)/.test(url);
const host = RegExp.$1;

/^(?:[\s\S]*:\/\/[^\/]+\/)(.*)/.test(url);
const pathname = RegExp.$1;

$notify(host,pathname,body);
console.log(body);
body = JSON.stringify(obj);
$done(body);
