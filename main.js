async function fetchInfo(){
    /*get name*/
    const address1 ="https://pokeapi.co/api/v2/pokemon/"+document.getElementById("inputNumber").value+"/"
    const obj1= await fetch(address1)
    const objJson = await (obj1).json()
    const pokeName= objJson.name
    document.getElementById("nombre").innerHTML=pokeName.toString().toUpperCase()
    /*get sprite*/
    const obj2= await fetch(address1)
    const objJson2 = await (obj2).json()
    const pokeSprite= objJson.sprites.front_default
    document.getElementById("pokemon").src=pokeSprite
    /*get description*/
    const address= "https://pokeapi.co/api/v2/ability/"+document.getElementById("inputNumber").value+"/"
    const pokeDes= await fetch(address)
    const pokeDesJSON = await pokeDes.json()
    const pokeEffect=pokeDesJSON.effect_entries[1].effect
    
    document.getElementById("des").innerHTML=pokeEffect
}

window.onload=function(){
    document.getElementById("inputNumber").value=25;
}