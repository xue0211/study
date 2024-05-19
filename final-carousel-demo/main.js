window.$ = jQuery
let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({ transform: 'translateX(-400px)' })
bindEvents()



function bindEvents() {
    $buttons.eq(0).on('click', function () {
        if (current == 2) {
            console.log('说明你是从最后一张到第一张')
            $slides.css({ transform: 'translateX(-1600px)' })
                .one('transitionend', function () {
                    //console.group('动画完毕')
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-400px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-400px)' })
        }

        current = 0
    })
    $buttons.eq(1).on('click', function () {
        console.log(current)
        $slides.css({ transform: 'translateX(-800px)' })
        current = 1
    })
    $buttons.eq(2).on('click', function () {
        if (current == 0) {
            console.log('说明你是从第一张到最后一张')
            $slides.css({ transform: 'translateX(-0px)' })
                .one('transitionend', function () {
                    //console.group('动画完毕')
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-1200px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-1200px)' })
            current = 2
        }

    })
}



function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    //console.log($firstCopy[0].outerHTML)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    //console.log($lastCopy[0].outerHTML)

    $slides.append($firstCopy)  //把clone的第一张加在d第三张的后面
    $slides.prepend($lastCopy)   //把clone的最后一张加在第一张的前面

}