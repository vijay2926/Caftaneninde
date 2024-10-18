import React from 'react'
import Cat_1 from '../../images/cat/cat_1.svg'
import Cat_2 from '../../images/cat/cat_2.svg'
import Cat_3 from '../../images/cat/cat_3.svg'
import Cat_4 from '../../images/cat/cat_4.svg'
import Cat_5 from '../../images/cat/cat_5.svg'
import Cat_6 from '../../images/cat/cat_6.svg'
import Cat_7 from '../../images/cat/cat_7.svg' 
import Big_im_1 from '../../images/big_im_1.svg' 
import Big_im_2 from '../../images/big_im_2.svg' 
import Big_im_3 from '../../images/big_im_3.svg' 
import Big_im_4 from '../../images/big_im_4.svg' 
import Big_im_5 from '../../images/big_im_5.svg' 
import { Link } from 'react-router-dom'


function Home_area() {
    const catdata = [
{
    img:Cat_1,
    text:"Saree"
},
{
    img:Cat_2,
    text:"Kurti"
},
{
    img:Cat_3,
    text:"Skirt"
},
{
    img:Cat_4,
    text:"Bags"
},
{
    img:Cat_5,
    text:"Man"
},
{
    img:Cat_6,
    text:"Bedsheets"
},
{
    img:Cat_7,
    text:"Trending Now"
},

    ]
    const big_idata =[
        {
            img:Big_im_1,
            text:'Saree'
            
        },
        {
            img:Big_im_2,
            text:'Saree'
            
        },
        {
            img:Big_im_3,
            text:'Saree'
            
        },
        {
            img:Big_im_4,
            text:'Saree'
            
        },
        {
            img:Big_im_5,
            text:'Saree'
            
        },
    ]

  return (
 <>
      <section className="hero_area">
        <div className="container-fluid">
               <div className="row">
                <div className="col-xxl-10 mx-auto">
                    <div className="hero_area_inner">
                        <div className="hero_area_inner_ov">
                        {catdata.map((catdata_1, hkey1) => (
                        <Link >
                            <div className="cat_box">
                                <div className="image">
                                <img src={catdata_1.img} alt="" />

                                </div>
                                  <span>{catdata_1.text}</span>
                            </div>
                            </Link>
                    ))}
                        </div>
                   
                    </div>
                </div>
               </div>
        </div>
        <div className="big_img_box">
            {
               big_idata.map((big_idata_1 ,key2) =>(
                <div className="big_i_box">
                <div className="image">
                    <img src={big_idata_1.img} alt=""  />
                </div>
                <div className="content">
                    <span>{big_idata_1.text}</span>
                </div>

              </div>
               )) 
            }
           
        </div>
      </section>
 </>
  )
}

export default Home_area
