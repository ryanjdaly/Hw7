/* This file intentionally left blank. */
downx = 0;
downy = 0;
upx = 0;
upy = 0;
$("#gestureArea").mousedown(function(event){
    $("#gestureResult").text("mouse down")
    downx = event.pageX
})

$("#gestureArea").mouseup(function(){
    $("#gestureResult").text("mouse up")
    upx = event.pageX
    if(upx > downx)
    {
        $("#gestureResult").text("swipe right")
    }
    else if(upx < downx)
    {
        $("#gestureResult").text("swipe left")
    }
    else if(upx == downx)
    {
        $("#gestureResult").text("mouse up")
    }
})