package api

object TimeCalculator {
    fun getCurrentBaseDate(): String {
        val now = js("new Date()")
        val year = now.getFullYear()
        val month = (now.getMonth() + 1).toString().padStart(2, '0')
        val day = now.getDate().toString().padStart(2, '0')
        val hour = now.getHours() as Int

        // 새벽 0시~2시 사이면 전날 데이터 사용
        if (hour < 2) {
            val yesterday = js("new Date()")
            yesterday.setDate(yesterday.getDate() - 1)
            val yYear = yesterday.getFullYear()
            val yMonth = (yesterday.getMonth() + 1).toString().padStart(2, '0')
            val yDay = yesterday.getDate().toString().padStart(2, '0')
            return "$yYear$yMonth$yDay"
        }

        return "$year$month$day"
    }

    fun getCurrentBaseTime(): String {
        val now = js("new Date()")
        val hour = now.getHours() as Int

        // 기상청 API 발표 시각: 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300
        val baseHour = when {
            hour < 2 -> 23  // 전날
            hour < 5 -> 2
            hour < 8 -> 5
            hour < 11 -> 8
            hour < 14 -> 11
            hour < 17 -> 14
            hour < 20 -> 17
            hour < 23 -> 20
            else -> 23
        }

        return baseHour.toString().padStart(2, '0') + "00"
    }
}