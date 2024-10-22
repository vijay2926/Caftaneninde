import React from 'react'
import { Link } from 'react-router-dom'



function Page_cat() {
    return (
    
           <div className="page_cat_header">
                <div className="container-fluid">
                    <div className="page_cat_inner">
                        <Link>Home</Link>  <i class="fa-solid fa-angle-right"></i>
                        <Link>Women</Link>  <i class="fa-solid fa-angle-right"></i>
                        <Link className='current'>Ajrakh</Link>  
                    </div>
                </div>
           </div>
           
    
    )
  }
  
  export  {Page_cat} 

  


function Product_area() {
  return (
    <>
        <section className="product_area">
            <div className="product_filter">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                           <div className="row_changer">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                    </div>
                    <div className="col-xl-6">
                        
                    </div>
                </div>
            </div>
            </div>
           
        </section>
    </>
  )
}

export {Product_area} 



 

