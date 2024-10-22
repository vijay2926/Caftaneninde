import React from 'react'
import { Header } from '../header/header'
import { Page_cat } from './product_area'
import   Product_n_1   from '../../images/product/product_n_1.png'
import Cat_1 from '../../images/cat/cat_1.svg'
import { Link } from 'react-router-dom'

function Product_details() {
  return (
  <>
   <Header />
   <Page_cat />
   <section className="product_area">
                <div className="product_filter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-sm-4 d-sm-block d-none">
                                <div className="row_changer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-8">
                                <div className="filtters_box">
                                    <div className="filtters_box_inner">
                                        <select name="" id="">
                                            <option value="">--Select Price--</option>
                                            <option value="1">Below to 1000</option>
                                            <option value="2">1001-2000</option>
                                            <option value="3">2001-3000</option>
                                            <option value="4">3001-5000</option>
                                            <option value="5">Above 5000</option>
                                        </select>
                                        <span><i class="fa-solid fa-filter"></i></span>
                                    </div>
                                    <div className="filtters_box_inner">
                                        <select name="" id="">
                                            <option selected="selected" value="0">--Select Order By--</option>
                                            <option value="1">Low to high</option>
                                            <option value="2">High to low</option>
                                        </select>
                                        <span><i class="fa-solid fa-filter"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                       
                    </div>
                </div>


            </section>
            <Product_details_area />

  </>
  )
}

export {Product_details} 



 
function Product_details_area() {
  return ( 
    <>
       <section className="product_d_co_area">
           <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-4">
                           <div className="product_d_co_inner">
                            <div className="image">
                                   <img src={Product_n_1} alt="" />
                            </div>
                        <div className="pro_c_box">
                        <Link >
                                            <div className="cat_box">
                                                <div className="image">
                                                    <img src={Cat_1} alt=""   />

                                                </div> 
                                            </div>
                                        </Link>
                                        <Link >
                                            <div className="cat_box">
                                                <div className="image">
                                                    <img src={Cat_1} alt=""   />

                                                </div> 
                                            </div>
                                        </Link>
                                        <Link >
                                            <div className="cat_box">
                                                <div className="image">
                                                    <img src={Cat_1} alt=""   />

                                                </div> 
                                            </div>
                                        </Link>
                                        
                        </div>

                           </div>
                    </div>
                  </div>
           </div>
       </section>
    </>
  )
}

export  {Product_details_area}
