# 포트폴리오 Home 컴포넌트 타이핑 효과 구현

포트폴리오의 레이아웃은 이제 마무리 단계인데, 카드 형태의 디자인을 많이 사용하다 보니 사이트 디자인이 단조로워 보였습니다. 그래서 사이트가 처음 열릴 때 제일 먼저 보여지는 Home 컴포넌트에 동적인 애니메이션을 주어, 조금이라도 인상을 주기로 했습니다.

## 타이핑 효과 구현 원리

먼저, 저는 주요 기술 스택인 **JavaScript, TypeScript, React, Next.js**를 동적으로 표시하고자 했습니다. 아직 Next.js는 다루지 못하지만, 포트폴리오 작업이 끝난 후 배우고 학습할 예정이기 때문에 일단 넣어뒀습니다.

이 기술 이름들이 화면에 타이핑되었다가, 다시 지워지고, 다시 타이핑되는 패턴을 반복하게 만들었습니다.

아래 코드를 통해 각 텍스트가 타이핑되고, 삭제되는 과정을 단계별로 관리했습니다.

```javascript
const [displayText, setDisplayText] = useState(''); // 보여질 텍스트
const [isDeleting, setIsDeleting] = useState(false); // 삭제 중인지
const [loopNum, setLoopNum] = useState(0);
const [typingSpeed, setTypingSpeed] = useState(50);

const dynamicTexts = ["Javascript", "TypeScript", "React", "Next.js"];
const currentText = dynamicTexts[loopNum % dynamicTexts.length];

useEffect(() => {
    const handleTyping = () => {
        if (!isDeleting && displayText.length < currentText.length) {
            // 타이핑 중
            setDisplayText(currentText.substring(0, displayText.length + 1));
        } else if (isDeleting && displayText.length > 0) {
            // 삭제 중
            setDisplayText(currentText.substring(0, displayText.length - 1));
        } else if (!isDeleting && displayText.length === currentText.length) {
            // 타이핑 완료 후 대기
            setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText.length === 0) {
            // 삭제 완료 후 다음 텍스트로
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
}, [displayText, isDeleting]);
```
useEffect를 사용하여 타이핑과 삭제 과정이 주기적으로 실행되도록 만듭니다. 
현재 표시된 텍스트가 완전히 타이핑되면 일정 시간 후에 삭제되고, 그 후 다음 텍스트가 타이핑되는 순환 구조입니다. 
loopNum을 사용하여 dynamicTexts 배열에서 현재 표시할 텍스트를 관리합니다.