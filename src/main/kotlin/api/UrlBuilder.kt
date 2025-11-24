package api

object UrlBuilder {
    fun build(
        serviceKey: String,
        coordinate: GridCoordinate,
        baseDate: String,
        baseTime: String
    ): String {
        val apiUrl = buildString {
            append(ApiConstants.BASE_URL)
            append(ApiConstants.ENDPOINT)
            append("?serviceKey=$serviceKey")
            append("&numOfRows=${ApiConstants.NUM_OF_ROWS}")
            append("&pageNo=${ApiConstants.PAGE_NO}")
            append("&dataType=${ApiConstants.DATA_TYPE}")
            append("&base_date=$baseDate")
            append("&base_time=$baseTime")
            append("&nx=${coordinate.nx}")
            append("&ny=${coordinate.ny}")
        }

        val encodedUrl = js("encodeURIComponent")(apiUrl) as String
        return "${ApiConstants.CORS_PROXY}$encodedUrl"
    }
}