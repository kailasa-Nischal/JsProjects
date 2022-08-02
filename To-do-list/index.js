const submit=document.querySelector('button');
const text=document.querySelector('.write');
const clear=document.querySelector('.clear');


const parentAns=document.querySelector('.parentAns');
const todoContainer=document.querySelector('.jscontainer');
parentAns.appendChild(todoContainer);
todoContainer.style.width='70%';  

let listnum=1;

submit.addEventListener('click' , addNew);
clear.addEventListener('click', clearAll);

 $('#form').submit(function (e) {
      e.preventDefault();
  });
  
function addNew(){      
    let num=document.createElement('p');
    todoContainer.appendChild(num);
    num.style.display='inline';
    num.style.marginBottom='10px'
    num.innerHTML=listnum+'. ';
    num.style.marginRight='1%'
    listnum++;    
    const x=text.value
    let task=document.createElement('p');
    todoContainer.appendChild(task);
    task.style.display='inline';
    task.style.marginBottom='10px'
    task.style.marginRight='1.2%'
    task.innerHTML=x
    text.value=''
    let cross=document.createElement('button');
    todoContainer.appendChild(cross);
    cross.style.display='inline';
    cross.innerHTML='X'
    cross.style.marginBottom='10px'
    let done=document.createElement('button');
    todoContainer.appendChild(done);
    done.innerHTML='Done';
    done.style.display='inline-block';  
    done.style.marginBottom='10px'  
    let nxt=document.createElement('br');
    todoContainer.appendChild(nxt);
    done.addEventListener('click',function(){
        todoContainer.removeChild(num);
        todoContainer.removeChild(task);
        todoContainer.removeChild(cross);
        todoContainer.removeChild(done);
    })
    done.addEventListener('click',function(){
        todoContainer.removeChild(num);
        todoContainer.removeChild(task);
        todoContainer.removeChild(cross);
        todoContainer.removeChild(done);
    })
}

function clearAll(){
    location.reload();
}