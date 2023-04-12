//font
import { Montserrat } from 'next/font/google';

//css
import './global.css';
import Navbar from './components/Navbar';

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
    <html lang="en" data-theme="cupcake" className={`${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
