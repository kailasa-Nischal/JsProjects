let idx=0;
const audioElement=new Audio('1.mp3');
const MasterPlay=document.getElementById('masterPlay');
const myProgressBar=document.getElementById('myProgressBar');
const songs=[
    {songName:"NanneNanne",filePath:"resources\1.mp3"},
    {songName:"Chiru Chiru",filePath:"resources\2.mp3"},
    {songName:"NinnuChuse",filePath:"resources\3.mp3"},
    {songName:"NuvveNuvve",filePath:"resources\4.mp3"}
]


MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        var playPromise = audioElement.play();
        if (playPromise !== undefined) {
        playPromise.then(function() {
            
        }).catch(function(error) {

        });
        
}
        console.log('hi');
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('hi')
})
