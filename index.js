let canvas=document.querySelector('#canvas');
let context=canvas.getContext("2d");
let video=document.querySelector('#video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
        video.srcObject=stream;
        video.play();
    });
}

document.querySelector('#snap').addEventListener('click',()=>{
    context.drawImage(video,0,0,640,480)
});