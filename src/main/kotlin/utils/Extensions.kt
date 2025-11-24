package utils

import kotlin.math.round

fun Double.format(digits: Int): String {
    val multiplier = 10.0
    return (round(this * multiplier) / multiplier).toString()
}

fun String.padStart(length: Int, padChar: Char): String {
    return if (this.length >= length) this
    else padChar.toString().repeat(length - this.length) + this
}