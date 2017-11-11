window.onload = function() {
    mobile_render();
    _init();
}

function mobile_render() {
    var width = window.innerWidth;
    var isMobile = width < 750 ? true : false;
    var oSlideBox = document.getElementsByClassName('slide')[0];
    var startX = 0;
    var distance = 0;
    var isMove = false;
    oSlideBox.ontouchstart = function(e) {
        // console.log('start')
        startX = e.touches[0].clientX;

    }
    oSlideBox.ontouchmove = function(e) {
        // console.log('move')
        var moveX = e.touches[0].clientX;
        distance = moveX - startX;
        isMove = true;
    }
    oSlideBox.ontouchend = function(e) {
        // console.log('ed')
        if (isMove) {
            if (distance > 0) {
                // 右滑动，上一张
                // console.log('prev')
                $('.slide').carousel('prev')
            } else {
                // 左滑动，下一张
                // console.log('next')
                $('.slide').carousel('next')
            }
        }

        isMove = false;
        startX = 0;
        distance = 0;

    }
}

function _init() {
    var oProduct = document.getElementsByClassName('product')[0];
    var oParent = oProduct.getElementsByClassName('tabParent')[0];
    var oUl = oParent.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var width = 0;
    for (var i = 0; i < aLi.length; i++) {
        width += aLi[i].offsetWidth
    }
    oUl.style.width = width + 'px';
    let scroll = new BScroll(oParent, {
        scrollX: true,
        scrollY: false,
        click: true
    })

}