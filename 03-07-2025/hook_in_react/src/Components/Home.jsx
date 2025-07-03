import { Link } from "react-router-dom"


export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link to="/dashboard" >DashBoard</Link>
    <br /><br />
        <Link to="/contact" >Contact</Link>
    </>
  )
}
