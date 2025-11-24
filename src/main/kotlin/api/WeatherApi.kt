package api

import kotlinx.browser.window
import kotlinx.coroutines.await
import model.WeatherData
import kotlin.js.Json

class WeatherApi(private val serviceKey: String) {

    suspend fun fetchWeather(location: String): WeatherData {
        val coordinate = LocationMapper.getCoordinate(location)
            ?: throw IllegalArgumentException("지원하지 않는 지역입니다")

        val baseDate = TimeCalculator.getCurrentBaseDate()
        val baseTime = TimeCalculator.getCurrentBaseTime()
        val url = UrlBuilder.build(serviceKey, coordinate, baseDate, baseTime)

        return try {
            val response = window.fetch(url).await()
            val text = response.text().await()

            console.log("API Response:", text)

            val jsonData = JSON.parse<Json>(text)
            WeatherDataParser.parse(location, jsonData)
        } catch (e: Exception) {
            console.error("API Error:", e)
            throw Exception("날씨 정보를 가져오는데 실패했습니다: ${e.message}")
        }
    }
}