async function fun1(){
    console.log("a");
    console.log("b");

    await new Promise((resolve,reject)=>{
        console.log("c");
        resolve();
    },1000);

    await new Promise((resolve,reject)=>{
        console.log("d")
        resolve();
    },0);
    console.log("e");
}
fun1();
