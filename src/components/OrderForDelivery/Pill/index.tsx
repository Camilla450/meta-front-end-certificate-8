import "./index.scss"

export default function Page(props: {msg: string}) {
  return (
    <div className="Pill pill">
      <span>{props.msg}</span>
    </div>
  )
}