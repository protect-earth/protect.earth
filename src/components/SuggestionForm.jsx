import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

// see https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const baseApi = {
  success: false,
  error: false,
  request: false,
};

const SuggestionForm = () => {
  const [api, setApi] = useState(baseApi);
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    if (!suggestion) return;
    setApi({
      ...baseApi,
      request: true,
    });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'suggestion', email, suggestion }),
    })
      .then(() => {
        setApi({
          ...baseApi,
          success: true,
        });
      })
      .catch(error => {
        setApi({
          ...baseApi,
          error: true,
        });
      });

    event.preventDefault();
  }

  function renderForm() {
    return (
      <Form
        name="suggestion"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <Form.Label htmlFor="sf-suggestion">Suggestion</Form.Label>
        <Form.Control
          id="sf-suggestion"
          name="suggestion"
          as="textarea"
          value={suggestion}
          onChange={event => setSuggestion(event.target.value)}
          placeholder="It would be great to see..."
          rows="4"
        />
        <br />
        <Form.Label htmlFor="sf-email">Email address (optional)</Form.Label>
        <Form.Control
          style={{ maxWidth: 400 }}
          id="sf-email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text>We'll never share your email with anyone else.</Form.Text>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

  function renderLoading() {
    return (
      <p>
        <i>Submitting...</i>
      </p>
    );
  }

  function renderSuccess() {
    return (
      <>
        <h4>Thank you!</h4>
        <p>Your suggestion has been submitted.</p>
      </>
    );
  }

  function renderError() {
    return (
      <>
        <h4>Hmmm...</h4>
        <p>
          We could not submit your request for some reason. We will look into
          the problem.
        </p>
      </>
    );
  }

  function renderContent() {
    if (api.request) return renderLoading();
    if (api.success) return renderSuccess();
    if (api.error) return renderError();
    return renderForm();
  }

  return (
    <Jumbotron>
      <Col>
        <h2>Help us improve</h2>
        <p>
          We would love to hear your suggestions about how we can improve. And
          please add your email if you want to get involved.
        </p>
        {renderContent()}
      </Col>
    </Jumbotron>
  );
};

export default SuggestionForm;
