/*! jquery.skipNav.js © yamoo9.net, 2015 */
(function(global, document, $){
	'use strict';

	$.skipNav = function(container, options) {

		// jQuery 의존도 체크
		if(!window.jQuery) { throw console.error('jQuery에 의존하는 라이브러리입니다.') }

		// 사용자 정의 옵션 덮어쓰기
		options = $.extend($.skipNav.defaults, options);

		// 스킵 내비게이션 요소에 클래스 설정
		var $skip = $(container).toggleClass(options.containerClass, options.customClass);

		options.customClass || $skip.css({
			'position': 'absolute',
			'top': 0,
			'left': 0,
		});

		// 스킵 내비게이션 요소의 링크에 클래스 설정
		var $skip_links = $skip.find('a').toggleClass(options.linkClasses, options.customClass);

		var a11y_hidden_class = {
			'overflow' : 'hidden',
			'position' : 'absolute',
			'clip'     :     'rect(0 0 0 0)',
			'clip'     :     'rect(0,0,0,0)',
			'width'    :    '1px',
			'height'   :   '1px',
			'margin'   :   -'1px',
			'padding'  :  '0',
			'border'   :   '0',
		};

		var a11y_hidden_class_focusable = {
			'overflow' : 'hidden',
			'position' : 'absolute',
			'clip'     :     'rect(0 0 0 0)',
			'clip'     :     'rect(0,0,0,0)',
			'width'    :    '1px',
			'height'   :   '1px',
			'margin'   :   -'1px',
			'padding'  :  '0',
			'border'   :   '0',
		};

		options.customClass || $skip_links.css(a11y_hidden_class).on('focus', function(ev) {
			$(this).css(a11y_hidden_class_focusable);
		}).on('blur', function(ev) {
			$(this).css(a11y_hidden_class);
		})

		// 스킵 내비게이션 요소의 링크 클릭 이벤트 설정
		$skip.on('click', 'a', function(ev) {
			// 브라우저 기본 동작 차단
			ev.preventDefault();
			// href 속성 값 참조
			var href = ev.target.getAttribute('href');
			// 목표지가 되는 jQuery 인스턴스 객체 참조
			var target = document.querySelector(href);
			// tabindex 속성 설정 및 포커스 적용
			target.setAttribute('tabindex', -1);
			target.focus();
		});
	};

	// $.skipNav 기본 설정 값
	$.skipNav.defaults = {
		'customClass'    : true,
		'containerClass' : 'skip-nav',
		'linkClasses'    : 'a11y-hidden focusable'
	};

})(window, window.document, window.jQuery);