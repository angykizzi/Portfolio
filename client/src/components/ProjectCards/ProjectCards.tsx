import { Col } from "react-bootstrap"
import './Project.css'
interface ProjectCardProps {
    title: string;
    description: any;
    imgUrl: string;
    link: string;
  }
  
  export const ProjectCard = ({
    title,
    description,
    imgUrl,
    link,
  }: ProjectCardProps) => {
    return (
      <Col>
        <div className="proj-imgbx"><a href={link} target="_blank" >
            <img src={imgUrl} />
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div></a>
        </div>
      </Col>
    );
  };