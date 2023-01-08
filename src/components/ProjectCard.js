import { Col } from "react-bootstrap";

export const ProjectCard = ({ linkurl, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={linkurl} target="_blank" style={{textDecoration: "none", color:"#fff"}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}


export const ProjectCards = ({linkurl, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbxs">
      <a href={linkurl} target="_blank" style={{textDecoration: "none", color:"#000"}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}