$(function() {

    // 이벤트 처리 메소드
    // - on('이벤트 타입', 이벤트핸들러(콜백함수) { })
    // * 이벤트 타입    : click, keyup, change ...
    // * 이벤트 핸들러  : 이벤트 발생 시, 실행될 콜백 함수

    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })

    // this :   현재 속한 블록의 객체
    //          현재 선택한 요소를 가리키는 키워드
    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink')
    })

    // mouseover    : 마우스 올렸을 때 이벤트
    $('#item3').on('mouseover', function(){
        $(this).css('red', 'hotpink')
        $(this).css('background-color', 'red')
    } )

    // mouseout     : 마우스 벗어날 때 이벤트
    $('#item3').on('mouseout', function(){
        $(this).css('red', 'pink')
        $(this).css('background-color', 'gray')
    } )

    /* 이렇게 해주면 개귀찮다 그러니까 아래의 기법을 활용하자 */



    // 메서드 체인
    // : 하나의 jQuery 객체에 여러 메서드를 연결하는 기법
    $('#item4')
        .on('mouseover', function(){
            $(this).css('red', 'hotpink')
            $(this).css('background-color', 'red')
        } )
        .on('mouseout', function(){
            $(this).css('red', 'pink')
            $(this).css('background-color', 'gray')
        } )

        
    $('#item5')
    .on('mouseover', function(){
        $(this).css('red', 'hotpink')
        $(this).css('background-color', 'red')
    } )
    .on('mouseout', function(){
        $(this).css('red', 'pink')
        $(this).css('background-color', 'gray')
    } )
    .on('click', function() {
        $(this).css('color', 'hotpink')
    })
    .on('dblclick', function() {
        $(this).css({
            'border'            : '5px solid pink',
            'background-color'  : 'black'
        })
    })
})