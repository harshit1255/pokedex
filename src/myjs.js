
console.log('harshit')
fetch(' https://pokeapi.co/api/v2/pokemon/charizard').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err));