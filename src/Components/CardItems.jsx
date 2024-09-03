import { useState } from "react"

const CardItems = ({ tour, remoreTour }) => {

  const [readmore, setReadmore] = useState(false);

  const descreption = readmore ? tour.info : `${tour.info.substring(0, 10)}....`

  const readmoreHandler = () => {
    setReadmore(!readmore)
  }



  return <>
    <div className="card-items">
      
        <img src={tour.image} alt="" />
        <div className="tour-info">
          <div className="tour-details">
            <h4 className="tour-price">₹{tour.price}</h4>
            <h4 className="tour-name">{tour.name}</h4>
          </div>
          <div className="descreption">
            {descreption}
            <span className="read-more" onClick={readmoreHandler}>
              {readmore ? "show less" : "read more"}
            </span>
          </div>

        </div>
       
      
      <button className="btn-red" onClick={() => remoreTour(tour.id)}>
          Not Interested
        </button>
    </div>


  </>
}
export default CardItems