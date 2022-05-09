function nombre (num: number) {
    if (num == 0) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # . #
            . . # . #
            . . # # #
            `)
    }
    if (num == 1) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . # . .
            . . # # #
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . # #
            . . . . #
            . . # # #
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (num == 7) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
    }
    if (num == 8) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (num == 9) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (num == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (num == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    }
    if (num == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (num == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (num == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . # . .
            # . # . .
            `)
    }
    if (num == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 20) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (num == 21) {
        basic.showLeds(`
            # # . # .
            . # . # .
            # # . # .
            # . . # .
            # # . # .
            `)
    }
    if (num == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    }
    if (num == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    }
}
for (let index = 0; index <= 24; index++) {
    nombre(index)
    basic.pause(100)
}
basic.forever(function () {
	
})
