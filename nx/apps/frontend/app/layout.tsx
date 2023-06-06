//font
import { Montserrat } from 'next/font/google';

//css
import './global.css';

//components
import Navbar from './components/Navbar/Navbar';
import { ApolloWrapper } from '../lib/apollo-provider';

export const metadata = {
  title: 'Go Cafe',
  description: '',
};

const montserrat = Montserrat({
  variable: '--font-Montserrat',
  display: 'swap',
  preload: false,
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="cupcake" className={`${montserrat.variable}`}>
      <body>
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
