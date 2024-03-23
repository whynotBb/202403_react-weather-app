## weather app - react project

[git hub](https://github.com/whynotBb/202403_react-weather-app.git)
<https://>

## open api

https://home.openweathermap.org/

## TODO

-   [] 앱이 실행 되자 마자 현재위치 기반의 날씨 보여주기
-   [] 날씨 정보 : 도씨, 섭씨, 화씨, 날씨 상태
-   [] 5개의 버튼 : 1개는 현재위치, 4개는 다른 도시
-   [] 도시 버튼 클릭 할 때 마다 도시별 날씨 표출
-   [] 현재위치 버튼 클릭 시 다시 현재위치의 날씨 표출
-   [] 데이터를 가져오는 동안 로딩 스피너 기능 추가
-   [] 날씨에 따라 배경이미지 변경

## memo

1. 실행 되자 마자 : useEffect
2. javascript get current location
   https://www.w3schools.com/html/html5_geolocation.asp
3. api 호출하기

    ```const getWeatherByCurrentLocation = async (lat, lon) => {
            const apiKey = API KEY;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log("data", data);
        };
    ```
