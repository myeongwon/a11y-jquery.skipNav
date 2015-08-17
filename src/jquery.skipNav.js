/*! jquery.skipNav.js © yamoo9.net, 2015 */
(function(global, document, $){
	'use strict';

	// 클래스 속성을 대체하는 인라인 스타일 객체
	var skip_container_class = {
			'position' : 'absolute',
			'top'      : 0,
			'left'     : 0,
		},
		a11y_hidden_class = {
			'overflow' : 'hidden',
			'position' : 'absolute',
			'clip'     : 'rect(0 0 0 0)',
			'clip'     : 'rect(0,0,0,0)',
			'width'    : '1px',
			'height'   : '1px',
			'margin'   : '-1px',
			'padding'  : 0,
			'border'   : 0,
		},
		a11y_hidden_class_focusable = {
			'overflow' : 'visible',
			'position' : 'static',
			'clip'     : 'auto',
			'width'    : 'auto',
			'height'   : 'auto',
			'margin'   : 0,
		};

	/**
	 * --------------------------------
	 * jQuery.skipNav() 메소드 정의
	 * --------------------------------
	 */
	$.skipNav = function(container, options) {

		// jQuery 의존도 체크
		if(!window.jQuery) { throw console.error('jQuery에 의존하는 라이브러리입니다.') }

		// 사용자 정의 옵션 설정
		// 사용자 정의 옵션 값이 전달되지 않을 경우, 기본 옵션($.skipNav.defaults) 사용
		options = $.extend( $.skipNav.defaults, options );

		// 스킵 내비게이션 요소에 클래스 설정
		// .toggleClass()의 상태(State, options.customClass) 값이 true일 경우만 클래스 속성 값 적용
		var $skip = $(container).toggleClass( options.containerClass, options.customClass );

		// 스킵 내비게이션 요소의 링크에 클래스 설정
		var $skip_links = $skip.find('a').toggleClass( options.linkClasses, options.customClass );

		// 시작: options.customClass 값이 거짓(false)이면 아래 코드 실행 ----------------------------
		options.customClass ||
			$skip.css( skip_container_class ) &&
			$skip_links.css( a11y_hidden_class )
			.on('focus', function(ev) {
				$(this).css( a11y_hidden_class_focusable );
			}).on('blur', function(ev) {
				$(this).css( a11y_hidden_class );
			});
		// 끝: options.customClass 값이 거짓(false)이면 아래 코드 실행 ------------------------------

		// 스킵 내비게이션 요소의 링크 클릭 이벤트 설정
		$skip.on('click', 'a', function(ev) {
			// 브라우저 기본 동작 차단
			ev.preventDefault();
			// 이벤트 전파 차단
			ev.stopPropagation();
			/**
			 * --------------------------------
			 * Native Code
			 */
			// href 속성 값 참조
			var href = ev.target.getAttribute('href');
			// 목표지가 되는 jQuery 인스턴스 객체 참조
			var target = document.querySelector(href) || document.getElementById(href.replace(/#/,''));
			// tabindex 속성 설정 및 포커스 적용
			target.setAttribute('tabindex', -1);
			target.focus();
			/**
			 * --------------------------------
			 * jQuery Code
			 */
			// href 속성 값 참조
			// var href = $(ev.target).attr('href');
			// 목표지가 되는 jQuery 인스턴스 객체 참조
			// var $target = $(href);
			// tabindex 속성 설정 및 포커스 적용
			// $target.attr('tabindex', -1);
			// $target.focus();
		});

		// 반환 객체
		return {
			'version'         : '0.0.2',
			'$skip_container' : $skip,
			'options'         : options
		};
	};

	// $.skipNav 기본 설정 값
	$.skipNav.defaults = {
		'customClass'    : true,
		'containerClass' : 'skip-nav',
		'linkClasses'    : 'a11y-hidden focusable'
	};

})(window, window.document, window.jQuery);