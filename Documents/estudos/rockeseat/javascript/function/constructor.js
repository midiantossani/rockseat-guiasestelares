// function constructor

function person (name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}

const midian = new person("Midian")
const chris = new person("Chris")
console.log(midian)
console.log(chris)