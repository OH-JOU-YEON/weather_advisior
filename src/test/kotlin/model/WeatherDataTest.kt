package model

import kotlin.test.Test
import kotlin.test.assertEquals

class WeatherDataTest {

    @Test
    fun averageTest() {
        // given
        val weatherData = WeatherData(
            location = "서울",
            maxTemp = 20.0,
            minTemp = 10.0
        )

        // when
        val avgTemp = weatherData.avgTemp

        // then
        assertEquals(15.0, avgTemp, 0.01)
    }

    @Test
    fun averageFormatTest() {
        // given
        val weatherData = WeatherData(
            location = "부산",
            maxTemp = 23.5,
            minTemp = 18.3
        )

        // when
        val avgTemp = weatherData.avgTemp

        // then
        assertEquals(20.9, avgTemp, 0.01)
    }

    @Test
    fun temperatureMinusTest() {
        // given
        val weatherData = WeatherData(
            location = "춘천",
            maxTemp = 2.0,
            minTemp = -4.0
        )

        // when
        val avgTemp = weatherData.avgTemp

        // then
        assertEquals(-1.0, avgTemp, 0.01)
    }

    @Test
    fun averageEqualTest() {
        // given
        val weatherData = WeatherData(
            location = "제주",
            maxTemp = 15.0,
            minTemp = 15.0
        )

        // when
        val avgTemp = weatherData.avgTemp

        // then
        assertEquals(15.0, avgTemp, 0.01)
    }
}