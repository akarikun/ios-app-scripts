//header及body中的敏感数据已经更改,需要自己抓包
//注意:Thor抓不到该请求,可以多试试其它app抓取如:Stream
//频繁请求后接口会返回{"code":"N"},但是过一段时间后请求后返回数据正常

function query(){
    return new Promise((resolve)=>{
        $http.request({
            method: "POST",
            url: "https://m.client.10010.com/mobileService/home/queryUserInfoSix.htm?version=iphone_c@6.002&desmobiel=13100001111&showType=3",
            header: {
                'Cookie':'a_token=eyJhbGciOiJIUzUxMklInR5cCI6IkpXVCJ9.eyJleHAiOgvddgdMjEzOTYsInRva2VuIjp7ImxvZ2luVXNlciI6IjEzMTY3MDA3NzgxIiwicmFulG9tU3RyIjoieWgwMTc4ZjkxNTU4NzE2NTk2In0sImlhdCI6MTU1ODcxNjU5Nn0.P-4uJqYf2ybR10GjCPsYsDn96zt23rwt_WCJdI4nxnrRN_PbcpQxhgyy609DK45Ey7__YGv6O3LXg3Al95m8lA; c_id=f3b56756025318f77daf488b0ae597e7b77e30720935b6cae0b458a3d987ec37; c_mobile=13100001111; c_version=iphone_c@6.002; d_deviceCode=69A84AD4-2927-49B5-84D1-BE588CE5DF79; enc_acc=oPAb7Cxa4FWtkEKiwhPJ8u38AanE/p8iGxcFeAymddziI6w0aUBUK8Q3J4sdRWREq7AqGhvul/MbcVx6nhSC/vmzSd9ZhOhvaV/9YRMoNb6uIe2lVXvoQkXh8S8gTMDY28IvWDkVXNNeauFr7jH377SIBXIsjYfWMoPucewjFCM=; invalid_at=406cb094921a475313d895d6f9df4bace86ce554630e162a28d7f69bd7c2d054; login_type=06; random_login=0; t3_token=46d8bb2c0a893dadcf5aea00461e2b0c; third_token=eyJkYXRhIjoiMTMyYzJlNGFmOTFiOWU0ZTRmMmMyMDQwOWVkNWU5NDJiZmU4ZWEwNjdmZDQzZmFjNjU0NDNmYThjZDlkMGNmMDAzYzcwMDJiMDVjNWQ3OWI2NTgzNTA1OTExZjVlNjQ5YjU1ZTg2ZDhlZDMwNDA0ZjVlMTUxYjE4NjI0NDcxOTEyYmEzNDVmNmVmODkwOWFhMDBjNDFlNmI5MDE0NTMzMCIsInZlcnNpb24iOiIwMCJ9; u_areaCode=310; u_type=11; wo_family=0; quickNews=348d8ae879ed96174edecfdabb48263e; c_sfbm=234g_00; ecs_acc=oPAb7Cxa4FWtkEKiwhPJ8u38AanE/p8iGxcFeAymddziI6w0aUBUK8Q3J4sdRWREq7AqGhvul/MbcVx6nhSC/vmzSd9ZhOhvaV/9YRMoNb6uIe2lVXvoQkXh8S8gTMDY28IvWDkVXNNeauFr7jH377SIBXIsjYfWMoPucewjFCM=; city=031|310; mobileService1=LLSNcygdzxbBfY21zVqTvtyvZxCgW29G2GFGYyqyrWzSt51jSqN1!518778310; mobileServiceOther=f953799251ac13a6d294a440639454b8; on_info=b7ebdc40ed1791ad2f844a90b2dc06c5; cw_mutual=7064d003eb3c8934e769e430ecf3d64a475829bd5337c70da3197983a0c0aaf8455c7661bb6a2bb55b7218b1b80c52fe4407c7ab7ca2de468fe9e07459d5c671; ecs_acc=oPAb7Cxa4FWtkEKiwhPJ8u38AanE/p8iGxcFeAymddziI6w0aUBUK8Q3J4sdRWREq7AqGhvul/MbcVx6nhSC/vmzSd9ZhOhvaV/9YRMoNb6uIe2lVXvoQkXh8S8gTMDY28IvWDkVXNNeauFr7jH377SIBXIsjYfWMoPucewjFCM=; ecs_token=eyJkYXRhIjoiNWVjMzc1MzNjZDhiYmJhZTEwYWQ1NDMzYjIyNDJkODc2M2Q4ZWU2M2U4ZjAxYTk5OGEzNTQ2NDcwMDFmNzI3NDg5ZjQxYTY0YzU4ZjljMmQ1MzY3OWY1YjczNTc2NzkzZDcwMTlhOGE2YzZmODY3ZWM5Y2QyMWNmOGJmZWExZjZiM2Q3YzYzMmJkODZmNTVkMDMyYjgwMmE2MGE1YjQwNjVhYWIyZjE1MDJjMjMxMDBlYzU4ZGIzNTQ1MDQ4MDE2IiwidmVyc2lvbiI6IjAwIn0=; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzE2NzAwNzc4MSIsInBybyI6IjAzMSIsImNpdHkiOiIzMTAiLCJpZCI6IjRhMmNkY2E3MDQ5MjlhY2Q0NTVjZmM4NTAwMGZhY2U1In0.vLckRx652G53dDf-4Bk5-UTDuhnz70b7dmKrhhqFG5A; login_type=06; u_account=13100001111; on_token=bc8750a9dea420a940b62c9e06a15330; route=4409263098d857a3cc010d262182161c; mobileServiceAll=6314844c26f8a3d3f9eccaf19638c3; WT_FPC=id=21fa33824a2b5ae9223d558591111298:lv=1558591280121:ss=1558591111298; mallcity=31|310; gipgeo=71|710',
                'Host':'m.client.10010.com',
                'Accept':'*/*',
                'Accept-Language':'zh-cn',
                'Accept-Encoding':'br, gzip, deflate',
                'User-Agent':'ChinaUnicom4.x/134 CFNetwork/978.0.7 Darwin/18.5.0',
                'Connection':'keep-alive'
            },
            body: {},
            handler: function(resp) {
              resolve(resp.data);
            }
        });
    })
}

function layout(){
    
    $ui.render({
        views: [
           { 
               type: "spinner",//活动指示器
               props: {
                 loading: true,
               },
               layout: function(make, view) {
                 make.center.equalTo(view.super)
               }
           },
            {
                type: "view",
                props: {
                // bgcolor: $color("#F00")
                },
                    layout: function(make, view) {
                    make.height.offset(120);
                    // make.width.equalTo(view.super);
                    make.left.equalTo(view.super).offset(10);
                    make.right.equalTo(view.super).offset(-10);
                    make.top.equalTo(view.super).offset(10);
                },
                views:[
                    {
                        type: "label",
                        props: {
                            id:'lbl_title',
                            font:$font(20),
                            // bgcolor:$color('#ccc'),
                            //align: $align.center
                        },
                        layout: function(make, view) {
                            make.height.offset(30);
                            make.width.equalTo(view.super);
                        }
                    },
                    {
                        type:"view",
                        props:{},
                        layout:function(make,view){
                            make.left.equalTo(view.super);
                            make.width.equalTo(view.super);
                            make.top.equalTo($('lbl_title').bottom)
                        },
                        views:[
                            {
                                type: "label",
                                props: {
                                    id:'lbl_1',
                                },
                                layout: function(make, view) {
                                    //make.center.equalTo(view.super)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id:'lbl_2',
                                },
                                layout: function(make, view) {
                                    make.top.equalTo($('lbl_1')).offset(20);
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id:'lbl_3',
                                },
                                layout: function(make, view) {
                                    make.top.equalTo($('lbl_1')).offset(40);
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

async function main(){
    layout();
    let resp = await query();
    // console.log(resp)
    $('spinner').loading = false
     $('lbl_title').text = `中国联通(${resp.flush_date_time})`
     let data = resp.data.dataList;
     let arrData = [];
     for(let i =0;i<data.length;i++){
         var o = data[i];
         arrData.push(`${o.remainTitle} : ${o.number}${o.unit}`);
     }
     $('lbl_1').text=arrData[0];
     $('lbl_2').text=arrData[1];
     $('lbl_3').text=arrData[2];
} 

main();

