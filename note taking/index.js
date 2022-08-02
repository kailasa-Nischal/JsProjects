const button=document.querySelector('button');
const beforepara=document.querySelector('.before');
const note=document.querySelector('.note');
const jsContainer=document.querySelector('.jsContainer');
const whole=document.querySelector('body');

let noteno=1;

button.addEventListener('click' , function(){
    if(note.value==''){return;}    
    beforepara.remove();
    const oneBlock=document.createElement('div');
    jsContainer.appendChild(oneBlock);
    const notehead=document.createElement('p');
    oneBlock.appendChild(notehead);
    notehead.innerHTML="Note "+noteno;
    noteno++;
    const notecontent=document.createElement('p');
    oneBlock.appendChild(notecontent);
    const temp=note.value;   
    if(temp.length<100)  notecontent.innerHTML=temp;
    else    notecontent.innerHTML=temp.substr(0,50)+'.....';
    note.value='';   
    const viewDetail=document.createElement('button');
    oneBlock.appendChild(viewDetail);
    viewDetail.innerHTML="View Detail"
    viewDetail.style.width='100px'
    viewDetail.style.height='50px'
    viewDetail.style.color='white'
    viewDetail.style.backgroundColor='Blue'
    viewDetail.addEventListener('click',function(){
        whole.style.zIndex=0;        
        const popUp=document.createElement('div');
        whole.appendChild(popUp);
        popUp.style.position='absolute'
        popUp.style.left='30%'
        popUp.style.top='40%'
        popUp.style.zIndex=1
        popUp.style.backgroundColor='White'
        popUp.style.width='40%'
        popUp.style.height='fit-content'
        popUp.style.padding='30px'        
        const cross=document.createElement('p');
        popUp.appendChild(cross);
        cross.innerHTML='X'
        cross.style.position='absolute'
        cross.style.left='3%'
        cross.style.top='2%'
        cross.style.color='lightGrey'    
        cross.style.cursor='pointer'    
        const finalNote=document.createElement('p');
        popUp.appendChild(finalNote);
        finalNote.innerHTML=temp 
        popUp.style.border='4px solid lightGrey'  
        cross.addEventListener('click', function(){
            popUp.remove();
        })     
    })
    oneBlock.style.border='2px solid #aaa'
    oneBlock.style.width='300px'
    oneBlock.style.height='20%'
    oneBlock.style.paddingLeft='20px'
    oneBlock.style.paddingBottom='20px'
    oneBlock.style.display='inline-block'
    oneBlock.style.margin='30px'
})

// 1--view detail button  2--oneBlock styling