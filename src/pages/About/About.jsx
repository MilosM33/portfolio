import Content from "../../components/Content/Content";
import "./About.css";
export default function About() {
  return (
    <Content>
      <section className="about-section">
        <section className="about-content">
          <article>
            <h1 className="about-title">About me</h1>
            <article>
              <p className="about-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                dolor nesciunt iure sit consequatur pariatur rem excepturi,
                quibusdam soluta magnam quia saepe harum mollitia neque
                repellendus porro expedita asperiores quisquam ea repellat
                commodi laboriosam! Numquam accusamus ut voluptatem quia, fugiat
                eum temporibus earum molestiae vel dolor sunt blanditiis,
                voluptate aliquam.
              </p>

              <p className="about-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                magnam explicabo, accusantium accusamus error id labore ipsa
                tempore est! Modi dolorem ullam explicabo sint corporis,
                doloribus nihil magnam culpa quam voluptate maxime suscipit, at
                dolorum dolores accusamus, aliquam non velit. Expedita, beatae
                reprehenderit soluta repudiandae error totam facilis!
                Voluptatum, placeat!
              </p>
            </article>
          </article>
          <section className="about-author">
            <div className="img-temp"></div>
            <small>Miloš Marejka</small>
          </section>
        </section>
      </section>
    </Content>
  );
}
