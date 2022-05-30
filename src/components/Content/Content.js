import Navbar from "../Navbar/Navbar";
import "./Content.css"
export default function Content(props) {
  return (
    <div className="background">
      <Navbar></Navbar>
    
      <section className="section-center">{props.children}</section>
    </div>
  );
}
