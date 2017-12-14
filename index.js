$(function() {

    //init
    var html =`<div class="tab">
                <div class="navbar">
                <div class="navbar__item bar__item_on">
                    时间
                </div>
                <div class="navbar__item">
                    日期
                </div>
                </div>
                <div class="tab__panel">
                <div class="middle"></div>
                <div class="date">
                    <div class="flex">
                        <div class="flex__item">
                            <ul class="swiper-container1" id="year">
                                <div class="swiper-wrapper">
                                    <li class="swiper-slide">1990年</li>
                                    <li class="swiper-slide">1991年</li>
                                    <li class="swiper-slide">1992年</li>
                                    <li class="swiper-slide">1993年</li>
                                    <li class="swiper-slide">1994年</li>
                                    <li class="swiper-slide">1995年</li>
                                    <li class="swiper-slide">1996年</li>
                                    <li class="swiper-slide">1997年</li>
                                    <li class="swiper-slide">1998年</li>
                                    <li class="swiper-slide">1999年</li>
                                    <li class="swiper-slide">2000年</li>
                                    <li class="swiper-slide">2001年</li>
                                    <li class="swiper-slide">2002年</li>
                                    <li class="swiper-slide">2003年</li>
                                    <li class="swiper-slide">2004年</li>
                                    <li class="swiper-slide">2005年</li>
                                    <li class="swiper-slide">2006年</li>
                                    <li class="swiper-slide">2007年</li>
                                    <li class="swiper-slide">2008年</li>
                                    <li class="swiper-slide">2009年</li>
                                    <li class="swiper-slide">2010年</li>
                                    <li class="swiper-slide">2011年</li>
                                    <li class="swiper-slide">2012年</li>
                                    <li class="swiper-slide">2013年</li>
                                    <li class="swiper-slide">2014年</li>
                                    <li class="swiper-slide">2015年</li>
                                    <li class="swiper-slide">2016年</li>
                                    <li class="swiper-slide">2017年</li>
                                </div>
                            </ul>
                        </div>
                        <div class="flex__item">
                                <ul class="swiper-container2" id="month">
                                    <div class="swiper-wrapper">
                                        <li class="swiper-slide">1月</li>
                                        <li class="swiper-slide">2月</li>
                                        <li class="swiper-slide">3月</li>
                                        <li class="swiper-slide">4月</li>
                                        <li class="swiper-slide">5月</li>
                                        <li class="swiper-slide">6月</li>
                                        <li class="swiper-slide">7月</li>
                                        <li class="swiper-slide">8月</li>
                                        <li class="swiper-slide">9月</li>
                                        <li class="swiper-slide">10月</li>
                                        <li class="swiper-slide">11月</li>
                                        <li class="swiper-slide">12月</li>
                                    </div>
                                </ul>
                            </div>
                            <div class="flex__item">
                                <ul class="swiper-container3" id="day">
                                    <div class="swiper-wrapper">
                                        <li class="swiper-slide">1日</li>
                                        <li class="swiper-slide">2日</li>
                                        <li class="swiper-slide">3日</li>
                                        <li class="swiper-slide">4日</li>
                                        <li class="swiper-slide">5日</li>
                                            <li class="swiper-slide">6日</li>
                                            <li class="swiper-slide">7日</li>
                                            <li class="swiper-slide">8日</li>
                                            <li class="swiper-slide">9日</li>
                                            <li class="swiper-slide">10日</li>
                                            <li class="swiper-slide">11日</li>
                                            <li class="swiper-slide">12日</li>
                                            <li class="swiper-slide">13日</li>
                                            <li class="swiper-slide">14日</li>
                                            <li class="swiper-slide">15日</li>
                                            <li class="swiper-slide">16日</li>
                                            <li class="swiper-slide">17日</li>
                                            <li class="swiper-slide">18日</li>
                                            <li class="swiper-slide">19日</li>
                                            <li class="swiper-slide">20日</li>
                                            <li class="swiper-slide">21日</li>
                                            <li class="swiper-slide">22日</li>
                                            <li class="swiper-slide">23日</li>
                                            <li class="swiper-slide">24日</li>
                                            <li class="swiper-slide">25日</li>
                                            <li class="swiper-slide">26日</li>
                                            <li class="swiper-slide">27日</li>
                                            <li class="swiper-slide">28日</li>
                                            <li class="swiper-slide">29日</li>
                                            <li class="swiper-slide">30日</li>
                                            <li class="swiper-slide">31日</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="time" style="display: none;">
                            <div class="flex">
                                <div class="flex__item" style="display: none;">
                                    <ul class="swiper-container4">
                                        <div class="swiper-wrapper">
                                            <li class="swiper-slide">1日</li>
                                            <li class="swiper-slide">2日</li>
                                            <li class="swiper-slide">3日</li>
                                            <li class="swiper-slide">4日</li>
                                            <li class="swiper-slide">5日</li>
                                            <li class="swiper-slide">6日</li>
                                            <li class="swiper-slide">7日</li>
                                            <li class="swiper-slide">8日</li>
                                            <li class="swiper-slide">9日</li>
                                            <li class="swiper-slide">10日</li>
                                            <li class="swiper-slide">11日</li>
                                                <li class="swiper-slide">12日</li>
                                                <li class="swiper-slide">13日</li>
                                                <li class="swiper-slide">14日</li>
                                                <li class="swiper-slide">15日</li>
                                                <li class="swiper-slide">16日</li>
                                                <li class="swiper-slide">17日</li>
                                                <li class="swiper-slide">18日</li>
                                                <li class="swiper-slide">19日</li>
                                                <li class="swiper-slide">20日</li>
                                                <li class="swiper-slide">21日</li>
                                                <li class="swiper-slide">22日</li>
                                                <li class="swiper-slide">23日</li>
                                                <li class="swiper-slide">24日</li>
                                                <li class="swiper-slide">25日</li>
                                                <li class="swiper-slide">26日</li>
                                                <li class="swiper-slide">27日</li>
                                                <li class="swiper-slide">28日</li>
                                                <li class="swiper-slide">29日</li>
                                                <li class="swiper-slide">30日</li>
                                                <li class="swiper-slide">31日</li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div class="flex__item">
                                        <ul class="swiper-container4" id="hour">
                                            <div class="swiper-wrapper">
                                                <li class="swiper-slide">0时</li>
                                                <li class="swiper-slide">1时</li>
                                                <li class="swiper-slide">2时</li>
                                                <li class="swiper-slide">3时</li>
                                                <li class="swiper-slide">4时</li>
                                                <li class="swiper-slide">5时</li>
                                                <li class="swiper-slide">6时</li>
                                                <li class="swiper-slide">7时</li>
                                                <li class="swiper-slide">8时</li>
                                                <li class="swiper-slide">9时</li>
                                                <li class="swiper-slide">10时</li>
                                                <li class="swiper-slide">11时</li>
                                                <li class="swiper-slide">12时</li>
                                                <li class="swiper-slide">13时</li>
                                                <li class="swiper-slide">14时</li>
                                                <li class="swiper-slide">15时</li>
                                                <li class="swiper-slide">16时</li>
                                                <li class="swiper-slide">17时</li>
                                                <li class="swiper-slide">18时</li>
                                                <li class="swiper-slide">19时</li>
                                                <li class="swiper-slide">20时</li>
                                                <li class="swiper-slide">21时</li>
                                                <li class="swiper-slide">22时</li>
                                                <li class="swiper-slide">23时</li>
                                                <li class="swiper-slide">24时</li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div class="flex__item">
                                        <ul class="swiper-container4" id="minute">
                                            <div class="swiper-wrapper">
                                                <li class="swiper-slide">0分</li>
                                                <li class="swiper-slide">1分</li>
                                                <li class="swiper-slide">2分</li>
                                                <li class="swiper-slide">3分</li>
                                                <li class="swiper-slide">4分</li>
                                                <li class="swiper-slide">5分</li>
                                                <li class="swiper-slide">6分</li>
                                                <li class="swiper-slide">7分</li>
                                                <li class="swiper-slide">8分</li>
                                                <li class="swiper-slide">9分</li>
                                                <li class="swiper-slide">10分</li>
                                                <li class="swiper-slide">11分</li>
                                                <li class="swiper-slide">12分</li>
                                                <li class="swiper-slide">13分</li>
                                                <li class="swiper-slide">14分</li>
                                                <li class="swiper-slide">15分</li>
                                                <li class="swiper-slide">16分</li>
                                                <li class="swiper-slide">17分</li>
                                                <li class="swiper-slide">18分</li>
                                                <li class="swiper-slide">19分</li>
                                                <li class="swiper-slide">20分</li>
                                                <li class="swiper-slide">21分</li>
                                                <li class="swiper-slide">22分</li>
                                                <li class="swiper-slide">23分</li>
                                                <li class="swiper-slide">24分</li>
                                                <li class="swiper-slide">25分</li>
                                                <li class="swiper-slide">26分</li>
                                                <li class="swiper-slide">27分</li>
                                                <li class="swiper-slide">28分</li>
                                                <li class="swiper-slide">29分</li>
                                                <li class="swiper-slide">30分</li>
                                                <li class="swiper-slide">31分</li>
                                                <li class="swiper-slide">32分</li>
                                                <li class="swiper-slide">33分</li>
                                                <li class="swiper-slide">34分</li>
                                                <li class="swiper-slide">35分</li>
                                                <li class="swiper-slide">36分</li>
                                                <li class="swiper-slide">37分</li>
                                                <li class="swiper-slide">38分</li>
                                                <li class="swiper-slide">39分</li>
                                                    <li class="swiper-slide">40分</li>
                                                    <li class="swiper-slide">41分</li>
                                                    <li class="swiper-slide">42分</li>
                                                    <li class="swiper-slide">43分</li>
                                                    <li class="swiper-slide">44分</li>
                                                    <li class="swiper-slide">45分</li>
                                                    <li class="swiper-slide">46分</li>
                                                    <li class="swiper-slide">47分</li>
                                                    <li class="swiper-slide">48分</li>
                                                    <li class="swiper-slide">49分</li>
                                                    <li class="swiper-slide">50分</li>
                                                    <li class="swiper-slide">51分</li>
                                                    <li class="swiper-slide">52分</li>
                                                    <li class="swiper-slide">53分</li>
                                                    <li class="swiper-slide">54分</li>
                                                    <li class="swiper-slide">55分</li>
                                                    <li class="swiper-slide">56分</li>
                                                    <li class="swiper-slide">57分</li>
                                                    <li class="swiper-slide">58分</li>
                                                    <li class="swiper-slide">59分</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`

    $('#choosetime').append(html);

    //change day or time
    $('.navbar__item').on('click', function() {
        $(this).addClass('bar__item_on').siblings('.bar__item_on').removeClass('bar__item_on');
    });

    var swiper1, swiper2, swiper3, swiper4, data;
    data = {
        year: "1990年",
        month: "1月",
        day: "1日",
        hour: "0时",
        minute: "0分"
    };

    swiper1 = new Swiper('.swiper-container1', {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: 5,
        centeredSlides: true,
        onSlideChangeEnd: function(swiper) {
            changeDay(swiper);
        }
    });

    swiper2 = new Swiper('.swiper-container2', {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: 5,
        centeredSlides: true,
        onSlideChangeEnd: function(swiper) {
            changeDay(swiper);
        }
    });

    swiper3 = new Swiper('.swiper-container3', {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: 5,
        centeredSlides: true,
    });

    //if changed month,daynum will reset.
    var daynum = 31;
    function changeDay(swiper) {
        switch ($("#month li.swiper-slide-active").text()) {
            case "1月":
            case "3月":
            case "5月":
            case "7月":
            case "8月":
            case "10月":
            case "12月":
                if (daynum == 28) {
                    swiper3.appendSlide('<li class="swiper-slide">29日</li>');
                    swiper3.appendSlide('<li class="swiper-slide">30日</li>');
                    swiper3.appendSlide('<li class="swiper-slide">31日</li>');
                } else if (daynum == 29) {
                    swiper3.appendSlide('<li class="swiper-slide">30日</li>');
                    swiper3.appendSlide('<li class="swiper-slide">31日</li>');
                } else if (daynum == 30) {
                    swiper3.appendSlide('<li class="swiper-slide">31日</li>');
                };
                daynum = 31;
                break;
            case "2月":
                {
                    swiper3.removeSlide(30);
                    swiper3.removeSlide(29);
                    var year = $("#year .swiper-slide-active").text().split("年")[0];
                    year = parseInt(year);
                    var is = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
                    if (!is) {
                        swiper3.removeSlide(28);
                        daynum = 28;
                    } else if (daynum == 28) {
                        swiper3.appendSlide('<li class="swiper-slide">29日</li>');
                        daynum = 29;
                    }
                }
                break;
            case "4月":
            case "6月":
            case "9月":
            case "11月":
                    swiper3.removeSlide(30);
                if (daynum == 28) {
                    swiper3.appendSlide('<li class="swiper-slide">29日</li>');
                    swiper3.appendSlide('<li class="swiper-slide">30日</li>');
                } else if (daynum == 29) {
                    swiper3.appendSlide('<li class="swiper-slide">30日</li>');
                } else if (daynum == 31) {
                    swiper3.removeSlide(30);
                };
                daynum = 30;
                break;
            default:
                break;
        }
        if (swiper3) swiper3.slideTo(7, 1000, false);
    }

    $(".navbar__item").click(function() {
        var isNav = document.getElementsByClassName("navbar__item")[0] == document.getElementsByClassName("bar__item_on")[0];
        if (isNav) {
            $(".date").show();
            $(".time").hide();
        } else {
            $(".date").hide();
            $(".time").show();
        }
        if (!swiper4) {
            swiper4 = new Swiper('.swiper-container4', {
            	direction: 'vertical',
                loop: true,
                loopAdditionalSlides: 2,
                slidesPerView: 5,
                centeredSlides: true
            });
        }
    })

    var submit = function(){
    	data.year = $("#year li.swiper-slide-active").text();
    	data.month = $("#month li.swiper-slide-active").text();
    	data.day = $("#day li.swiper-slide-active").text();
    	data.hour = $("#hour li.swiper-slide-active").text();
    	data.minute = $("#minute li.swiper-slide-active").text();
    }

    //getTime()       get data.
    window.getTime = function(){
        submit();
        return data;
    };
})