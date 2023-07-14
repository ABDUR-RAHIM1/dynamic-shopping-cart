import React, { useState } from 'react'

function Product(props) {
    const { title, desc, Oldprice, newPrice, image, socialIcon, breadcrumb } = props.data
    const [proImg , setProImage] = useState(image[0].image)

    const handleImageSet = (e)=>{
    //     image.forEach(element => {
    //         console.log(element.image)
    //    });
    setProImage(e.target.src)
    }
    return (
        <div className='product'>
            <div className="productImg">
                <img src={ proImg} alt="" />
             <div className="singleImgWrap">
             {
                    image.map((img, index) => {
                        return(
                             <div className="singleImg" key={index}>
                                 <img onClick={handleImageSet} src={img.image} alt="" />
                             </div>
                        )
                    })
                }
             </div>
            </div>
            <div className="producDetails">
                <div className="bredcrumb">
                    {
                        breadcrumb.map((brd, index) => {
                            const l = breadcrumb.length
                            return (
                                <>
                                    <a className='items' href={brd.link}>{brd.item}</a>
                                    {index !== l - 1 && <span> / </span>}
                                </>

                            )
                        })
                    }
                </div>
                <h3 className='mt-3'>
                    {title}
                </h3>
                <h4 className='price'>Regular Price :{Oldprice} TK</h4>
                <h4>Discount Price :{newPrice} TK</h4>
                <p>description : {desc}</p>
                <div className="socialIcon">
                    {
                        socialIcon.map(icon => {
                            return <a href={icon.link} rel="noreferrer" target={'_blank'} ><button className='btn btn-info btn-sm'>{icon.icon}</button></a>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Product