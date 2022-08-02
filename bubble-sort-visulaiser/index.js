const barnos=document.querySelector('.barnos');
const sort=document.querySelector('.sort');
const barshow=document.querySelector('.bars')
const container=document.querySelector('.container');

let res=[],pos=0;
let x;

barshow.addEventListener("click", showBars);
sort.addEventListener("click",sortNow);

function showBars(){
    x = barnos.value;
    console.log(x)
    while(x>0){
        const bar=document.createElement("div");
        container.appendChild(bar);
        bar.classList.add("barSort");        
        bar.style.width='5px';
        let h=(Math.random()*50);
        bar.style.height = h.toString() + 'vh';
        res[pos]=h;
        pos++;
        bar.style.background='green';
        bar.style.margin='2px';
        x--;
    }
     barnos.value="";
}

function sortNow(){    
    // for(var i=0;i<res.length;i++){
    //     for(var j=0;j<(res.length-i-1);j++){            
    //         var ele1=document.getElementsByClassName('barSort')[j];
    //         var ele2=document.getElementsByClassName('barSort')[j+1];
    //         ele1.style.background="#ffcccb";
    //         ele2.style.background="#ffcccb";
    //         ele1.style.transition = '0.5s';
    //         ele2.style.transition = '0.5s';
    //         if(ele1.style.height > ele2.style.height){
    //             var temp=ele1.style.height;
    //             ele1.style.height=ele2.style.height;
    //             ele2.style.height=temp;
    //         }            
    //     }
    //     document.getElementsByClassName('barSort')[res.length-i-1].style.background="purple";
    //     document.getElementsByClassName('barSort')[res.length-i-1].style.transition='1s';
    // }

    for(var i=0;i<res.length;i++){
        for(var j=0;j<(res.length-i-1);j++){
            console.log(ele1);
            if(res[j] > res[j+1]){
                var temp=res[j];
                res[j]=res[j+1];
                res[j+1]=temp;
            }            
        }
    }

    for(var i=0;i<res.length;i++){
        var ele1=document.getElementsByClassName('barSort')[i];
        ele1.style.height=res[i].toString() + 'vh';
        ele1.style.background = "purple";
        ele1.style.transition = '1s'
    }


}

