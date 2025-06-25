//create a business name generator by combining list of adjectives and shop name and another word

//Crazy
//amazing
//fire

//shopname
//engine
//foods
//garments

//another word:
//bros
//limited
//hub


let rand= Math.random()
let first,second,third;

if(rand<0.33)
{
   first="Crazy"
}
else if(rand<0.66 && rand>=0.33)
{
   first="Amazing"
}
else
{
   first="Fire"
}

if(rand<0.33)
{
   second="engine"
}
else if(rand<0.66 && rand>=0.33)
{
   second="foods"
}
else
{
   second="garment"
}

//
if(rand<0.33) 
{
   third="bros"
}
else if(rand<0.66 && rand>=0.33)
{
   third="limited"
}
else
{
   third="hub"
}

console.log(`${first} ${second} ${third}  `)

