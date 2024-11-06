function TravelCard({
  travel: {
    id,
    destination,
    image,
    allInclusive,
    totalCost,
    description,
  },
}) {
    return (
        <div className="card-container">
            <img width={150} src={image} alt="" />
            <h3>{destination}</h3>
            <p>{description}</p>
            <p>{totalCost}</p>
            <div className="info">
                <h3>{allInclusive}</h3>
            </div>
        </div>
    )
}

export default TravelCard