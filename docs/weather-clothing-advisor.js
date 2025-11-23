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
  var round = kotlin_kotlin.$_$.q2;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var protoOf = kotlin_kotlin.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.a3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.l2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k1;
  var trimIndent = kotlin_kotlin.$_$.t2;
  var Exception = kotlin_kotlin.$_$.x2;
  var classMeta = kotlin_kotlin.$_$.d2;
  var setMetadataFor = kotlin_kotlin.$_$.o2;
  var VOID = kotlin_kotlin.$_$.b;
  var isCharSequence = kotlin_kotlin.$_$.k2;
  var trim = kotlin_kotlin.$_$.u2;
  var toString = kotlin_kotlin.$_$.p2;
  var charSequenceLength = kotlin_kotlin.$_$.c2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var to = kotlin_kotlin.$_$.i3;
  var mapOf = kotlin_kotlin.$_$.g1;
  var toList = kotlin_kotlin.$_$.i1;
  var objectMeta = kotlin_kotlin.$_$.m2;
  var isArray = kotlin_kotlin.$_$.j2;
  var toDoubleOrNull = kotlin_kotlin.$_$.s2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t;
  var padStart = kotlin_kotlin.$_$.r2;
  var joinToString = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.g2;
  var getNumberHashCode = kotlin_kotlin.$_$.f2;
  var equals = kotlin_kotlin.$_$.e2;
  var listOf = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(main$lambda$lambda$slambda, 'main$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(GridCoordinate, 'GridCoordinate', classMeta);
  setMetadataFor(LocationMapper, 'LocationMapper', objectMeta);
  setMetadataFor($fetchWeatherCOROUTINE$0, '$fetchWeatherCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(WeatherApi, 'WeatherApi', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WeatherData, 'WeatherData', classMeta);
  setMetadataFor(ClothingRecommender, 'ClothingRecommender', classMeta, VOID, VOID, ClothingRecommender);
  setMetadataFor(FreezingStrategy, 'FreezingStrategy', classMeta, VOID, VOID, FreezingStrategy);
  setMetadataFor(ColdStrategy, 'ColdStrategy', classMeta, VOID, VOID, ColdStrategy);
  setMetadataFor(CoolStrategy, 'CoolStrategy', classMeta, VOID, VOID, CoolStrategy);
  setMetadataFor(MildCoolStrategy, 'MildCoolStrategy', classMeta, VOID, VOID, MildCoolStrategy);
  setMetadataFor(MildStrategy, 'MildStrategy', classMeta, VOID, VOID, MildStrategy);
  setMetadataFor(WarmStrategy, 'WarmStrategy', classMeta, VOID, VOID, WarmStrategy);
  setMetadataFor(PleasantStrategy, 'PleasantStrategy', classMeta, VOID, VOID, PleasantStrategy);
  setMetadataFor(MildWarmStrategy, 'MildWarmStrategy', classMeta, VOID, VOID, MildWarmStrategy);
  setMetadataFor(HotStrategy, 'HotStrategy', classMeta, VOID, VOID, HotStrategy);
  //endregion
  function format(_this__u8e3s4, digits) {
    var multiplier = 10.0;
    return (round(_this__u8e3s4 * multiplier) / multiplier).toString();
  }
  function main() {
    var scope = MainScope();
    var serviceKey = 'f3e027a9e45f36b26cbb7680cea525e6da12c046339f67677115fc68da0a966c';
    var weatherApi = new WeatherApi(serviceKey);
    var recommender = new ClothingRecommender();
    var tmp = window;
    tmp.onload = main$lambda(scope, weatherApi, recommender);
  }
  function main$lambda$lambda$slambda($resultDiv, $weatherApi, $location, $recommender, resultContinuation) {
    this.ok_1 = $resultDiv;
    this.pk_1 = $weatherApi;
    this.qk_1 = $location;
    this.rk_1 = $recommender;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$slambda).tk = function ($this$launch, $completion) {
    var tmp = this.uk($this$launch, $completion);
    tmp.w6_1 = Unit_instance;
    tmp.x6_1 = null;
    return tmp.h7();
  };
  protoOf(main$lambda$lambda$slambda).u7 = function (p1, $completion) {
    return this.tk((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$slambda).h7 = function () {
    var suspendResult = this.w6_1;
    $sm: do
      try {
        var tmp = this.u6_1;
        switch (tmp) {
          case 0:
            this.v6_1 = 3;
            this.v6_1 = 2;
            this.ok_1.innerHTML = '<p>\uB0A0\uC528 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...<\/p>';
            this.ok_1.style.display = 'block';
            this.u6_1 = 1;
            suspendResult = this.pk_1.wk(this.qk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var weatherData = suspendResult;
            var maxRecommendation = this.rk_1.bl(weatherData.yk_1);
            var minRecommendation = this.rk_1.bl(weatherData.zk_1);
            var avgRecommendation = this.rk_1.bl(weatherData.cl());
            this.ok_1.innerHTML = trimIndent('\n                        <h3>' + weatherData.xk_1 + ' \uB0A0\uC528 \uC815\uBCF4<\/h3>\n                        <div class="temp-info">\n                            <strong>\uCD5C\uACE0 \uAE30\uC628:<\/strong> ' + weatherData.yk_1 + '\xB0C\n                        <\/div>\n                        <div class="recommendation">\n                            ' + maxRecommendation + '\n                        <\/div>\n                        \n                        <div class="temp-info">\n                            <strong>\uCD5C\uC800 \uAE30\uC628:<\/strong> ' + weatherData.zk_1 + '\xB0C\n                        <\/div>\n                        <div class="recommendation">\n                            ' + minRecommendation + '\n                        <\/div>\n                        \n                        <div class="temp-info">\n                            <strong>\uD3C9\uADE0 \uAE30\uC628:<\/strong> ' + format(weatherData.cl(), 1) + '\xB0C\n                        <\/div>\n                        <div class="recommendation">\n                            ' + avgRecommendation + '\n                        <\/div>\n                    ');
            this.v6_1 = 3;
            this.u6_1 = 4;
            continue $sm;
          case 2:
            this.v6_1 = 3;
            var tmp_0 = this.x6_1;
            if (tmp_0 instanceof Exception) {
              var e = this.x6_1;
              this.ok_1.innerHTML = "<p style='color: red;'>\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: " + e.message + '<\/p>';
              console.error('Error:', e);
              this.u6_1 = 4;
              continue $sm;
            } else {
              throw this.x6_1;
            }

          case 3:
            throw this.x6_1;
          case 4:
            this.v6_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.v6_1 === 3) {
          throw e_0;
        } else {
          this.u6_1 = this.v6_1;
          this.x6_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(main$lambda$lambda$slambda).uk = function ($this$launch, completion) {
    var i = new main$lambda$lambda$slambda(this.ok_1, this.pk_1, this.qk_1, this.rk_1, completion);
    i.sk_1 = $this$launch;
    return i;
  };
  function main$lambda$lambda$slambda_0($resultDiv, $weatherApi, $location, $recommender, resultContinuation) {
    var i = new main$lambda$lambda$slambda($resultDiv, $weatherApi, $location, $recommender, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.tk($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda($locationInput, $scope, $resultDiv, $weatherApi, $recommender) {
    return function (_anonymous_parameter_0__qggqh8) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = $locationInput.value;
      var location = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(location) === 0) {
        window.alert('\uC9C0\uC5ED\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694!');
        return Unit_instance;
      }
      launch($scope, VOID, VOID, main$lambda$lambda$slambda_0($resultDiv, $weatherApi, location, $recommender, null));
      return Unit_instance;
    };
  }
  function main$lambda($scope, $weatherApi, $recommender) {
    return function (it) {
      var tmp = document.getElementById('searchBtn');
      var searchBtn = tmp instanceof HTMLButtonElement ? tmp : THROW_CCE();
      var tmp_0 = document.getElementById('location');
      var locationInput = tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE();
      var tmp_1 = document.getElementById('result');
      var resultDiv = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
      searchBtn.addEventListener('click', main$lambda$lambda(locationInput, $scope, resultDiv, $weatherApi, $recommender));
      return Unit_instance;
    };
  }
  function GridCoordinate(nx, ny) {
    this.dl_1 = nx;
    this.el_1 = ny;
  }
  protoOf(GridCoordinate).toString = function () {
    return 'GridCoordinate(nx=' + this.dl_1 + ', ny=' + this.el_1 + ')';
  };
  protoOf(GridCoordinate).hashCode = function () {
    var result = this.dl_1;
    result = imul(result, 31) + this.el_1 | 0;
    return result;
  };
  protoOf(GridCoordinate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GridCoordinate))
      return false;
    var tmp0_other_with_cast = other instanceof GridCoordinate ? other : THROW_CCE();
    if (!(this.dl_1 === tmp0_other_with_cast.dl_1))
      return false;
    if (!(this.el_1 === tmp0_other_with_cast.el_1))
      return false;
    return true;
  };
  function LocationMapper() {
    LocationMapper_instance = this;
    this.fl_1 = mapOf([to('\uC11C\uC6B8', new GridCoordinate(60, 127)), to('\uC778\uCC9C', new GridCoordinate(55, 124)), to('\uC218\uC6D0', new GridCoordinate(60, 121)), to('\uBD80\uC0B0', new GridCoordinate(98, 76)), to('\uB300\uAD6C', new GridCoordinate(89, 90)), to('\uB300\uC804', new GridCoordinate(67, 100)), to('\uAD11\uC8FC', new GridCoordinate(58, 74)), to('\uC6B8\uC0B0', new GridCoordinate(102, 84)), to('\uC81C\uC8FC', new GridCoordinate(52, 38)), to('\uAC15\uB989', new GridCoordinate(92, 131)), to('\uCD98\uCC9C', new GridCoordinate(73, 134)), to('\uCCAD\uC8FC', new GridCoordinate(69, 106)), to('\uC804\uC8FC', new GridCoordinate(63, 89)), to('\uD3EC\uD56D', new GridCoordinate(102, 94)), to('\uCC3D\uC6D0', new GridCoordinate(90, 77))]);
  }
  protoOf(LocationMapper).gl = function (location) {
    return this.fl_1.n1(location);
  };
  protoOf(LocationMapper).hl = function () {
    return toList(this.fl_1.h1());
  };
  var LocationMapper_instance;
  function LocationMapper_getInstance() {
    if (LocationMapper_instance == null)
      new LocationMapper();
    return LocationMapper_instance;
  }
  function buildApiUrl($this, coordinate, baseDate, baseTime) {
    return 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst' + ('?serviceKey=' + $this.vk_1) + '&numOfRows=100' + '&pageNo=1' + '&dataType=JSON' + ('&base_date=' + baseDate) + ('&base_time=' + baseTime) + ('&nx=' + coordinate.dl_1) + ('&ny=' + coordinate.el_1);
  }
  function parseWeatherData($this, location, jsonData) {
    // Inline function 'kotlin.js.asDynamic' call
    var response = jsonData.response;
    var tmp = response.body.items.item;
    var items = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var maxTemp = 15.0;
    var minTemp = 5.0;
    var currentTemp = 10.0;
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
        case 'T1H':
          currentTemp = fcstValue;
          break;
      }
    }
    if (maxTemp === 15.0 ? minTemp === 5.0 : false) {
      maxTemp = currentTemp + 3;
      minTemp = currentTemp - 3;
    }
    return new WeatherData(location, maxTemp, minTemp);
  }
  function getCurrentBaseDate($this) {
    var now = new Date();
    var year = now.getFullYear();
    var month = padStart(toString(now.getMonth() + 1), 2, _Char___init__impl__6a9atx(48));
    var day = padStart(toString(now.getDate()), 2, _Char___init__impl__6a9atx(48));
    return '' + year + month + day;
  }
  function getCurrentBaseTime($this) {
    var now = new Date();
    var tmp = now.getHours();
    var hour = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var baseHour = hour < 2 ? 23 : hour < 5 ? 2 : hour < 8 ? 5 : hour < 11 ? 8 : hour < 14 ? 11 : hour < 17 ? 14 : hour < 20 ? 17 : hour < 23 ? 20 : 23;
    return padStart(baseHour.toString(), 2, _Char___init__impl__6a9atx(48)) + '00';
  }
  function $fetchWeatherCOROUTINE$0(_this__u8e3s4, location, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ql_1 = _this__u8e3s4;
    this.rl_1 = location;
  }
  protoOf($fetchWeatherCOROUTINE$0).h7 = function () {
    var suspendResult = this.w6_1;
    $sm: do
      try {
        var tmp = this.u6_1;
        switch (tmp) {
          case 0:
            this.v6_1 = 4;
            var tmp_0 = this;
            var tmp0_elvis_lhs = LocationMapper_getInstance().gl(this.rl_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC9C0\uC5ED\uC785\uB2C8\uB2E4. \uC9C0\uC6D0 \uC9C0\uC5ED: ' + joinToString(LocationMapper_getInstance().hl(), ', '));
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.sl_1 = tmp_1;
            this.tl_1 = getCurrentBaseDate(this.ql_1);
            this.ul_1 = getCurrentBaseTime(this.ql_1);
            this.vl_1 = buildApiUrl(this.ql_1, this.sl_1, this.tl_1, this.ul_1);
            this.v6_1 = 3;
            this.u6_1 = 1;
            suspendResult = await_0(window.fetch(this.vl_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xl_1 = suspendResult;
            this.u6_1 = 2;
            suspendResult = await_0(this.xl_1.text(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var text = suspendResult;
            console.log('API Response:', text);
            var jsonData = JSON.parse(text);
            this.wl_1 = parseWeatherData(this.ql_1, this.rl_1, jsonData);
            this.v6_1 = 4;
            this.u6_1 = 5;
            continue $sm;
          case 3:
            this.v6_1 = 4;
            var tmp_2 = this.x6_1;
            if (tmp_2 instanceof Exception) {
              var e = this.x6_1;
              var tmp_3 = this;
              console.error('API Error:', e);
              throw Exception_init_$Create$('\uB0A0\uC528 \uC815\uBCF4\uB97C \uAC00\uC838\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: ' + e.message);
            } else {
              throw this.x6_1;
            }

          case 4:
            throw this.x6_1;
          case 5:
            this.v6_1 = 4;
            return this.wl_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.v6_1 === 4) {
          throw e_0;
        } else {
          this.u6_1 = this.v6_1;
          this.x6_1 = e_0;
        }
      }
     while (true);
  };
  function WeatherApi(serviceKey) {
    this.vk_1 = serviceKey;
  }
  protoOf(WeatherApi).wk = function (location, $completion) {
    var tmp = new $fetchWeatherCOROUTINE$0(this, location, $completion);
    tmp.w6_1 = Unit_instance;
    tmp.x6_1 = null;
    return tmp.h7();
  };
  function WeatherData(location, maxTemp, minTemp) {
    this.xk_1 = location;
    this.yk_1 = maxTemp;
    this.zk_1 = minTemp;
  }
  protoOf(WeatherData).cl = function () {
    return (this.yk_1 + this.zk_1) / 2;
  };
  protoOf(WeatherData).toString = function () {
    return 'WeatherData(location=' + this.xk_1 + ', maxTemp=' + this.yk_1 + ', minTemp=' + this.zk_1 + ')';
  };
  protoOf(WeatherData).hashCode = function () {
    var result = getStringHashCode(this.xk_1);
    result = imul(result, 31) + getNumberHashCode(this.yk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.zk_1) | 0;
    return result;
  };
  protoOf(WeatherData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeatherData))
      return false;
    var tmp0_other_with_cast = other instanceof WeatherData ? other : THROW_CCE();
    if (!(this.xk_1 === tmp0_other_with_cast.xk_1))
      return false;
    if (!equals(this.yk_1, tmp0_other_with_cast.yk_1))
      return false;
    if (!equals(this.zk_1, tmp0_other_with_cast.zk_1))
      return false;
    return true;
  };
  function ClothingRecommender() {
    this.al_1 = listOf([new FreezingStrategy(), new ColdStrategy(), new CoolStrategy(), new MildCoolStrategy(), new MildStrategy(), new WarmStrategy(), new PleasantStrategy(), new MildWarmStrategy(), new HotStrategy()]);
  }
  protoOf(ClothingRecommender).bl = function (temp) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.al_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'strategy.ClothingRecommender.getRecommendation.<anonymous>' call
        if (element.yl(temp)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zl(temp);
    return tmp1_elvis_lhs == null ? '\uC801\uC808\uD55C \uC637\uCC28\uB9BC\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.' : tmp1_elvis_lhs;
  };
  function FreezingStrategy() {
  }
  protoOf(FreezingStrategy).yl = function (temp) {
    return temp < 0.0;
  };
  protoOf(FreezingStrategy).zl = function (temp) {
    return '\uD83E\uDDE5 \uD328\uB529, \uB450\uAEBC\uC6B4 \uCF54\uD2B8, \uBAA9\uB3C4\uB9AC, \uC7A5\uAC11, \uD138\uBAA8\uC790';
  };
  function ColdStrategy() {
  }
  protoOf(ColdStrategy).yl = function (temp) {
    return 0.0 <= temp ? temp <= 4.9 : false;
  };
  protoOf(ColdStrategy).zl = function (temp) {
    return '\uD83E\uDDE5 \uCF54\uD2B8, \uAC00\uC8FD\uC790\uCF13, \uD788\uD2B8\uD14D, \uB2C8\uD2B8, \uB808\uAE45\uC2A4';
  };
  function CoolStrategy() {
  }
  protoOf(CoolStrategy).yl = function (temp) {
    return 5.0 <= temp ? temp <= 8.9 : false;
  };
  protoOf(CoolStrategy).zl = function (temp) {
    return '\uD83E\uDDE5 \uC790\uCF13, \uD2B8\uB80C\uCE58\uCF54\uD2B8, \uC57C\uC0C1, \uB2C8\uD2B8, \uCCAD\uBC14\uC9C0';
  };
  function MildCoolStrategy() {
  }
  protoOf(MildCoolStrategy).yl = function (temp) {
    return 9.0 <= temp ? temp <= 11.9 : false;
  };
  protoOf(MildCoolStrategy).zl = function (temp) {
    return '\uD83E\uDDE5 \uC790\uCF13, \uAC00\uB514\uAC74, \uC57C\uC0C1, \uB9E8\uD22C\uB9E8, \uCCAD\uBC14\uC9C0';
  };
  function MildStrategy() {
  }
  protoOf(MildStrategy).yl = function (temp) {
    return 12.0 <= temp ? temp <= 16.9 : false;
  };
  protoOf(MildStrategy).zl = function (temp) {
    return '\uD83D\uDC55 \uC790\uCF13, \uAC00\uB514\uAC74, \uB2C8\uD2B8, \uB9E8\uD22C\uB9E8, \uCCAD\uBC14\uC9C0';
  };
  function WarmStrategy() {
  }
  protoOf(WarmStrategy).yl = function (temp) {
    return 17.0 <= temp ? temp <= 19.9 : false;
  };
  protoOf(WarmStrategy).zl = function (temp) {
    return '\uD83D\uDC55 \uC587\uC740 \uAC00\uB514\uAC74, \uB9E8\uD22C\uB9E8, \uD6C4\uB4DC\uD2F0, \uAE34\uBC14\uC9C0';
  };
  function PleasantStrategy() {
  }
  protoOf(PleasantStrategy).yl = function (temp) {
    return 20.0 <= temp ? temp <= 22.9 : false;
  };
  protoOf(PleasantStrategy).zl = function (temp) {
    return '\uD83D\uDC55 \uAE34\uD314\uD2F0, \uBA74\uBC14\uC9C0, \uCCAD\uBC14\uC9C0';
  };
  function MildWarmStrategy() {
  }
  protoOf(MildWarmStrategy).yl = function (temp) {
    return 23.0 <= temp ? temp <= 27.9 : false;
  };
  protoOf(MildWarmStrategy).zl = function (temp) {
    return '\uD83D\uDC55 \uBC18\uD314, \uC587\uC740 \uC154\uCE20, \uBC18\uBC14\uC9C0, \uBA74\uBC14\uC9C0';
  };
  function HotStrategy() {
  }
  protoOf(HotStrategy).yl = function (temp) {
    return temp >= 28.0;
  };
  protoOf(HotStrategy).zl = function (temp) {
    return '\uD83D\uDC55 \uBBFC\uC18C\uB9E4, \uBC18\uD314, \uBC18\uBC14\uC9C0, \uC6D0\uD53C\uC2A4';
  };
  main();
  return _;
}));

//# sourceMappingURL=weather-clothing-advisor.js.map
