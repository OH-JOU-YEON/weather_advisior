package strategy

interface ClothingStrategy {
    fun recommend(temp: Double): String
    fun canHandle(temp: Double): Boolean
}

class FreezingStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp < 0
    override fun recommend(temp: Double) = "🧥 패딩, 두꺼운 코트, 목도리, 장갑, 털모자"
}

class ColdStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 0.0..4.9
    override fun recommend(temp: Double) = "🧥 코트, 가죽자켓, 히트텍, 니트, 레깅스"
}

class CoolStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 5.0..8.9
    override fun recommend(temp: Double) = "🧥 자켓, 트렌치코트, 야상, 니트, 청바지"
}

class MildCoolStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 9.0..11.9
    override fun recommend(temp: Double) = "🧥 자켓, 가디건, 야상, 맨투맨, 청바지"
}

class MildStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 12.0..16.9
    override fun recommend(temp: Double) = "👕 자켓, 가디건, 니트, 맨투맨, 청바지"
}

class WarmStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 17.0..19.9
    override fun recommend(temp: Double) = "👕 얇은 가디건, 맨투맨, 후드티, 긴바지"
}

class PleasantStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 20.0..22.9
    override fun recommend(temp: Double) = "👕 긴팔티, 면바지, 청바지"
}

class MildWarmStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp in 23.0..27.9
    override fun recommend(temp: Double) = "👕 반팔, 얇은 셔츠, 반바지, 면바지"
}

class HotStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp >= 28
    override fun recommend(temp: Double) = "👕 민소매, 반팔, 반바지, 원피스"
}