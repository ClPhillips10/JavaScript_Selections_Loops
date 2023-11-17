console.log("Hello World!\n==========\n");
var i = 0;
while(i < 2){
for(let num =0;num < 100;num++){
    if(num % 2 != 0){
        console.log(num);
        
    }
    else{
        continue;
    }
    i++;
}
}
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
var whileVar = 0;
do{
for(let i =0; i < 100; i++){
    if (i % 3 == 0 && i % 5 ==0){
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0){
        console.log("FIZZ");
    }
    else if(i % 5 == 0){
        console.log("BUZZ");
    }
    else
    {
        console.log(i);
    }
    
}
}
while (i < 5)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
