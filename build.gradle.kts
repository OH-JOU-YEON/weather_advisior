plugins {
    kotlin("js") version "1.9.20"
}

group = "com.ohjeon"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
            binaries.executable()
        }
    }
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.9.1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
}