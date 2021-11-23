import "./styles.css";
import data from "./data.json";
import Card from "react-bootstrap/Card";

export default function App() {
  const newData = data.map((data) => {
    return (
      <Card key={data.id}>
        <Card.Body>
          <Card.Title>
            <Card.Title>ID:{data.id}</Card.Title>
            Name:{data.name}
          </Card.Title>
          <Card.Text>
            <Card.Title>Email:{data.emailId}</Card.Title>
            <Card.Title>Gender: {data.gender}</Card.Title>
            <Card.Title>Joining Date: {data.joiningDate}</Card.Title>
            <Card.Title>Location: {data.location}</Card.Title>
            <Card.Title>Department: {data.department}</Card.Title>
            <Card.Title>About Me: {data.aboutMe}</Card.Title>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className="App">
      <div>
        <h3>{newData}</h3>
      </div>
    </div>
  );
}
