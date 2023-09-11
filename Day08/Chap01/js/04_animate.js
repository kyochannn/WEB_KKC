$(function() {

    /*
        fadeXXX( 인자1 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')

        fadeXXX( 인자1, 인자2 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')
        * 인자2 : function() - 애니메이션 후, 실행할 콜백함수
        
        fadeXXX( 인자1, 인자2, 인자3 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')
        * 인자2 : easing (swing, linear)
        * 인자3 : function() - 애니메이션 후, 실행할 콜백함수
        
        fadeTo( 인자1, 인자2, 인자3, 인자4 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')
        * 인자2 : opacity (불투명도 : 0.0 ~ 1)
        * 인자3 : easing (swing[default], linear)
        * 인자4 : function() - 애니메이션 후, 실행할 콜백함수
    */

    /* fadeOut */
    $('#fadeOut').on('click', function() {
        $('#box1').fadeOut(1000)
    })

    /* fadeIn */
    $('#fadeIn').on('click', function() {
        $('#box1').fadeIn(1000)
    })

    /* fadeToggle */
    $('#fadeToggle').on('click', function() {
        $('#box1').fadeToggle(1000)
    })

    /* fadeTo */
    $('#fadeTo').on('click', function() {
        $('#box1').fadeTo('slow', 0.2)
    })

    /* hide & show */
    /* 
        hide/show( 인자1, 인자2 )
        * 인자1 : duration (시간)
        - margin, padding, width, height, opacity 속성등을
          지정된 값에서 0으로, 지정시간(ms) 동안 애니메이션 동작을 한다.
          그 이후에, display : none 으로 변경되어 사라진다.
          (1s = 1000ms)

        * 인자2 : 콜백함수
          - 애니메이션 완료 후, 호출할 콜백 함수
    */

    /* show/hide */
    $('#hide').on('click', function(){
        $('#box2').hide()
    })

    $('#show').on('click', function(){
        $('#box2').show()
    })

    $('#hide1000').on('click', function(){
        $('#box2').hide(1000)
    })

    $('#show1000').on('click', function(){
        $('#box2').show(1000)
    })

    /* slide */
    /* 
        slideXXX( 인자1, 인자2 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')
        * 인자2 : 콜백함수
        
        slideXXX( 인자1, 인자2, 인자3 )
        * 인자1 : duration  (시간 : ms), ('slow', 'fast')
        * 인자2 : easing (swing[default], linear)
        * 인자3 : 콜백함수
    */

    $('#slideUp').on('click', function() {
        $('#box3').slideUp(500)
    })

    $('#slideDown').on('click', function() {
        $('#box3').slideDown(500)
    })

    $('#slideToggle').on('click', function() {
        $('#box3').slideToggle(500)
    })

    // animate
    let sw = false
    $('#animate').on('click', function() {
        if( !sw ) {
        // animate('스타일;, 시간)
        $('#box4').animate({
            'opacity'   : '0.3',
            'width'     : '600px',
            'background-color' : 'orange'
        }, 500)
        $('#box4').animate({
            'opacity'   : '1',
            'width'     : '20px',
            'background-color' : 'red'
        }, 500)
        $('#box4').animate({
            'opacity'   : '0.3',
            'width'     : '600px',
            'background-color' : 'orange'
        }, 500)
        $('#box4').animate({
            'opacity'   : '1',
            'width'     : '20px',
            'background-color' : 'red'
        }, 500)
        $('#box4').animate({
            'opacity'   : '1',
            'height'     : '40px',
            'background-color' : 'red'
        }, 1000)
        $('#box4').animate({
            'opacity'   : '1',
            'width'     : '600px',
            'background-color' : 'orange'
        }, 500, function() {            /* 이런식으로 추가적으로 넣어줄 수 있다. */
            alert("작아짐")
            
        })
    } else {
        $('#box4').stop().animate({
            'opacity'   : '1',
            'width'     : '150px',
            'height'     : '150px',
        }, 500)
    }
    sw = !sw
    })

    /* 
        .animate() 메서드에서는 적용할 수 있는 슽나일 속성이 제한되어 있다.
         * 원하는 스타일을 지정하영 애니메이션을 적용하는 방밥
        1. 이벤트 정의
        2. 적용할 요소에 'active' 등의 이름으로 클래스 속성을 추가/삭제

        3. CSS에서 .active에 애니메이션 적용할 스타일 지정

        
    */

    $('#active').on('click', function() {
        $('#box5').addClass('active')
        $('#box5').removeClass('delete')
    })

    // addClass()       : 클래스 속성 추가
    // removeClass()    : 클래스 속성 제거

    $('#delete').on('click', function() {
        $('#box5').removeClass('active')
        $('#box5').addClass('delete')
    })
})