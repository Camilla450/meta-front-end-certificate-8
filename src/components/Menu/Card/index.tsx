import "./index.scss"

export default function Page(props: {
  name: string,
  description: string,
  price: number,
  pic: string
}) {
  return (
    <div className="Card card">
      <div className="info">
        <span className="name">{props.name}</span>
        <span className="description">{props.description}</span>
        <span className="price">${props.price}</span>
      </div>
      <img src={props.pic} alt={props.name}/>
      <div className="line2"></div>
    </div>
  )
}