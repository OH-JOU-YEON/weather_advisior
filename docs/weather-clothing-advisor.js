(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.ohjeon:weather-clothing-advisor'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.ohjeon:weather-clothing-advisor'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.ohjeon:weather-clothing-advisor'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.ohjeon:weather-clothing-advisor'.");
    }
    root['com.ohjeon:weather-clothing-advisor'] = factory(typeof this['com.ohjeon:weather-clothing-advisor'] === 'undefined' ? {} : this['com.ohjeon:weather-clothing-advisor'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.u3;
  var objectMeta = kotlin_kotlin.$_$.t3;
  var setMetadataFor = kotlin_kotlin.$_$.v3;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.x2;
  var Unit_getInstance = kotlin_kotlin.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.t4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.p3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h2;
  var trimIndent = kotlin_kotlin.$_$.i4;
  var Exception = kotlin_kotlin.$_$.o4;
  var classMeta = kotlin_kotlin.$_$.e3;
  var VOID = kotlin_kotlin.$_$.b;
  var isCharSequence = kotlin_kotlin.$_$.o3;
  var trim = kotlin_kotlin.$_$.j4;
  var toString = kotlin_kotlin.$_$.x3;
  var charSequenceLength = kotlin_kotlin.$_$.d3;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.y2;
  var to = kotlin_kotlin.$_$.d5;
  var mapOf = kotlin_kotlin.$_$.z1;
  var toList = kotlin_kotlin.$_$.e2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b1;
  var padStart = kotlin_kotlin.$_$.e4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.p;
  var isArray = kotlin_kotlin.$_$.n3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var toDoubleOrNull = kotlin_kotlin.$_$.g4;
  var maxOrNull = kotlin_kotlin.$_$.a2;
  var minOrNull = kotlin_kotlin.$_$.b2;
  var getStringHashCode = kotlin_kotlin.$_$.k3;
  var getNumberHashCode = kotlin_kotlin.$_$.j3;
  var equals = kotlin_kotlin.$_$.h3;
  var listOf = kotlin_kotlin.$_$.x1;
  var interfaceMeta = kotlin_kotlin.$_$.m3;
  var round = kotlin_kotlin.$_$.y3;
  var toString_0 = kotlin_kotlin.$_$.e1;
  var repeat = kotlin_kotlin.$_$.f4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApiConstants, 'ApiConstants', objectMeta);
  setMetadataFor(UiConstants, 'UiConstants', objectMeta);
  setMetadataFor(main$lambda$lambda$slambda, 'main$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(GridCoordinate, 'GridCoordinate', classMeta);
  setMetadataFor(LocationMapper, 'LocationMapper', objectMeta);
  setMetadataFor(TimeCalculator, 'TimeCalculator', objectMeta);
  setMetadataFor(UrlBuilder, 'UrlBuilder', objectMeta);
  setMetadataFor($fetchWeatherCOROUTINE$0, '$fetchWeatherCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(WeatherApi, 'WeatherApi', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WeatherDataParser, 'WeatherDataParser', objectMeta);
  setMetadataFor(WeatherData, 'WeatherData', classMeta);
  setMetadataFor(ClothingRecommender, 'ClothingRecommender', classMeta, VOID, VOID, ClothingRecommender);
  setMetadataFor(ClothingStrategy, 'ClothingStrategy', interfaceMeta);
  setMetadataFor(FreezingStrategy, 'FreezingStrategy', classMeta, VOID, [ClothingStrategy], FreezingStrategy);
  setMetadataFor(ColdStrategy, 'ColdStrategy', classMeta, VOID, [ClothingStrategy], ColdStrategy);
  setMetadataFor(CoolStrategy, 'CoolStrategy', classMeta, VOID, [ClothingStrategy], CoolStrategy);
  setMetadataFor(MildCoolStrategy, 'MildCoolStrategy', classMeta, VOID, [ClothingStrategy], MildCoolStrategy);
  setMetadataFor(MildStrategy, 'MildStrategy', classMeta, VOID, [ClothingStrategy], MildStrategy);
  setMetadataFor(WarmStrategy, 'WarmStrategy', classMeta, VOID, [ClothingStrategy], WarmStrategy);
  setMetadataFor(PleasantStrategy, 'PleasantStrategy', classMeta, VOID, [ClothingStrategy], PleasantStrategy);
  setMetadataFor(MildWarmStrategy, 'MildWarmStrategy', classMeta, VOID, [ClothingStrategy], MildWarmStrategy);
  setMetadataFor(HotStrategy, 'HotStrategy', classMeta, VOID, [ClothingStrategy], HotStrategy);
  //endregion
  function ApiConstants() {
    ApiConstants_instance = this;
    this.SERVICE_KEY_1 = 'f3e027a9e45f36b26cbb7680cea525e6da12c046339f67677115fc68da0a966c';
    this.BASE_URL_1 = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
    this.CORS_PROXY_1 = 'https://corsproxy.io/?';
    this.ENDPOINT_1 = '/getVilageFcst';
    this.NUM_OF_ROWS_1 = 100;
    this.PAGE_NO_1 = 1;
    this.DATA_TYPE_1 = 'JSON';
  }
  protoOf(ApiConstants).get_SERVICE_KEY_hmo5yk_k$ = function () {
    return this.SERVICE_KEY_1;
  };
  protoOf(ApiConstants).get_BASE_URL_npypbe_k$ = function () {
    return this.BASE_URL_1;
  };
  protoOf(ApiConstants).get_CORS_PROXY_y5ashx_k$ = function () {
    return this.CORS_PROXY_1;
  };
  protoOf(ApiConstants).get_ENDPOINT_9xmjby_k$ = function () {
    return this.ENDPOINT_1;
  };
  protoOf(ApiConstants).get_NUM_OF_ROWS_qb9vr5_k$ = function () {
    return this.NUM_OF_ROWS_1;
  };
  protoOf(ApiConstants).get_PAGE_NO_5ddh4_k$ = function () {
    return this.PAGE_NO_1;
  };
  protoOf(ApiConstants).get_DATA_TYPE_ly9hiy_k$ = function () {
    return this.DATA_TYPE_1;
  };
  var ApiConstants_instance;
  function ApiConstants_getInstance() {
    if (ApiConstants_instance == null)
      new ApiConstants();
    return ApiConstants_instance;
  }
  function UiConstants() {
    UiConstants_instance = this;
    this.LOADING_MESSAGE_1 = '\uB0A0\uC528 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...';
    this.SELECT_LOCATION_ALERT_1 = '\uC9C0\uC5ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694!';
    this.ERROR_MESSAGE_PREFIX_1 = '\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ';
  }
  protoOf(UiConstants).get_LOADING_MESSAGE_yphvx7_k$ = function () {
    return this.LOADING_MESSAGE_1;
  };
  protoOf(UiConstants).get_SELECT_LOCATION_ALERT_6eix5g_k$ = function () {
    return this.SELECT_LOCATION_ALERT_1;
  };
  protoOf(UiConstants).get_ERROR_MESSAGE_PREFIX_qu5dnu_k$ = function () {
    return this.ERROR_MESSAGE_PREFIX_1;
  };
  var UiConstants_instance;
  function UiConstants_getInstance() {
    if (UiConstants_instance == null)
      new UiConstants();
    return UiConstants_instance;
  }
  function main() {
    var scope = MainScope();
    var weatherApi = new WeatherApi(ApiConstants_getInstance().get_SERVICE_KEY_hmo5yk_k$());
    var recommender = new ClothingRecommender();
    var tmp = window;
    tmp.onload = main$lambda(scope, weatherApi, recommender);
  }
  function main$lambda$lambda$slambda($resultDiv, $weatherApi, $location, $recommender, resultContinuation) {
    this.$resultDiv_1 = $resultDiv;
    this.$weatherApi_1 = $weatherApi;
    this.$location_1 = $location;
    this.$recommender_1 = $recommender;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.$resultDiv_1.innerHTML = '<p>' + UiConstants_getInstance().get_LOADING_MESSAGE_yphvx7_k$() + '<\/p>';
            this.$resultDiv_1.style.display = 'block';
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$weatherApi_1.fetchWeather_g7aphf_k$(this.$location_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var weatherData = suspendResult;
            var recommendation = this.$recommender_1.getRecommendation_kfg62x_k$(weatherData.get_avgTemp_95tnoj_k$());
            this.$resultDiv_1.innerHTML = trimIndent('\n                        <h3>' + weatherData.get_location_d3s02_k$() + ' \uB0A0\uC528 \uC815\uBCF4<\/h3>\n                        \n                        <div class="temp-info">\n                            <strong>\uCD5C\uACE0 \uAE30\uC628:<\/strong> ' + weatherData.get_maxTemp_f842un_k$() + '\xB0C\n                        <\/div>\n                        \n                        <div class="temp-info">\n                            <strong>\uCD5C\uC800 \uAE30\uC628:<\/strong> ' + weatherData.get_minTemp_iuz42l_k$() + '\xB0C\n                        <\/div>\n                        \n                        <div class="temp-info">\n                            <strong>\uD3C9\uADE0 \uAE30\uC628:<\/strong> ' + format(weatherData.get_avgTemp_95tnoj_k$(), 1) + '\xB0C\n                        <\/div>\n                        \n                        <div class="recommendation">\n                            <strong>\uCD94\uCC9C \uC637\uCC28\uB9BC:<\/strong><br>\n                            ' + recommendation + '\n                        <\/div>\n                    ');
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              this.$resultDiv_1.innerHTML = "<p style='color: red;'>" + UiConstants_getInstance().get_ERROR_MESSAGE_PREFIX_qu5dnu_k$() + e.message + '<\/p>';
              console.error('Error:', e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(main$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$lambda$lambda$slambda(this.$resultDiv_1, this.$weatherApi_1, this.$location_1, this.$recommender_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$lambda$lambda$slambda_0($resultDiv, $weatherApi, $location, $recommender, resultContinuation) {
    var i = new main$lambda$lambda$slambda($resultDiv, $weatherApi, $location, $recommender, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda($locationSelect, $scope, $resultDiv, $weatherApi, $recommender) {
    return function (_anonymous_parameter_0__qggqh8) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = $locationSelect.value;
      var location = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(location) === 0) {
        window.alert(UiConstants_getInstance().get_SELECT_LOCATION_ALERT_6eix5g_k$());
        return Unit_getInstance();
      }
      launch($scope, VOID, VOID, main$lambda$lambda$slambda_0($resultDiv, $weatherApi, location, $recommender, null));
      return Unit_getInstance();
    };
  }
  function main$lambda($scope, $weatherApi, $recommender) {
    return function (it) {
      var tmp = document.getElementById('searchBtn');
      var searchBtn = tmp instanceof HTMLButtonElement ? tmp : THROW_CCE();
      var tmp_0 = document.getElementById('location');
      var locationSelect = tmp_0 instanceof HTMLSelectElement ? tmp_0 : THROW_CCE();
      var tmp_1 = document.getElementById('result');
      var resultDiv = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
      searchBtn.addEventListener('click', main$lambda$lambda(locationSelect, $scope, resultDiv, $weatherApi, $recommender));
      return Unit_getInstance();
    };
  }
  function GridCoordinate(nx, ny) {
    this.nx_1 = nx;
    this.ny_1 = ny;
  }
  protoOf(GridCoordinate).get_nx_kntnsd_k$ = function () {
    return this.nx_1;
  };
  protoOf(GridCoordinate).get_ny_kntnsc_k$ = function () {
    return this.ny_1;
  };
  protoOf(GridCoordinate).component1_7eebsc_k$ = function () {
    return this.nx_1;
  };
  protoOf(GridCoordinate).component2_7eebsb_k$ = function () {
    return this.ny_1;
  };
  protoOf(GridCoordinate).copy_fhtu3_k$ = function (nx, ny) {
    return new GridCoordinate(nx, ny);
  };
  protoOf(GridCoordinate).copy$default_qgzagm_k$ = function (nx, ny, $super) {
    nx = nx === VOID ? this.nx_1 : nx;
    ny = ny === VOID ? this.ny_1 : ny;
    return $super === VOID ? this.copy_fhtu3_k$(nx, ny) : $super.copy_fhtu3_k$.call(this, nx, ny);
  };
  protoOf(GridCoordinate).toString = function () {
    return 'GridCoordinate(nx=' + this.nx_1 + ', ny=' + this.ny_1 + ')';
  };
  protoOf(GridCoordinate).hashCode = function () {
    var result = this.nx_1;
    result = imul(result, 31) + this.ny_1 | 0;
    return result;
  };
  protoOf(GridCoordinate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GridCoordinate))
      return false;
    var tmp0_other_with_cast = other instanceof GridCoordinate ? other : THROW_CCE();
    if (!(this.nx_1 === tmp0_other_with_cast.nx_1))
      return false;
    if (!(this.ny_1 === tmp0_other_with_cast.ny_1))
      return false;
    return true;
  };
  function _get_locationMap__qe0oay($this) {
    return $this.locationMap_1;
  }
  function LocationMapper() {
    LocationMapper_instance = this;
    this.locationMap_1 = mapOf([to('\uC11C\uC6B8', new GridCoordinate(60, 127)), to('\uC778\uCC9C', new GridCoordinate(55, 124)), to('\uC218\uC6D0', new GridCoordinate(60, 121)), to('\uBD80\uC0B0', new GridCoordinate(98, 76)), to('\uB300\uAD6C', new GridCoordinate(89, 90)), to('\uB300\uC804', new GridCoordinate(67, 100)), to('\uAD11\uC8FC', new GridCoordinate(58, 74)), to('\uC6B8\uC0B0', new GridCoordinate(102, 84)), to('\uC81C\uC8FC', new GridCoordinate(52, 38)), to('\uAC15\uB989', new GridCoordinate(92, 131)), to('\uCD98\uCC9C', new GridCoordinate(73, 134)), to('\uCCAD\uC8FC', new GridCoordinate(69, 106)), to('\uC804\uC8FC', new GridCoordinate(63, 89)), to('\uD3EC\uD56D', new GridCoordinate(102, 94)), to('\uCC3D\uC6D0', new GridCoordinate(90, 77))]);
  }
  protoOf(LocationMapper).getCoordinate_2x0a4s_k$ = function (location) {
    return this.locationMap_1.get_wei43m_k$(location);
  };
  protoOf(LocationMapper).getSupportedLocations_ggv1ae_k$ = function () {
    return toList(this.locationMap_1.get_keys_wop4xp_k$());
  };
  var LocationMapper_instance;
  function LocationMapper_getInstance() {
    if (LocationMapper_instance == null)
      new LocationMapper();
    return LocationMapper_instance;
  }
  function TimeCalculator() {
    TimeCalculator_instance = this;
  }
  protoOf(TimeCalculator).getCurrentBaseDate_14kvia_k$ = function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = padStart(toString(now.getMonth() + 1), 2, _Char___init__impl__6a9atx(48));
    var day = padStart(toString(now.getDate()), 2, _Char___init__impl__6a9atx(48));
    var tmp = now.getHours();
    var hour = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    if (hour < 2) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      var yYear = yesterday.getFullYear();
      var yMonth = padStart(toString(yesterday.getMonth() + 1), 2, _Char___init__impl__6a9atx(48));
      var yDay = padStart(toString(yesterday.getDate()), 2, _Char___init__impl__6a9atx(48));
      return '' + yYear + yMonth + yDay;
    }
    return '' + year + month + day;
  };
  protoOf(TimeCalculator).getCurrentBaseTime_14v929_k$ = function () {
    var now = new Date();
    var tmp = now.getHours();
    var hour = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var baseHour = hour < 2 ? 23 : hour < 5 ? 2 : hour < 8 ? 5 : hour < 11 ? 8 : hour < 14 ? 11 : hour < 17 ? 14 : hour < 20 ? 17 : hour < 23 ? 20 : 23;
    return padStart(baseHour.toString(), 2, _Char___init__impl__6a9atx(48)) + '00';
  };
  var TimeCalculator_instance;
  function TimeCalculator_getInstance() {
    if (TimeCalculator_instance == null)
      new TimeCalculator();
    return TimeCalculator_instance;
  }
  function UrlBuilder() {
    UrlBuilder_instance = this;
  }
  protoOf(UrlBuilder).build_ffcc2r_k$ = function (serviceKey, coordinate, baseDate, baseTime) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'api.UrlBuilder.build.<anonymous>' call
    this_0.append_22ad7x_k$(ApiConstants_getInstance().get_BASE_URL_npypbe_k$());
    this_0.append_22ad7x_k$(ApiConstants_getInstance().get_ENDPOINT_9xmjby_k$());
    this_0.append_22ad7x_k$('?serviceKey=' + serviceKey);
    this_0.append_22ad7x_k$('&numOfRows=' + ApiConstants_getInstance().get_NUM_OF_ROWS_qb9vr5_k$());
    this_0.append_22ad7x_k$('&pageNo=' + ApiConstants_getInstance().get_PAGE_NO_5ddh4_k$());
    this_0.append_22ad7x_k$('&dataType=' + ApiConstants_getInstance().get_DATA_TYPE_ly9hiy_k$());
    this_0.append_22ad7x_k$('&base_date=' + baseDate);
    this_0.append_22ad7x_k$('&base_time=' + baseTime);
    this_0.append_22ad7x_k$('&nx=' + coordinate.get_nx_kntnsd_k$());
    this_0.append_22ad7x_k$('&ny=' + coordinate.get_ny_kntnsc_k$());
    var apiUrl = this_0.toString();
    var tmp = encodeURIComponent(apiUrl);
    var encodedUrl = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return ApiConstants_getInstance().get_CORS_PROXY_y5ashx_k$() + encodedUrl;
  };
  var UrlBuilder_instance;
  function UrlBuilder_getInstance() {
    if (UrlBuilder_instance == null)
      new UrlBuilder();
    return UrlBuilder_instance;
  }
  function _get_serviceKey__7xs8dd($this) {
    return $this.serviceKey_1;
  }
  function $fetchWeatherCOROUTINE$0(_this__u8e3s4, location, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.location_1 = location;
  }
  protoOf($fetchWeatherCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            var tmp0_elvis_lhs = LocationMapper_getInstance().getCoordinate_2x0a4s_k$(this.location_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC9C0\uC5ED\uC785\uB2C8\uB2E4');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.coordinate0__1 = tmp_1;
            this.baseDate1__1 = TimeCalculator_getInstance().getCurrentBaseDate_14kvia_k$();
            this.baseTime2__1 = TimeCalculator_getInstance().getCurrentBaseTime_14v929_k$();
            this.url3__1 = UrlBuilder_getInstance().build_ffcc2r_k$(this._this__u8e3s4__1.serviceKey_1, this.coordinate0__1, this.baseDate1__1, this.baseTime2__1);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this.url3__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response5__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.response5__1.text(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var text = suspendResult;
            console.log('API Response:', text);
            var jsonData = JSON.parse(text);
            this.TRY_RESULT4__1 = WeatherDataParser_getInstance().parse_sf0uq3_k$(this.location_1, jsonData);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              console.error('API Error:', e);
              throw Exception_init_$Create$('\uB0A0\uC528 \uC815\uBCF4\uB97C \uAC00\uC838\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: ' + e.message);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_fex74n_k$(4);
            return this.TRY_RESULT4__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function WeatherApi(serviceKey) {
    this.serviceKey_1 = serviceKey;
  }
  protoOf(WeatherApi).fetchWeather_g7aphf_k$ = function (location, $completion) {
    var tmp = new $fetchWeatherCOROUTINE$0(this, location, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function WeatherDataParser() {
    WeatherDataParser_instance = this;
  }
  protoOf(WeatherDataParser).parse_sf0uq3_k$ = function (location, jsonData) {
    // Inline function 'kotlin.js.asDynamic' call
    var response = jsonData.response;
    var tmp = response.body.items.item;
    var items = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var maxTemp = null;
    var minTemp = null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var temperatures = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = items.length;
    $l$loop: while (inductionVariable < last) {
      var item = items[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = item.category;
      var category = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = item.fcstValue;
      var tmp1_elvis_lhs = toDoubleOrNull((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var fcstValue = tmp_2;
      switch (category) {
        case 'TMX':
          maxTemp = fcstValue;
          break;
        case 'TMN':
          minTemp = fcstValue;
          break;
        case 'TMP':
          temperatures.add_utx5q5_k$(fcstValue);
          break;
      }
    }
    var tmp3_elvis_lhs = maxTemp;
    var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? maxOrNull(temperatures) : tmp3_elvis_lhs;
    var finalMaxTemp = tmp4_elvis_lhs == null ? 15.0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = minTemp;
    var tmp6_elvis_lhs = tmp5_elvis_lhs == null ? minOrNull(temperatures) : tmp5_elvis_lhs;
    var finalMinTemp = tmp6_elvis_lhs == null ? 5.0 : tmp6_elvis_lhs;
    return new WeatherData(location, finalMaxTemp, finalMinTemp);
  };
  var WeatherDataParser_instance;
  function WeatherDataParser_getInstance() {
    if (WeatherDataParser_instance == null)
      new WeatherDataParser();
    return WeatherDataParser_instance;
  }
  function WeatherData(location, maxTemp, minTemp) {
    this.location_1 = location;
    this.maxTemp_1 = maxTemp;
    this.minTemp_1 = minTemp;
  }
  protoOf(WeatherData).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  protoOf(WeatherData).get_maxTemp_f842un_k$ = function () {
    return this.maxTemp_1;
  };
  protoOf(WeatherData).get_minTemp_iuz42l_k$ = function () {
    return this.minTemp_1;
  };
  protoOf(WeatherData).get_avgTemp_95tnoj_k$ = function () {
    return (this.maxTemp_1 + this.minTemp_1) / 2;
  };
  protoOf(WeatherData).component1_7eebsc_k$ = function () {
    return this.location_1;
  };
  protoOf(WeatherData).component2_7eebsb_k$ = function () {
    return this.maxTemp_1;
  };
  protoOf(WeatherData).component3_7eebsa_k$ = function () {
    return this.minTemp_1;
  };
  protoOf(WeatherData).copy_jznckl_k$ = function (location, maxTemp, minTemp) {
    return new WeatherData(location, maxTemp, minTemp);
  };
  protoOf(WeatherData).copy$default_1e6heu_k$ = function (location, maxTemp, minTemp, $super) {
    location = location === VOID ? this.location_1 : location;
    maxTemp = maxTemp === VOID ? this.maxTemp_1 : maxTemp;
    minTemp = minTemp === VOID ? this.minTemp_1 : minTemp;
    return $super === VOID ? this.copy_jznckl_k$(location, maxTemp, minTemp) : $super.copy_jznckl_k$.call(this, location, maxTemp, minTemp);
  };
  protoOf(WeatherData).toString = function () {
    return 'WeatherData(location=' + this.location_1 + ', maxTemp=' + this.maxTemp_1 + ', minTemp=' + this.minTemp_1 + ')';
  };
  protoOf(WeatherData).hashCode = function () {
    var result = getStringHashCode(this.location_1);
    result = imul(result, 31) + getNumberHashCode(this.maxTemp_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.minTemp_1) | 0;
    return result;
  };
  protoOf(WeatherData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeatherData))
      return false;
    var tmp0_other_with_cast = other instanceof WeatherData ? other : THROW_CCE();
    if (!(this.location_1 === tmp0_other_with_cast.location_1))
      return false;
    if (!equals(this.maxTemp_1, tmp0_other_with_cast.maxTemp_1))
      return false;
    if (!equals(this.minTemp_1, tmp0_other_with_cast.minTemp_1))
      return false;
    return true;
  };
  function _get_strategies__dkk9y2($this) {
    return $this.strategies_1;
  }
  function ClothingRecommender() {
    this.strategies_1 = listOf([new FreezingStrategy(), new ColdStrategy(), new CoolStrategy(), new MildCoolStrategy(), new MildStrategy(), new WarmStrategy(), new PleasantStrategy(), new MildWarmStrategy(), new HotStrategy()]);
  }
  protoOf(ClothingRecommender).getRecommendation_kfg62x_k$ = function (temp) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.strategies_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'strategy.ClothingRecommender.getRecommendation.<anonymous>' call
        if (element.canHandle_cmzudu_k$(temp)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.recommend_cb2iiy_k$(temp);
    return tmp1_elvis_lhs == null ? '\uC801\uC808\uD55C \uC637\uCC28\uB9BC\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.' : tmp1_elvis_lhs;
  };
  function ClothingStrategy() {
  }
  function FreezingStrategy() {
  }
  protoOf(FreezingStrategy).canHandle_cmzudu_k$ = function (temp) {
    return temp < 0.0;
  };
  protoOf(FreezingStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83E\uDDE5 \uD328\uB529, \uB450\uAEBC\uC6B4 \uCF54\uD2B8, \uBAA9\uB3C4\uB9AC, \uC7A5\uAC11, \uD138\uBAA8\uC790';
  };
  function ColdStrategy() {
  }
  protoOf(ColdStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 0.0 <= temp ? temp <= 4.9 : false;
  };
  protoOf(ColdStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83E\uDDE5 \uCF54\uD2B8, \uAC00\uC8FD\uC790\uCF13, \uD788\uD2B8\uD14D, \uB2C8\uD2B8, \uB808\uAE45\uC2A4';
  };
  function CoolStrategy() {
  }
  protoOf(CoolStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 5.0 <= temp ? temp <= 8.9 : false;
  };
  protoOf(CoolStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83E\uDDE5 \uC790\uCF13, \uD2B8\uB80C\uCE58\uCF54\uD2B8, \uC57C\uC0C1, \uB2C8\uD2B8, \uCCAD\uBC14\uC9C0';
  };
  function MildCoolStrategy() {
  }
  protoOf(MildCoolStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 9.0 <= temp ? temp <= 11.9 : false;
  };
  protoOf(MildCoolStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83E\uDDE5 \uC790\uCF13, \uAC00\uB514\uAC74, \uC57C\uC0C1, \uB9E8\uD22C\uB9E8, \uCCAD\uBC14\uC9C0';
  };
  function MildStrategy() {
  }
  protoOf(MildStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 12.0 <= temp ? temp <= 16.9 : false;
  };
  protoOf(MildStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83D\uDC55 \uC790\uCF13, \uAC00\uB514\uAC74, \uB2C8\uD2B8, \uB9E8\uD22C\uB9E8, \uCCAD\uBC14\uC9C0';
  };
  function WarmStrategy() {
  }
  protoOf(WarmStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 17.0 <= temp ? temp <= 19.9 : false;
  };
  protoOf(WarmStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83D\uDC55 \uC587\uC740 \uAC00\uB514\uAC74, \uB9E8\uD22C\uB9E8, \uD6C4\uB4DC\uD2F0, \uAE34\uBC14\uC9C0';
  };
  function PleasantStrategy() {
  }
  protoOf(PleasantStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 20.0 <= temp ? temp <= 22.9 : false;
  };
  protoOf(PleasantStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83D\uDC55 \uAE34\uD314\uD2F0, \uBA74\uBC14\uC9C0, \uCCAD\uBC14\uC9C0';
  };
  function MildWarmStrategy() {
  }
  protoOf(MildWarmStrategy).canHandle_cmzudu_k$ = function (temp) {
    return 23.0 <= temp ? temp <= 27.9 : false;
  };
  protoOf(MildWarmStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83D\uDC55 \uBC18\uD314, \uC587\uC740 \uC154\uCE20, \uBC18\uBC14\uC9C0, \uBA74\uBC14\uC9C0';
  };
  function HotStrategy() {
  }
  protoOf(HotStrategy).canHandle_cmzudu_k$ = function (temp) {
    return temp >= 28.0;
  };
  protoOf(HotStrategy).recommend_cb2iiy_k$ = function (temp) {
    return '\uD83D\uDC55 \uBBFC\uC18C\uB9E4, \uBC18\uD314, \uBC18\uBC14\uC9C0, \uC6D0\uD53C\uC2A4';
  };
  function format(_this__u8e3s4, digits) {
    var multiplier = 10.0;
    return (round(_this__u8e3s4 * multiplier) / multiplier).toString();
  }
  function padStart_0(_this__u8e3s4, length, padChar) {
    return _this__u8e3s4.length >= length ? _this__u8e3s4 : repeat(toString_0(padChar), length - _this__u8e3s4.length | 0) + _this__u8e3s4;
  }
  main();
  return _;
}));

//# sourceMappingURL=weather-clothing-advisor.js.map
