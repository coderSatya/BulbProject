/*const turnOn = ()=>{
    let imgOb = document.getElementById("bulb");
    imgOb.setAttribute("src","on.jpg");
};

const turnOff = ()=>{
    let imgOb = document.getElementById("bulb");
    imgOb.setAttribute("src","off.png");
}*/

const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const bulb = document.querySelector('#bulb')
const toggle = document.querySelector('#toggle');

turnOn.addEventListener('click',function(){
  bulb.setAttribute('src','on.jpg');
})

turnOff.addEventListener('click',function(){
    bulb.setAttribute('src','off.png');
  })

  toggle.addEventListener('click',function(){
   let srcValue = bulb.getAttribute("src");
   if(srcValue=='off.png'){
    bulb.setAttribute('src','on.jpg');
    toggle.innerHTML = "ON"
   }else{
    bulb.setAttribute('src','off.png');
    toggle.innerHTML ="OFF"
   }

    
  })