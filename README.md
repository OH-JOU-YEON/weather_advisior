# 🌡️ 기온별 옷차림 추천 서비스

Kotlin/JS로 개발한 기온 기반 옷차림 추천 웹 애플리케이션입니다. 

## 📋 목차
- [프로젝트 소개](#-프로젝트-소개)
- [요구사항](#-요구사항)
- [기술 스택](#️-기술-스택)
- [디자인 패턴](#-적용한-디자인-패턴)
- [프로젝트 구조](#-프로젝트-구조)
- [실행 방법](#-실행-방법)
- [배운 점](#-배운-점)

## 📌 프로젝트 소개

### 개발 배경
우아한테크코스 8기 "도전"이라는 컨셉에 맞춰, 코틀린을 새롭게 학습하며 전에 만들었던 토이 프로젝트를 새로운 스택으로 리메이크 했습니다. 

- **기존 프로젝트**: [성수동 코트계산기](https://github.com/OH-JOU-YEON/coatCalculator) (React)
- **이번 도전**: 코틀린 학습, 기존 프로젝트의 완성도 보완 

## 📋 요구사항

### 1. 기능적 요구사항

#### 1.1 지역 선택 및 조회
- [ ] 사용자는 드롭다운에서 원하는 지역을 선택할 수 있다
- [ ] 지원 지역: 서울, 인천, 수원, 부산, 대구, 대전, 광주, 울산, 제주, 강릉, 춘천, 청주, 전주, 포항, 창원 (총 15개)
- [ ] 지역을 선택하지 않으면 경고 메시지를 표시한다

#### 1.2 날씨 정보 제공
- [ ] 선택한 지역의 최고 기온을 표시한다
- [ ] 선택한 지역의 최저 기온을 표시한다
- [ ] 최고/최저 기온의 평균을 계산하여 표시한다 (소수점 첫째 자리)

#### 1.3 옷차림 추천
- [ ] 평균 기온을 기준으로 적절한 옷차림을 추천한다
- [ ] 9단계의 온도 구간별로 차별화된 추천을 제공한다:
  - 영하(< 0°C): 패딩, 두꺼운 코트, 목도리, 장갑, 털모자
  - 0~4°C: 코트, 가죽자켓, 히트텍, 니트, 레깅스
  - 5~8°C: 자켓, 트렌치코트, 야상, 니트, 청바지
  - 9~11°C: 자켓, 가디건, 야상, 맨투맨, 청바지
  - 12~16°C: 자켓, 가디건, 니트, 맨투맨, 청바지
  - 17~19°C: 얇은 가디건, 맨투맨, 후드티, 긴바지
  - 20~22°C: 긴팔티, 면바지, 청바지
  - 23~27°C: 반팔, 얇은 셔츠, 반바지, 면바지
  - 28°C 이상: 민소매, 반팔, 반바지, 원피스

#### 1.4 API 연동
- [ ] 기상청 단기예보 API를 통해 실시간 날씨 데이터를 조회한다
- [ ] 현재 시각 기준 가장 최근 발표된 예보를 사용한다
- [ ] API 호출 실패 시 사용자에게 오류 메시지를 표시한다

### 2. 기술적 요구사항

#### 2.1 디자인 패턴
- [ ] **Strategy Pattern**: 온도별 옷차림 추천 로직을 전략으로 분리
- [ ] **Singleton Pattern**: 지역-좌표 매핑 데이터를 전역에서 단일 인스턴스로 관리
- [ ] **Factory Pattern**: 온도에 맞는 추천 전략을 자동으로 선택

#### 2.2 데이터 모델
- [ ] `WeatherData`: 지역명, 최고기온, 최저기온, 평균기온을 포함
- [ ] `GridCoordinate`: 기상청 격자 좌표(nx, ny)를 표현

#### 2.3 API 처리
- [ ] 지역명을 기상청 격자 좌표로 변환한다
- [ ] 기상청 발표 시각(02, 05, 08, 11, 14, 17, 20, 23시)에 맞춰 `base_time`을 계산한다
- [ ] 새벽 0~2시는 전날 23시 데이터를 사용한다
- [ ] CORS 프록시를 통해 브라우저에서 API를 호출한다

#### 2.4 UI/UX
- [ ] 로딩 중일 때 "날씨 정보를 불러오는 중..." 메시지를 표시한다
- [ ] 하늘색 배경으로 날씨 테마를 표현한다
- [ ] 카드 형태의 깔끔한 레이아웃을 제공한다

### 3. 비기능적 요구사항

#### 3.1 성능
- [ ] API 응답 시간은 5초 이내여야 한다
- [ ] 페이지 로딩 시간은 3초 이내여야 한다

#### 3.2 호환성
- [ ] Chrome, Firefox, Safari 최신 버전에서 동작한다
- [ ] 모바일 브라우저에서도 사용 가능하다

#### 3.3 배포
- [ ] GitHub Pages를 통해 정적 웹사이트로 배포한다
- [ ] GitHub Actions를 통한 자동 배포가 가능하다

### 4. 제약사항

#### 4.1 기술적 제약
- [ ] Kotlin/JS만 사용 (백엔드 서버 없음)
- [ ] CORS 정책으로 인해 프록시 서버 사용 필요
- [ ] 기상청 API 일일 트래픽 제한 준수


## 🛠️ 기술 스택

- **Language**: Kotlin 1.9.20
- **Platform**: Kotlin/JS
- **Build Tool**: Gradle
- **API**: 기상청 단기예보 조회서비스
- **CORS Proxy**: corsproxy.io
- **Deployment**: GitHub Pages + GitHub Actions

## 🎨 적용한 디자인 패턴

### Strategy Pattern
온도별 옷차림 추천 로직을 독립적인 전략으로 분리
```kotlin
interface ClothingStrategy {
    fun recommend(temp: Double): String
    fun canHandle(temp: Double): Boolean
}

class FreezingStrategy : ClothingStrategy {
    override fun canHandle(temp: Double) = temp < 0
    override fun recommend(temp: Double) = "🧥 패딩, 두꺼운 코트..."
}
```

### Singleton Pattern
지역 좌표 데이터를 전역 단일 인스턴스로 관리
```kotlin
object LocationMapper {
    private val locationMap = mapOf(...)
    fun getCoordinate(location: String): GridCoordinate?
}
```

### Factory Pattern
온도에 맞는 전략을 자동으로 선택
```kotlin
class ClothingRecommender {
    private val strategies = listOf(...)
    fun getRecommendation(temp: Double): String
}
```

## 📂 프로젝트 구조
```
weather-clothing-advisor/
├── src/
│   └── main/
│       ├── kotlin/
│       │   ├── Main.kt                    # 진입점
│       │   ├── api/
│       │   │   ├── WeatherApi.kt          # API 호출
│       │   │   └── LocationMapper.kt      # 지역-좌표 매핑
│       │   ├── model/
│       │   │   └── WeatherData.kt         # 데이터 모델
│       │   └── strategy/
│       │       ├── ClothingStrategy.kt    # 추천 전략
│       │       └── ClothingRecommender.kt # 전략 선택
│       └── resources/
│           └── index.html                 # UI
└── build.gradle.kts
```

## 🚀 실행 방법

### 개발 서버 실행
```bash
./gradlew browserDevelopmentRun
```

### 프로덕션 빌드
```bash
./gradlew browserProductionWebpack
```

빌드 결과: `build/js/packages/weather-clothing-advisor/kotlin/`

## 💡 배운 점

### Kotlin/JS 특징
1. **타입 안정성**: 컴파일 타임에 많은 오류 방지
2. **코루틴**: 비동기 처리를 간결하게
3. **브라우저 API 접근**: `kotlinx.browser` 패키지
4. **JS 상호운용**: `js()`, `asDynamic()` 활용


### 어려웠던 점과 해결

**1. CORS 정책**
- **문제**: 브라우저에서 기상청 API 직접 호출 불가
- **해결**: CORS 프록시(corsproxy.io) 사용
- **학습**: 웹 보안의 중요성, 백엔드의 필요성 이해

**2. JavaScript 라이브러리 부재**
- **문제**: `String.format()` 같은 기본 함수 없음
- **해결**: Kotlin 확장 함수로 직접 구현
```kotlin
fun Double.format(digits: Int): String {
    return (round(this * 10) / 10).toString()
}
```

## 🔗 링크

- [배포 사이트](https://oh-jou-yeon.github.io/weather_advisior/)
- [기존 React 프로젝트](https://github.com/OH-JOU-YEON/coatCalculator)



