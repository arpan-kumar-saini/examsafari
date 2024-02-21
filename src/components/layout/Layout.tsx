import  { ReactNode } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
