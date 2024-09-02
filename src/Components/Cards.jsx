import CardItems from "./CardItems"
import "./Cards.css"

const Cards = ({ tours ,remoreTour}) => {
  return <>
    <div className="container">
      <div className="cards">
        {
          tours.map((tour) => {
            return <CardItems key={tour.id} {...tour} remoreTour={remoreTour}></CardItems>
          })
        }
      </div>
    </div>

  </>
}
export default Cards;