package api

data class GridCoordinate(val nx: Int, val ny: Int)

object LocationMapper {
    private val locationMap = mapOf(
        "서울" to GridCoordinate(60, 127),
        "인천" to GridCoordinate(55, 124),
        "수원" to GridCoordinate(60, 121),
        "부산" to GridCoordinate(98, 76),
        "대구" to GridCoordinate(89, 90),
        "대전" to GridCoordinate(67, 100),
        "광주" to GridCoordinate(58, 74),
        "울산" to GridCoordinate(102, 84),
        "제주" to GridCoordinate(52, 38),
        "강릉" to GridCoordinate(92, 131),
        "춘천" to GridCoordinate(73, 134),
        "청주" to GridCoordinate(69, 106),
        "전주" to GridCoordinate(63, 89),
        "포항" to GridCoordinate(102, 94),
        "창원" to GridCoordinate(90, 77)
    )

    fun getCoordinate(location: String): GridCoordinate? {
        return locationMap[location]
    }

    fun getSupportedLocations(): List<String> {
        return locationMap.keys.toList()
    }
}