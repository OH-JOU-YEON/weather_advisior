package strategy

class ClothingRecommender {
    private val strategies = listOf(
        FreezingStrategy(),
        ColdStrategy(),
        CoolStrategy(),
        MildCoolStrategy(),
        MildStrategy(),
        WarmStrategy(),
        PleasantStrategy(),
        MildWarmStrategy(),
        HotStrategy()
    )

    fun getRecommendation(temp: Double): String {
        return strategies.find { it.canHandle(temp) }?.recommend(temp)
            ?: "적절한 옷차림을 찾을 수 없습니다."
    }
}