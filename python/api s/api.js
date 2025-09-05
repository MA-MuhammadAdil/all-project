
let URl  ="https://dog.ceo/api/breeds/image/random"
 

const getImg = async () =>{
console.log("geting data ....")
const response = await fetch(URl)
console.log(response)
}