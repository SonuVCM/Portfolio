const btnSend = document.getElementById('btnSend');
const uname = document.getElementById('userName');
const uemail = document.getElementById('userEmail');
const usub = document.getElementById('subject');
const umass = document.getElementById('message');


function handClick(){
    if(uname.value==""||uemail.value==""||usub.value==""||umass.value==""){
        alert("Please Enter All Fields");
    }
    else{
        alert("Message Send Successfully");
        uname.value="";
        uemail.value="";
        usub.value="";
        umass.value="";
    }
}