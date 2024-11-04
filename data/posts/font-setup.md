# 폰트 설정 방법

폰트를 설정하는 방법은 크게 두 가지가 있습니다.

## 1. 구글 폰트 사용하기

구글 폰트는 `next/font/google`에서 원하는 폰트를 불러와 사용할 수 있습니다. 필요한 폰트, 서브셋(subsets), 두께(weight), 그리고 디스플레이(display) 옵션을 지정할 수 있습니다.

```javascript
const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
```
- **subsets**: 폰트가 지원하는 문자셋을 선택합니다.
- **weight**: 400(보통)과 700(굵은)을 적용해 다양한 weight을 지원합니다.
- **display**: `swap`으로 설정해, 폰트가 로드되지 않은 상태에서도 텍스트가 표시되며, 로드 후 폰트가 교체됩니다.

## 2. 로컬 폰트 사용하기

로컬 폰트를 사용할 때는 `next/font/local`을 통해 폰트 파일을 직접 경로로 지정해 사용할 수 있습니다.

```javascript
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
```
- **src**: 로컬 폰트 파일 경로를 지정합니다.
- **display**: 구글 폰트와 마찬가지로 swap을 사용해 폰트가 로드되지 않아도 기본 텍스트가 표시되도록 설정합니다.
- **weight**: 45부터 920까지 가변적인 폰트 두께를 지정했습니다.
- **variable**: CSS 변수 --font-pretendard로 폰트를 설정해주며, Tailwind CSS에서 쉽게 사용할 수 있습니다.

```javascript
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
    	// ...생략
    ],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['var(--font-pretendard)'],
            },
            // ...생략
        },
    },
    plugins: [],
};
export default config;
```

## 3. 적용 순서
body 태그에서 우선적으로 적용할 폰트를 설정할 수 있습니다.
```jsx
<body className={`${notoSans.className} ${pretendard.variable} bg-background text-foreground`}>
```

className으로 폰트를 적용하면 기본적으로 HTML 요소에 바로 스타일이 적용되며, variable을 사용할 때는 CSS 변수를 통해 Tailwind CSS와 같은 프레임워크에서 폰트 관련 스타일을 손쉽게 사용할 수 있습니다.