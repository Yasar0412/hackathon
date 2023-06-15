import MultiStep from "react-multistep";
import { Basic, Success, Workspace } from "../Forms";
import "./prog-track.css";
import "./styles.css";

const steps = [
  { name: "Name A", component: <Basic /> },
  { name: "Email", component: <Workspace /> },
  { name: "Password", component: <Success /> },
  { name: "Agreement", component: <Workspace /> }
];

const ViewProject = (props) => {
  
  return (
    <div>
      <h3>View Project</h3>
      <hr />
      <MultiStep steps={steps} />
    </div>
  );
};

export default ViewProject;
