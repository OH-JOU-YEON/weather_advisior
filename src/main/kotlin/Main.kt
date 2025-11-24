import api.WeatherApi
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.events.Event
import strategy.ClothingRecommender
import kotlin.math.round

fun Double.format(digits: Int): String {
    val multiplier = 10.0
    return (round(this * multiplier) / multiplier).toString()
}

fun main() {
    val scope = MainScope()
    val weatherApi = WeatherApi(ApiConstants.SERVICE_KEY)
    val recommender = ClothingRecommender()

    window.onload = {
        val searchBtn = document.getElementById("searchBtn") as HTMLButtonElement
        val locationSelect = document.getElementById("location") as HTMLSelectElement
        val resultDiv = document.getElementById("result") as HTMLDivElement

        searchBtn.addEventListener("click", { _: Event ->
            val location = locationSelect.value.trim()

            if (location.isEmpty()) {
                window.alert(UiConstants.SELECT_LOCATION_ALERT)
                return@addEventListener
            }

            scope.launch {
                try {
                    resultDiv.innerHTML = "<p>${UiConstants.LOADING_MESSAGE}</p>"
                    resultDiv.style.display = "block"

                    val weatherData = weatherApi.fetchWeather(location)
                    val recommendation = recommender.getRecommendation(weatherData.avgTemp)

                    resultDiv.innerHTML = """
                        <h3>${weatherData.location} 날씨 정보</h3>
                        
                        <div class="temp-info">
                            <strong>최고 기온:</strong> ${weatherData.maxTemp}°C
                        </div>
                        
                        <div class="temp-info">
                            <strong>최저 기온:</strong> ${weatherData.minTemp}°C
                        </div>
                        
                        <div class="temp-info">
                            <strong>평균 기온:</strong> ${weatherData.avgTemp.format(1)}°C
                        </div>
                        
                        <div class="recommendation">
                            <strong>추천 옷차림:</strong><br>
                            ${recommendation}
                        </div>
                    """.trimIndent()

                } catch (e: Exception) {
                    resultDiv.innerHTML = "<p style='color: red;'>${UiConstants.ERROR_MESSAGE_PREFIX}${e.message}</p>"
                    console.error("Error:", e)
                }
            }
        })
    }
}