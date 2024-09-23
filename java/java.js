'use strict';
//define variable to use
const form = document.querySelector('.form-style');
const info = document.querySelector('.info');
const btn = document.querySelector('.moveTop');
let show = 1;
let show1 = 1;
let show2 = 1;
let show3 = 1;
let show4 = 1;
let show5 = 1;

function handleMove() {
  if(window.scrollY > 800) {
    btn.style.opacity = '1'
  }else {
    btn.style.opacity = '0'
  }
}
window.addEventListener('scroll', handleMove);

function checkvalidemail() {
const error = document.getElementById('form-description');
const text = document.getElementById('email').value;
//check invalid character 
const checkvalue = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const check =checkvalue.test(text);

// const info = document.querySelector('.info');
console.log(check);
// const form = document.querySelector('.form-style');
// check email 
 if(check) {
    form.style.display = 'none';
    info.style.display = 'block';
     error.innerHTML='';
 } else {
     error.innerHTML='please type correct font 📄'; 
     error.style.color = 'red';
 }  
};
//show in4 block if mail is valid
   const hide = document.querySelector('.hide');
   hide.addEventListener('click', function(){
    form.style.display = 'block';
    info.style.display = 'none';
 });
 //1
//view more display and function

function handleonmouseover(signin){ if(show==1) {
   const viewmore = signin.querySelector('.view-more');
   viewmore.style.display = 'inline-block';
}
}
function handleonmouseout(signin){
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'none';
 }
//show content 
function view_more(signin) {
  const parentsignin = signin.closest('.jb')
  const soncontent =  parentsignin.querySelectorAll('.soncontent');
  soncontent.forEach(signin =>{
    signin.style.display ='block';
    show = 0;
    
});
}
//view less display and function
function viewless(signin) { 
    const parentsignin = signin.closest('.jb')
    const soncontent =  parentsignin.querySelectorAll('.soncontent');
    soncontent.forEach(signin =>{
      signin.style.display ='none';
      show = 1;
  });
  }
  //2
  function handleonmouseover1(signin){ if(show1==1) {
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
 }
 }
 function handleonmouseout1(signin){
     const viewmore = signin.querySelector('.view-more');
     viewmore.style.display = 'none';
  }
 //show content 
 function view_more1(signin) {
   const parentsignin = signin.closest('.jb')
   const soncontent =  parentsignin.querySelectorAll('.soncontent');
   soncontent.forEach(signin =>{
     signin.style.display ='block';
     show1 = 0;
     
 });
 }
 function viewless1(signin) { 
     const parentsignin = signin.closest('.jb')
     const soncontent =  parentsignin.querySelectorAll('.soncontent');
     soncontent.forEach(signin =>{
       signin.style.display ='none';
       show1 = 1;
   });
   }
  //3
  function handleonmouseover2(signin){ if(show2==1) {
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
 }
 }
 function handleonmouseout2(signin){
     const viewmore = signin.querySelector('.view-more');
     viewmore.style.display = 'none';
  }
 //show content 
 function view_more2(signin) {
   const parentsignin = signin.closest('.jb')
   const soncontent =  parentsignin.querySelectorAll('.soncontent');
   soncontent.forEach(signin =>{
     signin.style.display ='block';
     show2 = 0;
     
 });
 }
 function viewless2(signin) { 
     const parentsignin = signin.closest('.jb')
     const soncontent =  parentsignin.querySelectorAll('.soncontent');
     soncontent.forEach(signin =>{
       signin.style.display ='none';
       show2 = 1;
   });
   } 
   //4
   function handleonmouseover3(signin){ if(show3==1) {
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
 }
 }
 function handleonmouseout3(signin){
     const viewmore = signin.querySelector('.view-more');
     viewmore.style.display = 'none';
  }
 //show content 
 function view_more3(signin) {
   const parentsignin = signin.closest('.jb')
   const soncontent =  parentsignin.querySelectorAll('.soncontent');
   soncontent.forEach(signin =>{
     signin.style.display ='block';
     show3 = 0;
     
 });
 }
 function viewless3(signin) { 
     const parentsignin = signin.closest('.jb')
     const soncontent =  parentsignin.querySelectorAll('.soncontent');
     soncontent.forEach(signin =>{
       signin.style.display ='none';
       show3 = 1;
   });
   }
   //5
   function handleonmouseover4(signin){ if(show4==1) {
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
 }
 }
 function handleonmouseout4(signin){
     const viewmore = signin.querySelector('.view-more');
     viewmore.style.display = 'none';
  }
 //show content 
 function view_more4(signin) {
   const parentsignin = signin.closest('.jb')
   const soncontent =  parentsignin.querySelectorAll('.soncontent');
   soncontent.forEach(signin =>{
     signin.style.display ='block';
     show4 = 0;
     
 });
 }
 function viewless4(signin) { 
     const parentsignin = signin.closest('.jb')
     const soncontent =  parentsignin.querySelectorAll('.soncontent');
     soncontent.forEach(signin =>{
       signin.style.display ='none';
       show4 = 1;
   });
   }
   //6
   function handleonmouseover5(signin){ if(show5==1) {
    const viewmore = signin.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
 }
 }
 function handleonmouseout5(signin){
     const viewmore = signin.querySelector('.view-more');
     viewmore.style.display = 'none';
  }
 //show content 
 function view_more5(signin) {
   const parentsignin = signin.closest('.jb')
   const soncontent =  parentsignin.querySelectorAll('.soncontent');
   soncontent.forEach(signin =>{
     signin.style.display ='block';
     show5 = 0;
     
 });
 }
 function viewless5(signin) { 
     const parentsignin = signin.closest('.jb')
     const soncontent =  parentsignin.querySelectorAll('.soncontent');
     soncontent.forEach(signin =>{
       signin.style.display ='none';
       show5 = 1;
   });}
 

 btn.addEventListener('click', function(){
   window.scroll({top:200, behavior: "smooth"});
 })
