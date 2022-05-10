const arr=[{"firstname":"soudamini","lastname":"malik","age":21},
{"firstname}":"donald","lastname":"trump","age":75},{"firstname":"katrina","lastname":"kaif","age":21}]
c=0
c1=0
c2=0
for(var i=0;i<arr.length;i++){
    // console.log(arr[i])
    for(var j=0;j<arr.length;j++){
        // console.log(arr[i]["age"]);
        var age1=arr[i]["age"]
        if (arr[i]["age"]==age1){
            c+=1
        }
    }
    console.log(arr[i]["age"],"=",c)
}
