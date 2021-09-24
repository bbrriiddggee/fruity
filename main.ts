let projectile2: Sprite = null
let projectile: Sprite = null
let CURIOUS_GEORGE = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f f . . . . 
    . c d d d d d d e e d d f . . . 
    . c d f d d f d e e b d c . . . 
    c d d f d d f d e e b d c . f f 
    c d e e d d d d e e f c . f e f 
    c d d d d c d e e e f . . f e f 
    . f c c c d e e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . f f e f e e f e e e e f . . 
    . f e f f e e f f f e e e f . . 
    f d d b d d c f f f f f f b f . 
    f d d c d d d f . . f c d d f . 
    . f f f f f f f . . . f f f . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
controller.moveSprite(CURIOUS_GEORGE)
CURIOUS_GEORGE.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, randint(0, 120))
})
