package strategy

import kotlin.test.Test
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class ClothingRecommenderTest {

    private val recommender = ClothingRecommender()

    @Test
    fun allTemperatureGetRecommendTest() {
        // 경계값 테스트
        val temperatures = listOf(
            -10.0,  // 영하
            0.0,    // 경계: 0~4
            5.0,    // 경계: 5~8
            9.0,    // 경계: 9~11
            12.0,   // 경계: 12~16
            17.0,   // 경계: 17~19
            20.0,   // 경계: 20~22
            23.0,   // 경계: 23~27
            28.0,   // 28 이상
            40.0    // 극한 더위
        )

        temperatures.forEach { temp ->
            val recommendation = recommender.getRecommendation(temp)
            assertNotNull(recommendation, "온도 ${temp}°C에 대한 추천이 없습니다")
            assertTrue(recommendation.isNotEmpty(), "온도 ${temp}°C에 대한 추천이 비어있습니다")
        }
    }

    @Test
    fun recommendResultISNotEmptyTest() {
        val recommendation = recommender.getRecommendation(15.0)
        assertTrue(recommendation.isNotEmpty())
    }

    @Test
    fun anotherRangeAnotherRecommendTest() {
        val winterRecommendation = recommender.getRecommendation(-5.0)
        val summerRecommendation = recommender.getRecommendation(30.0)

        assertTrue(
            winterRecommendation != summerRecommendation,
            "겨울과 여름의 추천이 같으면 안됩니다"
        )
    }

    @Test
    fun boundaryResultTest() {
        // 경계값 테스트
        val boundary1 = recommender.getRecommendation(4.9)  // ColdStrategy
        val boundary2 = recommender.getRecommendation(5.0)  // CoolStrategy

        assertNotNull(boundary1)
        assertNotNull(boundary2)
        // 경계에서 전략이 바뀌므로 추천도 달라야 함
        assertTrue(boundary1 != boundary2)
    }
}