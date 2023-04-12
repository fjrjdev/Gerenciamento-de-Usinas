import Container from "@mui/material/Container";
import DataContainer from "../../components/DataContainer";
import Nav from "../../components/Nav";

const Dashboard = () => {
  return (
    <Container component="main" disableGutters maxWidth={false}>
      <Nav />
      <DataContainer />
    </Container>
  );
};

export default Dashboard;
