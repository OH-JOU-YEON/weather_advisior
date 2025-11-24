package api

import model.WeatherData
import kotlin.js.Json

object WeatherDataParser {
    fun parse(location: String, jsonData: Json): WeatherData {
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
}