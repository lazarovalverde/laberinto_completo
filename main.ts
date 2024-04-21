
//Establecemos la escena. Es lo que vemos en la pantalla. Hay un objeto llamado scene y para cambiar sus propiedades necesitamos poner un punto (scene.)
scene.setBackgroundColor(14)

//Establecemos un mapa o tesela.
tiles.setCurrentTilemap(tilemap`piramide`)


//Establecemos la puntuación
info.setScore(0)
info.setLife(3)

//Creamos nuestro personaje. Será un objeto llamado explorer de tipo sprite

let explorer = sprites.create(img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
`, SpriteKind.Player)
let ultimateclapresionada = "right"
//Colocamos el personaje en el mapa usando la función placeOnTile del objeto tiles
//Dicha función espera que le digamos el exprite y la posición
tiles.placeOnTile(explorer, tiles.getTileLocation(1, 13))
scene.cameraFollowSprite(explorer)

//Control del personaje con mandos/botones
controller.player1.moveSprite(explorer,80,0)

//Necesitamos que salte. Para ello establecemos la gravedad o aceleración hacia abajo. 
//Es hacia abajo la fuerza porque el número es un dato positivo
explorer.ay = 300

//Evento para que nuestro personaje pueda saltar
//Contrarrestaremos la gravedad o en parámetro ay 400
//con la velocidad 
//Cuando pulsamos la tecla A, se desplaza
controller.up.onEvent(ControllerButtonEvent.Pressed,function(){
    
    explorer.vy = explorer.vy - 180;

})
//Animamos al personaje para que haga que parezca que está anadando

controller.right.onEvent(ControllerButtonEvent.Pressed,function(){

    animation.runImageAnimation(explorer,[img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . f f f e e e e e f . .
        f f f e e e e e e e f .
        f f f f e e e e e e e f
        f f f f f e e e 4 e e f
        f f f f e e e 4 4 e e f
        f f f f 4 4 4 4 4 e f f
        f f 4 e 4 f f 4 4 e f .
        f f 4 d 4 d d d d f . .
        . f f f 4 d d b b f . .
        . 4 d d e 4 4 4 e f . .
        . e d d e 1 1 1 1 f . .
        . f e e f 6 6 6 6 f f .
        . f f f f f f f f f f .
        . . f f . . . f f f . .
    `,img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . f f f e e e e e f . .
        f f f e e e e e e e f .
        f f f f e e e e e e e f
        f f f f f e e e 4 e e f
        f f f f e e e 4 4 e e f
        f f f f 4 4 4 4 4 e f f
        f f 4 e 4 f f 4 4 e f .
        . f 4 d 4 d d d d f . .
        . f f f e e d b b f . .
        . . f 4 d d e 4 e f . .
        . . f e d d e 1 1 f . .
        . f f f e e f 6 6 f f .
        . f f f f f f f f f f .
        . . f f . . . f f f . .
    `],100,true)
    ultimateclapresionada = "right"

})
controller.right.onEvent(ControllerButtonEvent.Released, function () {

    animation.runImageAnimation(explorer, [img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . f f f e e e e e f . .
        f f f e e e e e e e f .
        f f f f e e e e e e e f
        f f f f f e e e 4 e e f
        f f f f e e e 4 4 e e f
        f f f f 4 4 4 4 4 e f f
        f f 4 e 4 f f 4 4 e f .
        f f 4 d 4 d d d d f . .
        . f f f 4 d d b b f . .
        . 4 d d e 4 4 4 e f . .
        . e d d e 1 1 1 1 f . .
        . f e e f 6 6 6 6 f f .
        . f f f f f f f f f f .
        . . f f . . . f f f . .
    `], 100, true)
     ultimateclapresionada = "right"

})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {

    animation.runImageAnimation(explorer, [img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . . f e e e e e f f f .
        . f e e e e e e e f f f
        f e e e e e e e f f f f
        f e e 4 e e e f f f f f
        f e e 4 4 e e e f f f f
        f f e 4 4 4 4 4 f f f f
        . f e 4 4 f f 4 e 4 f f
        . . f d d d d 4 d 4 f .
        . . f b b d e e f f f .
        . . f e 4 e d d 4 f . .
        . . f 1 1 e d d e f . .
        . f f 6 6 f e e f f f .
        . f f f f f f f f f f .
        . . f f f . . . f f . .
    `, img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . . f e e e e e f f f .
        . f e e e e e e e f f f
        f e e e e e e e f f f f
        f e e 4 e e e f f f f f
        f e e 4 4 e e e f f f f
        f f e 4 4 4 4 4 f f f f
        . f e 4 4 f f 4 e 4 f f
        . . f d d d d 4 d 4 f f
        . . f b b d d 4 f f f .
        . . f e 4 4 4 e d d 4 .
        . . f 1 1 1 1 e d d e .
        . f f 6 6 6 6 f e e f .
        . f f f f f f f f f f .
        . . f f f . . . f f . .
    `], 100, true)
    ultimateclapresionada = "left"

})

controller.left.onEvent(ControllerButtonEvent.Released, function () {

    animation.runImageAnimation(explorer, [img`
        . . . . . . . . . . . .
        . . . f f f f f f . . .
        . . f e e e e e f f f .
        . f e e e e e e e f f f
        f e e e e e e e f f f f
        f e e 4 e e e f f f f f
        f e e 4 4 e e e f f f f
        f f e 4 4 4 4 4 f f f f
        . f e 4 4 f f 4 e 4 f f
        . . f d d d d 4 d 4 f .
        . . f b b d e e f f f .
        . . f e 4 e d d 4 f . .
        . . f 1 1 e d d e f . .
        . f f 6 6 f e e f f f .
        . f f f f f f f f f f .
        . . f f f . . . f f . .
    `], 100, true)
    ultimateclapresionada = "left"

})

//Lanzamiento de proyectiles

controller.B.onEvent(ControllerButtonEvent.Pressed,function() {

let proyectil = sprites.createProjectileFromSprite(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .........bb.........
    ........cccc........
    ........cccc........
    .........ff.........
    .........bf.........
    .........bb.........
    ........bbbb........
    .......bbbbbb.......
    .......bbbbbb.......
    .......bbbbbb.......
    .......bbbbbc.......
    ........cccc........
    ....................
    ....................
`,explorer,100,0)
proyectil.ay = 200
if (ultimateclapresionada == "left"){
    proyectil.vx = explorer.vx -100
    proyectil.vy = proyectil.vy - 50

} else if (ultimateclapresionada == "right")
{
    proyectil.vx = explorer.vx + 100
    proyectil.vy = proyectil.vy - 50

}

})

//COLISIONES

sprites.onOverlap(SpriteKind.Enemy,SpriteKind.Projectile,function(sprite,otherSprite){

   otherSprite.destroy(effects.disintegrate,300)
    sprite.destroy(effects.disintegrate, 300)
   info.changeScoreBy(1)
})

//https://www.youtube.com/watch?v=u3GVIjvyJiU&t=4s
//CREAMOS LOS ENEMIGOS
//Usamos un bucle for
//For, lo que hace es:
//en el primer campo se pone una variable y su valor inicial
//Aquí let i = 0, pone la variable i a valor 0
// En el segundo campo separado por ; pone i < 8, que quiere decir
// que se ejecutará el código mientras i sea menor que 8
// El tercer parámetro, i++, incrementará el valor de i en 1
// cada vez que se ejecuta lo que está entre llaves {  }
//Por tanto, esto lo que está dentro del for se ejecutará 8 veces
// for (let i = 0; i < 8; i++){
//      XXX
//  }
//CREAMOS LOS ENEMIGOS
for (let i = 0; i < 8; i++){
    // crea un sprite de tipo enemigo llamado monster. La variable 
    // monster es un objeto
    let monster = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.Enemy)

    //Colocamos dicho objeto sprite llamado monster 
    //de forma aleatoria sobre tiles de cierto tipo de neustro mapa
    tiles.placeOnRandomTile(monster,img`
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `)

    
    animation.runMovementAnimation( monster, animation.animationPresets(animation.bobbing), 2000, true)

}

sprites.onOverlap(SpriteKind.Player,SpriteKind.Enemy,function(sprite: Sprite, otherSprite: Sprite){
     
     info.changeLifeBy(-1)
     scene.cameraShake(4,500)
     pause(1000)
})

scene.onOverlapTile(SpriteKind.Player,img`
    . . . . . . . . . . . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . 4 4 4 5 5 4 4 4 . . . .
    . . . 3 3 3 3 4 4 4 4 4 4 . . .
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
    . . . 4 2 2 2 2 2 2 2 2 4 . . .
    . . . . 4 4 2 2 2 2 4 4 . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
`, function(sprite: Sprite, location: tiles.Location){

    if (info.score() == 8){
       game.over(true) 
    }
})