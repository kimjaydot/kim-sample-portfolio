var firstName = ["Smokey", "Waffles", "Simba"];
var lastName = ["Johnson", "Yun", "Kevin"];
var combinedNames = [];
for(var i = 0 ; firstName.length; i++){
    for(var x = 0; lastName.length; i++){
        combinedNames.push([i] + [x]);
        console.log(combinedNames);
    }
}