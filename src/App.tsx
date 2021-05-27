import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Resume from "./components/Resume";
import Spinner from "./components/Spinner";
import { IResume } from "./models/IResume";
import { useState } from "react";
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState<IResume>({
    mark: "",
    plan: "",
    price: 0,
    year: "",
  });

  const [loading, setLoading] = useState(false);

  //extract data

  return (
    <Container>
      <Header title="Insurance Quote"></Header>
      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading} />
        {loading ? <Spinner></Spinner> : null}
        <Resume resume={resume}></Resume>
        <Result price={resume.price}></Result>
      </FormContainer>
    </Container>
  );
}

export default App;
