package api

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull


class LocationMapperTest {

    @Test
    fun locationMappingTest() {
        val supportedLocations = listOf(
            "서울", "인천", "수원", "부산", "대구",
            "대전", "광주", "울산", "제주", "강릉",
            "춘천", "청주", "전주", "포항", "창원"
        )

        supportedLocations.forEach { location ->
            val coordinate = LocationMapper.getCoordinate(location)
            assertNotNull(coordinate, "$location 의 좌표가 없습니다")
        }
    }

    @Test
    fun notApplyLocationTest() {
        val unsupportedLocations = listOf(
            "뉴욕", "도쿄", "파리", "존재하지않는도시", ""
        )

        unsupportedLocations.forEach { location ->
            val coordinate = LocationMapper.getCoordinate(location)
            assertNull(coordinate, "$location 는 지원하지 않아야 합니다")
        }
    }

    @Test
    fun specificLocationTest() {
        val coordinate = LocationMapper.getCoordinate("서울")
        assertNotNull(coordinate)
        assertEquals(60, coordinate.nx)
        assertEquals(127, coordinate.ny)
    }

    @Test
    fun locationCountTest() {
        val locations = LocationMapper.getSupportedLocations()
        assertEquals(15, locations.size)
    }

}