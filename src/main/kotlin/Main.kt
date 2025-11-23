import api.WeatherApi
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import strategy.ClothingRecommender
import kotlin.math.round

fun Double.format(digits: Int): String {
    val multiplier = 10.0
    return (round(this * multiplier) / multiplier).toString()
}

fun main() {
    val scope = MainScope()
    val weatherApi = WeatherApi()
    val recommender = ClothingRecommender()

    window.onload = {
        val searchBtn = document.getElementById("searchBtn") as HTMLButtonElement
        val locationInput = document.getElementById("location") as HTMLInputElement
        val resultDiv = document.getElementById("result") as HTMLDivElement

        searchBtn.addEventListener("click", { _: Event ->
            val location = locationInput.value.trim()

            if (location.isEmpty()) {
                window.alert("지역을 입력해주세요!")
                return@addEventListener
            }

            scope.launch {
                try {
                    resultDiv.innerHTML = "<p>날씨 정보를 불러오는 중...</p>"
                    resultDiv.style.display = "block"

                    val weatherData = weatherApi.fetchWeather(location)

                    val maxRecommendation = recommender.getRecommendation(weatherData.maxTemp)
                    val minRecommendation = recommender.getRecommendation(weatherData.minTemp)
                    val avgRecommendation = recommender.getRecommendation(weatherData.avgTemp)

                    resultDiv.innerHTML = """
                        <h3>${weatherData.location} 날씨 정보</h3>
                        <div class="temp-info">
                            <strong>최고 기온:</strong> ${weatherData.maxTemp}°C
                        </div>
                        <div class="recommendation">
                            ${maxRecommendation}
                        </div>
                        
                        <div class="temp-info">
                            <strong>최저 기온:</strong> ${weatherData.minTemp}°C
                        </div>
                        <div class="recommendation">
                            ${minRecommendation}
                        </div>
                        
                        <div class="temp-info">
                            <strong>평균 기온:</strong> ${weatherData.avgTemp.format(1)}°C
                        </div>
                        <div class="recommendation">
                            ${avgRecommendation}
                        </div>
                    """.trimIndent()

                } catch (e: Exception) {
                    resultDiv.innerHTML = "<p style='color: red;'>오류가 발생했습니다: ${e.message}</p>"
                    console.error("Error:", e)
                }
            }
        })
    }
}