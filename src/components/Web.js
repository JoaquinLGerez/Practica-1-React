import React from 'react';
import Banner from './Banner';
import Encabezado from './Encabezado';
import Producto from './Producto';
import Footer from './Footer';


function Web(){
  return (
    <div className="container">
     <Encabezado/>
     <Banner/>
     <Producto/>
     <Footer/>
    </div>
  )

}
export default Web;