package api

import model.WeatherData
import kotlin.js.Json

object WeatherDataParser {
    fun parse(location: String, jsonData: Json): WeatherData {
        val response = jsonData.asDynamic().response
        val items = response.body.items.item as Array<Json>

        var maxTemp: Double? = null
        var minTemp: Double? = null
        val temperatures = mutableListOf<Double>()

        // TMX: 최고기온, TMN: 최저기온, TMP: 기온
        for (item in items) {
            val category = item.asDynamic().category as String
            val fcstValue = (item.asDynamic().fcstValue as String).toDoubleOrNull() ?: continue

            when (category) {
                "TMX" -> maxTemp = fcstValue
                "TMN" -> minTemp = fcstValue
                "TMP" -> temperatures.add(fcstValue)
            }
        }

        // TMX, TMN이 없는 경우 TMP의 최대/최소값 사용
        val finalMaxTemp = maxTemp ?: temperatures.maxOrNull() ?: 15.0
        val finalMinTemp = minTemp ?: temperatures.minOrNull() ?: 5.0

        return WeatherData(
            location = location,
            maxTemp = finalMaxTemp,
            minTemp = finalMinTemp
        )
    }
}