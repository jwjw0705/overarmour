$(function () {
    let index = 0;  //초기값에 0을주어 이미지는 이동하지 않지만 
    //컨트롤 버튼 클릭 이벤트
    let sw = false;
    let auto;
    moveSlider(index);  //바로 moveSlider함수를 곧바로 호출하여 수행하도록
    autoSlider();   //autoSlider함수 호출하는 위치

    

    //애니메이션 캔버스 영역에 이벤트
    $('#swiperContainer').hover(function () {
        clearInterval(auto);    //해당 영역에 마우스가 hover되면 auto가 담고있는 함수를 정지
    }, function () {
        autoSlider();           //밖으로 나가면 다시 autoSlider호출
    });

    $('.control_button').click(function () {
        index = $(this).index();
        moveSlider(index);
    });
    
    //좌측 컨트롤 버튼 이벤트
    $('.left_control').click(function () {
        index--;
        moveSlider(index);
    });

    //우측 컨트롤 버튼 이벤트
    $('.right_control').click(function () {
        index++;
        moveSlider(index);
    });

    function moveSlider(index) {
        if(index < 4 && index > 0) {
            $('.right_control').fadeIn(500);
            $('.left_control').fadeIn(500);
        }
        if(index == 4) {
            $('.right_control').fadeOut(0);
            $('.left_control').fadeIn(500);
        }
        if(index == 0) {
            $('.left_control').fadeOut(0);
            $('.right_control').fadeIn(500);
        }
        $('.imageSlide').animate({
            left : -(index*1024) //index만큼 이동하도록
        },1000);
        $('.control_button').removeClass('active');     //어느것을 누른지 모르기에 일단 전부다 클래스를 지우고 본다.
        $('.control_button').eq(index).addClass('active');  //'.control_button'의 eq(index)의 값을 주어  addClass를 갖도록
        
    }
    //자동 이미지 슬라이드 구현 함수
    //스위치를 이용해 한쪽 이동을 마치면 sw의 값을 바꿔서 다른 방향으로 움직이도록
    function autoSlider() {
        auto = setInterval(function () {    //setInterval정보를 auto 변수에 넣은것
            if(index < 4 && sw == false) {
                $('.right_control').trigger('click');   //trigger로 강제 이벤트 발생
            }else {
                sw = true;
            }

            if(index > 0 && sw ==true) {
                $('.left_control').trigger('click');
            }else {
                sw = false;
            }
        },4000);
    }

});