$(document).ready(() => {
    // 1. 변하지 않는 요소는 const로 선언
    const $window = $(window);
    const $header = $('header');
    const $topBtn = $('#top');
    const $footer = $('#footer');

    // 2. 화살표 함수(Arrow Function) 활용
    const stickyNav = () => {
        const scrollTop = $window.scrollTop(); 
        
        // 상단 고정 및 Top 버튼 활성화 지점 (100px)
        const isPastPoint = scrollTop > 100;
        $topBtn.toggleClass('on', isPastPoint);
        $header.toggleClass('fixed', isPastPoint);
    };

    // 초기 실행
    stickyNav();
            
    // 3. 스크롤 이벤트 최적화
    $window.on('scroll', () => {
        stickyNav();

        const footerHeight = $footer.height();
        const heightFlag = $(document).height() - footerHeight;
        const scrollValue = $window.scrollTop() + $window.height();

        // 템플릿 리터럴을 사용한 디버깅 로그 (필요 시 유지)
        // console.log(`heightFlag: ${heightFlag}, scrollValue: ${scrollValue}`);

        if (heightFlag <= scrollValue) {
            $topBtn.css({
                'transform': 'translateY(-150px)',
                'background': '#0A519C'
            });
        } else {
            $topBtn.removeAttr('style');
        }
    });

    // 4. 리사이즈 이벤트
    $window.on('resize', () => {
        stickyNav();
    });

    // 5. 상단 이동 클릭 이벤트
    $topBtn.on('click', (e) => {
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, "slow");
    });

    // 6. Slick Slider 초기화
    $("#visual .vis_slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500
    });

    // 7. 헤더 메뉴 토글
    $("header .all_btn").on('click', () => {
        $(".nav_menu, .bg").toggleClass('on');
        $("body").toggleClass('fixed');
    });

    $(".bg").on('click', () => {
        $(".nav_menu, .bg").removeClass('on');
        $("body").removeClass('fixed');
    });

    // 8. AOS 초기화
    if (window.AOS) {
        AOS.init();
    }
});