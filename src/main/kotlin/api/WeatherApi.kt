package api

import model.WeatherData

class WeatherApi {
    // 기상청 API 키 (공공데이터포털에서 발급받은 키로 교체 필요)
    private val serviceKey = "YOUR_API_KEY_HERE"

    suspend fun fetchWeather(location: String): WeatherData {
        // 간단한 테스트를 위해 Mock 데이터 사용
        // 실제 기상청 API 연동 시 아래 주석을 참고하여 구현

        // 임시 데이터 (테스트용)
        val mockMaxTemp = (15..30).random().toDouble()
        val mockMinTemp = (mockMaxTemp - 10).coerceAtLeast(0.0)

        return WeatherData(
            location = location,
            maxTemp = mockMaxTemp,
            minTemp = mockMinTemp
        )
    }

    /* 실제 기상청 API 사용 시 (참고용)
    suspend fun fetchWeatherFromApi(location: String): WeatherData {
        val url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst" +
                "?serviceKey=$serviceKey" +
                "&numOfRows=10" +
                "&pageNo=1" +
                "&dataType=JSON" +
                "&base_date=20231120" +
                "&base_time=0500" +
                "&nx=60" +
                "&ny=127"

        val response = window.fetch(url).await()
        val jsonData = response.json().await()

        // JSON 파싱 로직
        // 최고기온(TMX), 최저기온(TMN) 추출

        return WeatherData(
            location = location,
            maxTemp = extractedMaxTemp,
            minTemp = extractedMinTemp
        )
    }
    */
}