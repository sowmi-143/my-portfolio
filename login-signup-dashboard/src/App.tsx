import { Container } from '@mui/material';
import AuthForm from "./components/AuthForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <Container>
      <AuthForm />
      <UserTable />
    </Container>
  );
}

export default App;