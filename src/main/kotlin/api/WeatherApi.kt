package api

import kotlinx.browser.window
import kotlinx.coroutines.await
import model.WeatherData
import kotlin.js.Json

class WeatherApi(private val serviceKey: String) {

    suspend fun fetchWeather(location: String): WeatherData {
        val coordinate = LocationMapper.getCoordinate(location)
            ?: throw IllegalArgumentException(
                "지원하지 않는 지역입니다. 지원 지역: ${
                    LocationMapper.getSupportedLocations().joinToString(", ")
                }"
            )

        val baseDate = getCurrentBaseDate()
        val baseTime = getCurrentBaseTime()

        val url = buildApiUrl(coordinate, baseDate, baseTime)

        return try {
            val response = window.fetch(url).await()
            val text = response.text().await()

            console.log("API Response:", text)

            val jsonData = JSON.parse<Json>(text)
            parseWeatherData(location, jsonData)
        } catch (e: Exception) {
            console.error("API Error:", e)
            throw Exception("날씨 정보를 가져오는데 실패했습니다: ${e.message}")
        }
    }

    private fun buildApiUrl(coordinate: GridCoordinate, baseDate: String, baseTime: String): String {
        return "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst" +
                "?serviceKey=$serviceKey" +
                "&numOfRows=100" +
                "&pageNo=1" +
                "&dataType=JSON" +
                "&base_date=$baseDate" +
                "&base_time=$baseTime" +
                "&nx=${coordinate.nx}" +
                "&ny=${coordinate.ny}"
    }

    private fun parseWeatherData(location: String, jsonData: Json): WeatherData {
        val response = jsonData.asDynamic().response
        val items = response.body.items.item as Array<Json>

        var maxTemp = 15.0
        var minTemp = 5.0
        var currentTemp = 10.0

        // TMX: 최고기온, TMN: 최저기온, T1H: 기온
        for (item in items) {
            val category = item.asDynamic().category as String
            val fcstValue = (item.asDynamic().fcstValue as String).toDoubleOrNull() ?: continue

            when (category) {
                "TMX" -> maxTemp = fcstValue
                "TMN" -> minTemp = fcstValue
                "T1H" -> currentTemp = fcstValue
            }
        }

        // TMX, TMN이 없는 경우 현재 기온 기준으로 추정
        if (maxTemp == 15.0 && minTemp == 5.0) {
            maxTemp = currentTemp + 3
            minTemp = currentTemp - 3
        }

        return WeatherData(
            location = location,
            maxTemp = maxTemp,
            minTemp = minTemp
        )
    }

    private fun getCurrentBaseDate(): String {
        val now = js("new Date()")
        val year = now.getFullYear()
        val month = (now.getMonth() + 1).toString().padStart(2, '0')
        val day = now.getDate().toString().padStart(2, '0')
        return "$year$month$day"
    }

    private fun getCurrentBaseTime(): String {
        // 기상청 API는 특정 시간에만 업데이트됨 (02, 05, 08, 11, 14, 17, 20, 23시)
        val now = js("new Date()")
        val hour = now.getHours() as Int

        val baseHour = when {
            hour < 2 -> 23
            hour < 5 -> 2
            hour < 8 -> 5
            hour < 11 -> 8
            hour < 14 -> 11
            hour < 17 -> 14
            hour < 20 -> 17
            hour < 23 -> 20
            else -> 23
        }

        return baseHour.toString().padStart(2, '0') + "00"
    }
}