function Validate(){
    var x=document.getElementById("name").value;
   
    if(!isNaN(x))
   {
       document.getElementById("user").innerHTML="Numbers not allowed";
   }
   else{
       document.getElementById("user").innerHTML="";
   }
   if(x=="")
   {
       document.getElementById("user").innerHTML="Username empty";
   }
    var a=document.getElementById("email").value;
   
   var z=false;
   for(let i=0;i<a.length;i++)
   {
       if(a.charAt(i)=='@')
       {
          z=true;
       }
   }
   if(z==true)
   {
    document.getElementById("mail").innerHTML="";
   }
   else{
       document.getElementById("mail").innerHTML="Email not in correct format";
   }
   if(a.lastIndexOf(".")<a.lastIndexOf("@"))
   {
    document.getElementById("mail").innerHTML="Email not in correct format";
   }
   if(a=="")
   {
       document.getElementById("mail").innerHTML="Email empty";
   }

   var b=document.getElementById("phno").value;

   if(b.charAt(0)!=9 && b.charAt(0)!=8)
   {
    document.getElementById("ph").innerHTML="Phone number incorrect";
   }
   else if(b.length==10)
   {
    document.getElementById("ph").innerHTML="";
   }
   else if(isNaN(b))
   {
       document.getElementById("ph").innerHTML="Phone number incorrect";
   }
   else{
    document.getElementById("ph").innerHTML="Phone number incorrect";
   }
   if(b=="")
   {
       document.getElementById("ph").innerHTML="Number empty";
   }
   var c=document.getElementById("password").value;
   if(c=="")
   {
       document.getElementById("pass").innerHTML="Password empty";
   }
   else if(c.length<6 || c.length>12)
   {
       document.getElementById("pass").innerHTML="password should be min 6 and max 12"
   }
   else{
       document.getElementById("pass").innerHTML="";
   }

}