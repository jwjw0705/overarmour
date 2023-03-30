let smartPhones = ['iphone','ipod','ipad','android','opera mini','opera mobi','nokia',
'webos','windows ce','blackberry','iemobile','sonyericssion'];
//자동으로 스마트 폰 구분
for(let i in smartPhones) {
    //navigator안에 userAgent정보를 전부 소문자로 바꿔주고 정규화식 =  smartPhones의 정보를 하나씩 넘겨주면서 match시킨다.
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location = 'http://jwjw0705.dothome.co.kr/mindex.html';
        //모바일 화면을 인지하면 mindex.html을 연결해줌
    }
}