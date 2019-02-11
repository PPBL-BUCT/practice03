var count = 1;
$(function () {
    $('#change').click(function () {
        $('#times').text("点击了"+count+"次");
        count = count+1;
    })
    $('#reset').click(function () {
        count=1;
        $('#times').text('已经重置');
        setTimeout(function () {
            $('#times').text('点击了0次');
        },500)
    })
});

//----------- js实现--------------
// window.onload = function () {
//
//     document.getElementById('change').onclick= function () {
//         document.getElementById('times').innerHTML=count;
//         count = count+1;
//     }
// }

