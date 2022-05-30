import "./Contact.css";
import "../../index.css"
import Content from "../../components/Content/Content";
export default function Contact() {
  return (
    <Content>
      <section className="contact-section">
        <article>
          <h1 className="contact-title">Contact form</h1>
          <form action="">
            <div className="input">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" />
            </div>

            <div className="input"> 
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" />
            </div>
            <textarea name="" id="" cols="30" rows="10">
              
            </textarea>
            <button className="btn btn-primary">Hire</button>
          </form>
        </article>
      </section>
    </Content>
  );
}
