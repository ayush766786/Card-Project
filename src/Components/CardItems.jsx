import { useState } from "react"

const CardItems = ({ id, image, info, price, name, remoreTour }) => {

  const [readmore, setReadmore] = useState(false);

  const descreption = readmore ? info : `${info.substring(0, 10)}....`

  const readmoreHandler = () => {
    setReadmore(!readmore)
  }



  return <>
    <div className="card-items">
      
        <img src={image} alt="" />
        <div className="tour-info">
          <div className="tour-details">
            <h4 className="tour-price">₹{price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>
          <div className="descreption">
            {descreption}
            <span className="read-more" onClick={readmoreHandler}>
              {readmore ? "show less" : "read more"}
            </span>
          </div>

        </div>
       
      
      <button className="btn-red" onClick={() => remoreTour(id)}>
          Not Interested
        </button>
    </div>


  </>
}
export default CardItems