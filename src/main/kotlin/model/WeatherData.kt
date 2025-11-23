package model

data class WeatherData(
    val location: String,
    val maxTemp: Double,
    val minTemp: Double
) {
    val avgTemp: Double
        get() = (maxTemp + minTemp) / 2
}