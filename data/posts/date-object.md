# JavaScript의 Date 객체 정리

[MDN: Date - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

JavaScript Date 객체는 플랫폼에 종속되지 않는 형태로 시간의 한 점을 나타냅니다. Date 객체는 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담습니다.

---

여러 개의 개인 프로젝트를 진행하면서 Date 객체를 자주 사용하였습니다. 자주 쓰이는 만큼, 이번 기회에 Date 객체를 정리하고, 이를 활용해 구현한 메서드들도 함께 정리해보려 합니다.

## Date 객체란?

Date 객체는 자바스크립트에서 날짜와 시간을 표현하기 위한 기본 객체입니다. 이를 통해 날짜와 시간을 처리하며, Unix 시간을 기반으로 동작합니다. 1970년 1월 1일 자정 이후 경과된 밀리초를 기준으로 계산됩니다.

---

## Date 객체 생성 방법

```javascript
// 현재 날짜와 시간으로 생성
const now = new Date();

// 특정 날짜와 시간을 문자열로 지정하여 생성
const specificDate = new Date('2024-09-13T10:00:00');

// 연도, 월, 일, 시간, 분, 초를 인자로 전달하여 생성
const specificTime = new Date(2024, 8, 13, 10, 30, 45); // 2024년 9월 13일 10시 30분 45초

// 시간 정보 없이 연도, 월, 일만 지정하여 생성 (시간은 기본적으로 00:00:00으로 설정됨)
const onlyDate = new Date(2024, 8, 13); // 2024년 9월 13일

// 연도와 월만 지정하여 생성 (일은 기본적으로 1일로 설정됨, 시간은 00:00:00)
const onlyYearMonth = new Date(2024, 8); // 2024년 9월

// 밀리초 단위로 생성 (1970년 1월 1일 이후 경과된 밀리초 값 사용)
const dateFromMillis = new Date(1600000000000);
```
## Date 객체의 주요 메서드들

### 날짜 및 시간 정보 가져오기

```javascript
// 현재 연도를 가져옵니다.
const year = now.getFullYear();

// 현재 월을 가져옵니다 (0: 1월, 11: 12월).
const month = now.getMonth();

// 현재 일을 가져옵니다.
const date = now.getDate();

// 현재 요일을 가져옵니다 (0: 일요일, 6: 토요일).
const day = now.getDay();

// 현재 시간을 가져옵니다 (0~23).
const hours = now.getHours();

// 현재 분을 가져옵니다 (0~59).
const minutes = now.getMinutes();

// 현재 초를 가져옵니다 (0~59).
const seconds = now.getSeconds();
```

### UTC 시간 정보 가져오기

로컬 시간은 사용자의 시스템이 설정된 시간대를 기준으로 값을 반환합니다. 각 국가나 지역의 시간대에 따라 다를 수 있습니다. UTC 시간은 협정 세계시(UTC)를 기준으로, 사용자의 시스템 시간대와 상관없이 동일한 시간을 반환합니다.

```javascript
const utcYear = now.getUTCFullYear();
const utcMonth = now.getUTCMonth();
const utcDate = now.getUTCDate();
const utcDay = now.getUTCDay();
```

### 날짜 및 시간 설정하기
```javascript
const newDate = new Date();
newDate.setFullYear(2025); // 연도를 2025년으로 설정
newDate.setMonth(11); // 월을 12월로 설정 (0부터 시작하므로 11이 12월을 의미)
newDate.setDate(25); // 날짜를 25일로 설정
console.log(newDate);
```
