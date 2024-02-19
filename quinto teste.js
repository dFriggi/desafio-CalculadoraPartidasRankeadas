let userName = getFirstName("Davi Gonçalves Friggi")

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}
console.log(userName)