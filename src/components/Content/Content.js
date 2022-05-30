import Navbar from "../Navbar/Navbar";

export default function Content(props) {
  return (
    <div className="background">
      <Navbar></Navbar>

      {props.children}
    </div>
  );
}
