import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSans = Noto_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const pretendard = localFont({
    src: './fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: {
        default: "Hyun's blog",
        template: "Hyun's blog | %s",
    },
    description: 'Next.js 학습을 위한 블로그',
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${notoSans.className} ${pretendard.variable} bg-background text-foreground`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
