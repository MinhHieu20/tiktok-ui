import Header from '~/components/Layout/components/Header';

const HeaderOnly = ({ children }) => {
   return (
      <>
         <Header />
         <div className="container">
            <div className="content">{children}</div>
         </div>
      </>
   );
};

export default HeaderOnly;
