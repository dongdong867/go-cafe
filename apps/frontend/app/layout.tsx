//font
import { Montserrat } from 'next/font/google';

//css
import './global.css';

const montserrat = Montserrat({
  variable: '--font-Montserrat',
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: 'Go Cafe',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
