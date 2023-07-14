import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
   return (
      <>
         <Header />
         <div className="container">
            <Sidebar />
            <div className="content">{children}</div>
         </div>
      </>
   );
};

export default DefaultLayout;
