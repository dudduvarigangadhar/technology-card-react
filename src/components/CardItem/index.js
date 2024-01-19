import './index.css'

const TechnologyCardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  //   console.log(cardDetails)
  return (
    <div className="card-container">
      <div>
        <li className={`${className} jobCard`}>
          <h1 className="designation">{title}</h1>
          <p className="jobDescription">{description}</p>
          <img src={imgUrl} className="image" alt={title} />
        </li>
      </div>
    </div>
  )
}

export default TechnologyCardItem
