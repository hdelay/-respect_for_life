/*!
 * jQuery 자바스크립트 라이브러리 v3.6.0
 * https://jquery.com/
 *
 * Sizzle.js 포함
 * https://sizzlejs.com/
 *
 * 저작권 OpenJS 재단 및 기타 기고자
 * MIT 라이선스 하에 출시
 * https://jquery.org/license
 *
 * 날짜: 2021-03-02T17:08Z
 */
( 함수( 전역, 공장 ) {

	"엄격한 사용";

	if ( typeof 모듈 === "객체" && typeof module.exports === "객체" ) {

		// 적절한 `window`가 있는 CommonJS 및 CommonJS와 유사한 환경의 경우
		// 존재하면 팩토리를 실행하고 jQuery를 가져옵니다.
		// `문서`가 있는 `창`이 없는 환경의 경우
		// (Node.js와 같은), 팩토리를 module.exports로 노출합니다.
		// 이것은 실제 '창'을 생성할 필요성을 강조합니다.
		// 예를 들어 var jQuery = require("jquery")(window);
		// 자세한 내용은 티켓 #14549를 참조하세요.
		module.exports = global.document ?
			팩토리(글로벌, true) :
			함수( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery에는 문서가 있는 창이 필요합니다." );
				}
				반환 공장( w );
			};
	} 또 다른 {
		공장(글로벌);
	}

// 윈도우가 아직 정의되지 않은 경우 전달
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// 엄격하지 않은 코드(예: ASP.NET 4.5)가 엄격 모드에 액세스하면 예외가 발생합니다.
// arguments.callee.caller(trac-13335). 그러나 jQuery 3.0(2016)부터는 엄격 모드가 일반적이어야 합니다.
// 그러한 모든 시도가 try 블록에서 보호되기에 충분합니다.
"엄격한 사용";

var arr = [];

var getProto = Object.getPrototypeOf;

var 슬라이스 = arr.slice;

var 플랫 = arr.flat ? 함수(배열) {
	반환 arr.flat.call( 배열 );
} : 함수(배열) {
	반환 arr.concat.apply( [], 배열 );
};


var 푸시 = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(객체);

var 지원 = {};

var isFunction = 기능 isFunction( obj ) {

		// 지원: 크롬 <=57, 파이어폭스 <=52
		// 일부 브라우저에서 typeof는 HTML <object> 요소에 대해 "function"을 반환합니다.
		// (즉, `typeof document.createElement( "object" ) === "function"`).
		// *모든* DOM 노드를 함수로 분류하고 싶지 않습니다.
		// 지원: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf 도구 <=0.12.5
		// 이전 WebKit의 경우 typeof는 HTML 컬렉션에 대해 "함수"를 반환합니다.
		// (예: `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "숫자" &&
			typeof obj.item !== "함수";
	};


var isWindow = 기능 isWindow( obj ) {
		반환 obj != null && obj === obj.window;
	};


var 문서 = window.document;



	var 보존 스크립트 속성 = {
		유형: 사실,
		src: 사실,
		논스: 사실,
		noModule: 참
	};

	함수 DOMEval( 코드, 노드, 문서) {
		문서 = 문서 || 문서;

		var 나는, 발,
			스크립트 = doc.createElement( "스크립트");

		script.text = 코드;
		if ( 노드 ) {
			for ( i in reservedScriptAttributes ) {

				// 지원: Firefox 64+, Edge 18+
				// 일부 브라우저는 스크립트에서 "nonce" 속성을 지원하지 않습니다.
				// 반면에 `getAttribute`를 사용하는 것만으로는 충분하지 않습니다.
				// `nonce` 속성은
				// 브라우징 컨텍스트가 연결됩니다.
				// https://github.com/whatwg/html/issues/2369 참조
				// https://html.spec.whatwg.org/#nonce-attributes 참조
				// `node.getAttribute` 검사가 다음을 위해 추가되었습니다.
				// `jQuery.globalEval`을 사용하여 비포함 노드를 가짜로 만들 수 있습니다.
				// 객체를 통해.
				발 = 노드[ 나는 ] || node.getAttribute && node.getAttribute( i );
				경우 ( 발 ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( 스크립트 ).parentNode.removeChild( 스크립트 );
	}


함수 toType( obj ) {
	if ( obj == null ) {
		반환 개체 + "";
	}

	// 지원: Android <=2.3 전용(기능 RegExp)
	반환 typeof obj === "객체" || typeof obj === "함수" ?
		class2type[ toString.call( obj ) ] || "물체" :
		객체 유형;
}
/* 전역 기호 */
// .eslintrc.json에서 이 전역을 정의하면 전역
// 다른 곳에서 보호되지 않으므로 이 모듈에 대해서만 전역을 정의하는 것이 더 안전해 보입니다.



var
	버전 = "3.6.0",

	// jQuery의 로컬 복사본 정의
	jQuery = 기능( 선택기, 컨텍스트 ) {

		// jQuery 객체는 실제로 '향상된' 초기화 생성자일 뿐입니다.
		// jQuery가 호출되면 초기화 필요(포함되지 않은 경우 오류가 발생하도록 허용)
		새로운 jQuery.fn.init(선택자, 컨텍스트)를 반환합니다.
	};

jQuery.fn = jQuery.prototype = {

	// 현재 사용 중인 jQuery 버전
	제이쿼리: 버전,

	생성자: jQuery,

	// jQuery 객체의 기본 길이는 0입니다.
	길이: 0,

	toArray: 함수() {
		반환 slice.call( this );
	},

	// 일치하는 요소 집합에서 N번째 요소 가져오기 또는
	// 일치하는 전체 요소 세트를 깨끗한 배열로 가져옵니다.
	가져오기: 함수( 숫자 ) {

		// 깨끗한 배열의 모든 요소를 ​​반환
		if ( 숫자 == null ) {
			반환 slice.call( this );
		}

		// 집합에서 하나의 요소만 반환
		반환 숫자 < 0 ? this[ 숫자 + this.length ] : this[ 숫자 ];
	},

	// 요소 배열을 가져와 스택에 푸시합니다.
	// (새로 일치하는 요소 집합을 반환)
	푸시 스택: 기능( 요소 ) {

		// 새로운 jQuery 일치 요소 세트를 빌드합니다.
		var ret = jQuery.merge( this.constructor(), 요소);

		// 이전 객체를 스택에 추가(참조로)
		ret.prevObject = 이것;

		// 새로 형성된 요소 집합을 반환합니다.
		리턴 렛;
	},

	// 일치하는 세트의 모든 요소에 대해 콜백을 실행합니다.
	각각: 함수( 콜백 ) {
		return jQuery.each( this, callback );
	},

	지도: 함수( 콜백 ) {
		return this.pushStack( jQuery.map( this, function( 요소, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	슬라이스: 함수() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	첫 번째: 함수() {
		this.eq( 0 )를 반환합니다.
	},

	마지막: 함수() {
		this.eq( -1 )를 반환합니다.
	},

	짝수: 함수() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			반환 (i + 1) % 2;
		} ) );
	},

	홀수: 함수() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			나는 % 2를 반환합니다;
		} ) );
	},

	eq: 함수( 나는 ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	끝: 함수() {
		this.prevObject를 반환 || this.constructor();
	},

	// 내부 전용입니다.
	// jQuery 메서드가 아닌 Array의 메서드처럼 작동합니다.
	밀어 밀어,
	정렬: arr.sort,
	스플라이스: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var 옵션, 이름, src, 복사, copyIsArray, 복제,
		대상 = 인수[ 0 ] || {},
		나는 = 1,
		길이 = 인수.길이,
		깊은 = 거짓;

	// 깊은 복사 상황 처리
	if ( 타겟 유형 === "부울" ) {
		깊은 = 대상;

		// 부울과 대상을 건너뜁니다.
		대상 = 인수[ i ] || {};
		나는 ++;
	}

	// 대상이 문자열 또는 무언가인 경우 처리(딥 카피에서 가능)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		대상 = {};
	}

	// 하나의 인수만 전달되면 jQuery 자체 확장
	if ( 나는 === 길이 ) {
		대상 = 이것;
		나--;
	}

	for ( ; i < 길이; i++ ) {

		// null이 아닌/정의되지 않은 값만 처리
		if ( ( 옵션 = 인수[ i ] ) != null ) {

			// 기본 객체 확장
			( 옵션의 이름 ) {
				복사 = 옵션[이름];

				// Object.prototype 오염 방지
				// 무한 루프 방지
				if ( 이름 === "__proto__" || 대상 === 복사 ) {
					계속하다;
				}

				// 일반 객체 또는 배열을 병합하는 경우 재귀
				if ( 깊은 && 복사 && ( jQuery.isPlainObject( 복사 ) ||
					( copyIsArray = Array.isArray( 복사 ) ) ) ) {
					src = 대상[이름];

					// 소스 값에 대한 적절한 유형을 확인합니다.
					if ( copyIsArray && !Array.isArray( src ) ) {
						클론 = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						클론 = {};
					} 또 다른 {
						클론 = src;
					}
					copyIsArray = 거짓;

					// 원본 개체를 이동하지 말고 복제합니다.
					대상[이름] = jQuery.extend(깊이, 복제, 복사);

				// 정의되지 않은 값을 가져오지 않음
				} else if ( 복사 !== 정의되지 않음 ) {
					대상[이름] = 복사;
				}
			}
		}
	}

	// 수정된 객체를 반환
	반환 대상;
};

jQuery.extend( {

	// 페이지의 jQuery 사본마다 고유
	확장: "jQuery" + ( 버전 + Math.random() ).replace( /\D/g, "" ),

	// 준비 모듈 없이 jQuery가 준비되었다고 가정합니다.
	isReady: 사실,

	오류: 함수( 메시지 ) {
		새로운 오류 발생( msg );
	},

	noop: 함수() {},

	isPlainObject: 함수( obj ) {
		var 프로토, Ctor;

		// 명백한 부정 감지
		// jQuery.type 대신 toString을 사용하여 호스트 객체를 포착합니다.
		if ( !obj || toString.call( obj ) !== "[객체 객체]" ) {
			거짓을 반환합니다.
		}

		프로토 = getProto( obj );

		// 프로토타입이 없는 객체(예: `Object.create( null )`)는 일반 객체입니다.
		만약 ( ! 프로토 ) {
			true를 반환합니다.
		}

		// 프로토타입이 있는 객체는 전역 객체 함수에 의해 생성된 경우 일반 객체입니다.
		Ctor = hasOwn.call( proto, "생성자" ) && proto.constructor;
		반환 typeof Ctor === "함수" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: 함수( obj ) {
		변수 이름;

		( obj 의 이름 ) {
			거짓을 반환합니다.
		}
		true를 반환합니다.
	},

	// 제공된 컨텍스트에서 스크립트를 평가합니다. 글로벌 것으로 되돌아간다
	// 지정하지 않은 경우.
	globalEval: 함수( 코드, 옵션, 문서) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	각각: function( obj, 콜백 ) {
		var 길이, i = 0;

		if ( isArrayLike( obj ) ) {
			길이 = obj.length;
			for ( ; i < 길이; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					부서지다;
				}
			}
		} 또 다른 {
			( obj 의 i ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					부서지다;
				}
			}
		}

		객체 반환;
	},

	// 결과는 내부용입니다.
	makeArray: 함수( arr, 결과 ) {
		var ret = 결과 || [];

		if ( arr != null ) {
			if ( isArrayLike( 객체( arr ) ) ) {
				jQuery.merge(ret,
					typeof arr === "문자열" ?
						[ 아 ] : 아
				);
			} 또 다른 {
				push.call( ret, arr );
			}
		}

		리턴 렛;
	},

	inArray: function( 요소, arr, i ) {
		반환 arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// 지원: Android <=4.0 전용, PhantomJS 1 전용
	// push.apply(_, arraylike)는 고대 WebKit에서 발생합니다.
	병합: 함수(첫 번째, 두 번째) {
		var len = +초.길이,
			j = 0,
			나는 = 첫 번째.길이;

		( ; j < len; j++ ) {
			첫 번째[ i++ ] = 두 번째[ j ];
		}

		첫 번째.길이 = 나;

		먼저 반환;
	},

	grep: 기능( 요소, 콜백, 반전) {
		var 콜백인버스,
			일치 = [],
			나는 = 0,
			길이 = elems.length,
			콜백 기대 = ! 반전;

		// 배열을 살펴보고 항목만 저장합니다.
		// 유효성 검사기 함수를 전달합니다.
		for ( ; i < 길이; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				match.push( elems[ i ] );
			}
		}

		반환 일치;
	},

	// arg는 내부 전용입니다.
	지도: 기능( 요소, 콜백, 인수) {
		변수 길이, 값,
			나는 = 0,
			렛 = [];

		// 배열을 살펴보고 각 항목을 새 값으로 변환합니다.
		if ( isArrayLike( 요소 ) ) {
			길이 = elems.length;
			for ( ; i < 길이; i++ ) {
				값 = 콜백( elems[ i ], i, arg );

				if ( 값 != null ) {
					ret.push(값);
				}
			}

		// 객체의 모든 키를 살펴보고,
		} 또 다른 {
			(요소의 i) {
				값 = 콜백( elems[ i ], i, arg );

				if ( 값 != null ) {
					ret.push(값);
				}
			}
		}

		// 중첩된 배열을 평평하게 합니다.
		리턴 플랫(ret);
	},

	// 객체에 대한 전역 GUID 카운터
	가이드: 1,

	// jQuery.support는 Core에서 사용되지 않지만 다른 프로젝트는
	// 속성이 있으므로 존재해야 합니다.
	지원: 지원
} );

if(기호 유형 === "함수") {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// class2type 맵 채우기
jQuery.each( "부울 숫자 문자열 함수 배열 날짜 RegExp 개체 오류 기호".split( " " ),
	함수( _i, 이름 ) {
		class2type[ "[객체 " + 이름 + "]" ] = name.toLowerCase();
	} );

함수 isArrayLike( obj ) {

	// 지원: 실제 iOS 8.2 전용(시뮬레이터에서 재현 불가)
	// JIT 오류를 방지하기 위해 사용되는 `in` 검사(gh-2145)
	// 거짓 부정으로 인해 hasOwn은 여기에서 사용되지 않습니다.
	// IE의 Nodelist 길이 관련
	var 길이 = !!obj && obj && obj.length의 "길이",
		유형 = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		거짓을 반환합니다.
	}

	반환 유형 === "배열" || 길이 === 0 ||
		typeof 길이 === "숫자" && 길이 > 0 && ( 길이 - 1 ) in obj;
}
var 시즐 =
/*!
 * 지글지글 CSS 선택기 엔진 v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation 및 기타 기고자
 * MIT 라이선스 하에 출시
 * https://js.foundation/
 *
 * 날짜: 2021-02-16
 */
( 함수( 창 ) {
var 나는,
	지원하다,
	특급,
	텍스트 가져오기,
	isXML,
	토큰화하다,
	엮다,
	고르다,
	가장 바깥쪽 컨텍스트,
	정렬 입력,
	중복,

	// 로컬 문서 변수
	세트 문서,
	문서,
	문서엘렘,
	문서는HTML,
	rbuggyQSA,
	rbuggyMatches,
	성냥,
	포함,

	// 인스턴스별 데이터
	expando = "sizzle" + 1 * new Date(),
	선호 문서 = 창.문서,
	디런 = 0,
	완료 = 0,
	classCache = createCache(),
	토큰캐시 = createCache(),
	컴파일러 캐시 = createCache(),
	nonnativeSelectorCache = createCache(),
	정렬 순서 = 함수( a, b ) {
		if ( a === b ) {
			hasDuplicate = 참;
		}
		반환 0;
	},

	// 인스턴스 메소드
	hasOwn = ( {} ).hasOwnProperty,
	ar = [],
	팝 = arr.pop,
	pushNative = arr.push,
	푸시 = arr.push,
	슬라이스 = arr.slice,

	// 네이티브보다 빠르기 때문에 제거된 indexOf를 사용합니다.
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = 함수( 목록, 요소 ) {
		변수 i = 0,
			len = 목록.길이;
		( ; 나는 < len; 나는 ++ ) {
			if ( list[ i ] === 요소 ) {
				반환 나;
			}
		}
		반환 -1;
	},

	부울 = "선택|선택|비동기|자동초점|자동재생|제어|지연|비활성화|숨김|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// 정규식

	// http://www.w3.org/TR/css3-selectors/#whitespace
	공백 = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	식별자 = "(?:\\\\[\\da-fA-F]{1,6}" + 공백 +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// 속성 선택기: http://www.w3.org/TR/selectors/#attribute-selectors
	속성 = "\\[" + 공백 + "*(" + 식별자 + ")(?:" + 공백 +

		// 연산자(캡처 2)
		"*([*^$|!~]?=)" + 공백 +

		// "속성 값은 CSS 식별자여야 합니다. [캡처 5]
		// 또는 문자열 [캡처 3 또는 캡처 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + 식별자 + "))|)" +
		공백 + "*\\]",

	의사 = ":(" + 식별자 + ")(?:\\((" +

		// preFilter에서 토큰화해야 하는 선택기의 수를 줄이려면 인수를 선호합니다.
		// 1. 인용(캡처 3, 캡처 4 또는 캡처 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\"])*) \")|" +

		// 2. 단순(캡처 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + 속성 + ")*)|" +

		// 3. 다른 모든 것(캡처 2)
		".*" +
		")\\)|)",

	// 선행 및 이스케이프 처리되지 않은 후행 공백, 후자 앞에 오는 공백이 아닌 일부 문자 캡처
	rwhitespace = 새로운 RegExp( 공백 + "+", "g" ),
	rtrim = new RegExp( "^" + 공백 + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		공백 + "+$", "g" ),

	rcomma = 새로운 RegExp( "^" + 공백 + "*," + 공백 + "*" ),
	rcombinators = new RegExp( "^" + 공백 + "*([>+~]|" + 공백 + ")" + 공백 +
		"*" ),
	rdescend = 새로운 정규 표현식(공백 + "|>"),

	rpseudo = 새로운 RegExp( 의사 ),
	식별자 = 새로운 RegExp( "^" + 식별자 + "$" ),

	matchExpr = {
		"ID": 새로운 RegExp( "^#(" + 식별자 + ")" ),
		"클래스": 새로운 정규 표현식( "^\\.(" + 식별자 + ")" ),
		"TAG": 새로운 RegExp( "^(" + 식별자 + "|[*])" ),
		"ATTR": 새로운 RegExp( "^" + 속성 ),
		"의사": 새로운 RegExp( "^" + 의사 ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			공백 + "*(짝수|홀수|(([+-]|)(\\d*)n|)" + 공백 + "*(?:([+-]|)" +
			공백 + "*(\\d+)|))" + 공백 + "*\\)|)", "i" ),
		"bool": 새로운 RegExp( "^(?:" + 부울 + ")$", "i" ),

		// .is()를 구현하는 라이브러리에서 사용
		// `select`에서 POS 일치를 위해 이것을 사용합니다.
		"needsContext": 새로운 RegExp( "^" + 공백 +
			"*[>+~]|:(짝수|홀수|eq|gt|lt|n번째|첫 번째|마지막)(?:\\(" + 공백 +
			"*((?:-\\d)?\\d*)" + 공백 + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:입력|선택|텍스트영역|버튼)$/i,
	rheader = /^h\d$/i,

	기본 = /^[^{]+\{\s*\[기본 \w/,

	// 쉽게 구문 분석/검색 가능한 ID 또는 TAG 또는 CLASS 선택기
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	형제 = /[+~]/,

	// CSS 이스케이프
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + 공백 + "?|\\\\([^\\r\\n\\f])" , "G" ),
	funescape = 함수( 이스케이프, nonHex ) {
		var high = "0x" + escape.slice(1) - 0x10000;

		16진수가 아닌 반환?

			// 16진수가 아닌 이스케이프 시퀀스에서 백슬래시 접두사를 제거합니다.
			16진수가 아닌 :

			// 16진수 이스케이프 시퀀스를 인코딩된 유니코드 코드 포인트로 바꿉니다.
			// 지원: IE <=11+
			// BMP(Basic Multilingual Plane) 외부 값의 경우 수동으로 구성
			// 대리 쌍
			높은 < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( 높음 >> 10 | 0xD800, 높음 & 0x3FF | 0xDC00 );
	},

	// CSS 문자열/식별자 직렬화
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = 기능( 채널, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL은 U+FFFD REPLACEMENT CHARACTER가 됩니다.
			if ( 채널 === "\0" ) {
				반환 "\uFFFD";
			}

			// 제어 문자와 (위치에 따라 다름) 숫자는 코드 포인트로 이스케이프됩니다.
			반환 ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// 다른 잠재적으로 특수할 수 있는 ASCII 문자는 백슬래시로 이스케이프됩니다.
		반환 "\\" + ch;
	},

	// iframe에 사용
	// setDocument() 참조
	// 함수 래퍼를 제거하면 "Permission Denied"가 발생합니다.
	// IE의 오류
	언로드 핸들러 = 함수() {
		세트문서();
	},

	inDisabledFieldset = addCombinator(
		기능( 요소 ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ 디렉토리: "parentNode", 다음: "legend" }
	);

// push.apply( _, NodeList ) 최적화
노력하다 {
	푸시.적용(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// 지원: 안드로이드<4.0
	// 자동으로 실패한 push.apply 감지
	// eslint-disable-next-line no-unused-expressions
	arr[ 선호하는Doc.childNodes.length ].nodeType;
} 잡기 ( e ) {
	푸시 = { 적용: arr.length ?

		// 가능하면 슬라이스 활용
		함수( 타겟, 엘스 ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// 지원: IE<9
		// 그렇지 않으면 직접 추가
		함수( 타겟, 엘스 ) {
			var j = target.length,
				나는 = 0;

			// NodeList.length를 신뢰할 수 없음
			동안 ( ( 타겟[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( 선택기, 컨텍스트, 결과, 시드) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = 컨텍스트 && context.ownerDocument,

		// 컨텍스트가 문서로 기본 설정되기 때문에 nodeType은 기본적으로 9로 설정됩니다.
		노드 유형 = 컨텍스트 ? 컨텍스트.노드 유형: 9;

	결과 = 결과 || [];

	// 유효하지 않은 선택기 또는 컨텍스트가 있는 호출에서 일찍 반환
	if ( typeof 선택기 !== "문자열" || !선택기 ||
		노드 유형 !== 1 && 노드 유형 !== 9 && 노드 유형 !== 11 ) {

		반환 결과;
	}

	// HTML 문서에서 (필터와 반대되는) 찾기 작업의 바로 가기를 시도합니다.
	이면 ( ! 시드 ) {
		setDocument( 컨텍스트 );
		컨텍스트 = 컨텍스트 || 문서;

		if ( 문서가 HTML ) {

			// 선택기가 충분히 단순하다면 "get*By*" DOM ​​메소드를 사용해 보십시오.
			// (메소드가 존재하지 않는 DocumentFragment 컨텍스트 제외)
			if ( nodeType !== 11 && ( 일치 = rquickExpr.exec( 선택기 ) ) ) {

				// 아이디 선택자
				if ( ( m = 일치[ 1 ] ) ) {

					// 문서 컨텍스트
					if ( 노드 유형 === 9 ) {
						if ( ( 요소 = context.getElementById( m ) ) ) {

							// 지원: IE, 오페라, 웹킷
							// TODO: 버전 식별
							// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
							if ( 요소 ID === m ) {
								결과.푸시(요소);
								반환 결과;
							}
						} 또 다른 {
							반환 결과;
						}

					// 요소 컨텍스트
					} 또 다른 {

						// 지원: IE, 오페라, 웹킷
						// TODO: 버전 식별
						// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
						if ( newContext && ( 요소 = newContext.getElementById( m ) ) &&
							포함( 컨텍스트, 요소) &&
							요소 ID === m ) {

							결과.푸시(요소);
							반환 결과;
						}
					}

				// 유형 선택자
				} else if ( 일치[ 2 ] ) {
					push.apply( 결과, context.getElementsByTagName( 선택기 ) );
					반환 결과;

				// 클래스 선택자
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( 결과, context.getElementsByClassName( m ) );
					반환 결과;
				}
			}

			// querySelectorAll 활용
			if ( support.qsa &&
				!nonnativeSelectorCache[ 선택기 + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( 선택기 ) ) &&

				// 지원: IE 8 전용
				// 객체 요소 제외
				( 노드 유형 !== 1 || context.nodeName.toLowerCase() !== "객체" ) ) {

				newSelector = 선택기;
				newContext = 컨텍스트;

				// qSA는 자식을 평가할 때 범위 지정 루트 외부의 요소를 고려합니다.
				// 우리가 원하지 않는 자손 결합자.
				// 그러한 경우, 우리는 모든 선택자에 접두사를 붙여 동작을 해결합니다.
				// 범위 컨텍스트를 참조하는 ID 선택기가 있는 목록.
				// 선행 결합자를 사용할 때도 기술을 사용해야 합니다.
				// 그러한 선택자는 querySelectorAll에 의해 인식되지 않습니다.
				// 이 기술에 대해 Andrew Dupont에게 감사드립니다.
				if ( 노드 유형 === 1 &&
					( rdescend.test( 선택기 ) || rcombinators.test( 선택기 ) ) ) {

					// 형제 선택자의 컨텍스트 확장
					newContext = rsibling.test( 선택기 ) && testContext( context.parentNode ) ||
						문맥;

					// 브라우저가 다음과 같은 경우 ID 해킹 대신 :scope를 사용할 수 있습니다.
					// 컨텍스트를 변경하지 않는 경우 & 지원합니다.
					if ( newContext !== 컨텍스트 || !support.scope ) {

						// 컨텍스트 ID를 캡처하고 필요한 경우 먼저 설정합니다.
						if ( ( id = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} 또 다른 {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// 목록의 모든 선택자에 접두사를 붙입니다.
					그룹 = 토큰화( 선택기 );
					나는 = 그룹.길이;
					동안 ( 나는-- ) {
						그룹[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( 그룹[ i ] );
					}
					newSelector = groups.join( "," );
				}

				노력하다 {
					push.apply( 결과,
						newContext.querySelectorAll( newSelector )
					);
					반환 결과;
				} 잡기( qsaError ) {
					nonnativeSelectorCache( 선택자, true );
				} 마지막으로 {
					if ( id === 확장 ) {
						context.removeAttribute( "아이디" );
					}
				}
			}
		}
	}

	// 다른 모든
	return select( selector.replace( rtrim, "$1" ), 컨텍스트, 결과, 시드);
}

/**
 * 제한된 크기의 키-값 캐시 생성
 * @returns {function(string, object)} 자체에 저장한 후 Object 데이터를 반환합니다.
 * 속성 이름 (공백 접미사) 문자열 및 (캐시가 Expr.cacheLength보다 큰 경우)
 * 가장 오래된 항목 삭제
 */
함수 생성 캐시() {
	var 키 = [];

	함수 캐시( 키, 값) {

		// 네이티브 프로토타입 속성과의 충돌을 피하기 위해 (key + " ") 사용(문제 #157 참조)
		if ( 키.푸시( 키 + " " ) > Expr.cacheLength ) {

			// 가장 최근 항목만 유지
			캐시 삭제[keys.shift()];
		}
		반환 ( 캐시[ 키 + " " ] = 값 );
	}
	캐시를 반환합니다.
}

/**
 * Sizzle이 특별히 사용하는 기능을 표시
 * @param {Function} fn 표시할 함수
 */
기능 표시 기능( fn ) {
	fn[확장] = 참;
	리턴 fn;
}

/**
 * 요소를 사용한 테스트 지원
 * @param {Function} fn 생성된 요소를 전달하고 부울 결과를 반환합니다.
 */
기능 주장( fn ) {
	var el = document.createElement( "필드셋");

	노력하다 {
		반환 !!fn( el );
	} 잡기 ( e ) {
		거짓을 반환합니다.
	} 마지막으로 {

		// 기본적으로 부모에서 제거
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// IE에서 메모리 해제
		엘 = 널;
	}
}

/**
 * 지정된 모든 속성에 대해 동일한 핸들러를 추가합니다.
 * @param {String} attrs 파이프로 구분된 속성 목록
 * @param {Function} 핸들러 적용할 메소드
 */
기능 addHandle( 속성, 핸들러 ) {
	var arr = attrs.split( "|" ),
		나는 = arr.길이;

	동안 ( 나는-- ) {
		Expr.attrHandle[ arr[ i ] ] = 핸들러;
	}
}

/**
 * 두 형제의 문서 순서 확인
 * @param {요소}
 * @param {요소} b
 * @returns {Number} a가 b 앞에 있으면 0보다 작은 값을 반환하고 b 뒤에 오면 0보다 큰 값을 반환합니다.
 */
함수 형제 검사( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// 두 노드 모두에서 사용 가능한 경우 IE sourceIndex 사용
	if ( 차이 ) {
		반환 차이;
	}

	// b가 뒤에 오는지 확인
	if ( cur ) {
		동안 ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				반환 -1;
			}
		}
	}

	반환? 1:-1;
}

/**
 * 입력 유형에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {문자열} 유형
 */
함수 createInputPseudo(유형) {
	반환 함수( 요소 ) {
		var 이름 = elem.nodeName.toLowerCase();
		반환 이름 === "입력" && elem.type === 유형;
	};
}

/**
 * 버튼의 의사에서 사용할 함수를 반환합니다.
 * @param {문자열} 유형
 */
함수 createButtonPseudo(유형) {
	반환 함수( 요소 ) {
		var 이름 = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * :enabled/:disabled에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {Boolean} 비활성화 :disabled에 대해 true; false에 대해 :활성화됨
 */
기능 createDisabledPseudo( 비활성화 ) {

	// 알려진 :disabled 거짓 긍정: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	반환 함수( 요소 ) {

		// 특정 요소만 :enabled 또는 :disabled와 일치할 수 있습니다.
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( 요소의 "형식" ) {

			// 비활성화되지 않은 관련 요소에서 상속된 비활성화 여부를 확인합니다.
			// * 비활성화된 fieldset에 나열된 양식 관련 요소
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * 비활성화된 optgroup의 옵션 요소
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// 이러한 모든 요소에는 "form" 속성이 있습니다.
			if ( elem.parentNode && elem.disabled === false ) {

				// 옵션 요소는 존재하는 경우 상위 optgroup을 따릅니다.
				if ( 요소의 "레이블" ) {
					if( elem.parentNode의 "레이블") {
						elem.parentNode.disabled 반환 === 비활성화됨;
					} 또 다른 {
						elem.disabled를 반환 === 비활성화됨;
					}
				}

				// 지원: IE 6 - 11
				// 비활성화된 필드셋 조상을 확인하기 위해 isDisabled 바로 가기 속성을 사용합니다.
				elem.isDisabled를 반환 === 비활성화 ||

					// isDisabled가 없는 경우 수동으로 확인
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === 비활성화됨;
			}

			elem.disabled를 반환 === 비활성화됨;

		// 비활성화된 속성을 신뢰하기 전에 비활성화할 수 없는 요소를 찾아내십시오.
		// 일부 피해자는 우리의 네트(레이블, 범례, 메뉴, 트랙)에 걸리지만 그렇게 해서는 안 됩니다.
		// boolean 값은 고사하고 심지어 존재합니다.
		} else if ( 요소의 "레이블" ) {
			elem.disabled를 반환 === 비활성화됨;
		}

		// 나머지 요소는 :enabled 또는 :disabled가 아닙니다.
		거짓을 반환합니다.
	};
}

/**
 * 위치에 대한 의사에서 사용할 함수를 반환합니다.
 * @param {함수} fn
 */
함수 createPositionalPseudo( fn ) {
	return markFunction( function( 인수 ) {
		인수 = +인수;
		return markFunction( function( seed, 일치 ) {
			var j,
				matchIndexes = fn([], seed.length, 인수),
				나는 = matchIndexes.length;

			// 지정된 인덱스에서 찾은 요소와 일치
			동안 ( 나는-- ) {
				if ( 시드[ ( j = matchIndexes[ i ] ) ] ) {
					시드[ j ] = !( 일치[ j ] = 시드[ j ] );
				}
			}
		} );
	} );
}

/**
 * Sizzle 컨텍스트로서의 유효성을 위해 노드를 확인합니다.
 * @param {요소|객체=} 컨텍스트
 * @returns {Element|Object|Boolean} 허용되는 경우 입력 노드, 그렇지 않으면 거짓 값
 */
함수 testContext( 컨텍스트 ) {
	반환 컨텍스트 && typeof context.getElementsByTagName !== "정의되지 않음" && 컨텍스트;
}

// 편의를 위해 지원 변수를 노출합니다.
지원 = Sizzle.support = {};

/**
 * XML 노드 감지
 * @param {Element|Object} elem 요소 또는 문서
 * @returns {Boolean} 요소가 HTML이 아닌 XML 노드인 경우 True
 */
isXML = Sizzle.isXML = 기능( 요소 ) {
	var 네임스페이스 = elem && elem.namespaceURI,
		docElem = 요소 && ( elem.ownerDocument || 요소 ).documentElement;

	// 지원: IE <=8
	// 로딩 중인 iframe과 같이 documentElement가 아직 존재하지 않을 때 HTML을 가정합니다.
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( 네임스페이스 || docElem && docElem.nodeName || "HTML" );
};

/**
 * 현재 문서를 기준으로 문서 관련 변수를 1회 설정
 * @param {Element|Object} [doc] 문서를 설정하는 데 사용할 요소 또는 문서 객체
 * @returns {Object} 현재 문서를 반환
 */
setDocument = Sizzle.setDocument = 기능( 노드 ) {
	var hasCompare, 하위 창,
		문서 = 노드 ? node.owner 문서 || 노드 : 선호 문서;

	// 문서가 유효하지 않거나 이미 선택된 경우 일찍 반환
	// 지원: IE 11+, Edge 17 - 18+
	// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ( 문서 == 문서 || doc.nodeType !== 9 || !doc.documentElement ) {
		반환 문서;
	}

	// 전역 변수 업데이트
	문서 = 문서;
	docElem = 문서.문서요소;
	documentIsHTML = !isXML( 문서 );

	// 지원: IE 9 - 11+, Edge 12 - 18+
	// 언로드 후 iframe 문서에 액세스하면 "권한 거부됨" 오류 발생(jQuery #13936)
	// 지원: IE 11+, Edge 17 - 18+
	// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != 문서 &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// 지원: IE 11, 에지
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// 지원: IE 9 - 10만
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// 지원: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25만 해당, Firefox <=3.6 - 31만,
	// Safari 4 - 5 전용, Opera <=11.6 - 12.x 전용
	// IE/Edge 및 이전 브라우저는 :scope 의사 클래스를 지원하지 않습니다.
	// 지원: Safari 6.0만 해당
	// Safari 6.0은 :scope를 지원하지만 거기에서 :root의 별칭입니다.
	support.scope = assert( 함수( 엘 ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		반환 typeof el.querySelectorAll !== "정의되지 않음" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* 속성
	-------------------------------------------------- -------------------- */

	// 지원: IE<8
	// getAttribute가 실제로 속성이 아닌 속성을 반환하는지 확인합니다.
	// (IE8 부울 제외)
	support.attributes = assert( 함수( 엘 ) {
		el.className = "나";
		반환 !el.getAttribute( "className" );
	} );

	/* getElement 기준*
	-------------------------------------------------- -------------------- */

	// getElementsByTagName("*")이 요소만 반환하는지 확인
	support.getElementsByTagName = assert( 함수( 엘 ) {
		el.appendChild( document.createComment( "" ) );
		반환 !el.getElementsByTagName( "*" ).length;
	} );

	// 지원: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// 지원: IE<10
	// getElementById가 이름으로 요소를 반환하는지 확인
	// 깨진 getElementById 메소드는 프로그래밍 방식으로 설정된 이름을 선택하지 않습니다.
	// 그래서 원형 교차로 getElementsByName 테스트를 사용합니다.
	support.getById = assert( 함수( 엘 ) {
		docElem.appendChild( el ).id = 확장;
		!document.getElementsByName 반환 || !document.getElementsByName(확장).길이;
	} );

	// ID 필터 및 찾기
	if ( support.getById ) {
		Expr.filter[ "ID" ] = 기능( 아이디 ) {
			var attrId = id.replace(runescape, funescape);
			반환 함수( 요소 ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = 기능( 아이디, 컨텍스트 ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var 요소 = context.getElementById( 아이디 );
				요소를 반환? [요소] : [];
			}
		};
	} 또 다른 {
		Expr.filter[ "ID" ] = 기능( 아이디 ) {
			var attrId = id.replace(runescape, funescape);
			반환 함수( 요소 ) {
				var 노드 = typeof elem.getAttributeNode !== "정의되지 않음" &&
					elem.getAttributeNode( "아이디");
				반환 노드 && node.value === attrId;
			};
		};

		// 지원: IE 6 - 7만 해당
		// getElementById는 찾기 단축키로 신뢰할 수 없습니다.
		Expr.find[ "ID" ] = 기능( 아이디, 컨텍스트 ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var 노드, i, 요소,
					요소 = context.getElementById( 아이디 );

				if ( 요소 ) {

					// id 속성 확인
					노드 = elem.getAttributeNode( "아이디");
					if ( 노드 && node.value === 아이디 ) {
						[요소]를 반환합니다.
					}

					// getElementsByName으로 폴백
					요소 = context.getElementsByName( 아이디 );
					나는 = 0;
					동안 ( ( 요소 = 요소[ i++ ] ) ) {
						노드 = elem.getAttributeNode( "아이디");
						if ( 노드 && node.value === 아이디 ) {
							[요소]를 반환합니다.
						}
					}
				}

				반품 [];
			}
		};
	}

	// 태그
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		기능( 태그, 컨텍스트 ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				반환 context.getElementsByTagName(태그);

			// DocumentFragment 노드에는 gEBTN이 없습니다.
			} 그렇지 않으면 ( support.qsa ) {
				반환 context.querySelectorAll( 태그 );
			}
		} :

		기능( 태그, 컨텍스트 ) {
			var 요소,
				시간 = [],
				나는 = 0,

				// 우연의 일치로 (깨진) gEBTN이 DocumentFragment 노드에도 나타납니다.
				결과 = context.getElementsByTagName( 태그 );

			// 가능한 주석 필터링
			if ( 태그 === "*" ) {
				동안 ( ( 요소 = 결과[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push(요소);
					}
				}

				반환 tmp;
			}
			반환 결과;
		};

	// 수업
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, 컨텍스트 ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			반환 context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// QSA 및 matchSelector 지원

	// matchSelector(:active)는 true일 때 false를 보고합니다(IE9/Opera 11.5).
	rbuggyMatches = [];

	// qSa(:focus)는 true일 때 false를 보고합니다(Chrome 21).
	// 오류를 발생시키는 IE8/9의 버그 때문에 이것을 허용합니다.
	// iframe에서 `document.activeElement`에 액세스할 때마다
	// 따라서 IE 오류를 피하기 위해 :focus가 항상 QSA를 통과하도록 허용합니다.
	// https://bugs.jquery.com/ticket/13378 참조
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// QSA 정규식 빌드
		// Diego Perini에서 채택한 정규식 전략
		주장( 함수( 엘 ) {

			변수 입력;

			// Select는 의도적으로 빈 문자열로 설정됩니다.
			// 명시적으로 not에 대한 IE의 처리를 테스트하기 위한 것입니다.
			// 부울 콘텐츠 속성 설정,
			// 존재만으로도 충분하기 때문에
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<선택 ID='" + expando + "-\r\\' msallowcapture=''>" +
				"<선택된 옵션=''></option></select>";

			// 지원: IE8, 오페라 11-12.16
			// 빈 문자열이 ^= 또는 $= 또는 *= 뒤에 올 때 아무 것도 선택해서는 안 됩니다.
			// 테스트 속성은 Opera에서는 알 수 없지만 WinRT에서는 "안전"해야 합니다.
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + 공백 + "*(?:''|\"\")" );
			}

			// 지원: IE8
			// 부울 속성 및 "값"이 올바르게 처리되지 않음
			if ( !el.querySelectorAll( "[선택됨]" ).length ) {
				rbuggyQSA.push( "\\[" + 공백 + "*(?:값|" + 부울 + ")" );
			}

			// 지원: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=");
			}

			// 지원: IE 11+, Edge 15 - 18+
			// IE 11/Edge는 경우에 따라 `[name='']` 쿼리에서 요소를 찾지 못합니다.
			// 선택이 작동하기 전에 문서에 임시 속성 추가
			// 문제 주변.
			// 흥미롭게도 IE 10 이상에는 문제가 없는 것 같습니다.
			입력 = document.createElement( "입력" );
			input.setAttribute( "이름", "");
			el.appendChild(입력);
			if ( !el.querySelectorAll( "[이름='']" ).길이 ) {
				rbuggyQSA.push( "\\[" + 공백 + "*이름" + 공백 + "*=" +
					공백 + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked는 선택한 옵션 요소를 반환해야 합니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8은 여기에 오류를 발생시키고 이후 테스트를 볼 수 없습니다.
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":체크됨" );
			}

			// 지원: 사파리 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// 페이지 내 `selector#id 형제-조합 선택기` 실패
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// 지원: Firefox <=3.6 - 5 전용
			// 이전 Firefox는 잘못 이스케이프 처리된 식별자를 사용하지 않습니다.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		주장( 함수( 엘 ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// 지원: Windows 8 기본 앱
			// type 및 name 속성은 .innerHTML 할당 중에 제한됩니다.
			var 입력 = document.createElement( "입력");
			input.setAttribute( "유형", "숨김" );
			el.appendChild( 입력 ).setAttribute( "이름", "D" );

			// 지원: IE8
			// name 속성의 대소문자 구분 적용
			if ( el.querySelectorAll( "[이름=d]" ).길이 ) {
				rbuggyQSA.push( "이름" + 공백 + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled 및 숨겨진 요소(숨겨진 요소는 여전히 활성화됨)
			// IE8은 여기에 오류를 발생시키고 이후 테스트를 볼 수 없습니다.
			if ( el.querySelectorAll( ":활성화" ).length !== 2 ) {
				rbuggyQSA.push( ":활성화", ":비활성화" );
			}

			// 지원: IE9-11+
			// IE의 :disabled 선택기는 비활성화된 필드셋의 자식을 선택하지 않습니다.
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":활성화", ":비활성화" );
			}

			// 지원: Opera 10 - 11만
			// Opera 10-11은 쉼표 뒤에 오는 잘못된 의사를 throw하지 않습니다.
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( 일치 = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		주장( 함수( 엘 ) {

			// matchSelector를 수행할 수 있는지 확인
			// 연결이 끊긴 노드에서(IE 9)
			support.disconnectedMatch = match.call( 엘, "*" );

			// 예외와 함께 실패해야 합니다.
			// Gecko는 오류가 발생하지 않으며 대신 false를 반환합니다.
			match.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", 의사);
		} );
	}

	rbuggyQSA = rbuggyQSA.length && 새로운 RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && 새로운 RegExp( rbuggyMatches.join( "|" ) );

	/* 포함
	-------------------------------------------------- -------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// 요소에 다른 요소가 포함됨
	// 의도적으로 자체 배타적
	// 요소는 자신을 포함하지 않습니다.
	포함 = hasCompare || rnative.test( docElem.contains ) ?
		함수( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			반환 === 웁 || !!( bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		함수( a, b ) {
			만약 ( b ) {
				동안 ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						true를 반환합니다.
					}
				}
			}
			거짓을 반환합니다.
		};

	/* 정렬
	-------------------------------------------------- -------------------- */

	// 문서 순서 정렬
	sortOrder = hasCompare ?
	함수( a, b ) {

		// 중복 제거 플래그
		if ( a === b ) {
			hasDuplicate = 참;
			반환 0;
		}

		// 하나의 입력에만 compareDocumentPosition이 있는 경우 메서드 존재에 따라 정렬
		var 비교 = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if (비교) {
			반환 비교;
		}

		// 두 입력이 동일한 문서에 속하는 경우 위치 계산
		// 지원: IE 11+, Edge 17 - 18+
		// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
		// 두 개의 문서; 얕은 비교가 작동합니다.
		// eslint-disable-next-line eqeqeq
		비교 = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// 그렇지 않으면 연결이 끊어진 것을 알 수 있습니다.
			1;

		// 연결이 끊긴 노드
		if ( 비교 & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === 비교 ) ) {

			// 선호하는 문서와 관련된 첫 번째 요소를 선택합니다.
			// 지원: IE 11+, Edge 17 - 18+
			// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			// eslint-disable-next-line eqeqeq
			if ( a == 문서 || a.ownerDocument == preferredDoc &&
				포함( 선호 문서, a ) ) {
				반환 -1;
			}

			// 지원: IE 11+, Edge 17 - 18+
			// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			// eslint-disable-next-line eqeqeq
			if ( b == 문서 || b.ownerDocument == preferredDoc &&
				포함( 선호 문서, b ) ) {
				반환 1;
			}

			// 원래 순서 유지
			sortInput 반환?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		비교 및 4 반환 ? -1 : 1;
	} :
	함수( a, b ) {

		// 노드가 동일하면 일찍 종료
		if ( a === b ) {
			hasDuplicate = 참;
			반환 0;
		}

		바 커,
			나는 = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [ b ];

		// 부모가 없는 노드는 문서이거나 연결이 끊긴 상태입니다.
		if ( !aup || !bup ) {

			// 지원: IE 11+, Edge 17 - 18+
			// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			/* eslint-disable eqeqeq */
			== 문서를 반환합니까? -1 :
				b == 문서 ? 1 :
				/* eslint 활성화 eqeqeq */
				업 ? -1 :
				버프? 1 :
				정렬 입력 ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// 노드가 형제라면 빠른 검사를 할 수 있습니다.
		} else if ( aup === bup ) {
			반환 형제 체크( a, b );
		}

		// 그렇지 않으면 비교를 위해 조상의 전체 목록이 필요합니다.
		커 = 에이;
		동안 ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		커 = b;
		동안 ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// 불일치를 찾기 위해 나무 아래로 걸어갑니다.
		동안 ( ap[ i ] === bp[ i ] ) {
			나는 ++;
		}

		나는 반환?

			// 노드에 공통 조상이 있는지 형제 검사를 수행합니다.
			형제 체크( ap[ i ], bp[ i ] ) :

			// 그렇지 않으면 문서의 노드가 먼저 정렬됩니다.
			// 지원: IE 11+, Edge 17 - 18+
			// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == 선호 문서 ? 1 :
			/* eslint 활성화 eqeqeq */
			0;
	};

	반환 문서;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, 요소);
};

Sizzle.matchesSelector = function( 요소, expr ) {
	세트문서(요소);

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		노력하다 {
			var ret = match.call( 요소, expr );

			// IE 9의 matchSelector는 연결이 끊긴 노드에서 false를 반환합니다.
			if ( ret || support.disconnectedMatch ||

				// 또한 연결이 끊긴 노드는 문서에 있다고 합니다.
				// IE 9의 프래그먼트
				elem.document && elem.document.nodeType !== 11 ) {
				리턴 렛;
			}
		} 잡기 ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( 컨텍스트, 요소 ) {

	// 필요한 경우 문서 변수 설정
	// 지원: IE 11+, Edge 17 - 18+
	// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || 컨텍스트 ) != 문서 ) {
		setDocument( 컨텍스트 );
	}
	반환 포함( 컨텍스트, 요소 );
};

Sizzle.attr = 기능( 요소, 이름 ) {

	// 필요한 경우 문서 변수 설정
	// 지원: IE 11+, Edge 17 - 18+
	// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != 문서 ) {
		세트문서(요소);
	}

	var fn = Expr.attrHandle[이름.toLowerCase()],

		// Object.prototype 속성에 속지 마세요(jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( 요소, 이름, !documentIsHTML ) :
			한정되지 않은;

	반환 값 !== 정의되지 않음?
		발 :
		지원.속성 || !documentIsHTML ?
			elem.getAttribute( 이름 ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				값:
				없는;
};

Sizzle.escape = 기능( 선택 ) {
	반환( 선택 + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = 기능( 메시지 ) {
	throw new Error( "구문 오류, 인식할 수 없는 표현식: " + msg );
};

/**
 * 문서 정렬 및 중복 제거
 * @param {ArrayLike} 결과
 */
Sizzle.uniqueSort = 기능( 결과 ) {
	var 요소,
		중복 = [],
		j = 0,
		나는 = 0;

	// 중복을 감지할 수 *알지* 않는 한, 존재한다고 가정합니다.
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && 결과.슬라이스( 0 );
	결과.정렬(정렬순서);

	if ( hasDuplicate ) {
		동안 ( ( 요소 = 결과[ i++ ] ) ) {
			if ( 요소 === 결과[ 나는 ] ) {
				j = 복제.푸시(i);
			}
		}
		동안 ( j-- ) {
			result.splice( 중복[ j ], 1 );
		}
	}

	// 해제 객체를 위해 정렬 후 입력 지우기
	// https://github.com/jquery/sizzle/pull/225 참조
	정렬 입력 = null;

	반환 결과;
};

/**
 * DOM 노드 배열의 텍스트 값 검색을 위한 유틸리티 함수
 * @param {배열|요소} 요소
 */
getText = Sizzle.getText = 기능( 요소 ) {
	var 노드,
		렛 = "",
		나는 = 0,
		노드 유형 = 요소.노드 유형;

	if ( ! 노드 유형 ) {

		// nodeType이 없으면 배열로 예상됩니다.
		동안 ( ( 노드 = 요소[ i++ ] ) ) {

			// 주석 노드를 트래버스하지 않음
			ret += getText( 노드 );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// 요소에 textContent 사용
		// 새 줄의 일관성을 위해 innerText 사용이 제거됨(jQuery #11153)
		if ( typeof elem.textContent === "문자열" ) {
			elem.textContent를 반환합니다.
		} 또 다른 {

			// 자식 순회
			(요소 = elem.firstChild; 요소; 요소 = elem.nextSibling) {
				ret += getText( 요소 );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		elem.nodeValue를 반환합니다.
	}

	// 주석 또는 처리 명령 노드를 포함하지 않음

	리턴 렛;
};

Expr = Sizzle.selectors = {

	// 사용자가 조정할 수 있음
	캐시 길이: 50,

	createPseudo: 표시 기능,

	일치: matchExpr,

	속성 핸들: {},

	찾기: {},

	상대적인: {
		">": { 디렉토리: "parentNode", 첫 번째: true },
		" ": { 디렉토리: "부모 노드" },
		"+": { 디렉토리: "previousSibling", 첫 번째: true },
		"~": { 디렉토리: "이전 형제자매" }
	},

	사전 필터: {
		"ATTR": 기능( 일치 ) {
			매치[ 1 ] = 매치[ 1 ].replace( 룬스케이프, 펀스케이프 );

			// 인용 또는 인용 여부에 관계없이 주어진 값을 match[3]으로 이동합니다.
			일치[ 3 ] = ( 일치[ 3 ] || 일치[ 4 ] ||
				매치[ 5 ] || "" ).replace( 룬스케이프, 펀스케이프 );

			if ( 일치[ 2 ] === "~=" ) {
				일치[ 3 ] = " " + 일치[ 3 ] + " ";
			}

			match.slice(0, 4)를 반환합니다.
		},

		"자식": 기능( 일치 ) {

			/* matchExpr["CHILD"]에서 일치
				1종(단|n번째|...)
				2 무엇
				3개의 인수(짝수|홀수|\d*|\d*n([+-]\d+)?|...)
				4 xn+y 인수의 xn 구성 요소([+-]?\d*n|)
				xn 구성 요소의 5 기호
				xn 구성 요소의 6 x
				y-성분의 7 기호
				y-성분의 8년
			*/
			일치[ 1 ] = 일치[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "n번째" ) {

				// n번째-*에는 인수가 필요합니다.
				if ( ! 일치[ 3 ] ) {
					Sizzle.error( 일치[ 0 ] );
				}

				// Expr.filter.CHILD에 대한 숫자 x 및 y 매개변수
				// false/true를 각각 0/1로 캐스트한다는 것을 기억하십시오.
				일치[ 4 ] = +( 일치[ 4 ] ?
					일치[ 5 ] + ( 일치[ 6 ] || 1 ) :
					2 * ( 일치[ 3 ] === "짝수" || 일치[ 3 ] === "홀수" ) );
				일치[ 5 ] = +( ( 일치[ 7 ] + 일치[ 8 ] ) || 일치[ 3 ] === "홀수" );

				// 다른 유형은 인수를 금지합니다.
			} else if ( 일치[ 3 ] ) {
				Sizzle.error( 일치[ 0 ] );
			}

			반환 일치;
		},

		"의사": 기능( 일치 ) {
			var 초과,
				인용되지 않은 = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				널 반환;
			}

			// 인용된 인수를 있는 그대로 받아들임
			if ( 일치[ 3 ] ) {
				일치[ 2 ] = 일치[ 4 ] || 매치[ 5 ] || "";

			// 인용되지 않은 인수에서 초과 문자 제거
			} else if ( 인용되지 않은 && rpseudo.test( 인용되지 않은 ) &&

				// 토큰화에서 초과 가져오기(재귀적으로)
				( 초과 = 토큰화( 인용되지 않음, true ) ) &&

				// 다음 닫는 괄호로 이동
				( 초과 = unquoted.indexOf( ")", unquoted.length - 초과 ) - unquoted.length ) ) {

				// 초과는 음수 인덱스입니다.
				match[ 0 ] = match[ 0 ].slice( 0, 초과 );
				match[ 2 ] = unquoted.slice( 0, 초과 );
			}

			// 의사 필터 메서드에 필요한 캡처만 반환(유형 및 인수)
			반환 match.slice( 0, 3 );
		}
	},

	필터: {

		"TAG": 기능( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
			반환 nodeNameSelector === "*" ?
				함수() {
					true를 반환합니다.
				} :
				기능( 요소 ) {
					elem.nodeName 반환 && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"클래스": 기능( 클래스 이름 ) {
			var 패턴 = classCache[ className + " " ];

			반환 패턴 ||
				( 패턴 = new RegExp( "(^|" + 공백 +
					")" + className + "(" + 공백 + "|$)" ) ) && classCache(
						클래스 이름, 기능( 요소 ) {
							패턴을 반환합니다. 테스트(
								typeof elem.className === "문자열" && elem.className ||
								typeof elem.getAttribute !== "정의되지 않음" &&
									elem.getAttribute( "클래스" ) ||
								""
							);
				} );
		},

		"ATTR": function( 이름, 연산자, 확인 ) {
			반환 함수( 요소 ) {
				var 결과 = Sizzle.attr( 요소, 이름 );

				if ( 결과 == null ) {
					반환 연산자 === "!=";
				}
				만약 ( !연산자 ) {
					true를 반환합니다.
				}

				결과 += "";

				/* eslint-disable max-len */

				반환 연산자 === "=" ? 결과 === 확인:
					연산자 === "!=" ? 결과 !== 확인:
					연산자 === "^=" ? 확인 && result.indexOf( 확인 ) === 0 :
					연산자 === "*=" ? 확인 && result.indexOf( 확인 ) > -1 :
					연산자 === "$=" ? 확인 && result.slice( -check.length ) === 확인 :
					연산자 === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( 체크 ) > -1 :
					연산자 === "|=" ? 결과 === 확인 || result.slice( 0, check.length + 1 ) === 검사 + "-" :
					거짓;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var 단순 = type.slice( 0, 3 ) !== "n번째",
				앞으로 = type.slice( -4 ) !== "마지막",
				ofType = 무엇 === "유형";

			처음 반환 === 1 && 마지막 === 0 ?

				// :nth-*(n) 단축키
				기능( 요소 ) {
					반환 !!elem.parentNode;
				} :

				기능( 요소, _context, xml ) {
					var 캐시, uniqueCache, outerCache, 노드, nodeIndex, 시작,
						dir = 단순 !== 앞으로 ? "nextSibling" : "previousSibling",
						부모 = elem.parentNode,
						이름 = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						차이 = 거짓;

					if ( 부모 ) {

						// :(첫 번째|마지막|만)-(자식|유형)
						if ( 단순 ) {
							동안 ( 디렉토리 ) {
								노드 = 요소;
								동안 ( ( 노드 = 노드[ 디렉토리 ] ) ) {
									if(유형?
										node.nodeName.toLowerCase() === 이름:
										노드.노드 유형 === 1 ) {

										거짓을 반환합니다.
									}
								}

								// :only-*에 대한 방향을 반대로 합니다(아직 수행하지 않은 경우).
								시작 = 디렉토리 = 유형 === "만" && !start && "nextSibling";
							}
							true를 반환합니다.
						}

						시작 = [ 앞으로 ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) 캐시 데이터를 `parent`에 저장
						if ( 앞으로 && useCache ) {

							// 이전에 캐시된 인덱스에서 'elem'을 찾습니다.

							// ...gzip 친화적인 방식으로
							노드 = 부모;
							외부 캐시 = 노드[ 확장 ] || ( 노드[ 확장 ] = {} );

							// 지원: IE <9 전용
							// 복제된 attroperties로부터 방어(jQuery gh-1709)
							uniqueCache = 외부 캐시[ node.uniqueID ] ||
								( 외부캐시[ node.uniqueID ] = {} );

							캐시 = 고유 캐시[ 유형 ] || [];
							nodeIndex = 캐시[ 0 ] === 디렉토리 && 캐시[ 1 ];
							diff = nodeIndex && 캐시[ 2 ];
							노드 = nodeIndex && parent.childNodes[ nodeIndex ];

							동안 ( ( 노드 = ++nodeIndex && 노드 && 노드[ 디렉토리 ] ||

								// 처음부터 `elem`을 찾는 것으로 대체
								( 차이 = nodeIndex = 0 ) || 시작.팝() ) ) {

								// 발견되면 `parent`에 인덱스를 캐시하고 중단합니다.
								if ( node.nodeType === 1 && ++diff && 노드 === 요소 ) {
									uniqueCache[ 유형 ] = [ 디렉토리, nodeIndex, diff ];
									부서지다;
								}
							}

						} 또 다른 {

							// 사용 가능한 경우 이전에 캐시된 요소 인덱스를 사용합니다.
							if ( useCache ) {

								// ...gzip 친화적인 방식으로
								노드 = 요소;
								외부 캐시 = 노드[ 확장 ] || ( 노드[ 확장 ] = {} );

								// 지원: IE <9 전용
								// 복제된 attroperties로부터 방어(jQuery gh-1709)
								uniqueCache = 외부 캐시[ node.uniqueID ] ||
									( 외부캐시[ node.uniqueID ] = {} );

								캐시 = 고유 캐시[ 유형 ] || [];
								nodeIndex = 캐시[ 0 ] === 디렉토리 && 캐시[ 1 ];
								diff = 노드 인덱스;
							}

							// xml :n번째 자식(...)
							// 또는 :nth-last-child(...) 또는 :nth(-last)?-of-type(...)
							if ( 차이 === 거짓 ) {

								// 위와 같은 루프를 사용하여 처음부터 `elem`을 찾습니다.
								동안 ( ( 노드 = ++nodeIndex && 노드 && 노드[ 디렉토리 ] ||
									( 차이 = nodeIndex = 0 ) || 시작.팝() ) ) {

									if ( ( 유형 ?
										node.nodeName.toLowerCase() === 이름:
										node.nodeType === 1 ) &&
										++차이 ) {

										// 발견된 각 요소의 인덱스를 캐시합니다.
										if ( useCache ) {
											외부 캐시 = 노드[ 확장 ] ||
												( 노드[ 확장 ] = {} );

											// 지원: IE <9 전용
											// 복제된 attroperties로부터 방어(jQuery gh-1709)
											uniqueCache = 외부 캐시[ node.uniqueID ] ||
												( 외부캐시[ node.uniqueID ] = {} );

											uniqueCache[ 유형 ] = [ 디렉토리, 차이 ];
										}

										if ( 노드 === 요소 ) {
											부서지다;
										}
									}
								}
							}
						}

						// 오프셋을 통합한 다음 사이클 크기를 확인합니다.
						차이 -= 마지막;
						반환 차이 === 첫 번째 || ( 차이 % 첫 번째 === 0 && 차이 / 첫 번째 >= 0 );
					}
				};
		},

		"의사": 함수( 유사, 인수 ) {

			// 의사 클래스 이름은 대소문자를 구분하지 않습니다.
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// 사용자 정의 의사가 대문자로 추가되는 경우 대소문자 구분으로 우선 순위 지정
			// setFilters는 의사로부터 상속된다는 것을 기억하십시오.
			변수 인수,
				fn = Expr.pseudos[ 유사 ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "지원되지 않는 의사: " + 의사 );

			// 사용자는 createPseudo를 사용하여 다음을 나타낼 수 있습니다.
			// 필터 함수를 생성하려면 인수가 필요합니다.
			// Sizzle이 하는 것처럼
			if ( fn[ 확장 ] ) {
				반환 fn(인수);
			}

			// 그러나 이전 서명에 대한 지원을 유지합니다.
			if ( fn.length > 1 ) {
				args = [ 의사, 의사, "", 인수 ];
				반환 Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
					markFunction( 함수( 시드, 일치 ) {
						var idx,
							일치 = fn( 시드, 인수 ),
							나는 = 일치하는 길이;
						동안 ( 나는-- ) {
							idx = indexOf( 시드, 일치[ i ] );
							시드[ idx ] = !( 일치[ idx ] = 일치[ i ] );
						}
					} ) :
					기능( 요소 ) {
						반환 fn( 요소, 0, 인수);
					};
			}

			리턴 fn;
		}
	},

	유사: {

		// 잠재적으로 복잡한 의사
		"not": markFunction( function( 선택기 ) {

			// 컴파일에 전달된 선택기를 트리밍합니다.
			// 선행 및 후행 처리를 피하기 위해
			// 공백을 결합자로 사용
			var 입력 = [],
				결과 = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			반환 매처[ expando ] ?
				markFunction( function( 시드, 일치, _context, xml ) {
					var 요소,
						일치하지 않는 = matcher( seed, null, xml, [] ),
						나는 = 시드.길이;

					// `matcher`와 일치하지 않는 요소를 찾습니다.
					동안 ( 나는-- ) {
						if ( ( 요소 = 일치하지 않는[ 나는 ] ) ) {
							seed[ i ] = !( 일치[ i ] = elem );
						}
					}
				} ) :
				기능( 요소, _context, xml ) {
					입력[ 0 ] = 요소;
					매처(입력, null, xml, 결과);

					// 요소를 유지하지 않음(문제 #299)
					입력[ 0 ] = 널;
					반환 !results.pop();
				};
		} ),

		"가": markFunction( function( 선택기 ) {
			반환 함수( 요소 ) {
				return Sizzle( 선택자, 요소 ).length > 0;
			};
		} ),

		"포함": markFunction( function( text ) {
			텍스트 = text.replace(runescape, funescape);
			반환 함수( 요소 ) {
				반환( elem.textContent || getText( elem ) ).indexOf( 텍스트 ) > -1;
			};
		} ),

		// "요소가 :lang() 선택기로 표현되는지 여부
		// 요소의 언어 값에만 기반합니다.
		// 식별자 C와 동일하고,
		// 또는 식별자 C로 시작하고 바로 뒤에 "-"가 옵니다.
		// 요소의 언어 값에 대한 C의 일치는 대소문자를 구분하지 않고 수행됩니다.
		// 식별자 C는 유효한 언어 이름일 필요가 없습니다."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"언어": markFunction( 함수( 언어 ) {

			// lang 값은 유효한 식별자여야 합니다.
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "지원되지 않는 언어: " + lang );
			}
			lang = lang.replace(runescape, funescape).toLowerCase();
			반환 함수( 요소 ) {
				var elemlang;
				하다 {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || 요소.getAttribute( "언어") ) ) {

						elemLang = elemLang.toLowerCase();
						요소 반환 === 언어 || elemLang.indexOf( 언어 + "-" ) === 0;
					}
				} 동안 ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				거짓을 반환합니다.
			};
		} ),

		// 기타
		"대상": 기능(요소) {
			var 해시 = window.location && window.location.hash;
			해시 반환 && hash.slice( 1 ) === elem.id;
		},

		"루트": 기능( 요소 ) {
			요소를 반환 === docElem;
		},

		"초점": 기능(요소) {
			요소를 반환 === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// 부울 속성
		"활성화": createDisabledPseudo( false ),
		"비활성화": createDisabledPseudo( true ),

		"확인": 기능( 요소 ) {

			// CSS3에서 :checked는 체크된 요소와 선택된 요소를 모두 반환해야 합니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var 노드 이름 = elem.nodeName.toLowerCase();
			반환( nodeName === "입력" && !!elem.checked ) ||
				( nodeName === "옵션" && !!elem.selected );
		},

		"선택됨": 기능( 요소 ) {

			// 이 속성에 액세스하면 기본적으로 선택됩니다.
			// Safari의 옵션이 제대로 작동합니다.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			elem.selected를 반환 === true;
		},

		// 내용물
		"비어 있음": 함수(요소) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty는 요소(1) 또는 콘텐츠 노드에 의해 무효화됩니다(텍스트: 3; cdata: 4; 엔티티 참조: 5),
			// 그러나 다른 사람에 의한 것은 아님(주석: 8; 처리 명령: 7 등)
			// nodeType < 6은 속성(2)이 자식으로 나타나지 않기 때문에 작동합니다.
			(요소 = elem.firstChild; 요소; 요소 = elem.nextSibling) {
				if ( elem.nodeType < 6 ) {
					거짓을 반환합니다.
				}
			}
			true를 반환합니다.
		},

		"부모": 기능( 요소 ) {
			반환 !Expr.pseudos[ "비어 있음" ]( 요소 );
		},

		// 요소/입력 유형
		"헤더": 기능( 요소 ) {
			반환 rheader.test( elem.nodeName );
		},

		"입력": 기능(요소) {
			반환 rinputs.test( elem.nodeName );
		},

		"버튼": 기능(요소) {
			var 이름 = elem.nodeName.toLowerCase();
			반환 이름 === "입력" && elem.type === "버튼" || 이름 === "버튼";
		},

		"텍스트": 기능(요소) {
			변수 속성;
			반환 elem.nodeName.toLowerCase() === "입력" &&
				elem.type === "텍스트" &&

				// 지원: IE<8
				// 새로운 HTML5 속성 값(예: "search")은 elem.type === "text"와 함께 나타납니다.
				( ( 속성 = elem.getAttribute( "유형" ) ) == null ||
					attr.toLowerCase() === "텍스트" );
		},

		// 수집 위치
		"첫 번째": createPositionalPseudo( function() {
			반환 [0];
		} ),

		"마지막": createPositionalPseudo( function( _matchIndexes, 길이 ) {
			반환 [길이 - 1];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, 길이, 인수 ) {
			반환 [ 인수 < 0 ? 인수 + 길이 : 인수 ];
		} ),

		"짝수": createPositionalPseudo( function( matchIndexes, length ) {
			변수 i = 0;
			( ; 나는 < 길이; 나는 += 2 ) {
				matchIndexes.push( 나는 );
			}
			matchIndex를 반환합니다.
		} ),

		"홀수": createPositionalPseudo( function( matchIndexes, length ) {
			변수 i = 1;
			( ; 나는 < 길이; 나는 += 2 ) {
				matchIndexes.push( 나는 );
			}
			matchIndex를 반환합니다.
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, 길이, 인수 ) {
			var i = 인수 < 0 ?
				인수 + 길이 :
				인수 > 길이 ?
					길이 :
					논쟁;
			( ; --i >= 0; ) {
				matchIndexes.push( 나는 );
			}
			matchIndex를 반환합니다.
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, 길이, 인수 ) {
			var i = 인수 < 0 ? 인수 + 길이 : 인수;
			( ; ++i < 길이; ) {
				matchIndexes.push( 나는 );
			}
			matchIndex를 반환합니다.
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// 버튼/입력 유형 의사 추가
for ( i in { 라디오: true, 체크박스: true, 파일: true, 비밀번호: true, 이미지: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// 새로운 setFilter를 생성하기 위한 쉬운 API
함수 setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = 새로운 setFilters();

토큰화 = Sizzle.tokenize = function( 선택기, parseOnly ) {
	var 일치, 일치, 토큰, 유형,
		지금까지, 그룹, 사전 필터,
		캐시된 = 토큰캐시[ 선택기 + " " ];

	if(캐시됨) {
		parseOnly를 반환합니까? 0 : cached.slice(0);
	}

	지금까지 = 선택기;
	그룹 = [];
	preFilters = Expr.preFilter;

	동안 ( 지금까지 ) {

		// 쉼표 및 첫 번째 실행
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( 일치 ) {

				// 후행 쉼표를 유효한 것으로 사용하지 마십시오.
				soFar = soFar.slice( match[ 0 ].length ) || 지금까지;
			}
			groups.push( ( 토큰 = [] ) );
		}

		일치 = 거짓;

		// 결합자
		if ( ( 일치 = rcombinators.exec( soFar ) ) ) {
			일치 = match.shift();
			tokens.push( {
				값: 일치,

				// 자손 결합자를 공간으로 캐스팅
				유형: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice(matched.length);
		}

		// 필터
		for ( Expr.filter 입력 ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( 일치 = preFilters[ 유형 ]( 일치 ) ) ) ) {
				일치 = match.shift();
				tokens.push( {
					값: 일치,
					유형: 유형,
					일치: 일치
				} );
				soFar = soFar.slice(matched.length);
			}
		}

		if ( !일치 ) {
			부서지다;
		}
	}

	// 유효하지 않은 초과의 길이를 반환합니다.
	// 파싱만 하는 경우
	// 그렇지 않으면 오류를 던지거나 토큰을 반환합니다.
	parseOnly를 반환합니까?
		soFar.길이 :
		지금까지 ?
			Sizzle.error( 선택기 ) :

			// 토큰 캐시
			tokenCache( 선택자, 그룹 ).slice( 0 );
};

기능 toSelector( 토큰 ) {
	변수 i = 0,
		len = 토큰.길이,
		선택기 = "";
	( ; 나는 < len; 나는 ++ ) {
		선택기 += 토큰[ i ].값;
	}
	리턴 선택기;
}

기능 addCombinator(매처, 결합자, 기본) {
	var 디렉토리 = 결합자.dir,
		건너뛰기 = 결합기.next,
		키 = 건너뛰기 || 디렉토리,
		checkNonElements = 기본 && 키 === "parentNode",
		완료 이름 = 완료++;

	결합자.첫 번째를 반환합니까?

		// 가장 가까운 조상/선행 요소에 대해 확인
		기능( 요소, 컨텍스트, xml) {
			동안 ( ( 요소 = 요소[ 디렉토리 ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					반환 일치자( 요소, 컨텍스트, xml );
				}
			}
			거짓을 반환합니다.
		} :

		// 모든 상위/선행 요소에 대해 검사
		기능( 요소, 컨텍스트, xml) {
			var oldCache, uniqueCache, 외부 캐시,
				newCache = [ 디렉터리 실행, 완료 이름 ];

			// XML 노드에 임의의 데이터를 설정할 수 없으므로 결합기 캐싱의 이점을 얻지 못합니다.
			if(xml) {
				동안 ( ( 요소 = 요소[ 디렉토리 ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( 매처( 요소, 컨텍스트, xml ) ) {
							true를 반환합니다.
						}
					}
				}
			} 또 다른 {
				동안 ( ( 요소 = 요소[ 디렉토리 ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						외부 캐시 = 요소[ 확장 ] || ( 요소[ 확장 ] = {} );

						// 지원: IE <9 전용
						// 복제된 attroperties로부터 방어(jQuery gh-1709)
						고유 캐시 = 외부 캐시[ elem.uniqueID ] ||
							( 외부캐시[ elem.uniqueID ] = {} );

						if ( 건너뛰기 && 건너뛰기 === elem.nodeName.toLowerCase() ) {
							요소 = 요소[ 디렉토리 ] || 요소;
						} else if ( ( oldCache = uniqueCache[ 키 ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// 결과가 이전 요소로 역전파되도록 newCache에 할당
							반환 ( newCache[ 2 ] = oldCache[ 2 ] );
						} 또 다른 {

							// 결과가 이전 요소로 역전파되도록 newcache를 재사용합니다.
							uniqueCache[ 키 ] = newCache;

							// 일치하면 완료되었음을 의미합니다. 실패는 우리가 계속 확인해야 함을 의미합니다
							if ( ( newCache[ 2 ] = matcher( 요소, 컨텍스트, xml ) ) ) {
								true를 반환합니다.
							}
						}
					}
				}
			}
			거짓을 반환합니다.
		};
}

기능 elementMatcher(매처) {
	반환 matchers.length > 1 ?
		기능( 요소, 컨텍스트, xml) {
			var i = matchers.length;
			동안 ( 나는-- ) {
				if ( !matchers[ i ]( 요소, 컨텍스트, xml ) ) {
					거짓을 반환합니다.
				}
			}
			true를 반환합니다.
		} :
		일치자[ 0 ];
}

function multipleContexts( 선택기, 컨텍스트, 결과) {
	변수 i = 0,
		len = contexts.length;
	( ; 나는 < len; 나는 ++ ) {
		Sizzle( 선택기, 컨텍스트[ i ], 결과 );
	}
	반환 결과;
}

기능 압축(일치하지 않음, 맵, 필터, 컨텍스트, xml) {
	var 요소,
		새로운 일치하지 않는 = [],
		나는 = 0,
		len = 일치하지 않는.길이,
		매핑된 = 지도 != null;

	( ; 나는 < len; 나는 ++ ) {
		if ( ( 요소 = 일치하지 않는[ 나는 ] ) ) {
			if ( !filter || filter( 요소, 컨텍스트, xml ) ) {
				newUnmatched.push( 요소 );
				if ( 매핑된 ) {
					map.push( 나는 );
				}
			}
		}
	}

	반환 newUnmatched;
}

함수 setMatcher( preFilter, 선택기, 매처, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ 확장 ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ 확장 ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			사전 지도 = [],
			포스트맵 = [],
			기존 = 결과.길이,

			// 시드 또는 컨텍스트에서 초기 요소 가져오기
			요소 = 씨앗 || 다중 컨텍스트(
				선택기 || "*",
				컨텍스트.노드 유형? [ 문맥 ] : 문맥,
				[]
			),

			// 시드 결과 동기화를 위해 맵을 유지하면서 매처 입력을 얻기 위한 사전 필터링
			matcherIn = preFilter && (시드 || !selector) ?
				압축(요소, preMap, preFilter, 컨텍스트, xml) :
				요소,

			matcherOut = 일치자 ?

				// postFinder, 필터링된 시드, 시드가 아닌 postFilter 또는 기존 결과가 있는 경우
				포스트파인더 || ( 시드 ? preFilter : 기존 || postFilter ) ?

					// ...중간 처리가 필요하다
					[] :

					// ...그렇지 않으면 결과를 직접 사용
					결과 :
				매처인;

		// 기본 일치 찾기
		if (매처) {
			matcher( matcherIn, matcherOut, 컨텍스트, xml );
		}

		// postFilter 적용
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( 임시, [], 컨텍스트, xml );

			// 실패한 요소를 다시 matcherIn으로 이동하여 일치 해제
			나는 = 온도 길이;
			동안 ( 나는-- ) {
				if ( ( 요소 = 임시[ 나는 ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = 요소 );
				}
			}
		}

		만약 (씨앗) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// 이 중간을 postFinder 컨텍스트로 압축하여 최종 matcherOut을 가져옵니다.
					온도 = [];
					나는 = matcherOut.length;
					동안 ( 나는-- ) {
						if ( ( 요소 = matcherOut[ i ] ) ) {

							// elem이 아직 최종 일치가 아니기 때문에 matcherIn을 복원합니다.
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), 임시, xml );
				}

				// 일치하는 요소를 시드에서 결과로 이동하여 동기화를 유지합니다.
				나는 = matcherOut.length;
				동안 ( 나는-- ) {
					if ( ( 요소 = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						시드[ 임시 ] = !( 결과[ 임시 ] = 요소 );
					}
				}
			}

		// 정의된 경우 postFinder를 통해 결과에 요소 추가
		} 또 다른 {
			matcherOut = 압축(
				matcherOut === 결과 ?
					matcherOut.splice(기존, matcherOut.length):
					매처아웃
			);
			if ( postFinder ) {
				postFinder( null, 결과, matcherOut, xml );
			} 또 다른 {
				push.apply( 결과, matcherOut );
			}
		}
	} );
}

함수 matcherFromTokens( 토큰 ) {
	var checkContext, 매처, j,
		len = 토큰.길이,
		LeadingRelative = Expr.relative[ 토큰[ 0 ].유형 ],
		implicitRelative = 선두 상대 || 상대[ " " ],
		나는 = 선도상대 ? 1:0,

		// 기본 매처는 최상위 컨텍스트에서 요소에 도달할 수 있도록 합니다.
		matchContext = addCombinator( 함수( 요소 ) {
			요소를 반환 === checkContext ;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( 함수( 요소 ) {
			반환 indexOf(checkContext, 요소) > -1;
		}, implicitRelative, true ),
		일치자 = [ function( 요소, 컨텍스트, xml ) {
			var ret = ( !leadingRelative && ( xml || 컨텍스트 !== outermostContext ) ) || (
				( checkContext = 컨텍스트 ).nodeType ?
					matchContext( 요소, 컨텍스트, xml ) :
					matchAnyContext( 요소, 컨텍스트, xml ) );

			// 요소에 매달리지 않도록 합니다(문제 #299).
			checkContext = 널;
			리턴 렛;
		} ];

	( ; 나는 < len; 나는 ++ ) {
		if ( ( matcher = Expr.relative[ 토큰[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} 또 다른 {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// 위치 매처가 보이면 스페셜을 반환합니다.
			if ( 매처[ expando ] ) {

				// 적절한 처리를 위해 다음 상대 연산자(있는 경우)를 찾습니다.
				j = ++i;
				( ; j < len; j++ ) {
					if ( Expr.relative[ 토큰[ j ].type ] ) {
						부서지다;
					}
				}
				setMatcher(
					i > 1 && elementMatcher(매처),
					i > 1 && toSelector(

					// 앞의 토큰이 자손 결합자이면 암시적 any-element `*`를 삽입합니다.
					토큰
						.슬라이스( 0, i - 1 )
						.concat( { 값: 토큰[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					일치자,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( 토큰 = tokens.slice( j ) ) ),
					j < len && toSelector( 토큰 )
				);
			}
			matchers.push(매처);
		}
	}

	반환 elementMatcher(매처);
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( 시드, 컨텍스트, xml, 결과, 가장 바깥쪽 ) {
			var 요소, j, 매처,
				일치 개수 = 0,
				나는 = "0",
				일치하지 않음 = 시드 && [],
				setMatched = [],
				contextBackup = 외부 컨텍스트,

				// 항상 시드 요소 또는 가장 바깥쪽 컨텍스트가 있어야 합니다.
				요소 = 씨앗 || byElement && Expr.find[ "TAG" ]( "*", 가장 바깥쪽 ),

				// 이것이 가장 바깥쪽 일치자인 경우 정수 디렉토리를 사용합니다.
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if (가장 바깥쪽) {

				// 지원: IE 11+, Edge 17 - 18+
				// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
				// 두 개의 문서; 얕은 비교가 작동합니다.
				// eslint-disable-next-line eqeqeq
				outermostContext = 컨텍스트 == 문서 || 문맥 || 가장 바깥쪽;
			}

			// elementMatchers를 결과에 직접 전달하는 요소 추가
			// 지원: IE<9, 사파리
			// NodeList 속성(IE: "length"; Safari: <숫자>)과 일치하는 요소 허용
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && 요소 ) {
					j = 0;

					// 지원: IE 11+, Edge 17 - 18+
					// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
					// 두 개의 문서; 얕은 비교가 작동합니다.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != 문서 ) {
						세트문서(요소);
						xml = !문서가 HTML;
					}
					동안 ( ( 매처 = elementMatchers[ j++ ] ) ) {
						if ( matcher( 요소, 컨텍스트 || 문서, xml ) ) {
							결과.푸시(요소);
							부서지다;
						}
					}
					if (가장 바깥쪽) {
						디렉토리 = 디렉토리 고유;
					}
				}

				// 세트 필터에 대해 일치하지 않는 요소 추적
				if ( bySet ) {

					// 가능한 모든 matcher를 거쳤을 것입니다.
					if ( ( 요소 = !매처 && 요소 ) ) {
						matchCount--;
					}

					// 일치 여부에 관계없이 모든 요소에 대해 배열을 늘립니다.
					만약 (씨앗) {
						일치하지 않는.푸시(요소);
					}
				}
			}

			// `i`는 이제 위에서 방문한 요소의 수이며 `matchedCount`에 추가합니다.
			// 후자를 음이 아닌 것으로 만듭니다.
			matchCount += 나;

			// 일치하지 않는 요소에 설정된 필터 적용
			// 참고: 일치하지 않는 요소가 없으면 건너뛸 수 있습니다(예: `matchedCount`
			// 같음), 위 루프에서 _any_ 요소를 방문하지 않은 경우
			// 요소 일치자와 시드가 없습니다.
			// 초기 문자열 "0"을 증가시키는 `i`는 `i`가 그 안에서만 문자열로 남도록 허용합니다.
			// 이 경우 `i`와 다르지만 "00" `matchedCount`가 됩니다.
			// 수치적으로 0입니다.
			if ( bySet && i !== matchingCount ) {
				j = 0;
				동안 ( ( 매처 = setMatchers[ j++ ] ) ) {
					matcher(일치하지 않음, setMatched, 컨텍스트, xml);
				}

				만약 (씨앗) {

					// 정렬의 필요성을 제거하기 위해 일치하는 요소를 다시 통합합니다.
					if (matchedCount > 0) {
						동안 ( 나는-- ) {
							if ( !( 일치하지 않는[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( 결과 );
							}
						}
					}

					// 실제 일치 항목만 가져오기 위해 인덱스 자리 표시자 값을 버립니다.
					setMatched = 압축( setMatched );
				}

				// 결과에 일치 항목 추가
				push.apply( 결과, setMatched );

				// 시드가 없는 세트 일치는 여러 성공적인 일치자를 연속적으로 정렬하도록 규정합니다.
				if ( 가장 바깥쪽 && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( 결과 );
				}
			}

			// 중첩 매처에 의한 전역 조작 재정의
			if (가장 바깥쪽) {
				디렉토리 = 디렉토리 고유;
				외부 컨텍스트 = 컨텍스트 백업;
			}

			타의 추종을 불허하는 반환;
		};

	반환 bySet ?
		markFunction( 슈퍼매처 ) :
		슈퍼매처;
}

compile = Sizzle.compile = function( selector, match /* 내부 전용 */ ) {
	var 나는,
		setMatchers = [],
		elementMatchers = [],
		캐시된 = 컴파일러 캐시[ 선택기 + " " ];

	만약 ( !캐시 ) {

		// 각 요소를 확인하는 데 사용할 수 있는 재귀 함수의 함수 생성
		만약 ( ! 일치 ) {
			일치 = 토큰화( 선택기 );
		}
		나는 = 일치.길이;
		동안 ( 나는-- ) {
			캐시된 = matcherFromTokens( match[ i ] );
			if ( 캐시된[ expando ] ) {
				setMatchers.push(캐시됨);
			} 또 다른 {
				elementMatchers.push(캐시됨);
			}
		}

		// 컴파일된 함수를 캐시
		캐시된 = 컴파일러 캐시(
			선택자,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// 셀렉터 및 토큰화 저장
		cached.selector = 선택기;
	}
	캐시된 반환
};

/**
 * Sizzle의 컴파일된 파일과 함께 작동하는 저수준 선택 기능
 * 선택기 기능
 * @param {String|Function} 선택자 선택자 또는 미리 컴파일된
 * Sizzle.compile로 만든 선택기 기능
 * @param {요소} 컨텍스트
 * @param {배열} [결과]
 * @param {Array} [seed] 일치시킬 요소 집합
 */
select = Sizzle.select = function( 선택기, 컨텍스트, 결과, 시드) {
	var i, 토큰, 토큰, 유형, 찾기,
		컴파일된 = typeof 선택기 === "함수" && 선택기,
		match = !seed && tokenize( ( 선택기 = 컴파일된 선택기 || 선택기 ) );

	결과 = 결과 || [];

	// 목록에 선택자가 하나만 있고 시드가 없는 경우 작업을 최소화하려고 시도합니다.
	// (후자는 컨텍스트를 보장함)
	if ( match.length === 1 ) {

		// 선행 복합 선택자가 ID인 경우 컨텍스트를 줄입니다.
		토큰 = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( 토큰 = 토큰[ 0 ] ) ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ 토큰[ 1 ].type ] ) {

			컨텍스트 = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), 컨텍스트 ) || [] )[ 0 ];
			if ( !context ) {
				반환 결과;

			// 미리 컴파일된 매처는 여전히 조상을 확인하므로 레벨을 올리십시오.
			} else if ( 컴파일된 ) {
				컨텍스트 = 컨텍스트.부모노드;
			}

			선택기 = selector.slice( tokens.shift().value.length );
		}

		// 오른쪽에서 왼쪽으로 일치하는 시드 세트를 가져옵니다.
		i = matchExpr[ "needsContext" ].test( 선택기 ) ? 0 : 토큰.길이;
		동안 ( 나는-- ) {
			토큰 = 토큰[ i ];

			// 결합자를 만나면 중단
			if ( Expr.relative[ ( 유형 = 토큰.유형 ) ] ) {
				부서지다;
			}
			if ( ( 찾기 = Expr.find[ 유형 ] ) ) {

				// 선행 형제 결합자에 대한 검색, 확장 컨텍스트
				if ( ( 시드 = 찾기(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( 토큰[ 0 ].type ) && testContext( context.parentNode ) ||
						문맥
				) ) ) {

					// 시드가 비어 있거나 토큰이 남아 있지 않으면 일찍 반환할 수 있습니다.
					tokens.splice( 나는, 1 );
					선택기 = seed.length && toSelector( 토큰 );
					if ( ! 선택자 ) {
						push.apply( 결과, 시드 );
						반환 결과;
					}

					부서지다;
				}
			}
		}
	}

	// 필터링 함수가 제공되지 않은 경우 컴파일 및 실행
	// 위의 선택기를 수정한 경우 재토큰화를 피하기 위해 `match`를 제공합니다.
	( 컴파일된 || compile( 선택기, 일치 ) )(
		씨앗,
		문맥,
		!문서는HTML,
		결과,
		!문맥 || rsibling.test( 선택기 ) && testContext( context.parentNode ) || 문맥
	);
	반환 결과;
};

// 일회성 할당

// 정렬 안정성
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === 확장;

// 지원: 크롬 14-35+
// 비교 함수에 전달되지 않은 경우 항상 중복을 가정합니다.
support.detectDuplicates = !!hasDuplicate;

// 기본 문서에 대해 초기화
세트문서();

// 지원: Webkit<537.32 - Safari 6.0.3/Chrome 25(Chrome 27에서 수정됨)
// 분리된 노드는 *서로*를 혼란스럽게 따릅니다.
support.sortDetached = assert( 함수( 엘 ) {

	// 1을 반환해야 하지만 4를 반환해야 함(다음)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// 지원: IE<8
// 속성/속성 "보간" 방지
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( ! 주장( 함수( 엘) ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "유형|href|높이|폭", function( 요소, 이름, isXML) {
		if ( !isXML ) {
			return elem.getAttribute( 이름, 이름.toLowerCase() === "유형" ? 1 : 2 );
		}
	} );
}

// 지원: IE<9
// getAttribute("value") 대신 defaultValue 사용
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<입력/>";
	el.firstChild.setAttribute( "값", "" );
	반환 el.firstChild.getAttribute( "값" ) === "";
} ) ) {
	addHandle( "값", function( 요소, _이름, isXML) {
		if ( !isXML && elem.nodeName.toLowerCase() === "입력" ) {
			elem.defaultValue를 반환합니다.
		}
	} );
}

// 지원: IE<9
// getAttribute가 거짓일 때 부울을 가져오기 위해 getAttributeNode를 사용합니다.
if ( ! 주장( 함수( 엘) ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( 부울, 함수( 요소, 이름, isXML) {
		var 발;
		if ( !isXML ) {
			요소[이름]을 반환 === true ? name.toLowerCase():
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					값:
					없는;
		}
	} );
}

반환 시즐;

} )( 창문 );



jQuery.find = 지글지글;
jQuery.expr = Sizzle.selectors;

// 더 이상 사용되지 않음
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( 요소, 디렉토리, 까지 ) {
	var 일치 = [],
		자르기 = !== 정의되지 않을 때까지;

	동안 ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( 자르기 && jQuery( 요소 ).is( 까지 ) ) {
				부서지다;
			}
			Matched.push(요소);
		}
	}
	반환 일치;
};


var 형제 = function( n, elem ) {
	var 일치 = [];

	( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== 요소 ) {
			Matched.push(n);
		}
	}

	반환 일치;
};


var rneedsContext = jQuery.expr.match.needsContext;



함수 nodeName( 요소, 이름 ) {

	elem.nodeName 반환 && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// 필터에 대해 동일한 기능을 구현하고 구현하지 않음
function winnow( 요소, 한정자, not ) {
	if ( isFunction( 한정자 ) ) {
		jQuery.grep( 요소, 기능( 요소, i ) 반환) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// 단일 요소
	if ( qualifier.nodeType ) {
		jQuery.grep(요소, 기능(요소)를 반환) {
			return ( 요소 === 한정자 ) !== 아님;
		} );
	}

	// Arraylike 요소(jQuery, arguments, Array)
	if ( typeof 한정자 !== "string" ) {
		jQuery.grep(요소, 기능(요소)를 반환) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== 아님;
		} );
	}

	// 단순 선택자와 복합 선택자 모두에 대해 직접 필터링됨
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var 요소 = 요소[ 0 ];

	이면(아니면) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		jQuery.find.matchesSelector( elem, expr )를 반환합니까? [요소] : [];
	}

	반환 jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		elem.nodeType 반환 === 1;
	} ) );
};

jQuery.fn.extend( {
	찾기: 기능( 선택기 ) {
		var i, ret,
			len = this.length,
			자기 = 이것;

		if ( typeof 선택기 !== "문자열" ) {
			this.pushStack( jQuery( 선택기 ).filter( function() {
				( 나는 = 0, 나는 < len, 나는 ++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						true를 반환합니다.
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		( 나는 = 0, 나는 < len, 나는 ++ ) {
			jQuery.find( 선택자, self[ i ], ret );
		}

		반환 len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	필터: 기능( 선택기 ) {
		return this.pushStack( winnow( this, 선택기 || [], false ) );
	},
	아닙니다: 기능( 선택기 ) {
		return this.pushStack( winnow( this, 선택기 || [], true ) );
	},
	is: function( 선택기 ) {
		반환 !!winnow(
			이것,

			// 이것이 위치/상대 선택기인 경우 반환된 집합의 구성원 자격을 확인합니다.
			// 따라서 $("p:first").is("p:last")는 두 개의 "p"가 있는 문서에 대해 true를 반환하지 않습니다.
			typeof 선택기 === "문자열" && rneedsContext.test( 선택기 ) ?
				jQuery( 선택기 ) :
				선택기 || [],
			거짓
		).길이;
	}
} );


// jQuery 객체 초기화


// 루트 jQuery(document)에 대한 중심 참조
var rootjQuery,

	// HTML 문자열을 확인하는 간단한 방법
	// location.hash를 통해 XSS를 피하기 위해 <tag>보다 #id를 우선시합니다(#9521).
	// 엄격한 HTML 인식(#11290: <로 시작해야 함)
	// 속도를 위한 간단한 #id 케이스 바로가기
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	초기화 = jQuery.fn.init = 함수(선택기, 컨텍스트, 루트) {
		var 일치, 요소;

		// 핸들: $(""), $(null), $(undefined), $(false)
		if ( ! 선택자 ) {
			이것을 반환하십시오;
		}

		// init() 메서드는 대체 rootjQuery를 허용합니다.
		// 마이그레이션이 jQuery.sub를 지원할 수 있도록(gh-2101)
		루트 = 루트 || 루트 쿼리;

		// HTML 문자열 처리
		if ( typeof 선택기 === "문자열" ) {
			if ( 선택기[ 0 ] === "<" &&
				선택기[ 선택기.길이 - 1 ] === ">" &&
				selector.length >= 3 ) {

				// <>로 시작하고 끝나는 문자열이 HTML이라고 가정하고 정규식 검사를 건너뜁니다.
				일치 = [ null, 선택기, null ];

			} 또 다른 {
				일치 = rquickExpr.exec( 선택기 );
			}

			// html과 일치하거나 #id에 대해 컨텍스트가 지정되지 않았는지 확인합니다.
			if ( match && ( match[ 1 ] || !context ) ) {

				// 핸들: $(html) -> $(배열)
				if ( 일치[ 1 ] ) {
					컨텍스트 = 컨텍스트 instanceof jQuery? 컨텍스트[ 0 ] : 컨텍스트;

					// 스크립트 실행 옵션은 back-compat에 대해 true입니다.
					// parseHTML이 없으면 의도적으로 오류가 발생하도록 합니다.
					jQuery.merge( this, jQuery.parseHTML(
						일치[ 1 ],
						컨텍스트 && context.nodeType ? context.owner 문서 || 컨텍스트: 문서,
						진실
					) );

					// 핸들: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( 컨텍스트 ) ) {
						for ( 문맥에서 일치 ) {

							// 컨텍스트의 속성은 가능한 경우 메서드로 호출됩니다.
							if ( isFunction( this[ 일치 ] ) ) {
								this[ match ]( context[ match ] );

							// ...그렇지 않으면 속성으로 설정
							} 또 다른 {
								this.attr( 일치, 컨텍스트[ 일치 ] );
							}
						}
					}

					이것을 반환하십시오;

				// 핸들: $(#id)
				} 또 다른 {
					요소 = 문서.getElementById( 일치[ 2 ] );

					if ( 요소 ) {

						// jQuery 객체에 요소를 직접 삽입
						this[ 0 ] = 요소;
						this.길이 = 1;
					}
					이것을 반환하십시오;
				}

			// 핸들: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( 컨텍스트 || 루트 ).find( 선택기 );

			// 핸들: $(expr, 컨텍스트)
			// (이것은 $(context).find(expr)와 동일합니다.
			} 또 다른 {
				return this.constructor( context ).find( selector );
			}

		// 핸들: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = 선택기;
			this.길이 = 1;
			이것을 반환하십시오;

		// 핸들: $(함수)
		// 문서 준비 단축키
		} else if ( isFunction( 선택기 ) ) {
			반환 root.ready !== 정의되지 않음?
				root.ready( 선택자 ) :

				// ready가 없으면 즉시 실행
				선택기(제이쿼리);
		}

		return jQuery.makeArray( 선택기, this );
	};

// 나중에 인스턴스화할 수 있도록 초기화 함수에 jQuery 프로토타입을 제공합니다.
init.prototype = jQuery.fn;

// 중앙 참조 초기화
rootjQuery = jQuery( 문서 );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// 고유한 집합에서 시작할 때 고유한 집합을 생성하도록 보장하는 메서드
	보장된 고유 = {
		아이들: 사실,
		내용: 사실,
		다음: 사실,
		이전: 사실
	};

jQuery.fn.extend( {
	다음이 있습니다: function( target ) {
		var 대상 = jQuery( 대상, this ),
			l = 대상.길이;

		this.filter를 반환합니다(함수() {
			변수 i = 0;
			( ; 나는 < 나는; 나는 ++ ) {
				if ( jQuery.contains( this, target[ i ] ) ) {
					true를 반환합니다.
				}
			}
		} );
	},

	가장 가까운: function( 선택자, 컨텍스트 ) {
		바 커,
			나는 = 0,
			내가 = this.length,
			일치 = [],
			대상 = typeof 선택기 !== "문자열" && jQuery( 선택기 );

		// _selection_ 컨텍스트가 없기 때문에 위치 선택자는 일치하지 않습니다.
		if ( !rneedsContext.test( 선택기 ) ) {
			( ; 나는 < 나는; 나는 ++ ) {
				for ( cur = this[ i ]; cur && cur !== 컨텍스트; cur = cur.parentNode ) {

					// 항상 문서 조각을 건너뜁니다.
					if ( cur.nodeType < 11 && ( 대상 ?
						target.index( cur ) > -1 :

						// 요소가 아닌 것을 Sizzle에 전달하지 마십시오.
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, 선택기 ) ) ) {

						Matched.push( cur );
						부서지다;
					}
				}
			}
		}

		return this.pushStack( matching.length > 1 ? jQuery.uniqueSort( 일치 ) : 일치 );
	},

	// 집합 내 요소의 위치 결정
	인덱스: 함수( 요소 ) {

		// 인수 없음, 부모의 인덱스 반환
		if ( ! 요소 ) {
			반환( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// 선택기의 인덱스
		if ( 요소 유형 === "문자열" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// 원하는 요소의 위치를 ​​찾습니다.
		반환 indexOf.call(이,

			// jQuery 객체를 받으면 첫 번째 요소가 사용됩니다.
			elem.jquery? 요소[ 0 ] : 요소
		);
	},

	추가: function( 선택기, 컨텍스트 ) {
		this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( 선택기, 컨텍스트 ) )
			)
		);
	},

	addBack: 기능( 선택기 ) {
		return this.add( 선택자 == null ?
			this.prevObject : this.prevObject.filter(선택자)
		);
	}
} );

함수 형제( cur, dir ) {
	동안 ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	리턴 커;
}

jQuery.each( {
	부모: 함수( 요소 ) {
		var 부모 = elem.parentNode;
		반환 부모 && parent.nodeType !== 11 ? 부모 : null;
	},
	부모: 기능( 요소 ) {
		return dir( 요소, "parentNode" );
	},
	parentUntil: function( 요소, _i, 까지) {
		return dir( elem, "parentNode", 까지 );
	},
	다음: 기능( 요소 ) {
		반환 형제( elem, "nextSibling" );
	},
	이전: 함수( 요소 ) {
		반환 형제( elem, "previousSibling" );
	},
	nextAll: 기능( 요소 ) {
		return dir( 요소, "nextSibling" );
	},
	prevAll: 함수( 요소 ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( 요소, _i, 까지 ) {
		return dir( elem, "nextSibling", 까지 );
	},
	prevUntil: function( elem, _i, 까지 ) {
		return dir( elem, "previousSibling", 까지 );
	},
	형제: function( 요소 ) {
		형제를 반환( elem.parentNode || {} ).firstChild, elem );
	},
	자식: 함수( 요소 ) {
		형제를 반환( elem.firstChild );
	},
	내용: 함수( 요소 ) {
		if ( elem.contentDocument != null &&

			// 지원: IE 11+
			// `data` 속성이 없는 <object> 요소에는 객체가 있습니다.
			// `null` 프로토타입이 있는 `contentDocument`.
			getProto( elem.contentDocument ) ) {

			elem.contentDocument를 반환합니다.
		}

		// 지원: IE 9 - 11 전용, iOS 7 전용, Android 브라우저 <=4.3 전용
		// 템플릿 요소를 브라우저에서 일반 요소로 처리합니다.
		// 지원하지 않습니다.
		if ( nodeName( 요소, "템플릿" ) ) {
			요소 = 요소.내용 || 요소;
		}

		jQuery.merge([], elem.childNodes)를 반환합니다.
	}
}, 함수(이름, fn) {
	jQuery.fn[ 이름 ] = function( 까지, 선택기 ) {
		var 일치 = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "까지" ) {
			선택기 = 까지;
		}

		if ( 선택기 && typeof 선택기 === "문자열" ) {
			일치 = jQuery.filter( 선택기, 일치 );
		}

		if ( this.length > 1 ) {

			// 중복 제거
			if ( !보장된 고유[ 이름 ] ) {
				jQuery.uniqueSort(일치);
			}

			// 상위* 및 사전 파생물의 역순
			if ( rparentsprev.test( 이름 ) ) {
				match.reverse();
			}
		}

		this.pushStack(일치됨)을 반환합니다.
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// String 형식의 옵션을 Object 형식의 옵션으로 변환
함수 생성 옵션(옵션) {
	var 객체 = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, 플래그 ) {
		개체[ 플래그 ] = 참;
	} );
	반환 객체;
}

/*
 * 다음 매개변수를 사용하여 콜백 목록을 만듭니다.
 *
 * options: 방법을 변경할 공백으로 구분된 옵션의 선택적 목록
 * 콜백 목록이 동작하거나 보다 전통적인 옵션 객체
 *
 * 기본적으로 콜백 목록은 이벤트 콜백 목록처럼 작동하며
 * "해고" 여러 번.
 *
 * 가능한 옵션:
 *
 * 한 번: 콜백 목록이 한 번만 실행될 수 있도록 합니다(예: Deferred).
 *
 * 메모리: 이전 값을 추적하고 추가된 모든 콜백을 호출합니다.
 * 최신 "기억"으로 목록이 즉시 실행된 후
 * 값(예: Deferred)
 *
 * 고유: 콜백을 한 번만 추가할 수 있도록 합니다(목록에 중복 없음).
 *
 * stopOnFalse: 콜백이 false를 반환할 때 호출 중단
 *
 */
jQuery.Callbacks = 기능( 옵션 ) {

	// 필요한 경우 옵션을 문자열 형식에서 개체 형식으로 변환합니다.
	// (먼저 캐시를 확인함)
	옵션 = typeof 옵션 === "문자열" ?
		createOptions( 옵션 ) :
		jQuery.extend( {}, 옵션 );

	var // 목록이 현재 실행 중인지 알려주는 플래그
		발사,

		// 잊을 수 없는 목록의 마지막 실행 값
		메모리,

		// 목록이 이미 실행되었는지 여부를 알려주는 플래그
		해고,

		// 발사를 방지하기 위한 플래그
		잠긴,

		// 실제 콜백 목록
		목록 = [],

		// 반복 가능한 목록에 대한 실행 데이터 큐
		대기열 = [],

		// 현재 실행 중인 콜백의 인덱스(필요에 따라 추가/제거로 수정됨)
		발사 인덱스 = -1,

		// 호출 콜백
		화재 = 함수() {

			// 단일 실행 적용
			잠긴 = 잠긴 || 옵션.한 번;

			// 보류 중인 모든 실행에 대해 콜백을 실행합니다.
			// fireingIndex 재정의 및 런타임 변경 사항 준수
			발사 = 발사 = 사실;
			for ( ; queue.length; fireingIndex = -1 ) {
				메모리 = queue.shift();
				동안 ( ++fireingIndex < list.length ) {

					// 콜백 실행 및 조기 종료 확인
					if ( list[ fireingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// 끝으로 점프하고 데이터를 잊어버려 .add가 다시 실행되지 않도록 합니다.
						발사 인덱스 = 목록.길이;
						메모리 = 거짓;
					}
				}
			}

			// 데이터가 끝나면 데이터를 잊어 버리십시오.
			if ( !options.memory ) {
				메모리 = 거짓;
			}

			발사 = 거짓;

			// 발사가 완료되면 정리합니다.
			만약 ( 잠긴 ) {

				// 향후 추가 호출에 대한 데이터가 있는 경우 빈 목록을 유지합니다.
				만약 (메모리) {
					목록 = [];

				// 그렇지 않으면 이 객체가 소비됩니다.
				} 또 다른 {
					목록 = "";
				}
			}
		},

		// 실제 콜백 객체
		자기 = {

			// 목록에 콜백 또는 콜백 컬렉션 추가
			추가: function() {
				if ( 목록 ) {

					// 과거 실행의 메모리가 있는 경우 추가한 후 실행해야 합니다.
					if ( 메모리 && ! 발사 ) {
						발사 인덱스 = 목록.길이 - 1;
						queue.push(메모리);
					}

					( 함수 추가( 인수 ) {
						jQuery.each( 인수, 함수( _, 인수 ) {
							if ( isFunction( 인수 ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									목록.푸시(인수);
								}
							} else if ( arg && arg.length && toType( arg ) !== "문자열" ) {

								// 재귀적으로 검사
								추가(인수);
							}
						} );
					} )( 인수 );

					if ( 메모리 && ! 발사 ) {
						불();
					}
				}
				이것을 반환하십시오;
			},

			// 목록에서 콜백 제거
			제거: function() {
				jQuery.each( 인수, 함수( _, 인수 ) {
					변수 인덱스;
					동안 ( ( 인덱스 = jQuery.inArray( 인수, 목록, 인덱스 ) ) > -1 ) {
						list.splice( 인덱스, 1 );

						// 실행 인덱스 처리
						if ( 인덱스 <= 파이어링 인덱스 ) {
							발사 인덱스--;
						}
					}
				} );
				이것을 반환하십시오;
			},

			// 주어진 콜백이 목록에 있는지 확인합니다.
			// 인수가 주어지지 않으면 목록에 콜백이 첨부되었는지 여부를 반환합니다.
			가지고: 기능( fn ) {
				반환 fn ?
					jQuery.inArray( fn, list ) > -1 :
					목록.길이 > 0;
			},

			// 목록에서 모든 콜백 제거
			비어 있음: 함수() {
				if ( 목록 ) {
					목록 = [];
				}
				이것을 반환하십시오;
			},

			// .fire 및 .add 비활성화
			// 현재/보류 중인 모든 실행을 중단합니다.
			// 모든 콜백 및 값 지우기
			비활성화: 기능() {
				잠김 = 대기열 = [];
				목록 = 메모리 = "";
				이것을 반환하십시오;
			},
			비활성화됨: function() {
				반환! 목록;
			},

			// .fire 비활성화
			// 메모리가 없으면 .add도 비활성화합니다(효과가 없기 때문에).
			// 보류 중인 모든 실행을 중단합니다.
			잠금: 함수() {
				잠김 = 대기열 = [];
				if ( !memory && !fireing ) {
					목록 = 메모리 = "";
				}
				이것을 반환하십시오;
			},
			잠김: function() {
				반환 !!잠김;
			},

			// 주어진 컨텍스트와 인수로 모든 콜백을 호출합니다.
			fireWith: function( 컨텍스트, 인수 ) {
				if ( !locked ) {
					인수 = 인수 || [];
					args = [ 컨텍스트, args.slice ? args.slice() : args ];
					queue.push(인수);
					만약 ( ! 발사 ) {
						불();
					}
				}
				이것을 반환하십시오;
			},

			// 주어진 인수로 모든 콜백을 호출합니다.
			화재: 함수() {
				self.fireWith( this, arguments );
				이것을 반환하십시오;
			},

			// 콜백이 이미 한 번 이상 호출되었는지 확인하기 위해
			해고: function() {
				반환 !!해고;
			}
		};

	자기 반환;
};


함수 아이덴티티( v ) {
	리턴 v;
}
함수 던지는 사람( 예 ) {
	예를 던지다;
}

기능 채택값(값, 해결, 거부, 값 없음) {
	var 메소드;

	노력하다 {

		// 권한 동기 동작에 대해 먼저 약속 측면을 확인합니다.
		if ( 값 && isFunction( ( 메소드 = value.promise ) ) ) {
			method.call( 값 ).done( 해결 ).fail( 거부 );

		// 기타 테너블
		} else if ( 값 && isFunction( ( 메소드 = value.then ) ) ) {
			method.call(값, 해결, 거부);

		// 기타 non-thenable
		} 또 다른 {

			// Array#slice가 부울 `noValue`를 정수로 캐스팅하도록 하여 `resolve` 인수를 제어합니다.
			// * 거짓: [ 값 ].slice( 0 ) => resolve( 값 )
			// * 참: [ 값 ].slice( 1 ) => 해결()
			resolve.apply( 정의되지 않음, [ 값 ].slice( noValue ) );
		}

	// Promises/A+의 경우 예외를 거부로 변환
	// jQuery.when은 thenables의 래핑을 해제하지 않으므로 다음에 나타나는 추가 검사를 건너뛸 수 있습니다.
	// Deferred#then 조건부로 거부를 억제합니다.
	} 잡기 ( 값 ) {

		// 지원: Android 4.0만 해당
		// .call/.apply 없이 호출된 엄격한 모드 함수는 전역 개체 컨텍스트를 가져옵니다.
		reject.apply( 정의되지 않음, [ 값 ] );
	}
}

jQuery.extend( {

	지연: function( func ) {
		var 튜플 = [

				// 액션, 리스너 추가, 콜백,
				// ... .then 핸들러, 인수 인덱스, [최종 상태]
				[ "알림", "진행", jQuery.Callbacks( "메모리"),
					jQuery.Callbacks( "메모리"), 2 ],
				[ "해결", "완료", jQuery.Callbacks( "한 번 메모리" ),
					jQuery.Callbacks( "한 번 메모리" ), 0, "해결됨" ],
				[ "거부", "실패", jQuery.Callbacks( "한 번 메모리"),
					jQuery.Callbacks( "한 번 메모리" ), 1, "거부됨" ]
			],
			상태 = "보류 중",
			약속 = {
				상태: 함수() {
					반환 상태;
				},
				항상: function() {
					deferred.done(인수).fail(인수);
					이것을 반환하십시오;
				},
				"잡기": 함수( fn ) {
					반환 약속.then( null, fn );
				},

				// 역호환을 위해 파이프 유지
				파이프: 함수( /* fnDone, fnFail, fnProgress */ ) {
					var fns = 인수;

					반환 jQuery.Deferred( function( newDefer ) {
						jQuery.each( 튜플, 함수( _i, 튜플 ) {

							// 튜플(진행, 완료, 실패)을 인수(완료, 실패, 진행)에 매핑합니다.
							var fn = isFunction( fns[ 튜플[ 4 ] ] ) && fns[ 튜플[ 4 ] ];

							// deferred.progress(function() { newDefer 또는 newDefer.notify에 바인딩 })
							// deferred.done(function() { newDefer 또는 newDefer.resolve에 바인딩 })
							// deferred.fail(function() { newDefer 또는 newDefer.reject에 바인딩 })
							지연[ 튜플[ 1 ] ]( 함수() {
								var 반환 = fn && fn.apply( this, arguments );
								if ( 반환된 && isFunction( 반환된.약속 ) ) {
									반환된.약속()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} 또 다른 {
									newDefer[ 튜플[ 0 ] + "포함" ](
										이것,
										에프엔? [ 반환된 ] : 인수
									);
								}
							} );
						} );
						fns = 널;
					} ).약속하다();
				},
				다음: function( onFulfilled, onRejected, onProgress ) {
					변수 최대 깊이 = 0;
					function resolve( 깊이, 지연, 핸들러, 특수 ) {
						반환 함수() {
							var that = this,
								인수 = 인수,
								MightThrow = 함수() {
									var가 반환되면;

									// 지원: Promise/A+ 섹션 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// 이중 해상도 시도 무시
									if ( 깊이 < maxDepth ) {
										반품;
									}

									반환된 = handler.apply(그것, args);

									// 지원: Promise/A+ 섹션 2.3.1
									// https://promisesaplus.com/#point-48
									if ( 반환 === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// 지원: Promise/A+ 섹션 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// 'then'을 한 번만 검색합니다.
									then = 반환된 &&

										// 지원: Promise/A+ 섹션 2.3.4
										// https://promisesaplus.com/#point-64
										// thenability를 위해 객체와 함수만 확인합니다.
										( 반환된 typeof === "객체" ||
											반환된 typeof === "함수" ) &&
										반환.그때;

									// 반환된 thenable 처리
									if ( isFunction( 그때 ) ) {

										// 특수 프로세서(알림)는 해결을 기다립니다.
										if (특수) {
											then.call(
												반환,
												해결( maxDepth, 지연, ID, 특수 ),
												resolve( maxDepth, deferred, Thrower, 특수 )
											);

										// 일반 프로세서(resolve)도 진행에 연결됩니다.
										} 또 다른 {

											// ...그리고 이전 해상도 값은 무시합니다.
											최대 깊이++;

											then.call(
												반환,
												해결( maxDepth, 지연, ID, 특수 ),
												resolve( maxDepth, deferred, thrower, special ),
												resolve( maxDepth, 지연, ID,
													deferred.notifyWith )
											);
										}

									// 다른 모든 반환 값 처리
									} 또 다른 {

										// 대체 핸들러만 컨텍스트를 전달합니다.
										// 및 여러 값(비사양 동작)
										if ( 핸들러 !== ID ) {
											그 = 정의되지 않음;
											인수 = [ 반환됨 ];
										}

										// 값 처리
										// 기본 프로세스는 resolve
										( 특수 || deferred.resolveWith )( 즉, args );
									}
								},

								// 일반 프로세서(해결)만 예외를 catch하고 거부합니다.
								프로세스 = 특수 ?
									강타 :
									함수() {
										노력하다 {
											강타();
										} 잡기 ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( 전자,
													프로세스.stackTrace );
											}

											// 지원: Promise/A+ 섹션 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// 사후 해결 예외를 무시합니다.
											if ( 깊이 + 1 >= maxDepth ) {

												// 대체 핸들러만 컨텍스트를 전달합니다.
												// 및 여러 값(비사양 동작)
												if ( 핸들러 !== 던지는 사람 ) {
													그 = 정의되지 않음;
													인수 = [ e ];
												}

												deferred.rejectWith(그것, args);
											}
										}
									};

							// 지원: Promise/A+ 섹션 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// 잘못된 거부를 피하기 위해 즉시 약속을 다시 해결합니다.
							// 후속 오류
							만약 (깊이) {
								프로세스();
							} 또 다른 {

								// 예외의 경우 스택을 기록하기 위해 선택적 후크를 호출합니다.
								// 실행이 비동기화되면 손실되기 때문에
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( 프로세스 );
							}
						};
					}

					반환 jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						튜플[ 0 ][ 3 ].add(
							해결하다(
								0,
								새로운 연기,
								isFunction( onProgress ) ?
									진행 중 :
									신원,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						튜플[ 1 ][ 3 ].add(
							해결하다(
								0,
								새로운 연기,
								isFunction( onFulfilled ) ?
									onFulfilled :
									신원
							)
						);

						// 거부된_handlers.add( ... )
						튜플[ 2 ][ 3 ].add(
							해결하다(
								0,
								새로운 연기,
								isFunction( onRejected ) ?
									거부됨:
									던지는 사람
							)
						);
					} ).약속하다();
				},

				// 이 지연에 대한 약속을 얻습니다.
				// obj가 제공되면 Promise 측면이 객체에 추가됩니다.
				약속: function( obj ) {
					객체 반환 != null ? jQuery.extend( obj, promise ) : 약속;
				}
			},
			지연 = {};

		// 목록별 메소드 추가
		jQuery.each( 튜플, 함수( i, 튜플 ) {
			var 목록 = 튜플[ 2 ],
				stateString = 튜플[5];

			// promise.progress = list.add
			// promise.done = list.add
			// 약속.실패 = 목록.추가
			약속[ 튜플[ 1 ] ] = list.add;

			// 핸들 상태
			if ( stateString ) {
				list.add(
					함수() {

						// 상태 = "해결됨"(즉, 충족됨)
						// 상태 = "거부됨"
						상태 = 상태 문자열;
					},

					// 거부된_callbacks.disable
					// fulfilled_callbacks.disable
					튜플[ 3 - i ][ 2 ]. 비활성화,

					// 거부된_handlers.disable
					// fulfilled_handlers.disable
					튜플[ 3 - i ][ 3 ]. 비활성화,

					// progress_callbacks.lock
					튜플[ 0 ][ 2 ].잠금,

					// progress_handlers.lock
					튜플[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// 거부된_handlers.fire
			list.add( 튜플[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			지연[ 튜플[ 0 ] ] = 함수() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				이것을 반환하십시오;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "함께" ] = list.fireWith;
		} );

		// 지연된 약속을 만듭니다.
		약속.약속(지연);

		// 주어진 함수가 있으면 호출
		if ( 함수 ) {
			func.call(지연, 연기);
		}

		// 모두 완료되었습니다!
		반환 연기;
	},

	// 지연된 도우미
	언제: function( singleValue ) {
		var

			// 완료되지 않은 부하의 수
			나머지 = 인수.길이,

			// 처리되지 않은 인수의 수
			나는 = 나머지,

			// 하위 이행 데이터
			resolveContexts = 배열(i),
			resolveValues ​​= slice.call(인수),

			// 기본 지연
			기본 = jQuery.Deferred(),

			// 하위 콜백 팩토리
			updateFunc = 기능( 나는 ) {
				반환 함수(값) {
					resolveContexts[ i ] = 이것;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( 인수 ) : 값;
					if ( !( --남음 ) ) {
						primary.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// 단일 및 빈 인수는 Promise.resolve와 같이 채택됩니다.
		if (나머지 <= 1) {
			채택값( singleValue, 기본.done( updateFunc( i ) ).resolve, 기본.거부,
				!남음);

			// .then()을 사용하여 보조 thenable을 래핑 해제합니다(cf. gh-3000).
			if ( primary.state() === "보류 중" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				반환 기본.then();
			}
		}

		// 여러 인수는 Promise.all 배열 요소처럼 집계됩니다.
		동안 ( 나는-- ) {
			채택값( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		반환 primary.promise();
	}
} );


// 이것은 일반적으로 개발 중 프로그래머의 실수를 나타냅니다.
// 기본적으로 삼키지 않고 최대한 빨리 경고합니다.
var rerrorNames = /^(평가|내부|범위|참조|구문|유형|URI)오류$/;

jQuery.Deferred.exceptionHook = 함수(오류, 스택) {

	// 지원: IE 8 - 9만
	// 콘솔은 개발 도구가 열려 있을 때 존재하며 이는 언제든지 발생할 수 있습니다.
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred 예외: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = 함수(오류) {
	window.setTimeout( 함수() {
		오류를 던지다;
	} );
};




// DOM 준비에 사용되는 지연됨
var readyList = jQuery.Deferred();

jQuery.fn.ready = 기능( fn ) {

	준비 목록
		.그때(fn)

		// 조회할 수 있도록 함수에서 jQuery.readyException을 래핑합니다.
		// 콜백 대신 오류 처리 시 발생
		// 등록.
		.catch( 함수( 오류 ) {
			jQuery.readyException(오류);
		} );

	이것을 반환하십시오;
};

jQuery.extend( {

	// DOM을 사용할 준비가 되었습니까? 발생하면 true로 설정합니다.
	isReady: 거짓,

	// 얼마나 많은 항목을 기다려야 하는지 추적하는 카운터
	// 준비 이벤트가 발생합니다. #6781 참조
	준비대기: 1,

	// DOM이 준비되었을 때 처리
	준비: 기능(대기) {

		// 보류 중인 보류가 있거나 이미 준비된 경우 중단
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			반품;
		}

		// DOM이 준비되었음을 기억하십시오.
		jQuery.isReady = 참;

		// 일반 DOM Ready 이벤트가 발생하면 감소하고 필요한 경우 기다립니다.
		if ( 기다림 !== true && --jQuery.readyWait > 0 ) {
			반품;
		}

		// 바인딩된 함수가 있는 경우 실행
		readyList.resolveWith( 문서, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// 준비된 이벤트 핸들러 및 자체 정리 메소드
함수 완료() {
	document.removeEventListener( "DOMContentLoaded", 완료됨);
	window.removeEventListener( "로드", 완료됨);
	jQuery.ready();
}

// $(document).ready()가 호출되는 경우를 포착
// 브라우저 이벤트가 이미 발생한 후.
// 지원: IE <=9 - 10만
// 이전 IE는 때때로 "대화형"을 너무 빨리 신호합니다.
if ( document.readyState === "완료" ||
	( document.readyState !== "로드 중" && !document.documentElement.doScroll ) ) {

	// 스크립트가 준비를 지연할 수 있도록 비동기식으로 처리합니다.
	window.setTimeout( jQuery.ready );

} 또 다른 {

	// 편리한 이벤트 콜백 사용
	document.addEventListener( "DOMContentLoaded", 완료됨);

	// 항상 작동하는 window.onload로의 폴백
	window.addEventListener( "로드", 완료됨);
}




// 컬렉션의 값을 가져오고 설정하는 다기능 메서드
// 값은 함수인 경우 선택적으로 실행할 수 있습니다.
var 액세스 = function( 요소, fn, 키, 값, 연결 가능, emptyGet, 원시) {
	변수 i = 0,
		len = elems.length,
		대량 = 키 == null;

	// 많은 값을 설정
	if ( toType( 키 ) === "객체" ) {
		연결 가능 = true;
		( 키의 i ) {
			액세스( 요소, fn, i, 키[ i ], true, emptyGet, 원시);
		}

	// 하나의 값을 설정
	} else if ( 값 !== 정의되지 않음 ) {
		연결 가능 = true;

		if ( !isFunction( 값 ) ) {
			원시 = 사실;
		}

		경우 ( 대량 ) {

			// 일괄 작업은 전체 세트에 대해 실행됩니다.
			경우 ( 원시 ) {
				fn.call( 요소, 값);
				fn = 널;

			// ...함수 값을 실행할 때 제외
			} 또 다른 {
				벌크 = fn;
				fn = 기능( 요소, _키, 값) {
					return bulk.call( jQuery( elem ), 값 );
				};
			}
		}

		if ( fn ) {
			( ; 나는 < len; 나는 ++ ) {
				fn(
					요소[ i ], 키, 원시 ?
						값 :
						value.call( elems[ i ], i, fn( elems[ i ], 키 ) )
				);
			}
		}
	}

	if ( 체인 가능 ) {
		반환 요소;
	}

	// 가져오기
	경우 ( 대량 ) {
		반환 fn.call( 요소 );
	}

	반환 렌 ? fn( elems[ 0 ], 키 ) : emptyGet;
};


// 카멜화를 위해 대시 문자열과 일치합니다.
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// camelCase에서 replace()에 대한 콜백으로 사용
함수 fcamelCase( _all, 문자 ) {
	return letter.toUpperCase();
}

// 대시를 camelCase로 변환합니다. CSS 및 데이터 모듈에서 사용
// 지원: IE <=9 - 11, 에지 12 - 15
// Microsoft는 공급업체 접두사를 험프하는 것을 잊었습니다(#9572).
기능 camelCase( 문자열 ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var 수락 데이터 = 기능(소유자) {

	// 다음만 허용:
	// - 노드
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - 물체
	// - 어느
	소유자.노드 유형을 반환 === 1 || 소유자.노드 유형 === 9 || !( +소유자.노드 유형 );
};




함수 데이터() {
	this.expando = jQuery.expando + Data.uid++;
}

데이터.uid = 1;

데이터 프로토타입 = {

	캐시: 기능(소유자) {

		// 소유자 객체에 이미 캐시가 있는지 확인
		var 값 = 소유자[ this.expando ];

		// 없으면 생성
		만약 ( ! 값 ) {
			값 = {};

			// 최신 브라우저에서 요소가 아닌 노드에 대한 데이터를 수락할 수 있습니다.
			// 하지만 그렇게 해서는 안 됩니다. #8335를 참조하세요.
			// 항상 빈 객체를 반환합니다.
			if ( acceptData( 소유자 ) ) {

				// 문자열화되거나 반복될 가능성이 없는 노드인 경우
				// 일반 할당 사용
				if(소유자.노드유형) {
					소유자[ this.expando ] = 값;

				// 그렇지 않으면 열거할 수 없는 속성으로 보호합니다.
				// configurable은 속성을 허용하려면 true여야 합니다.
				// 데이터 삭제 시 삭제
				} 또 다른 {
					Object.defineProperty(소유자, this.expando, {
						가치: 가치,
						구성 가능: 참
					} );
				}
			}
		}

		반환 값;
	},
	집합: 함수(소유자, 데이터, 값) {
		변수 소품,
			캐시 = this.cache(소유자);

		// 핸들: [ 소유자, 키, 값 ] 인수
		// 항상 camelCase 키 사용(gh-2257)
		if ( 데이터 유형 === "문자열" ) {
			캐시[ 낙타 케이스( 데이터 ) ] = 값;

		// 핸들: [ 소유자, { 속성 } ] 인수
		} 또 다른 {

			// 속성을 하나씩 캐시 객체에 복사합니다.
			( 데이터의 소품 ) {
				캐시[ 낙타 케이스( 소품 ) ] = 데이터[ 소품 ];
			}
		}
		캐시를 반환합니다.
	},
	가져오기: 함수(소유자, 키) {
		리턴 키 === 정의되지 않음?
			this.cache( 소유자 ) :

			// 항상 camelCase 키 사용(gh-2257)
			소유자[ this.expando ] && 소유자[ this.expando ][ camelCase( 키 ) ];
	},
	액세스: 기능(소유자, 키, 값) {

		// 다음 중 하나에 해당하는 경우:
		//
		// 1. 키가 지정되지 않았습니다.
		// 2. 문자열 키가 지정되었지만 값이 제공되지 않았습니다.
		//
		// "읽기" 경로를 취하고 get 메소드가 결정할 수 있도록 합니다.
		// 반환할 값은 다음 중 하나입니다.
		//
		// 1. 전체 캐시 객체
		// 2. 키에 저장된 데이터
		//
		if ( 키 === 정의되지 않음 ||
				( ( 키 && typeof 키 === "문자열" ) && 값 === 정의되지 않음 ) {

			return this.get(소유자, 키);
		}

		// 키가 문자열이 아니거나 키와 값이 모두 있는 경우
		// 다음 중 하나로 지정, 설정 또는 확장(기존 객체):
		//
		// 1. 속성의 객체
		// 2. 키와 값
		//
		this.set(소유자, 키, 값);

		// "set" 경로는 두 개의 가능한 진입점을 가질 수 있기 때문에
		// 어떤 경로를 선택했는지에 따라 예상되는 데이터를 반환합니다[*]
		반환 값 !== 정의되지 않음? 값: 키;
	},
	제거: 기능(소유자, 키) {
		var 나는,
			캐시 = 소유자[ this.expando ];

		if ( 캐시 === 정의되지 않음 ) {
			반품;
		}

		if ( 키 !== 정의되지 않음 ) {

			// 배열 또는 공백으로 구분된 키 문자열 지원
			if ( Array.isArray( 키 ) ) {

				// 키가 키의 배열인 경우...
				// 우리는 항상 camelCase 키를 설정하므로 제거합니다.
				키 = key.map( 낙타 케이스 );
			} 또 다른 {
				키 = 낙타 케이스( 키 );

				// 공백이 있는 키가 있으면 사용합니다.
				// 그렇지 않으면 공백이 아닌 것을 일치시켜 배열을 만듭니다.
				키 = 캐시의 키 ?
					[ 열쇠 ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			나는 = 키.길이;

			동안 ( 나는-- ) {
				캐시 삭제[ 키[ i ] ];
			}
		}

		// 더 이상 데이터가 없으면 expando를 제거합니다.
		if ( 키 === 정의되지 않음 || jQuery.isEmptyObject( 캐시 ) ) {

			// 지원: 크롬 <=35 - 45
			// 속성 삭제 시 Webkit & Blink 성능 저하
			// DOM 노드에서, 그래서 대신 undefined로 설정
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607(버그 제한)
			if(소유자.노드유형) {
				소유자[ this.expando ] = 정의되지 않음;
			} 또 다른 {
				소유자 삭제[ this.expando ];
			}
		}
	},
	hasData: 기능( 소유자 ) {
		var 캐시 = 소유자[ this.expando ];
		반환 캐시 !== 정의되지 않음 && !jQuery.isEmptyObject( 캐시 );
	}
};
var dataPriv = 새로운 데이터();

var dataUser = 새로운 데이터();



// 구현 요약
//
// 1. 1.9.x 분기와 API 표면 및 의미론적 호환성을 적용합니다.
// 2. 스토리지를 줄여 모듈의 유지보수성을 향상시킨다.
// 단일 메커니즘에 대한 경로.
// 3. 동일한 단일 메커니즘을 사용하여 "개인" 및 "사용자" 데이터를 지원합니다.
// 4. _Never_ 사용자 코드에 "비공개" 데이터를 노출하지 않음(TODO: Drop _data, _removeData)
// 5. 사용자 개체에 대한 구현 세부 정보 노출 방지(예: expando 속성)
// 6. 2014년 WeakMap 구현 업그레이드를 위한 명확한 경로 제공

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

함수 getData( 데이터 ) {
	if ( 데이터 === "true" ) {
		true를 반환합니다.
	}

	if ( 데이터 === "거짓" ) {
		거짓을 반환합니다.
	}

	if ( 데이터 === "null" ) {
		널 반환;
	}

	// 문자열을 변경하지 않는 경우에만 숫자로 변환
	if ( 데이터 === +데이터 + "" ) {
		반환 + 데이터;
	}

	if ( rbrace.test( 데이터 ) ) {
		반환 JSON.parse( 데이터 );
	}

	데이터 반환;
}

함수 dataAttr( 요소, 키, 데이터 ) {
	변수 이름;

	// 내부에서 아무 것도 발견되지 않으면 아무 것도 가져오려고 시도합니다.
	// HTML5 data-* 속성의 데이터
	if ( 데이터 === 정의되지 않음 && elem.nodeType === 1 ) {
		이름 = "데이터-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		데이터 = elem.getAttribute(이름);

		if ( 데이터 유형 === "문자열" ) {
			노력하다 {
				데이터 = getData( 데이터 );
			} 잡기 ( e ) {}

			// 나중에 변경되지 않도록 데이터를 설정했는지 확인합니다.
			dataUser.set(요소, 키, 데이터);
		} 또 다른 {
			데이터 = 정의되지 않음;
		}
	}
	데이터 반환;
}

jQuery.extend( {
	hasData: 기능( 요소 ) {
		반환 dataUser.hasData( 요소 ) || dataPriv.hasData(요소);
	},

	데이터: 함수( 요소, 이름, 데이터) {
		return dataUser.access(요소, 이름, 데이터);
	},

	데이터 제거: 기능( 요소, 이름 ) {
		dataUser.remove(요소, 이름);
	},

	// TODO: 이제 _data 및 _removeData에 대한 모든 호출이 대체되었습니다.
	// dataPriv 메소드에 대한 직접 호출을 사용하면 더 이상 사용되지 않을 수 있습니다.
	_data: 함수( 요소, 이름, 데이터) {
		return dataPriv.access(요소, 이름, 데이터);
	},

	_removeData: 기능( 요소, 이름 ) {
		dataPriv.remove(요소, 이름);
	}
} );

jQuery.fn.extend( {
	데이터: 기능( 키, 값) {
		변수 i, 이름, 데이터,
			요소 = this[ 0 ],
			속성 = elem && elem.attributes;

		// 모든 값 가져오기
		if ( 키 === 정의되지 않음 ) {
			if ( this.length ) {
				데이터 = dataUser.get(요소);

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					나는 = 속성.길이;
					동안 ( 나는-- ) {

						// 지원: IE 11만 해당
						// attrs 요소는 null일 수 있습니다(#14894).
						if ( 속성[ 나는 ] ) {
							이름 = 속성[ i ].이름;
							if ( name.indexOf( "data-" ) === 0 ) {
								이름 = 낙타 케이스( name.slice( 5 ) );
								dataAttr( 요소, 이름, 데이터[ 이름 ] );
							}
						}
					}
					dataPriv.set( 요소, "hasDataAttrs", true );
				}
			}

			데이터 반환;
		}

		// 여러 값을 설정합니다.
		if ( typeof 키 === "객체" ) {
			this.each( function() {
				dataUser.set( this, key );
			} );
		}

		반환 액세스( this, function( 값 ) {
			변수 데이터;

			// 호출하는 jQuery 객체(요소 일치)가 비어 있지 않습니다.
			// (따라서 this[ 0 ]에 요소가 나타남)
			// `value` 매개변수가 정의되지 않았습니다. 빈 jQuery 객체
			// elem = this[ 0 ]에 대해 `undefined`가 됩니다.
			// 데이터 캐시를 읽으려는 시도가 있으면 예외를 throw합니다.
			if ( 요소 && 값 === 정의되지 않음 ) {

				// 캐시에서 데이터 가져오기 시도
				// 키는 Data에서 항상 camelCased입니다.
				데이터 = dataUser.get( 요소, 키);
				if ( 데이터 !== 정의되지 않음 ) {
					데이터 반환;
				}

				// 데이터 "발견" 시도
				// HTML5 사용자 정의 데이터-* 속성
				데이터 = dataAttr(요소, 키);
				if ( 데이터 !== 정의되지 않음 ) {
					데이터 반환;
				}

				// 열심히 노력했지만 데이터가 존재하지 않습니다.
				반품;
			}

			// 데이터 설정...
			this.each( 함수() {

				// 우리는 항상 camelCased 키를 저장합니다.
				dataUser.set(이, 키, 값);
			} );
		}, null, 값, arguments.length > 1, null, true );
	},

	데이터 제거: 기능( 키 ) {
		this.each( function() {
			dataUser.remove( 이, 키 );
		} );
	}
} );


jQuery.extend( {
	큐: 함수( 요소, 유형, 데이터) {
		var 큐;

		if ( 요소 ) {
			유형 = ( 유형 || "fx" ) + "대기열";
			대기열 = dataPriv.get( 요소, 유형 );

			// 이것이 단지 조회일 경우 빨리 빠져 나와 대기열에서 빼는 속도를 높입니다.
			만약 ( 데이터 ) {
				if ( !queue || Array.isArray( 데이터 ) ) {
					큐 = dataPriv.access( 요소, 유형, jQuery.makeArray( 데이터 ) );
				} 또 다른 {
					큐.푸시(데이터);
				}
			}
			리턴 큐 || [];
		}
	},

	큐에서 빼기: function( 요소, 유형 ) {
		유형 = 유형 || "FX";

		var 큐 = jQuery.queue(요소, 유형),
			시작길이 = queue.length,
			fn = queue.shift(),
			후크 = jQuery._queueHooks(요소, 유형),
			다음 = 함수() {
				jQuery.dequeue(요소, 유형);
			};

		// fx 대기열이 대기열에서 제거되면 항상 진행률 센티넬을 제거합니다.
		if ( fn === "진행" ) {
			fn = queue.shift();
			시작길이--;
		}

		if ( fn ) {

			// fx 대기열이 생성되는 것을 방지하기 위해 진행률 센티넬을 추가합니다.
			// 자동으로 큐에서 제거
			if ( 유형 === "fx" ) {
				queue.unshift( "진행 중" );
			}

			// 마지막 큐 중지 함수를 지웁니다.
			hooks.stop 삭제;
			fn.call( 요소, 다음, 후크 );
		}

		if ( !startLength && 후크 ) {
			hooks.empty.fire();
		}
	},

	// Not public - queueHooks 객체를 생성하거나 현재 객체를 반환합니다.
	_queueHooks: 함수( 요소, 유형) {
		var 키 = 유형 + "queueHooks";
		dataPriv.get(요소, 키) 반환 || dataPriv.access( 요소, 키, {
			비어 있음: jQuery.Callbacks( "한 번 메모리" ).add( function() {
				dataPriv.remove( 요소, [ 유형 + "대기열", 키 ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	큐: 함수( 유형, 데이터 ) {
		변수 설정자 = 2;

		if ( typeof 유형 !== "문자열" ) {
			데이터 = 유형;
			유형 = "fx";
			세터--;
		}

		if (인수.길이 < 설정자) {
			jQuery.queue 반환( this[ 0 ], type );
		}

		반환 데이터 === 정의되지 않음?
			이것 :
			this.each( 함수() {
				var 큐 = jQuery.queue( this, type, data );

				// 이 큐에 대한 후크 확인
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	큐에서 빼기: 함수( 유형 ) {
		this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: 함수( 유형 ) {
		return this.queue( type || "fx", [] );
	},

	// 특정 유형의 큐가 있을 때 해결된 프라미스를 가져옵니다.
	// 비어 있습니다(fx는 기본적으로 유형입니다)
	약속: function( 유형, obj ) {
		var tmp,
			카운트 = 1,
			연기 = jQuery.Deferred(),
			요소 = 이것,
			나는 = this.length,
			해결 = 함수() {
				if ( !( --count ) ) {
					defer.resolveWith( 요소, [ 요소 ] );
				}
			};

		if ( typeof 유형 !== "문자열" ) {
			obj = 유형;
			유형 = 정의되지 않음;
		}
		유형 = 유형 || "FX";

		동안 ( 나는-- ) {
			tmp = dataPriv.get( 요소[ i ], 유형 + "queueHooks" );
			if ( tmp && tmp.empty ) {
				카운트++;
				tmp.empty.add(해결);
			}
		}
		해결하다();
		반환 defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = 새로운 RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "위쪽", "오른쪽", "아래쪽", "왼쪽"];

var 문서 요소 = 문서.문서 요소;



	var isAttached = 기능( 요소 ) {
			반환 jQuery.contains( elem.ownerDocument, elem );
		},
		구성 = { 구성: 참 };

	// 지원: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2만 해당
	// 가능하면 Shadow DOM 경계를 넘어 첨부 파일을 확인합니다(gh-3504).
	// 지원: iOS 10.0-10.2 전용
	// 초기 iOS 10 버전은 `attachShadow`를 지원하지만 `getRootNode`는 지원하지 않습니다.
	// 오류로 이어집니다. `getRootNode`를 확인해야 합니다.
	if ( documentElement.getRootNode ) {
		isAttached = 기능( 요소 ) {
			jQuery.contains( elem.ownerDocument, elem ) 반환 ||
				elem.getRootNode(구성됨) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = 기능( 요소, 엘) {

		// isHiddenWithinTree는 jQuery#filter 함수에서 호출될 수 있습니다.
		// 이 경우 요소는 두 번째 인수가 됩니다.
		요소 = 엘 || 요소;

		// 인라인 스타일이 모든 것을 능가합니다.
		elem.style.display 반환 === "없음" ||
			elem.style.display === "" &&

			// 그렇지 않으면 계산된 스타일을 확인합니다.
			// 지원: 파이어폭스 <=43 - 45
			// 연결이 끊긴 요소는 display: none을 계산할 수 있으므로 먼저 elem이 다음인지 확인합니다.
			// 문서에서.
			isAttached( 요소 ) &&

			jQuery.css( 요소, "디스플레이" ) === "없음";
	};



기능 adjustCSS( 요소, 소품, valueParts, 트윈 ) {
	var 조정, 규모,
		최대 반복 횟수 = 20,
		현재 값 = 트윈 ?
			함수() {
				반환 tween.cur();
			} :
			함수() {
				jQuery.css(요소, 소품, "")를 반환합니다.
			},
		초기 = 현재값(),
		단위 = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// 잠재적인 단위 불일치에 대해 시작 값 계산이 필요합니다.
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( 요소, 소품 ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== 단위 ) {

		// 지원: 파이어폭스 <=54
		// CSS 상한선(gh-2144)의 간섭을 방지하기 위해 반복 대상 값을 절반으로 줄입니다.
		초기 = 초기 / 2;

		// jQuery.css에서 보고한 신뢰 단위
		단위 = 단위 || 초기 단위[ 3 ];

		// 0이 아닌 시작점에서 반복적으로 근사
		initialInUnit = +초기 || 1;

		동안 ( maxIterations-- ) {

			// 최선의 추측을 평가하고 업데이트합니다(0이 나오는 추측을 두 배로 늘림).
			// 스케일이 1과 같거나 넘으면 완료합니다(이전*새 제품을 양수가 아닌 것으로 만들기).
			jQuery.style( 요소, 소품, initialInUnit + 단위);
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / 초기 || 0.5 ) ) <= 0 ) {
				최대 반복 횟수 = 0;
			}
			initialInUnit = initialInUnit / 스케일;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( 요소, 소품, initialInUnit + 단위);

		// 나중에 트윈 속성을 업데이트해야 합니다.
		값 부품 = 값 부품 || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +이니셜 || 0;

		// 지정된 경우 상대 오프셋(+=/-=) 적용
		조정 = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+값 부분[ 2 ];
		if ( 트윈 ) {
			tween.unit = 단위;
			tween.start = initialInUnit;
			tween.end = 조정됨;
		}
	}
	조정된 수익;
}


var defaultDisplayMap = {};

함수 getDefaultDisplay( 요소 ) {
	변수 온도,
		문서 = elem.owner 문서,
		노드 이름 = 요소.노드 이름,
		디스플레이 = defaultDisplayMap[ 노드이름 ];

	경우 ( 표시 ) {
		리턴 디스플레이;
	}

	임시 = doc.body.appendChild( doc.createElement( nodeName ) );
	디스플레이 = jQuery.css( temp, "디스플레이" );

	temp.parentNode.removeChild( 임시 );

	if ( 표시 === "없음" ) {
		디스플레이 = "차단";
	}
	defaultDisplayMap[ nodeName ] = 표시;

	리턴 디스플레이;
}

기능 showHide( 요소, 표시 ) {
	var 디스플레이, 요소,
		값 = [],
		인덱스 = 0,
		길이 = 요소.길이;

	// 변경해야 하는 요소에 대한 새 표시 값 결정
	( ; 인덱스 < 길이; 인덱스++ ) {
		요소 = 요소[ 인덱스 ];
		if ( !elem.style ) {
			계속하다;
		}

		디스플레이 = elem.style.display;
		만약 (보여주세요) {

			// cascade-hidden 요소에 대한 가시성을 강제하기 때문에 즉각적(그리고 느림)
			// 비어 있지 않은 표시 값이 없으면 이 첫 번째 루프에서 검사가 필요합니다(둘 중 하나
			// 인라인 또는 복원 예정)
			if ( 표시 === "없음" ) {
				값[ 인덱스 ] = dataPriv.get( 요소, "디스플레이" ) || 없는;
				if ( !값[ 인덱스 ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				값[ 인덱스 ] = getDefaultDisplay( 요소 );
			}
		} 또 다른 {
			if ( 표시 !== "없음" ) {
				값[ 인덱스 ] = "없음";

				// 덮어쓰는 내용을 기억합니다.
				dataPriv.set( 요소, "디스플레이", 디스플레이 );
			}
		}
	}

	// 지속적인 리플로우를 피하기 위해 두 번째 루프에서 요소의 표시를 설정합니다.
	for ( 인덱스 = 0; 인덱스 < 길이; 인덱스++ ) {
		if ( 값[ 인덱스 ] != null ) {
			요소[ 인덱스 ].style.display = 값[ 인덱스 ];
		}
	}

	반환 요소;
}

jQuery.fn.extend( {
	표시: 함수() {
		return showHide( this, true );
	},
	숨기기: 함수() {
		return showHide( this );
	},
	토글: 기능( 상태 ) {
		if ( 상태 유형 === "부울" ) {
			반환 상태 ? this.show() : this.hide();
		}

		this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} 또 다른 {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|라디오)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( 함수() {
	var 조각 = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		입력 = document.createElement( "입력" );

	// 지원: Android 4.0 - 4.3만 해당
	// 이름이 설정되어 있으면 손실된 상태 확인(#11217)
	// 지원: Windows 웹 앱(WWA)
	// `name` 및 `type`은 WWA에 .setAttribute를 사용해야 합니다(#14901).
	input.setAttribute( "유형", "라디오" );
	input.setAttribute( "체크됨", "체크됨" );
	input.setAttribute( "이름", "t");

	div.appendChild(입력);

	// 지원: Android <=4.1 전용
	// 이전 WebKit은 확인된 상태를 조각에서 올바르게 복제하지 않습니다.
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// 지원: IE <=11 전용
	// 텍스트 영역(및 체크박스) defaultValue가 제대로 복제되었는지 확인합니다.
	div.innerHTML = "<텍스트 영역>x</텍스트 영역>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// 지원: IE <=9 전용
	// IE <=9는 외부에 삽입될 때 <option> 태그를 해당 내용으로 대체합니다.
	// 선택 요소.
	div.innerHTML = "<옵션></옵션>";
	support.option = !!div.lastChild;
} )();


// XHTML을 지원하려면 이 태그를 닫아야 합니다. (#13200)
var 랩맵 = {

	// XHTML 파서는 마술처럼 요소를 삽입하지 않습니다.
	// 태그 수프 파서가 하는 것과 같은 방식입니다. 그래서 우리는 단축 할 수 없습니다
	// <tbody> 또는 기타 필수 요소를 생략하여 이를 수행합니다.
	헤드: [ 1, "<표>", "</표>" ],
	열: [ 2, "<테이블><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<표><tbody>", "</tbody></table>" ],
	td: [ 3, "<표><tbody><tr>", "</tr></tbody></table>" ],

	_기본값: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// 지원: IE <=9 전용
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<선택 다중='다중'>", "</select>" ];
}


함수 getAll( 컨텍스트, 태그 ) {

	// 지원: IE <=9 - 11 전용
	// typeof를 사용하여 호스트 개체에서 인수가 없는 메서드 호출을 방지합니다(#15151).
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( 태그 || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( 태그 || "*" );

	} 또 다른 {
		렛 = [];
	}

	if ( 태그 === 정의되지 않음 || 태그 && nodeName( 컨텍스트, 태그 ) ) {
		jQuery.merge([ 컨텍스트 ], ret )를 반환합니다.
	}

	리턴 렛;
}


// 스크립트를 이미 평가된 것으로 표시
기능 setGlobalEval( 요소, refElements ) {
	변수 i = 0,
		l = 요소 길이;

	( ; 나는 < 나는; 나는 ++ ) {
		dataPriv.set(
			요소[ 나는 ],
			"글로벌 평가",
			!ref요소 || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( 요소, 컨텍스트, 스크립트, 선택, 무시됨) {
	var 요소, tmp, 태그, 랩, 첨부, j,
		조각 = context.createDocumentFragment(),
		노드 = [],
		나는 = 0,
		l = 요소 길이;

	( ; 나는 < 나는; 나는 ++ ) {
		요소 = 요소[ 나는 ];

		if ( 요소 || 요소 === 0 ) {

			// 노드를 직접 추가
			if ( toType( 요소 ) === "객체" ) {

				// 지원: Android <=4.0 전용, PhantomJS 1 전용
				// push.apply(_, arraylike)는 고대 WebKit에서 발생합니다.
				jQuery.merge( 노드, elem.nodeType ? [ elem ] : elem );

			// 비 html을 텍스트 노드로 변환
			} else if ( !rhtml.test( 요소 ) ) {
				node.push( context.createTextNode( 요소 ) );

			// html을 DOM 노드로 변환
			} 또 다른 {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// 표준 표현을 역직렬화
				태그 = ( rtagName.exec( 요소 ) || [ "", "" ] )[ 1 ].toLowerCase();
				랩 = wrapMap[ 태그 ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// 래퍼를 통해 올바른 콘텐츠로 내림차순
				j = 랩[ 0 ];
				동안 ( j-- ) {
					tmp = tmp.lastChild;
				}

				// 지원: Android <=4.0 전용, PhantomJS 1 전용
				// push.apply(_, arraylike)는 고대 WebKit에서 발생합니다.
				jQuery.merge(노드, tmp.childNodes);

				// 최상위 컨테이너 기억
				tmp = fragment.firstChild;

				// 생성된 노드가 고아인지 확인(#12392)
				tmp.textContent = "";
			}
		}
	}

	// 조각에서 래퍼 제거
	fragment.textContent = "";

	나는 = 0;
	동안 ( ( 요소 = 노드[ i++ ] ) ) {

		// 이미 컨텍스트 컬렉션에 있는 요소를 건너뜁니다(trac-4087).
		if ( 선택 && jQuery.inArray( 요소, 선택 ) > -1 ) {
			if ( 무시 ) {
				무시됨.푸시(요소);
			}
			계속하다;
		}

		첨부 = isAttached( 요소 );

		// 프래그먼트에 추가
		tmp = getAll(fragment.appendChild(요소), "스크립트");

		// 스크립트 평가 기록 보존
		만약 (첨부된) {
			setGlobalEval( tmp );
		}

		// 실행 파일 캡처
		if ( 스크립트 ) {
			j = 0;
			동안 ( ( 요소 = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( 요소 );
				}
			}
		}
	}

	반환 조각;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

함수 returnTrue() {
	true를 반환합니다.
}

함수 returnFalse() {
	거짓을 반환합니다.
}

// 지원: IE <=9 - 11+
// focus() 및 blur()는 작동하지 않는 경우를 제외하고는 비동기식입니다.
// 따라서 요소가 이미 활성 상태일 때 초점이 동기화될 것으로 예상합니다.
// 요소가 아직 활성화되지 않은 경우 흐림이 동기식으로 설정됩니다.
// (포커스와 블러는 지원되는 다른 브라우저에서 항상 동기식이며,
// 이것은 우리가 언제 믿을 수 있는지 정의합니다).
기능 expectSync( 요소, 유형 ) {
	return ( 요소 === safeActiveElement() ) === ( 유형 === "포커스" );
}

// 지원: IE <=9 전용
// document.activeElement에 액세스하면 예기치 않게 throw될 수 있습니다.
// https://bugs.jquery.com/ticket/13393
함수 safeActiveElement() {
	노력하다 {
		document.activeElement를 반환합니다.
	} 잡기 ( 오류 ) { }
}

기능 켜기( 요소, 유형, 선택기, 데이터, fn, 하나) {
	var origFn, 유형;

	// 유형은 유형/핸들러의 맵이 될 수 있습니다.
	if ( typeof 유형 === "객체" ) {

		// ( 유형-객체, 선택기, 데이터 )
		if ( typeof 선택기 !== "문자열" ) {

			// ( 유형-객체, 데이터 )
			데이터 = 데이터 || 선택자;
			선택기 = 정의되지 않음;
		}
		(유형 입력) {
			on( 요소, 유형, 선택기, 데이터, 유형[ 유형 ], 하나 );
		}
		반환 요소;
	}

	if ( 데이터 == null && fn == null ) {

		// ( 유형, fn )
		fn = 선택기;
		데이터 = 선택기 = 정의되지 않음;
	} 그렇지 않으면 ( fn == null ) {
		if ( typeof 선택기 === "문자열" ) {

			// ( 유형, 선택자, fn )
			fn = 데이터;
			데이터 = 정의되지 않음;
		} 또 다른 {

			// ( 유형, 데이터, fn )
			fn = 데이터;
			데이터 = 선택기;
			선택기 = 정의되지 않음;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} 그렇지 않으면 ( !fn ) {
		반환 요소;
	}

	if ( 하나 === 1 ) {
		원본 Fn = fn;
		fn = 기능( 이벤트 ) {

			// 이벤트에 정보가 포함되어 있으므로 빈 집합을 사용할 수 있습니다.
			jQuery().off( 이벤트 );
			return origFn.apply( this, arguments );
		};

		// 호출자가 origFn을 사용하여 제거 할 수 있도록 동일한 guid를 사용합니다.
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	elem.each를 반환합니다( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * 이벤트 관리를 위한 도우미 기능 -- 공개 인터페이스의 일부가 아닙니다.
 * 많은 아이디어에 대한 Dean Edwards의 addEvent 라이브러리에 대한 소품.
 */
jQuery.event = {

	전역: {},

	추가: function( 요소, 유형, 핸들러, 데이터, 선택기 ) {

		var handleObjIn, eventHandle, tmp,
			이벤트, t, handleObj,
			특수, 핸들러, 유형, 네임스페이스, origType,
			요소 데이터 = dataPriv.get(요소);

		// 데이터를 받는 객체에만 이벤트를 첨부합니다.
		if ( !수락 데이터( 요소 ) ) {
			반품;
		}

		// 호출자는 핸들러 대신 사용자 정의 데이터의 개체를 전달할 수 있습니다.
		if ( 핸들러.핸들러 ) {
			handleObjIn = 핸들러;
			핸들러 = handleObjIn.handler;
			선택기 = handleObjIn.selector;
		}

		// 잘못된 선택자가 연결 시 예외를 throw하는지 확인합니다.
		// 요소가 요소가 아닌 노드(예: 문서)인 경우 documentElement에 대해 평가
		if ( 선택자 ) {
			jQuery.find.matchesSelector( documentElement, 선택기 );
		}

		// 핸들러에 고유 ID가 있는지 확인하고 나중에 찾거나 제거하는 데 사용합니다.
		if ( !handler.guid ) {
			핸들러.guid = jQuery.guid++;
		}

		// 이것이 첫 번째인 경우 요소의 이벤트 구조와 메인 핸들러를 초기화합니다.
		if ( !( 이벤트 = elemData.events ) ) {
			이벤트 = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = 기능( e ) {

				// jQuery.event.trigger()의 두 번째 이벤트를 버리고
				// 페이지가 언로드된 후 이벤트가 호출될 때
				반환 typeof jQuery !== "정의되지 않음" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : 정의되지 않음;
			};
		}

		// 공백으로 구분된 여러 이벤트 처리
		유형 = ( 유형 || "" ).match( rnothtmlwhite ) || [ "" ];
		t = 유형.길이;
		동안 ( t-- ) {
			tmp = rtypenamespace.exec( 유형[ t ] ) || [];
			유형 = 원본 유형 = tmp[1];
			네임스페이스 = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// 유형이 *반드시* 있어야 하며 네임스페이스 전용 핸들러를 첨부하지 않습니다.
			만약 ( !유형 ) {
				계속하다;
			}

			// 이벤트가 유형을 변경하면 변경된 유형에 대한 특수 이벤트 핸들러를 사용합니다.
			특수 = jQuery.event.special[ 유형 ] || {};

			// 선택자가 정의된 경우 특수 이벤트 API 유형을 결정하고, 그렇지 않으면 유형을 지정합니다.
			유형 = ( 선택자 ? special.delegateType : special.bindType ) || 유형;

			// 새로 재설정된 유형을 기반으로 특수 업데이트
			특수 = jQuery.event.special[ 유형 ] || {};

			// handleObj는 모든 이벤트 핸들러에 전달됩니다.
			handleObj = jQuery.extend( {
				유형: 유형,
				원본 유형: 원본 유형,
				데이터: 데이터,
				핸들러: 핸들러,
				guid: 핸들러.guid,
				선택기: 선택기,
				NeedsContext: 선택기 && jQuery.expr.match.needsContext.test(선택기),
				네임스페이스: namespaces.join( "." )
			}, handleObjIn );

			// 우리가 첫 번째인 경우 이벤트 핸들러 큐를 초기화합니다.
			if ( !( 핸들러 = 이벤트[ 유형 ] ) ) {
				핸들러 = 이벤트[ 유형 ] = [];
				handlers.delegateCount = 0;

				// 특수 이벤트 핸들러가 false를 반환하는 경우에만 addEventListener를 사용합니다.
				if ( !special.setup ||
					special.setup.call( 요소, 데이터, 네임스페이스, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener(유형, eventHandle);
					}
				}
			}

			if ( special.add ) {
				special.add.call( 요소, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = 핸들러.guid;
				}
			}

			// 요소의 핸들러 목록에 추가, 앞에 대리자
			if ( 선택자 ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} 또 다른 {
				handlers.push(handleObj);
			}

			// 이벤트 최적화를 위해 사용된 이벤트를 추적합니다.
			jQuery.event.global[ 유형 ] = true;
		}

	},

	// 요소에서 이벤트 또는 이벤트 세트 분리
	제거: function( 요소, 유형, 핸들러, 선택기, mappingTypes ) {

		var j, origCount, tmp,
			이벤트, t, handleObj,
			특수, 핸들러, 유형, 네임스페이스, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( 이벤트 = elemData.events ) ) {
			반품;
		}

		// 유형의 각 type.namespace에 대해 한 번; 유형을 생략할 수 있습니다.
		유형 = ( 유형 || "" ).match( rnothtmlwhite ) || [ "" ];
		t = 유형.길이;
		동안 ( t-- ) {
			tmp = rtypenamespace.exec( 유형[ t ] ) || [];
			유형 = 원본 유형 = tmp[1];
			네임스페이스 = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// 요소에 대한 모든 이벤트(제공된 경우 이 네임스페이스에서)를 바인딩 해제합니다.
			만약 ( !유형 ) {
				( 이벤트 입력 ) {
					jQuery.event.remove( 요소, 유형 + 유형[ t ], 핸들러, 선택기, true );
				}
				계속하다;
			}

			특수 = jQuery.event.special[ 유형 ] || {};
			유형 = ( 선택자 ? special.delegateType : special.bindType ) || 유형;
			핸들러 = 이벤트[ 유형 ] || [];
			tmp = tmp[ 2 ] &&
				새로운 RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// 일치하는 이벤트 제거
			origCount = j = 핸들러.길이;
			동안 ( j-- ) {
				handleObj = 핸들러[j];

				if ( ( mappingTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || 선택기 === handleObj.selector ||
						선택기 === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( 요소, handleObj );
					}
				}
			}

			// 제거한 것이 있고 더 이상 핸들러가 없으면 일반 이벤트 핸들러를 제거합니다.
			// (특수 이벤트 핸들러 제거 중 무한 재귀 가능성 방지)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( 요소, 네임스페이스, elemData.handle ) === false ) {

					jQuery.removeEvent(요소, 유형, elemData.handle);
				}

				이벤트 삭제[ 유형 ];
			}
		}

		// 더 이상 사용되지 않는 데이터 및 expando 제거
		if ( jQuery.isEmptyObject( 이벤트 ) ) {
			dataPriv.remove( elem, "이벤트 처리" );
		}
	},

	디스패치: function( nativeEvent ) {

		var i, j, ret, 일치, handleObj, handlerQueue,
			args = 새로운 배열(arguments.length),

			// 네이티브 이벤트 객체에서 쓰기 가능한 jQuery.Event 만들기
			이벤트 = jQuery.event.fix( nativeEvent ),

			핸들러 = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ 이벤트 유형 ] || [],
			특수 = jQuery.event.special[ event.type ] || {};

		// (읽기 전용) 기본 이벤트 대신 수정된 jQuery.Event 사용
		args[ 0 ] = 이벤트;

		for ( i = 1; i < arguments.length; i++ ) {
			인수[ 나는 ] = 인수[ 나는 ];
		}

		event.delegateTarget = 이것;

		// 매핑된 유형에 대해 preDispatch 후크를 호출하고 원하는 경우 복구하도록 합니다.
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			반품;
		}

		// 핸들러 결정
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// 먼저 대리자를 실행합니다. 그들은 우리 아래에서 전파를 멈추고 싶어할 수도 있습니다.
		나는 = 0;
		동안 ( ( 일치된 = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = 일치하는 요소;

			j = 0;
			동안 ( ( handleObj = matching.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// 이벤트가 네임스페이스인 경우 각 핸들러는 다음과 같은 경우에만 호출됩니다.
				// 특별히 보편적이거나 그 네임스페이스는 이벤트의 상위 집합입니다.
				if ( !event.rnamespace || handleObj.namespace === false ||
					이벤트.rnamespace.test(handleObj.namespace) ) {

					event.handleObj = 핸들오브제;
					이벤트.데이터 = 핸들오브제이.데이터;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matching.elem, args );

					if ( ret !== 정의되지 않음 ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// 매핑된 유형에 대한 postDispatch 후크 호출
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		반환 이벤트.결과;
	},

	핸들러: function( 이벤트, 핸들러 ) {
		var i, handleObj, sel, MatchedHandlers, MatchedSelectors,
			핸들러 큐 = [],
			delegateCount = 핸들러.delegateCount,
			cur = 이벤트.타겟;

		// 델리게이트 핸들러 찾기
		if ( delegateCount &&

			// 지원: IE <=9
			// 블랙홀 SVG <use> 인스턴스 트리(trac-13180)
			cur.nodeType &&

			// 지원: 파이어폭스 <=42
			// 기본이 아닌 포인터 버튼을 나타내는 사양 위반 클릭 억제(trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// 지원: IE 11만 해당
			// ...그러나 '버튼' -1을 가질 수 있는 라디오 입력의 화살표 키 "클릭"은 아닙니다(gh-2343).
			!( event.type === "클릭" && event.button >= 1 ) ) {

			for ( ; cur !== this ; cur = cur.parentNode || this ) {

				// 요소가 아닌 것을 확인하지 않음(#13208)
				// 비활성화된 요소에 대한 클릭을 처리하지 않음(#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "클릭" && cur.disabled === true ) ) {
					matchHandlers = [];
					MatchedSelector = {};
					for ( 나는 = 0; 나는 < delegateCount; 나는 ++ ) {
						handleObj = 핸들러[ i ];

						// Object.prototype 속성과 충돌하지 않음(#13203)
						sel = handleObj.selector + " ";

						if (matchedSelectors[ sel ] === undefined ) {
							MatchedSelectors[ 선택 ] = handleObj.needsContext ?
								jQuery( 선택, this ).index( cur ) > -1 :
								jQuery.find( 선택, this, null, [ cur ] ).length;
						}
						if (matchedSelectors[ 선택 ] ) {
							matchHandlers.push(handleObj);
						}
					}
					if(matchedHandlers.length) {
						handlerQueue.push( { 요소: cur, 핸들러: matchingHandlers } );
					}
				}
			}
		}

		// 나머지 (직접 바인딩된) 핸들러를 추가합니다.
		커 = 이것;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { 요소: cur, 핸들러: handlers.slice( delegateCount ) } );
		}

		반환 핸들러 큐;
	},

	addProp: 함수(이름, 후크) {
		Object.defineProperty( jQuery.Event.prototype, 이름, {
			열거 가능한: 사실,
			구성 가능: 참,

			get: isFunction( 후크 ) ?
				함수() {
					if ( this.originalEvent ) {
						반환 후크( this.originalEvent );
					}
				} :
				함수() {
					if ( this.originalEvent ) {
						this.originalEvent[이름]을 반환합니다.
					}
				},

			세트: 함수(값) {
				Object.defineProperty(이, 이름, {
					열거 가능한: 사실,
					구성 가능: 참,
					쓰기 가능: 사실,
					가치: 가치
				} );
			}
		} );
	},

	수정: function( originalEvent ) {
		반환 originalEvent[ jQuery.expando ] ?
			원본 이벤트:
			새로운 jQuery.Event( originalEvent );
	},

	특별한: {
		짐: {

			// 트리거된 image.load 이벤트가 window.load로 버블링되는 것을 방지합니다.
			noBubble: 사실
		},
		클릭: {

			// 확인 가능한 입력에 대한 올바른 상태를 보장하기 위해 네이티브 이벤트를 활용합니다.
			설정: 기능( 데이터 ) {

				// _default와의 상호 압축성을 위해 `this` 액세스를 로컬 var로 바꿉니다.
				// `|| data`는 축소를 통해 변수를 보존하기 위한 데드 코드입니다.
				var 엘 = 이것 || 데이터;

				// 첫 번째 핸들러를 요청합니다.
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "입력" ) ) {

					// dataPriv.set( el, "클릭", ... )
					leverageNative(엘, "클릭", returnTrue);
				}

				// 호출자에서 정상적인 처리를 허용하려면 false를 반환합니다.
				거짓을 반환합니다.
			},
			트리거: 기능( 데이터 ) {

				// _default와의 상호 압축성을 위해 `this` 액세스를 로컬 var로 바꿉니다.
				// `|| data`는 축소를 통해 변수를 보존하기 위한 데드 코드입니다.
				var 엘 = 이것 || 데이터;

				// 클릭을 트리거하기 전에 강제 설정
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "입력" ) ) {

					레버리지네이티브( el, "클릭" );
				}

				// 정상적인 이벤트 경로 전파를 허용하려면 false가 아닌 값을 반환합니다.
				true를 반환합니다.
			},

			// 브라우저 간 일관성을 위해 링크에서 기본 .click()을 억제합니다.
			// 현재 활용된 네이티브 이벤트 스택 내부에 있는 경우에도 이를 방지합니다.
			_default: 기능( 이벤트 ) {
				var 대상 = 이벤트.대상;
				반환 rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "클릭" ) ||
					nodeName( 대상, "a" );
			}
		},

		언로드 전: {
			postDispatch: 기능( 이벤트 ) {

				// 지원: 파이어폭스 20+
				// Firefox는 returnValue 필드가 설정되지 않은 경우 경고하지 않습니다.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = 이벤트.결과;
				}
			}
		}
	}
};

// 수동으로 트리거되는 이벤트를 처리하는 이벤트 리스너가 있는지 확인합니다.
// 이에 대한 응답으로 다시 호출될 때까지 진행을 중단하여 합성 이벤트
// 직접적으로 발생하는 *네이티브* 이벤트는 상태 변경이
// 다른 리스너가 호출되기 전에 이미 발생했습니다.
기능 레버리지네이티브( 엘, 유형, expectSync ) {

	// 누락된 expectSync는 jQuery.event.add를 통해 강제로 설정해야 하는 트리거 호출을 나타냅니다.
	if ( !expectSync ) {
		if ( dataPriv.get( 엘, 유형 ) === 정의되지 않음 ) {
			jQuery.event.add( 엘, 유형, returnTrue );
		}
		반품;
	}

	// 컨트롤러를 모든 이벤트 네임스페이스에 대한 특수 범용 핸들러로 등록합니다.
	dataPriv.set( el, 유형, false );
	jQuery.event.add( 엘, 유형, {
		네임스페이스: 거짓,
		핸들러: 함수( 이벤트 ) {
			var notAsync, 결과,
				저장됨 = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// 외부 합성 .trigger()ed 이벤트의 인터럽트 처리
				// 이러한 경우 저장된 데이터는 false여야 하지만 남은 캡처 개체일 수 있습니다.
				// 비동기 네이티브 핸들러에서 (gh-4350)
				if ( !저장된.길이 ) {

					// 내부 네이티브 이벤트를 처리할 때 사용할 인수를 저장합니다.
					// 항상 하나 이상의 인수(이벤트 객체)가 있으므로 이 배열은
					// 남은 캡처 개체와 혼동되지 않습니다.
					저장 = slice.call(인수);
					dataPriv.set(이, 유형, 저장됨);

					// 네이티브 이벤트를 트리거하고 그 결과를 캡처합니다.
					// 지원: IE <=9 - 11+
					// focus() 및 blur()는 비동기식입니다.
					notAsync = expectSync( this, type );
					이 유형 ]();
					결과 = dataPriv.get( this, type );
					if ( 저장됨 !== 결과 || notAsync ) {
						dataPriv.set( this, type, false );
					} 또 다른 {
						결과 = {};
					}
					if ( 저장 !== 결과 ) {

						// 외부 합성 이벤트 취소
						event.stopImmediatePropagation();
						event.preventDefault();

						// 지원: 크롬 86+
						// Chrome에서 포커스 아웃 핸들러가 있는 요소가
						// 외부를 클릭하면 핸들러를 동기적으로 호출합니다. 만약에
						// 핸들러가 요소에서 `.remove()`를 호출하면 데이터가 지워집니다.
						// '결과'를 정의하지 않은 상태로 둡니다. 우리는 이것을 경계해야 합니다.
						반환 결과 && result.value;
					}

				// 이것이 버블링 대리가 있는 이벤트에 대한 내부 합성 이벤트인 경우
				// (초점 또는 흐림), 대리가 트리거를 트리거하는 것으로부터 이미 전파되었다고 가정합니다.
				// 네이티브 이벤트를 생성하고 여기서 다시 발생하지 않도록 합니다.
				// 이것은 기술적으로 잘못된 순서를 `.trigger()`로 가져옵니다(여기서
				// 버블링 대리는 버블링이 아닌 베이스 *이후* 전파되지만,
				// 복제보다 덜 나쁘다.
				} else if ( ( jQuery.event.special[ 유형 ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// 이것이 위에서 트리거된 기본 이벤트인 경우 이제 모든 것이 정상입니다.
			// 원래 인수로 내부 합성 이벤트를 발생시킵니다.
			} else if(저장된 길이) {

				// ...결과를 캡처합니다.
				dataPriv.set(이, 유형, {
					값: jQuery.event.trigger(

						// 지원: IE <=9 - 11+
						// 프로토타입으로 확장하여 위의 stopImmediatePropagation()을 재설정합니다.
						jQuery.extend( 저장[ 0 ], jQuery.Event.prototype ),
						저장된.슬라이스(1),
						이것
					)
				} );

				// 네이티브 이벤트 처리 중단
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( 요소, 유형, 핸들) {

	// 이 "if"는 일반 객체에 필요합니다.
	if ( elem.removeEventListener ) {
		elem.removeEventListener(유형, 핸들);
	}
};

jQuery.Event = 기능( src, 소품 ) {

	// 'new' 키워드 없이 인스턴스화 허용
	if ( !( 이 jQuery.Event 의 instanceof ) ) {
		새로운 jQuery.Event( src, props )를 반환합니다.
	}

	// 이벤트 객체
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// 문서를 버블링하는 이벤트는 방지된 것으로 표시되었을 수 있습니다.
		// 핸들러에 의해 트리 아래로; 올바른 값을 반영합니다.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === 정의되지 않음 &&

				// 지원: Android <=2.3 전용
				src.returnValue === 거짓?
			반환 참 :
			반환거짓;

		// 타겟 속성 생성
		// 지원: Safari <=6 - 7만 해당
		// Target은 텍스트 노드가 아니어야 합니다. (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// 이벤트 유형
	} 또 다른 {
		this.type = src;
	}

	// 명시적으로 제공된 속성을 이벤트 객체에 넣습니다.
	if ( 소품 ) {
		jQuery.extend( this, props );
	}

	// 들어오는 이벤트에 타임스탬프가 없으면 타임스탬프 생성
	this.timeStamp = src && src.timeStamp || 날짜.지금();

	// 고정으로 표시
	this[ jQuery.expando ] = 참;
};

// jQuery.Event는 ECMAScript 언어 바인딩에 의해 지정된 DOM3 이벤트를 기반으로 합니다.
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ema-script-binding.html
jQuery.Event.prototype = {
	생성자: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: 거짓,

	방지기본값: 함수() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: 함수() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: 함수() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// KeyEvent 및 MouseEvent 특정 props를 포함한 모든 일반적인 이벤트 props 포함
jQuery.each( {
	altKey: 사실,
	거품: 사실,
	취소 가능: 사실,
	변경된터치: 사실,
	Ctrl 키: 참,
	세부 사항: 사실,
	eventPhase: 참,
	메타키: 사실,
	pageX: 참,
	pageY: 사실,
	shiftKey: 사실,
	보기: 사실,
	"문자": 사실,
	코드: 사실,
	문자 코드: 참,
	키: 사실,
	키 코드: 참,
	버튼: 참,
	버튼: 참,
	클라이언트X: 사실,
	클라이언트Y: 사실,
	offsetX: 참,
	오프셋Y: 참,
	포인터 ID: 참,
	포인터 유형: 참,
	screenX: 사실,
	screenY: 사실,
	targetTouches: 사실,
	toElement: 사실,
	터치: 사실,
	어느: 사실
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ 유형 ] = {

		// 블러/포커스 시퀀스가 ​​정확하도록 가능한 경우 기본 이벤트를 활용합니다.
		설정: 함수() {

			// 첫 번째 핸들러를 요청합니다.
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// 호출자에서 정상적인 처리를 허용하려면 false를 반환합니다.
			거짓을 반환합니다.
		},
		트리거: 함수() {

			// 트리거 전에 강제 설정
			레버리지네이티브( this, type );

			// 정상적인 이벤트 경로 전파를 허용하려면 false가 아닌 값을 반환합니다.
			true를 반환합니다.
		},

		// 이미 실행 중이므로 기본 포커스 또는 흐림을 억제합니다.
		// 레버리지네이티브에서.
		_기본값: 함수() {
			true를 반환합니다.
		},

		대리자 유형: 대리자 유형
	};
} );

// mouseover/out 및 이벤트 시간 검사를 사용하여 mouseenter/leave 이벤트 생성
// 이벤트 위임이 jQuery에서 작동하도록 합니다.
// pointerenter/pointerleave 및 pointerover/pointerout에 대해 동일한 작업을 수행합니다.
//
// 지원: Safari 7만 해당
// Safari는 너무 자주 mouseenter를 보냅니다. 보다:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// 버그에 대한 설명(이전 Chrome 버전에도 존재함).
jQuery.each( {
	mouseenter: "마우스오버",
	mouseleave: "마우스아웃",
	포인터 입력: "포인터 오버",
	pointerleave: "포인터아웃"
}, 기능( 원본, 수정) {
	jQuery.event.special[ orig ] = {
		대리자 유형: 수정,
		bindType: 수정,

		핸들: 함수( 이벤트 ) {
			바 레트,
				대상 = 이것,
				관련 = event.relatedTarget,
				handleObj = 이벤트.handleObj;

			// mouseenter/leave의 경우 관련 항목이 대상 외부에 있는 경우 핸들러를 호출합니다.
			// NB: 마우스가 브라우저 창을 떠나거나 들어간 경우 relatedTarget 없음
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				이벤트 유형 = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = 수정;
			}
			리턴 렛;
		}
	};
} );

jQuery.fn.extend( {

	on: function( 유형, 선택기, 데이터, fn ) {
		return on( this, types, selector, data, fn );
	},
	하나: function( 유형, 선택자, 데이터, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	끄기: 기능( 유형, 선택기, fn ) {
		var handleObj, 유형;
		if ( 유형 && types.preventDefault && types.handleObj ) {

			// ( 이벤트 ) 전달된 jQuery.Event
			handleObj = 유형.handleObj;
			jQuery( types.delegateTarget ).off(
				핸들오브제이.네임스페이스?
					handleObj.origType + "." + handleObj.namespace :
					핸들오브제이.origType,
				handleObj.selector,
				handleObj.handler
			);
			이것을 반환하십시오;
		}
		if ( typeof 유형 === "객체" ) {

			// ( 유형-객체 [, 선택기] )
			(유형 입력) {
				this.off( 유형, 선택자, 유형[ 유형 ] );
			}
			이것을 반환하십시오;
		}
		if ( 선택기 === 거짓 || 선택기 유형 === "함수" ) {

			// ( 유형 [, fn] )
			fn = 선택기;
			선택기 = 정의되지 않음;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// 지원: IE <=10 - 11, Edge 12 - 13만 해당
	// IE/Edge에서 여기에서 정규식 그룹을 사용하면 심각한 속도 저하가 발생합니다.
	// https://connect.microsoft.com/IE/feedback/details/1736512/ 참조
	rnoInnerhtml = /<스크립트|<스타일|<링크/i,

	// checked="checked" 또는 체크됨
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// 새 행을 포함하기 위해 부모 테이블보다 tbody를 선호합니다.
기능 조작 대상( 요소, 내용) {
	if ( nodeName( 요소, "테이블" ) &&
		nodeName( content.nodeType !== 11 ? 내용 : content.firstChild, "tr" ) ) {

		반환 jQuery( 요소 ).children( "tbody" )[ 0 ] || 요소;
	}

	반환 요소;
}

// 안전한 DOM 조작을 위해 스크립트 요소의 유형 속성 교체/복원
기능 비활성화 스크립트( 요소 ) {
	elem.type = ( elem.getAttribute( "유형") !== null ) + "/" + elem.type;
	반환 요소;
}
함수 복원 스크립트( 요소 ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice(5);
	} 또 다른 {
		elem.removeAttribute( "유형");
	}

	반환 요소;
}

기능 cloneCopyEvent( src, 대상 ) {
	var i, l, 유형, pdataOld, udataOld, udataCur, 이벤트;

	if ( 대상 노드 유형 !== 1 ) {
		반품;
	}

	// 1. 개인 데이터 복사: 이벤트, 핸들러 등
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		이벤트 = pdataOld.events;

		if ( 이벤트 ) {
			dataPriv.remove( dest, "이벤트 처리" );

			( 이벤트 입력 ) {
				for ( i = 0, l = 이벤트[ type ].length; i < l; i++ ) {
					jQuery.event.add( 목적지, 유형, 이벤트[ 유형 ][ i ] );
				}
			}
		}
	}

	// 2. 사용자 데이터 복사
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set(목적지, udataCur);
	}
}

// IE 버그 수정, 지원 테스트 참조
함수 수정 입력( src, 대상 ) {
	var nodeName = dest.nodeName.toLowerCase();

	// 복제된 체크박스 또는 라디오 버튼의 체크 상태를 유지하는 데 실패합니다.
	if ( nodeName === "입력" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// 옵션을 복제할 때 선택한 옵션을 기본 선택 상태로 되돌리는 데 실패합니다.
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		대상.defaultValue = src.defaultValue;
	}
}

function domManip( 컬렉션, 인수, 콜백, 무시됨) {

	// 중첩된 배열을 평평하게 합니다.
	인수 = 평면( 인수);

	var 조각, 첫 번째, 스크립트, hasScripts, 노드, 문서,
		나는 = 0,
		l = 컬렉션.길이,
		iNoClone = l - 1,
		값 = 인수[ 0 ],
		valueIsFunction = isFunction(값);

	// WebKit에서 checked가 포함된 노드 조각을 복제할 수 없습니다.
	if ( valueIsFunction ||
			( l > 1 && 값 유형 === "문자열" &&
				!support.checkClone && rchecked.test( 값 ) ) ) {
		return collection.each( function( index ) {
			var 자체 = 컬렉션.eq( 인덱스 );
			if ( 값이 기능 ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( 자기, 인수, 콜백, 무시됨);
		} );
	}

	이면 ( 내가 ) {
		조각 = buildFragment( 인수, 컬렉션[ 0 ].ownerDocument, false, 컬렉션, 무시됨);
		첫 번째 = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			조각 = 첫 번째;
		}

		// 콜백을 호출하려면 새 콘텐츠 또는 무시된 요소에 대한 관심이 필요합니다.
		if ( 처음 || 무시 ) {
			스크립트 = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// 마지막 항목에 원래 조각을 사용합니다.
			// 끝날 수 있기 때문에 첫 번째 대신
			// 특정 상황에서 잘못 비워지는 경우(#8070).
			( ; 나는 < 나는; 나는 ++ ) {
				노드 = 조각;

				if ( 나는 !== iNoClone ) {
					노드 = jQuery.clone(노드, 참, 참);

					// 나중에 복원할 수 있도록 복제된 스크립트에 대한 참조를 유지합니다.
					if ( hasScripts ) {

						// 지원: Android <=4.0 전용, PhantomJS 1 전용
						// push.apply(_, arraylike)는 고대 WebKit에서 발생합니다.
						jQuery.merge( 스크립트, getAll( 노드, "스크립트" ) );
					}
				}

				callback.call( 컬렉션[ i ], 노드, i );
			}

			if ( hasScripts ) {
				문서 = 스크립트[ scripts.length - 1 ].ownerDocument;

				// 스크립트 재활성화
				jQuery.map( 스크립트, restoreScript );

				// 첫 번째 문서 삽입 시 실행 가능한 스크립트를 평가합니다.
				for ( 나는 = 0; 나는 < hasScripts; i++ ) {
					노드 = 스크립트[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( 노드, "globalEval" ) &&
						jQuery.contains( 문서, 노드 ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase() !== "모듈" ) {

							// 선택적 AJAX 종속성이지만 존재하지 않는 경우 스크립트를 실행하지 않습니다.
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, 문서 );
							}
						} 또 다른 {
							DOMEval( node.textContent.replace( rcleanScript, "" ), 노드, 문서 );
						}
					}
				}
			}
		}
	}

	반환 컬렉션;
}

기능 제거( 요소, 선택기, KeepData ) {
	var 노드,
		노드 = 선택기 ? jQuery.filter( 선택기, 요소) : 요소,
		나는 = 0;

	( ; ( 노드 = 노드[ i ] ) != 널; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( 노드 ) );
		}

		if ( node.parentNode ) {
			if ( KeepData && isAttached( 노드 ) ) {
				setGlobalEval( getAll( 노드, "스크립트" ) );
			}
			node.parentNode.removeChild(노드);
		}
	}

	반환 요소;
}

jQuery.extend( {
	htmlPrefilter: 기능( html ) {
		반환 HTML;
	},

	클론: 함수( 요소, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			클론 = elem.cloneNode( true ),
			inPage = isAttached(요소);

		// IE 복제 문제 수정
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!제이쿼리.isXMLDoc(요소) ) {

			// 성능상의 이유로 여기에서 Sizzle을 피합니다: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( 복제 );
			srcElements = getAll( 요소 );

			( i = 0, l = srcElements.length, i < l, i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// 원본에서 클론으로 이벤트를 복사합니다.
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( 요소 );
				destElements = destElements || getAll( 복제 );

				( i = 0, l = srcElements.length, i < l, i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} 또 다른 {
				cloneCopyEvent( 요소, 복제 );
			}
		}

		// 스크립트 평가 기록 보존
		destElements = getAll( 복제, "스크립트" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( 요소, "스크립트") );
		}

		// 복제된 세트를 반환
		반환 클론;
	},

	cleanData: 기능( 요소 ) {
		var 데이터, 요소, 유형,
			특수 = jQuery.event.special,
			나는 = 0;

		for ( ; ( elem = elems[ i ] ) !== 정의되지 않음; i++ ) {
			if ( acceptData( 요소 ) ) {
				if ( ( 데이터 = 요소[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( data.events 입력 ) {
							if ( 특수[ 유형 ] ) {
								jQuery.event.remove( 요소, 유형 );

							// 이것은 jQuery.event.remove의 오버헤드를 피하기 위한 지름길입니다.
							} 또 다른 {
								jQuery.removeEvent(요소, 유형, 데이터.핸들);
							}
						}
					}

					// 지원: 크롬 <=35 - 45+
					// delete를 사용하는 대신 undefined를 할당합니다. Data#remove를 참조하세요.
					요소[ dataPriv.expando ] = 정의되지 않음;
				}
				if ( 요소[ dataUser.expando ] ) {

					// 지원: 크롬 <=35 - 45+
					// delete를 사용하는 대신 undefined를 할당합니다. Data#remove를 참조하세요.
					요소[ dataUser.expando ] = 정의되지 않음;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	분리: 기능( 선택기 ) {
		return remove( this, selector, true );
	},

	제거: 기능( 선택기 ) {
		return remove( this, selector );
	},

	텍스트: 함수(값) {
		반환 액세스( this, function( 값 ) {
			반환 값 === 정의되지 않음?
				jQuery.text( this ) :
				this.empty().each( 함수() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = 값;
					}
				} );
		}, null, 값, arguments.length );
	},

	추가: 함수() {
		domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var 대상 = 조작 대상( this, elem );
				target.appendChild(요소);
			}
		} );
	},

	앞에 추가: function() {
		domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var 대상 = 조작 대상( this, elem );
				target.insertBefore(요소, target.firstChild);
			}
		} );
	},

	이전: function() {
		domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( 요소, this );
			}
		} );
	},

	이후: 함수() {
		domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore(요소, this.nextSibling);
			}
		} );
	},

	비어 있음: 함수() {
		var 요소,
			나는 = 0;

		for ( ; ( 요소 = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// 메모리 누수 방지
				jQuery.cleanData( getAll( 요소, 거짓 ) );

				// 나머지 노드를 제거합니다.
				elem.textContent = "";
			}
		}

		이것을 반환하십시오;
	},

	클론: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? 거짓 : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		반환 this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	HTML: 함수(값) {
		반환 액세스( this, function( 값 ) {
			var 요소 = this[ 0 ] || {},
				나는 = 0,
				내가 = this.length;

			if ( 값 === 정의되지 않음 && elem.nodeType === 1 ) {
				elem.innerHTML 반환;
			}

			// 바로 가기를 선택하고 innerHTML을 사용할 수 있는지 확인합니다.
			if ( 값 유형 === "문자열" && !rnoInnerhtml.test( 값) &&
				!wrapMap[ ( rtagName.exec( 값 ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				값 = jQuery.htmlPrefilter(값);

				노력하다 {
					( ; 나는 < 나는; 나는 ++ ) {
						요소 = 이것[ 나는 ] || {};

						// 요소 노드를 제거하고 메모리 누수를 방지합니다.
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( 요소, 거짓 ) );
							elem.innerHTML = 값;
						}
					}

					요소 = 0;

				// innerHTML을 사용하면 예외가 발생하면 fallback 메서드를 사용합니다.
				} 잡기 ( e ) {}
			}

			if ( 요소 ) {
				this.empty().append(값);
			}
		}, null, 값, arguments.length );
	},

	교체: 함수() {
		var 무시 = [];

		// 무시되지 않은 각 컨텍스트 요소를 새 콘텐츠로 교체하여 변경합니다.
		domManip( this, arguments, function( elem ) {
			var 부모 = this.parentNode;

			if ( jQuery.inArray( this, 무시됨 ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( 부모 ) {
					parent.replaceChild( 요소, 이 );
				}
			}

		// 강제 콜백 호출
		}, 무시됨 );
	}
} );

jQuery.each( {
	추가: "추가",
	prependTo: "앞에 추가",
	insertBefore: "전",
	insertAfter: "후",
	replaceAll: "바꾸기"
}, 함수(이름, 원본) {
	jQuery.fn[ 이름 ] = 기능( 선택기 ) {
		var 요소,
			렛 = [],
			삽입 = jQuery( 선택기 ),
			마지막 = 삽입.길이 - 1,
			나는 = 0;

		( ; 나는 <= 마지막; 나는 ++ ) {
			요소 = 나 === 마지막 ? this : this.clone( true );
			jQuery( 삽입[ i ] )[ 원본 ]( 요소 );

			// 지원: Android <=4.0 전용, PhantomJS 1 전용
			// push.apply(_, arraylike)가 고대 WebKit에서 발생하기 때문에 .get()
			push.apply( ret, elems.get() );
		}

		this.pushStack(ret)를 반환합니다.
	};
} );
var rnumnonpx = 새로운 RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var getStyles = 기능( 요소 ) {

		// 지원: IE <=11 전용, Firefox <=30 (#15098, #14150)
		// IE는 팝업에서 생성된 요소를 던집니다.
		// FF는 "defaultView.getComputedStyle"을 통해 프레임 요소를 던집니다.
		var 보기 = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			보기 = 창;
		}

		view.getComputedStyle(요소)을 반환합니다.
	};

var 스왑 = 기능( 요소, 옵션, 콜백) {
	var ret, 이름,
		오래된 = {};

	// 이전 값을 기억하고 새 값을 삽입합니다.
	( 옵션의 이름 ) {
		오래된[이름] = elem.style[이름];
		elem.style[ 이름 ] = 옵션[ 이름 ];
	}

	ret = 콜백.call( 요소 );

	// 이전 값 되돌리기
	( 옵션의 이름 ) {
		elem.style[ 이름 ] = 이전[ 이름 ];
	}

	리턴 렛;
};


var rboxStyle = 새로운 RegExp( cssExpand.join( "|"), "i");



( 함수() {

	// pixelPosition 및 boxSizingReliable 테스트를 모두 실행하려면 하나의 레이아웃만 필요합니다.
	// 두 번째 계산을 저장하기 위해 동시에 실행됩니다.
	함수 계산 스타일 테스트() {

		// 싱글톤이므로 한 번만 실행하면 됩니다.
		만약 ( !div ) {
			반품;
		}

		container.style.cssText = "위치:절대;좌측:-11111px;너비:60px;" +
			"마진 상단:1px;패딩:0;테두리:0";
		div.style.css텍스트 =
			"위치:상대적; 표시:블록; 상자 크기 조정: 테두리 상자; 오버플로: 스크롤;" +
			"여백:자동;테두리:1px;패딩:1px;" +
			"너비:60%;상단:1%";
		documentElement.appendChild(컨테이너).appendChild(div);

		var divStyle = window.getComputedStyle(div);
		pixelPositionVal = divStyle.top !== "1%";

		// 지원: Android 4.0 - 4.3 전용, Firefox <=3 - 44
		안정적인MarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

		// 지원: Android 4.0 - 4.3 전용, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// 일부 스타일은 백분율 값과 함께 반환됩니다.
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

		// 지원: IE 9 - 11만 해당
		// box-sizing:border-box 요소에 대한 콘텐츠 차원의 잘못된 보고 감지
		boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

		// 지원: IE 9 전용
		// 오버플로 감지:스크롤 나사(gh-3699)
		// 지원: 크롬 <=64
		// 확대/축소가 offsetWidth에 영향을 줄 때 속지 마십시오(gh-4029).
		div.style.position = "절대";
		scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

		documentElement.removeChild(컨테이너);

		// 메모리에 저장되지 않도록 div를 무효화하고
		// 이미 수행된 검사를 나타내는 신호이기도 합니다.
		div = null;
	}

	함수 roundPixelMeasures( 측정 ) {
		반환 Math.round( parseFloat( 측정 ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		신뢰할 수 있는TrDimensionsVal, 신뢰할 수 있는MarginLeftVal,
		컨테이너 = document.createElement( "div" ),
		div = document.createElement( "div" );

	// 제한된(비 브라우저) 환경에서 일찍 완료
	if ( !div.style ) {
		반품;
	}

	// 지원: IE <=9 - 11 전용
	// 복제된 요소의 스타일은 복제된 소스 요소에 영향을 줍니다. (#8908)
	div.style.backgroundClip = "콘텐츠 상자";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "콘텐츠 상자";

	jQuery.extend(지원, {
		boxSizingReliable: 함수() {
			컴퓨트스타일테스트();
			반환 boxSizingReliableVal;
		},
		픽셀 상자 스타일: 함수() {
			컴퓨트스타일테스트();
			반환 pixelBoxStylesVal;
		},
		픽셀 위치: 함수() {
			컴퓨트스타일테스트();
			반환 pixelPositionVal;
		},
		신뢰할 수 있는 여백: 함수() {
			컴퓨트스타일테스트();
			신뢰할 수 있는 MarginLeftVal을 반환합니다.
		},
		스크롤박스 크기: 함수() {
			컴퓨트스타일테스트();
			scrollboxSizeVal을 반환합니다.
		},

		// 지원: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge는 너비/높이가 있는 테이블 행의 `getComputedStyle`을 잘못 보고합니다.
		// 'offset*' 속성이 올바른 값을 보고하는 동안 CSS에서 설정합니다.
		// IE 9의 동작은 최신 버전보다 더 미묘하고 통과합니다.
		// 이 테스트의 일부 버전; 거기에 통과하지 않도록하십시오!
		//
		// 지원: 파이어폭스 70+
		// Firefox에만 테두리 너비가 포함됩니다.
		// 계산된 차원에서. (gh-4529)
		신뢰할 수 있는TrDimensions: 함수() {
			var 테이블, tr, trChild, trStyle;
			if (신뢰할 수 있는TrDimensionsVal == null ) {
				테이블 = document.createElement( "테이블" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "위치:절대;좌:-11111px;테두리 축소:분리";
				tr.style.cssText = "테두리:1px 솔리드";

				// 지원: 크롬 86+
				// cssText를 통해 설정한 높이가 적용되지 않습니다.
				// 계산된 높이가 0으로 돌아옵니다.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// 지원: 안드로이드 8 크롬 86+
				// bodyBackground.html iframe에서
				// 모든 div 요소에 대한 표시는 "인라인"으로 설정됩니다.
				// Android 8 Chrome 86에서만 문제가 발생합니다.
				// div가 표시되는지 확인: 블록
				// 이 문제를 해결합니다.
				trChild.style.display = "차단";

				문서 요소
					.appendChild( 테이블 )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				신뢰할 수 있는TrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild(테이블);
			}
			신뢰할 수 있는TrDimensionsVal을 반환합니다.
		}
	} );
} )();


함수 curCSS( 요소, 이름, 계산됨) {
	var 너비, minWidth, maxWidth, ret,

		// 지원: 파이어폭스 51+
		// 어떻게든 계산되기 전에 스타일 검색
		// 잘못된 값을 가져오는 문제 수정
		// 분리된 요소에서
		스타일 = elem.style;

	계산됨 = 계산됨 || getStyles(요소);

	// getPropertyValue는 다음에 필요합니다.
	// .css('필터') (IE 9 전용, #12537)
	// .css('--customProperty) (#3144)
	if ( 계산된 ) {
		ret = 계산된.getPropertyValue( 이름 ) || 계산[이름];

		if ( ret === "" && !isAttached( 요소 ) ) {
			ret = jQuery.style( 요소, 이름 );
		}

		// "Dean Edwards의 멋진 해킹"에 대한 찬사
		// Android 브라우저는 일부 값에 대해 백분율을 반환합니다.
		// 하지만 너비는 확실히 픽셀인 것 같습니다.
		// 이것은 CSSOM 초안 사양에 위배됩니다.
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( 이름 ) ) {

			// 원래 값 기억
			너비 = 스타일 너비;
			최소폭 = 스타일.최소폭;
			최대폭 = 스타일.최대폭;

			// 계산된 값을 가져오기 위해 새 값을 입력합니다.
			style.minWidth = style.maxWidth = style.width = ret;
			ret = 계산된 너비;

			// 변경된 값 되돌리기
			style.width = 너비;
			스타일.최소폭 = 최소폭;
			스타일.최대폭 = 최대폭;
		}
	}

	반환 ret !== 정의되지 않음?

		// 지원: IE <=9 - 11 전용
		// IE는 zIndex 값을 정수로 반환합니다.
		렛 + "" :
		렛;
}


함수 addGetHookIf( 조건Fn, hookFn ) {

	// 후크를 정의합니다. 실제로 필요한 경우 첫 번째 실행에서 확인합니다.
	반품 {
		가져오기: 함수() {
			if ( 조건Fn() ) {

				// 후크가 필요하지 않음(또는 다음 문제로 인해 사용할 수 없습니다.
				// 누락된 종속성), 제거합니다.
				this.get을 삭제하십시오.
				반품;
			}

			// 후크가 필요합니다. 지원 테스트가 다시 실행되지 않도록 재정의합니다.
			return( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "웹킷", "모즈", "밀리초"],
	빈 스타일 = document.createElement( "div" ).스타일,
	공급업체 속성 = {};

// 공급업체 접두사가 붙은 속성을 반환하거나 정의되지 않음
함수 공급업체PropName( 이름 ) {

	// 벤더 접두사 이름 확인
	var capName = 이름[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	동안 ( 나는-- ) {
		이름 = cssPrefixes[ i ] + capName;
		if(emptyStyle의 이름) {
			반환 이름;
		}
	}
}

// 잠재적으로 매핑된 jQuery.cssProps 또는 공급업체 접두사 속성을 반환합니다.
기능 finalPropName( 이름 ) {
	var 최종 = jQuery.cssProps[ 이름 ] || vendorProps[이름];

	if ( 최종 ) {
		최종 반환;
	}
	if(emptyStyle의 이름) {
		반환 이름;
	}
	반환 vendorProps[ 이름 ] = vendorPropName( 이름 ) || 이름;
}


var

	// 디스플레이가 없거나 테이블로 시작하는 경우 교체 가능
	// "table", "table-cell" 또는 "table-caption" 제외
	// 표시 값은 여기를 참조하십시오: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(없음|테이블(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { 위치: "절대", 가시성: "숨김", 표시: "차단" },
	CSSNormalTransform = {
		문자 간격: "0",
		fontWeight: "400"
	};

함수 setPositiveNumber( _elem, 값, 빼기 ) {

	// 모든 상대(+/-) 값은 이미
	// 이 시점에서 정규화됨
	var 일치 = rcssNum.exec( 값 );
	반환 일치 ?

		// 정의되지 않은 "빼기"에 대해 보호합니다(예: cssHooks에서와 같이 사용될 때).
		Math.max( 0, 일치[ 2 ] - ( 빼기 || 0 ) ) + ( 일치[ 3 ] || "px" ) :
		값;
}

function boxModelAdjustment( 요소, 차원, 상자, isBorderBox, 스타일, 계산된Val ) {
	var i = 치수 === "너비" ? 1:0,
		추가 = 0,
		델타 = 0;

	// 조정이 필요하지 않을 수 있음
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		반환 0;
	}

	( ; 나는 < 4; 나는 += 2 ) {

		// 두 상자 모델 모두 여백 제외
		if ( 상자 === "여백" ) {
			델타 += jQuery.css( 요소, 상자 + cssExpand[ i ], true, 스타일 );
		}

		// content-box가 있는 경우 "padding" 또는 "border" 또는 "margin"을 찾습니다.
		if ( !isBorderBox ) {

			// 패딩 추가
			delta += jQuery.css( 요소, "패딩" + cssExpand[ i ], true, 스타일 );

			// "테두리" 또는 "여백"의 경우 테두리를 추가합니다.
			if ( 상자 !== "패딩" ) {
				delta += jQuery.css( 요소, "테두리" + cssExpand[ i ] + "너비", true, 스타일);

			// 하지만 그렇지 않으면 계속 추적합니다.
			} 또 다른 {
				추가 += jQuery.css( 요소, "테두리" + cssExpand[ i ] + "너비", true, 스타일 );
			}

		// border-box(content + padding + border)가 있는 경우 "content" 또는
		// "패딩" 또는 "마진"
		} 또 다른 {

			// "내용"의 경우 패딩 빼기
			if ( 상자 === "내용" ) {
				delta -= jQuery.css( 요소, "패딩" + cssExpand[ i ], true, 스타일 );
			}

			// "content" 또는 "padding"의 경우 테두리를 뺍니다.
			if ( 상자 !== "여백" ) {
				delta -= jQuery.css( 요소, "테두리" + cssExpand[ i ] + "너비", true, 스타일);
			}
		}
	}

	// computedVal을 제공하여 요청 시 긍정적인 콘텐츠 상자 스크롤 여백을 설명합니다.
	if ( !isBorderBox && 계산된Val >= 0 ) {

		// offsetWidth/offsetHeight는 내용, 패딩, 스크롤 여백 및 테두리의 반올림 합계입니다.
		// 정수 스크롤 여백을 가정하고 나머지를 빼고 반올림합니다.
		델타 += Math.max( 0, Math.ceil(
			요소[ "오프셋" + 차원[ 0 ].toUpperCase() + 차원.슬라이스(1) ] -
			계산된 값 -
			델타 -
			추가의 -
			0.5

		// offsetWidth/offsetHeight를 알 수 없으면 콘텐츠 상자 스크롤 거터를 결정할 수 없습니다.
		// NaN을 피하기 위해 명시적 0을 사용합니다(gh-3964).
		) ) || 0;
	}

	반환 델타;
}

함수 getWidthOrHeight( 요소, 차원, 추가) {

	// 계산된 스타일로 시작
	var 스타일 = getStyles( 요소 ),

		// 강제 리플로우를 피하기 위해 필요한 경우에만 boxSizing을 가져옵니다(gh-4322).
		// 진정한 값을 알기 위해 필요하다는 것을 알 때까지 가짜 콘텐츠 상자.
		boxSizingNeeded = !support.boxSizingReliable() || 추가의,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( 요소, "boxSizing", false, 스타일 ) === "테두리 상자",
		값이 경계 상자 = isBorderBox,

		val = curCSS(요소, 차원, 스타일),
		offsetProp = "오프셋" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// 지원: 파이어폭스 <=54
	// 적절하게 혼란스러운 픽셀이 아닌 값을 반환하거나 무지한 척합니다.
	if ( rnumnonpx.test( 발 ) ) {
		만약 ( !추가 ) {
			반환 값;
		}
		발 = "자동";
	}


	// 지원: IE 9 - 11만 해당
	// 상자 크기 조정이 신뢰할 수 없는 경우 offsetWidth/offsetHeight를 사용합니다.
	// 이 경우 계산된 값은 border-box로 신뢰할 수 있습니다.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// 지원: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge는 너비/높이가 있는 테이블 행의 `getComputedStyle`을 잘못 보고합니다.
		// 'offset*' 속성이 올바른 값을 보고하는 동안 CSS에서 설정합니다.
		// 흥미롭게도 어떤 경우에는 IE 9가 이 문제를 겪지 않습니다.
		!support.reliableTrDimensions() && nodeName( 요소, "tr" ) ||

		// 값이 "auto"일 때 offsetWidth/offsetHeight로 폴백합니다.
		// 이것은 명시적 설정이 없는 인라인 요소에 대해 발생합니다(gh-3571).
		val === "자동" ||

		// 지원: Android <=4.1 - 4.3 전용
		// 잘못 보고된 인라인 치수에 대해 offsetWidth/offsetHeight도 사용합니다(gh-3602).
		!parseFloat( val ) && jQuery.css( 요소, "디스플레이", 거짓, 스타일 ) === "인라인" ) &&

		// 요소가 표시되고 연결되어 있는지 확인
		요소.getClientRects().길이) {

		isBorderBox = jQuery.css( 요소, "boxSizing", false, 스타일 ) === "테두리 상자";

		// 가능한 경우 offsetWidth/offsetHeight는 대략적인 테두리 상자 크기입니다.
		// 사용할 수 없는 경우(예: SVG), 신뢰할 수 없는 상자 크기를 가정하고 해석
		// 콘텐츠 상자 차원으로 값을 검색합니다.
		valueIsBorderBox = 요소의 offsetProp;
		if ( 값이 테두리 상자 ) {
			val = 요소[ offsetProp ];
		}
	}

	// "" 및 자동 정규화
	발 = parseFloat( 발 ) || 0;

	// 요소의 상자 모델에 맞게 조정
	반환( 발 +
		boxModelAdjustment(
			요소,
			치수,
			추가 || ( isBorderBox ? "border" : "content" ),
			값이 테두리 상자,
			스타일,

			// 스크롤 거터 계산을 요청하기 위해 현재 계산된 크기를 제공합니다(gh-3589).
			발
		)
	) + "픽셀";
}

jQuery.extend( {

	// 기본값을 재정의하기 위한 스타일 속성 후크 추가
	// 스타일 속성을 가져오고 설정하는 동작
	CSS훅: {
		불투명도: {
			get: function( 요소, 계산됨) {
				if ( 계산된 ) {

					// 항상 불투명도에서 숫자를 가져와야 합니다.
					var ret = curCSS( 요소, "불투명도");
					리턴 ret === "" ? "1" : 렛;
				}
			}
		}
	},

	// 단위가 없을 가능성이 있는 이러한 속성에 "px"를 자동으로 추가하지 않습니다.
	CSS 번호: {
		"animationIterationCount": 참,
		"columnCount": 참,
		"fillOpacity": 참,
		"flexGrow": 참,
		"flexShrink": 참,
		"fontWeight": 참,
		"gridArea": ​​참,
		"gridColumn": 참,
		"gridColumnEnd": 참,
		"gridColumnStart": 참,
		"gridRow": 참,
		"gridRowEnd": 참,
		"gridRowStart": 참,
		"lineHeight": 참,
		"불투명도": 사실,
		"주문": 참,
		"고아": 사실,
		"과부": 사실,
		"zIndex": 참,
		"확대": 사실
	},

	// 전에 수정하려는 이름의 속성을 추가합니다.
	// 값 설정 또는 가져오기
	cssProps: {},

	// DOM 노드의 스타일 속성을 가져오고 설정합니다.
	스타일: function( 요소, 이름, 값, 추가) {

		// 텍스트 및 주석 노드에 스타일을 설정하지 않음
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			반품;
		}

		// 올바른 이름으로 작업하고 있는지 확인
		var ret, 유형, 후크,
			원본 이름 = 낙타 케이스(이름),
			isCustomProp = rcustomProp.test( 이름 ),
			스타일 = elem.style;

		// 올바른 이름으로 작업하고 있는지 확인합니다. 우리는하지 않습니다
		// CSS 사용자 정의 속성인 경우 값을 쿼리하고 싶습니다.
		// 사용자 정의이므로.
		if ( !isCustomProp ) {
			이름 = finalPropName( origName );
		}

		// 접두사가 붙은 버전에 대한 후크를 가져온 다음 접두사가 붙지 않은 버전을 가져옵니다.
		후크 = jQuery.cssHooks[ 이름 ] || jQuery.cssHooks[origName];

		// 값을 설정하고 있는지 확인
		if ( 값 !== 정의되지 않음 ) {
			유형 = 값의 유형;

			// "+=" 또는 "-="를 상대 숫자로 변환(#7345)
			if ( 유형 === "문자열" && ( ret = rcssNum.exec( 값 ) ) && ret[ 1 ] ) {
				값 = adjustCSS( 요소, 이름, ret );

				// 버그 #9237 수정
				유형 = "숫자";
			}

			// null 및 NaN 값이 설정되지 않았는지 확인(#7116)
			if ( 값 == null || 값 !== 값 ) {
				반품;
			}

			// 숫자가 전달되면 단위를 추가합니다(특정 CSS 속성 제외).
			// isCustomProp 검사는 jQuery 4.0에서 자동 추가만 할 때 제거할 수 있습니다.
			// "px"를 몇 개의 하드코딩된 값으로 변환합니다.
			if ( type === "숫자" && !isCustomProp ) {
				값 += 렛 && 렛[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* 소품은 원본 클론의 값에 영향을 미칩니다.
			if ( !support.clearCloneStyle && 값 === "" && name.indexOf( "배경") === 0 ) {
				스타일[이름] = "상속";
			}

			// 후크가 제공된 경우 해당 값을 사용하고, 그렇지 않으면 지정된 값을 설정합니다.
			if ( !후크 || !( 후크에 "설정") ||
				( 값 = hooks.set( 요소, 값, 추가 ) ) !== 정의되지 않음 ) {

				if ( isCustomProp ) {
					style.setProperty(이름, 값);
				} 또 다른 {
					스타일[이름] = 값;
				}
			}

		} 또 다른 {

			// 후크가 제공된 경우 거기에서 계산되지 않은 값을 가져옵니다.
			if ( 후크 && 후크 &&에서 "get"
				( ret = hooks.get( 요소, 거짓, 추가 ) ) !== 정의되지 않음 ) {

				리턴 렛;
			}

			// 그렇지 않으면 스타일 객체에서 값을 가져옵니다.
			반환 스타일[이름];
		}
	},

	CSS: 함수( 요소, 이름, 추가, 스타일) {
		var val, num, 후크,
			원본 이름 = 낙타 케이스(이름),
			isCustomProp = rcustomProp.test( 이름 );

		// 올바른 이름으로 작업하고 있는지 확인합니다. 우리는하지 않습니다
		// CSS 사용자 정의 속성인 경우 값을 수정하고 싶습니다.
		// 사용자 정의이므로.
		if ( !isCustomProp ) {
			이름 = finalPropName( origName );
		}

		// 접두어가 붙은 이름 다음에 접두어가 붙지 않은 이름을 시도합니다.
		후크 = jQuery.cssHooks[ 이름 ] || jQuery.cssHooks[origName];

		// 후크가 제공된 경우 거기에서 계산된 값을 가져옵니다.
		if ( 후크 && 후크에서 "get" ) {
			val = hooks.get(요소, 참, 추가);
		}

		// 그렇지 않고, 계산된 값을 얻는 방법이 있다면 그것을 사용하십시오.
		if ( 발 === 정의되지 않음 ) {
			val = curCSS(요소, 이름, 스타일);
		}

		// "normal"을 계산된 값으로 변환
		if ( val === "normal" && cssNormalTransform의 이름) {
			val = CSSNormalTransform[이름];
		}

		// 강제 또는 한정자가 제공되고 val이 숫자로 보이는 경우 숫자로 만듭니다.
		if ( 추가 === "" || 추가 ) {
			숫자 = parseFloat( 발 );
			추가 반환 === true || isFinite( 숫자 ) ? 번호 || 0 : 값;
		}

		반환 값;
	}
} );

jQuery.each( [ "높이", "너비" ], function( _i, 치수 ) {
	jQuery.cssHooks[ 차원 ] = {
		get: function( 요소, 계산, 추가 ) {
			if ( 계산된 ) {

				// 특정 요소는 보이지 않게 표시하는 경우 차원 정보를 가질 수 있습니다.
				// 그러나 이점이 있는 현재 표시 스타일이 있어야 합니다.
				반환 rdisplayswap.test( jQuery.css( elem, "디스플레이" ) ) &&

					// 지원: 사파리 8+
					// Safari의 테이블 열에는 0이 아닌 offsetWidth 및 0이 있습니다.
					// 표시가 변경되지 않는 한 getBoundingClientRect().width.
					// 지원: IE <=11 전용
					// 연결이 끊긴 노드에서 getBoundingClientRect 실행
					// IE에서 오류가 발생합니다.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					스왑( 요소, cssShow, 함수() {
						return getWidthOrHeight( 요소, 차원, 추가);
					} ) :
					getWidthOrHeight(요소, 차원, 추가);
			}
		},

		집합: 기능( 요소, 값, 추가) {
			var 일치,
				스타일 = getStyles( 요소 ),

				// 테스트가 실패할 가능성이 있는 경우에만 styles.position을 읽습니다.
				// 강제로 리플로우를 피하기 위해.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					style.position === "절대",

				// 강제 리플로우를 피하기 위해 필요한 경우에만 boxSizing을 가져옵니다(gh-3991).
				boxSizingNeeded = scrollboxSizeBuggy || 추가의,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( 요소, "boxSizing", false, 스타일 ) === "테두리 상자",
				빼다 = 추가 ?
					boxModelAdjustment(
						요소,
						치수,
						추가의,
						isBorderBox,
						스타일
					) :
					0;

			// offset*을 computed 및
			// 테두리와 패딩을 얻기 위해 콘텐츠 상자를 위장(gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				빼기 -= Math.ceil(
					요소[ "오프셋" + 차원[ 0 ].toUpperCase() + 차원.슬라이스(1) ] -
					parseFloat( 스타일[ 차원 ] ) -
					boxModelAdjustment( 요소, 차원, "테두리", false, 스타일) -
					0.5
				);
			}

			// 값 조정이 필요한 경우 픽셀로 변환
			if ( 빼기 && ( 일치 = rcssNum.exec( 값 ) ) &&
				( [ 3 ] || "px" 와 일치) !== "px" ) {

				elem.style[ 차원 ] = 값;
				값 = jQuery.css(요소, 차원);
			}

			return setPositiveNumber(요소, 값, 빼기);
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
	함수( 요소, 계산) {
		if ( 계산된 ) {
			반환( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					스왑( 요소, { marginLeft: 0 }, 함수() {
						elem.getBoundingClientRect().left를 반환합니다.
					} )
			) + "픽셀";
		}
	}
);

// 이 후크는 animate에서 속성을 확장하는 데 사용됩니다.
jQuery.each( {
	여백: "",
	패딩: "",
	테두리: "너비"
}, 기능( 접두사, 접미사) {
	jQuery.cssHooks[ 접두사 + 접미사 ] = {
		확장: 기능(값) {
			변수 i = 0,
				확장 = {},

				// 문자열이 아닌 경우 단일 숫자로 가정
				부품 = typeof 값 === "문자열" ? value.split( " " ) : [값 ];

			( ; 나는 < 4; 나는 ++ ) {
				확장된[ 접두사 + cssExpand[ i ] + 접미사 ] =
					부품[ 나는 ] || 부품[ i - 2 ] || 부품[ 0 ];
			}

			확장된 반환;
		}
	};

	if ( 접두사 !== "여백" ) {
		jQuery.cssHooks[ 접두사 + 접미사 ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	CSS: 함수(이름, 값) {
		반환 액세스( this, function( 요소, 이름, 값) {
			var 스타일, 렌,
				지도 = {},
				나는 = 0;

			if ( Array.isArray( 이름 ) ) {
				스타일 = getStyles( 요소 );
				len = 이름.길이;

				( ; 나는 < len; 나는 ++ ) {
					지도[ 이름[ 나는 ] ] = jQuery.css( 요소, 이름[ 나는 ], 거짓, 스타일 );
				}

				리턴 맵;
			}

			반환 값 !== 정의되지 않음?
				jQuery.style( 요소, 이름, 값) :
				jQuery.css(요소, 이름);
		}, 이름, 값, 인수.길이 > 1 );
	}
} );


기능 트윈( 요소, 옵션, 소품, 끝, 여유) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = 트윈;

트윈.프로토타입 = {
	생성자: 트윈,
	초기화: function( 요소, 옵션, 소품, 끝, 여유, 단위) {
		this.elem = 요소;
		this.prop = 소품;
		this.easing = 완화 || jQuery.easing._default;
		this.options = 옵션;
		this.start = this.now = this.cur();
		this.end = 끝;
		this.unit = 단위 || ( jQuery.cssNumber[ 소품 ] ? "" : "px" );
	},
	커: 함수() {
		var hooks = Tween.propHooks[ this.prop ];

		리턴 후크 && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	실행: 함수(퍼센트) {
		var 완화,
			후크 = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = 완화 = jQuery.easing[ this.easing ](
				퍼센트, this.options.duration * 퍼센트, 0, 1, this.options.duration
			);
		} 또 다른 {
			this.pos = 완화 = 백분율;
		}
		this.now = ( this.end - this.start ) * 완화 + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( 후크 && hooks.set ) {
			hooks.set( this );
		} 또 다른 {
			Tween.propHooks._default.set( this );
		}
		이것을 반환하십시오;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_기본: {
		get: 함수( 트윈 ) {
			변수 결과;

			// DOM 요소가 아닌 경우 요소의 속성을 직접 사용합니다.
			// 또는 일치하는 스타일 속성이 존재하지 않는 경우.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				반환 tween.elem[ tween.prop ];
			}

			// 빈 문자열을 세 번째 매개변수로 .css에 전달하면 자동으로
			// parseFloat를 시도하고 구문 분석이 실패하면 문자열로 폴백합니다.
			// "10px"와 같은 간단한 값은 Float로 구문 분석됩니다.
			// "rotate(1rad)"와 같은 복잡한 값은 있는 그대로 반환됩니다.
			결과 = jQuery.css( tween.elem, tween.prop, "" );

			// 빈 문자열, null, undefined 및 "auto"는 0으로 변환됩니다.
			반환 !결과 || 결과 === "자동" ? 0 : 결과;
		},
		세트: 기능( 트윈 ) {

			// 백 호환성을 위해 단계 후크를 사용합니다.
			// cssHook이 있으면 사용합니다.
			// 가능한 경우 .style을 사용하고 가능한 경우 일반 속성을 사용합니다.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( 트윈 );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	반환 속성;
}

function createTween( 값, 소품, 애니메이션 ) {
	var 트윈,
		컬렉션 = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		인덱스 = 0,
		길이 = 컬렉션.길이;
	( ; 인덱스 < 길이; 인덱스++ ) {
		if ( ( 트윈 = 컬렉션[ 인덱스 ].call( 애니메이션, 소품, 값) ) ) {

			// 이 속성은 끝났습니다.
			리턴 트윈;
		}
	}
}

기능 defaultPrefilter( 요소, 소품, 옵션) {
	var prop, 값, 토글, 후크, oldfire, propTween, restoreDisplay, 디스플레이,
		isBox = 소품의 "너비" || 소품의 "높이",
		애니=이것,
		원본 = {},
		스타일 = elem.style,
		숨겨진 = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( 요소, "fxshow" );

	// 대기열 건너뛰기 애니메이션은 fx 후크를 하이재킹합니다.
	if ( !opts.queue ) {
		후크 = jQuery._queueHooks( 요소, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );