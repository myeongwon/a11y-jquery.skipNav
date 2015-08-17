# jQuery.skipNav()

웹 접근성(KWCAG 2.0 - 운용의 용이성)을 준수한 스킵 내비게이션 컴포넌트.

[![WebAIM.org 데모](https://www.bignerdranch.com/img/blog/2013/12/skip-navigation1-1024x301.png)](http://webaim.org/)

## 사용법

jQuery 라이브러리에 의존하는 컴포넌트이기에 jQuery 호출 후, 사용해야 합니다. `<head>` 내부에 다음과 같이 스크립트 호출 코드를 작성합니다.

**HTML 코드 예시**

```html
<!-- jQuery 호출 -->
<script src="../src/jquery.js"></script>
<!-- jquery.skipNav.js 호출 -->
<script src="../dist/jquery.skipNav.min.js"></script>
```

`<body>` 바로 아래 다음과 같이 스킵 내비게이션 마크업을 추가합니다.

```html
<div id="skip-navigation">
	<a href="#header">header</a>
	<a href="#main">main</a>
	<a href="#footer">footer</a>
</div>
```

`jQuery.skipNav()`에 스킵 내비게이션 메뉴를 적용하고자 하는 컨테이너 요소 선택자를 전달합니다.
필요에 따라서는 두번째 전달인자로 옵션 값을 전달하여 사용자 입맛에 맞게 변경하여 사용할 수 있습니다.
아래 예시를 참고하세요.

**Javascript 코드 예시**

```js
// 기본 옵션 사용 예
jQuery.skipNav('#skip-navigation');

// 클래스 속성 대신 인라인 스타일을 사용할 경우, 옵션 설정
jQuery.skipNav('#skip-navigation', {
	'customClass': false
});

// 사용자 정의 클래스 속성을 적용하고자 할 경우, 옵션 설정
jQuery.skipNav('#skip-navigation', {
	// 스킵 내비게이션 컨테이너 요소에 적용되는 클래스 속성 값
	'containerClass' : 'user-skip-nav',
	// 스킵 내비게이션 링크 요소에 적용되는 클래스 속성 값
	'linkClasses'    : 'user-a11y-hidden user-focusable'
});

```