$(function () {
    $(".Apply").click(function () {
        $(".cancel").show();
        $(".theme-popover-mask").show();
    });
    $(".btn").click(function () {
        $(".cancel").hide();
        $(".theme-popover-mask").hide();
    });
    $("#apply").click(function () {
        $(".cancel").hide();
        $(".theme-popover-mask").hide();
        $('.false').show().delay(3000).hide(0);
    });
    //获得文本框对象
    var t = $(".num");
    //数量增加操作
    $("#plus").click(function () {
        t.val(parseInt(t.val()) + 1);
        if (parseInt(t.val()) != 1) {
            $('#reduce').attr('disabled', false);
        }
        setTotal();
    });
    //数量减少操作
    $("#reduce").click(function () {
        if (parseInt(t.val()) > 1) {
            t.val(parseInt(t.val()) - 1);
            setTotal();
//                    $('#reduce').attr('disabled', true);
        }
//                if (parseInt(t.val()) == 0) {
//                    return false;
////                    $('#reduce').attr('disabled', true);
//                }
    });
    function setTotal() {
        $("#red").html("<a style='color: red'>￥</a>"+(parseInt(t.val()) *99).toFixed(2));//toFixed()是保留小数点的函数
    }
    setTotal();
})