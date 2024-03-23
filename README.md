## weather app - react project

[git hub](https://github.com/whynotBb/202403_react-weather-app.git)<br/>
배포 : <https://byoul-react-weather-app.netlify.app>

## open api

-   https://home.openweathermap.org/
-   icon - https://openweathermap.org/img/wn/10d@2x.png

## 서비스 소개

1. 앱이 실행 되면 브라우저 위치를 파악하여 날씨를 표출합니다.
2. 버튼을 클릭 하면 해당 도시의 날씨를 표출합니다.
3. 날씨 종류에 따라 다른 배경화면을 제공 합니다.

## TODO

-   [x] 앱이 실행 되자 마자 현재위치 기반의 날씨 보여주기
-   [x] 날씨 정보 : 도씨, 섭씨, 화씨, 날씨 상태
-   [x] 5개의 버튼 : 1개는 현재위치, 4개는 다른 도시
-   [x] 도시 버튼 클릭 할 때 마다 도시별 날씨 표출
-   [x] 현재위치 버튼 클릭 시 다시 현재위치의 날씨 표출
-   [] 데이터를 가져오는 동안 로딩 스피너 기능 추가
-   [x] 날씨에 따라 배경이미지 변경

## memo

1. 실행 되자 마자 : useEffect
2. javascript get current location
   https://www.w3schools.com/html/html5_geolocation.asp
3. api 호출하기

    ```
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const apiKey = API KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
    };
    ```

4. useEffect 빈배열 상태에서 netlify 배포 안되는 오류
   참고 : https://velog.io/@rgfdds98/debuging-React-Hook-useEffect-has-a-missing-dependency-fetchMovieData.-Either-include-it-or-remove-the-dependency-array

    ```
    useEffect(() => {
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    ```

5. 무료 동영상
   https://www.pexels.com/
