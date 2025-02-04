import { useState } from "react";
import { Button, Container, Card, Form, InputGroup } from "react-bootstrap";
import "./App.css";
import Header from "./components/header";

function App() {
  const [term, setTerm] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDictionary = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    );
    const data = await response.json();
    setResponse(data[0]);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fetchDictionary();
          }}
          className="d-flex gap-4"
        >
          <InputGroup>
            <InputGroup.Text></InputGroup.Text>
            <Form.Control
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </InputGroup>
          <Button disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </Button>
        </Form>
        <Card>
          {response && (
            <Card.Body>
              <div>
                <p>{response.word}</p>
                <p>{response.phonetic}</p>
              </div>
              <audio src={response.phonetics[0].audio} controls></audio>
              <div>
                {response.meanings.map((meaning, index) => (
                  <div key={index}>
                    <p>{meaning.partOfSpeech}</p>
                    <ul>
                      {meaning.definitions.map((definition, index) => (
                        <li key={index}>{definition.definition}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card.Body>
          )}
        </Card>
      </Container>
    </>
  );
}

export default App;
