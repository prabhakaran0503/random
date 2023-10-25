let n=prompt("enter the value");

let fun=function(a){
    let random=Math.floor(Math.random()*10);
    console.log(random);
    if(a==random){
        document.write("Good Work")
    }
    else{
        document.write("Not Matched")
    }
}
fun(n)
