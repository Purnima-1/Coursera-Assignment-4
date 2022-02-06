function printName(arr){
    let jArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i][0] === 'j' || arr[i][0] ==='J'){
        jArr.push(`Goodbye ${arr[i]}`)
    }
    else jArr.push(`Hello ${arr[i]}`)
}
return jArr;
}
console.log(printName(["Jay", "Peter", "john", "Parker", "Jospeh"]));