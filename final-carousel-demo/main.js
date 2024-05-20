window.$ = jQuery
let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({ transform: 'translateX(-400px)' })
bindEvents()
$(next).on('click', function () {
    goToSlide(current + 1)
})
$(previous).on('click', function () {
    goToSlide(current - 1)
})

let timer = setInterval(function () {
    goToSlide(current + 1)
}, 2000)
$('.container').on('mouseenter', function () {
    window.clearInterval(timer)
}).on('mouseleave', function () {
    timer = setInterval(function () {
        goToSlide(current + 1)
    }, 2000)
})

function bindEvents() {

    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)


    })
}

/*$buttons.eq(0).on('click', function () {
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
*/

//重要
function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1

    }
    console.log('current', 'index')
    console.log(current, index)
    if (current === $buttons.length - 1 && index === 0) {
        //从最后一张到第一张
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 400}px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 400}px)` }).show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        //从第一张到最后一张
        $slides.css({ transform: `translateX(0px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-(index + 1) + 400}px)` }).show()
            })
    } else {
        $slides.css({ transform: `translateX(${-(index + 1) * 400}px)` })
    }
    current = index
}

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    //console.log($firstCopy[0].outerHTML)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    //console.log($lastCopy[0].outerHTML)

    $slides.append($firstCopy)  //把clone的第一张加在d第三张的后面
    $slides.prepend($lastCopy)   //把clone的最后一张加在第一张的前面

}