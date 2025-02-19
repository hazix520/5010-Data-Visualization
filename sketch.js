let counter = 0
let target = 0
let dest = 0

function preload()
{
  dexFile = loadJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
}

function setup() {
  createCanvas(400, 400);
  background(255)
}

function draw() {
background(255)
  //let dir = moveDir()
  
  const dex = Object.values(dexFile.pokemon)
  counter++
  
  if(moveDir() == 1 && target < 0){
    target += 5
  }
  else if (moveDir() == -1 && target > -475){
    target -= 5
  }
  console.log(target)
  
  for (i = 0; i < 9; i++){
    //pic = createImage(, )
    //console.log(pic)
    fill(0)
    text(dex[i].name,i*100 + target, 90 + i)
    pic = createImg(dex[i].img)
    image(pic, i*100 + target, 100, 55, 55)
    text(dex[i].num, i*100 + target +20, 200 + i)
    text(dex[i].type, i*100 + target +20, 250 + i)
  }

}

function moveDir(){
  if(mouseX > 0 && mouseX < 150){
    return 1
  }
  else if(mouseX > 250 && mouseX < 400){
    return -1
  }
  else{
    return 0
  }
  
}