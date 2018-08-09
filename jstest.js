var firstName = ["Smokey", "Waffles", "Simba"];
var lastName = ["Johnson", "Yun", "Kevin"];
var combinedNames = [];
for (var i = 0 ; i < firstName.length; i++){
    for (var x = 0; i < lastName.length; i++){
        combinedNames.push(firstName[i] + lastName[x]);
        console.log(combinedNames);
        alert(combinedNames);
    }
}