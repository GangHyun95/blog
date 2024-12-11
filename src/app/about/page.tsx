import Hero from '@/components/Hero';

const TITLE_CLASS = 'gradient-text text-2xl font-bold my-2';
export default function AboutPage() {
    return (
        <div className='inner'>
            <Hero />
            <section className='p-8 text-center'>
                <h2 className={TITLE_CLASS}>Who Am I?</h2>
                <p>
                    사용자 경험을 중시하는 프론트엔드 개발자
                    <br />
                    편리하고 직관적인 웹앱 개발을 추구합니다.
                </p>
                <h2 className={TITLE_CLASS}>Career</h2>
                <ul className='flex flex-col gap-3'>
                    <li>
                        엔디소프트(주)
                        <br />
                        <span className='text-sm'>
                            (2023.07.01 ~ 2024.08.01)
                        </span>
                    </li>
                    <li>
                        [KDT] 기업요구를 반영한 프론트엔드(React) 개발자 양성
                        과정 수료
                        <br />
                        <span className='text-sm'>
                            (2022.10.28 ~ 2023.04.13)
                        </span>
                    </li>
                </ul>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>
                    React, Next.js
                    <br />
                    Git, Source Tree
                    <br />
                    VS Code
                </p>
            </section>
        </div>
    );
}
