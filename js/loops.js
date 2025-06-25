console.log("Om sai I a a tutorial on loops")

let a=1;
for (let i = 0; i< 20; i++) {
    console.log(a+i); 
}

let obj={
    name:"Harry",
    role:"student"

}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key,element)

        
    }
}
 
for (const c of "PURU") {
    console.log(c)
}

let i=0;
while(i<6){
    console.log(i);
    i++;
}