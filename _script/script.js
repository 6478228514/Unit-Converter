var butn1=document.getElementById("butn1");
var butn2=document.getElementById("butn2");
var butn3=document.getElementById("butn3");
var butn4=document.getElementById("butn4");
var butn5=document.getElementById("butn5");
var butn6=document.getElementById("butn6");
var butn7=document.getElementById("butn7");
var butn8=document.getElementById("butn8");
var txt=document.getElementById("txt");
var ans=document.getElementById("ans");
var clear=document.getElementById("clear");

butn1.onclick=function()
{
    var num=txt.value;
    var r=(num/2.54).toFixed(2); 
    ans.style.color="teal";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" Centimeter= "+r+" inches";
    
}
butn2.onclick=function()
{
    var num=txt.value;
    var r=(num*0.0254).toFixed(2); 
    ans.style.color=" #1974D2";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" inches= "+r+" meter";
   
}
butn3.onclick=function()
{
    var num=txt.value;
    var r=(num/100).toFixed(2); 
    ans.style.color="#5FFB17 ";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" centimeter= "+r+" meter";
   
}
butn4.onclick=function()
{
    var num=txt.value;
    var r=(num*3.2808399).toFixed(2); 
    ans.style.color="#E0B0FF";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" meter= "+r+" feet";
   
}
butn5.onclick=function()
{
    var num=txt.value;
    var r=(num*2.54).toFixed(2); 
    ans.style.color="#00FFFF";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" inches= "+r+" centimeter";
   
}
butn6.onclick=function()
{
    var num=txt.value;
    var r=(num*39.3700787).toFixed(2); 
    ans.style.color="#8A865D";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" meter= "+r+" inches";
   
}
butn7.onclick=function()
{
    var num=txt.value;
    var r=(num*100).toFixed(2); 
    ans.style.color="#000000";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" meter= "+r+" centimeter";
   
}

butn8.onclick=function()
{
    var num=txt.value;
    var r=(num*0.3048).toFixed(2); 
    ans.style.color="#614051";
    ans.style.border="thick solid black";
    ans.innerHTML=num+" feet= "+r+" meter";
   
}
clear.onclick=function()
{
    txt.value="";
    ans.innerHTML="";
    ans.style.border="";
    txt.focus();
}