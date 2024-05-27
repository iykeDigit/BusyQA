import './MainTitle.css'
interface Props{
    text: string;
}
function MainTitle({text}:Props) {
  return (
    <>
    <div>
        <h1 id="main-title">{text}</h1>
    </div>
    </>
  )
}

export default MainTitle