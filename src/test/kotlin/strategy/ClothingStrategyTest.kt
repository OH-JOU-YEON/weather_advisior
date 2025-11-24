package strategy

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ClothingStrategyTest {

    @Test
    fun temperatureMinusStrategyTest() {
        val strategy = FreezingStrategy()
        assertTrue(strategy.canHandle(-5.0))
        assertTrue(strategy.canHandle(-0.1))
        assertFalse(strategy.canHandle(0.0))
    }

    @Test
    fun coldStrategyRangeTest() {
        val strategy = ColdStrategy()
        assertTrue(strategy.canHandle(0.0))
        assertTrue(strategy.canHandle(2.5))
        assertTrue(strategy.canHandle(4.9))
        assertFalse(strategy.canHandle(-0.1))
        assertFalse(strategy.canHandle(5.0))
    }

    @Test
    fun coolStrategyRangeTest() {
        val strategy = CoolStrategy()
        assertTrue(strategy.canHandle(5.0))
        assertTrue(strategy.canHandle(7.0))
        assertTrue(strategy.canHandle(8.9))
        assertFalse(strategy.canHandle(4.9))
        assertFalse(strategy.canHandle(9.0))
    }

    @Test
    fun mildCoolStrategyRangeTest() {
        val strategy = MildCoolStrategy()
        assertTrue(strategy.canHandle(9.0))
        assertTrue(strategy.canHandle(10.5))
        assertTrue(strategy.canHandle(11.9))
        assertFalse(strategy.canHandle(8.9))
        assertFalse(strategy.canHandle(12.0))
    }

    @Test
    fun mildStrategyRangeTest() {
        val strategy = MildStrategy()
        assertTrue(strategy.canHandle(12.0))
        assertTrue(strategy.canHandle(14.0))
        assertTrue(strategy.canHandle(16.9))
        assertFalse(strategy.canHandle(11.9))
        assertFalse(strategy.canHandle(17.0))
    }

    @Test
    fun warmStrategyRangeTest() {
        val strategy = WarmStrategy()
        assertTrue(strategy.canHandle(17.0))
        assertTrue(strategy.canHandle(18.5))
        assertTrue(strategy.canHandle(19.9))
        assertFalse(strategy.canHandle(16.9))
        assertFalse(strategy.canHandle(20.0))
    }

    @Test
    fun pleasantStrategyRangeTest() {
        val strategy = PleasantStrategy()
        assertTrue(strategy.canHandle(20.0))
        assertTrue(strategy.canHandle(21.0))
        assertTrue(strategy.canHandle(22.9))
        assertFalse(strategy.canHandle(19.9))
        assertFalse(strategy.canHandle(23.0))
    }

    @Test
    fun mildWarmStrategyRangeTest() {
        val strategy = MildWarmStrategy()
        assertTrue(strategy.canHandle(23.0))
        assertTrue(strategy.canHandle(25.0))
        assertTrue(strategy.canHandle(27.9))
        assertFalse(strategy.canHandle(22.9))
        assertFalse(strategy.canHandle(28.0))
    }

    @Test
    fun hotStrategyRangeTest() {
        val strategy = HotStrategy()
        assertTrue(strategy.canHandle(28.0))
        assertTrue(strategy.canHandle(35.0))
        assertFalse(strategy.canHandle(27.9))
    }

    @Test
    fun clothingAdviserTest() {
        val freezing = FreezingStrategy().recommend(-5.0)
        assertTrue(freezing.contains("패딩") || freezing.contains("코트"))

        val hot = HotStrategy().recommend(30.0)
        assertTrue(hot.contains("반팔") || hot.contains("민소매"))
    }
}