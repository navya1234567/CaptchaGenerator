let captcha;
let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let status= document.getElementById("status");

generateCaptcha=()=>{
    let first=Math.floor((Math.random()*10));
    let second=alphabets[Math.floor((Math.random()*alphabets.length))];
    let third=Math.floor((Math.random()*10));
    let fourth=alphabets[Math.floor((Math.random()*alphabets.length))];
    let fifth=Math.floor((Math.random()*10));
    let sixth=alphabets[Math.floor((Math.random()*alphabets.length))];
    
    captcha=first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
    document.getElementById("generated-captcha").value = captcha;
    status.innerText="Captcha Generator";
}

checkCaptcha=()=>{
    let input=document.getElementById("entered-captcha").value;
    if(input==captcha){
        status.innerText="Matched!";
    }
    else{
        status.innerText="please try again!";
    }
}