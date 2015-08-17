/*! jquery.skipNav.js © yamoo9.net, 2015 */
(function(global, document, $){
	'use strict';

	// jQuery 의존도 체크
	if(!$) { throw console.error('jQuery에 의존하는 라이브러리입니다.') }

	// 스킵 내비게이션 요소에 클래스 설정
	var $skip = $('#skip-navigation').addClass('skip-nav');
	// 스킵 내비게이션 요소의 링크에 클래스 설정
	var $skip_links = $skip.find('a').addClass('a11y-hidden focusable');

	// 스킵 내비게이션 요소의 링크 클릭 이벤트 설정
	$skip.on('click', 'a', function(ev) {
		// 브라우저 기본 동작 차단
		ev.preventDefault();
		// href 속성 값 참조
		var href = ev.target.getAttribute('href');
		// 목표지가 되는 jQuery 인스턴스 객체 참조
		var $target = $(href);
		// tabindex 속성 설정 및 포커스 적용
		$target.attr('tabindex', -1).focus();
	});

})(window, window.document, window.jQuery);