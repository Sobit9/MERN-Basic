import { Container, Card } from "react-bootstrap";
import image from "./illustration-article.svg";
import photo from "./image-avatar.webp";
import "./Container.css";
const Containers = () => {
  return (
    <Container>
      <Card>
        <img className="image" src={image} alt="" />
        <div className="part">
          <h5>
            <span className="Learn">Learning</span>
          </h5>
          <p className="pub">Published 21 Dec 2023</p>
          <h3>HTML & CSS foundations</h3>
          <p className="para">
            These language are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <p className="pic">
            <img className="photo" src={photo} alt="" />
            Greg hooper
          </p>
        </div>
      </Card>
    </Container>
  );
};
export default Containers;
