import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const MailingListForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="bg-secondary text-white">
            <div className="row gutter-2 align-items-center">
              <Col md={6} xs={12}>
                <h3>Get on our mailing list, save the world!</h3>
              </Col>
              <Col xs={12} md={6}>
                <Form
                  action="https://earth.us2.list-manage.com/subscribe/post?u=aea364fe5dd008072efb3b660&amp;id=53377e780a"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <Form.Group id="formBasicEmail">
                    <Form.Label htmlFor="mce-EMAIL">Email address</Form.Label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Form.Control
                        id="mce-EMAIL"
                        name="EMAIL"
                        type="email"
                        placeholder="Enter email"
                      />
                      <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_aea364fe5dd008072efb3b660_53377e780a"
                          tabindex="-1"
                          value=""
                        ></input>
                      </div>
                      <Button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        style={{ marginLeft: '0.5rem' }}
                      >
                        Subscribe
                      </Button>
                    </div>
                    <Form.Text className="text-white">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default MailingListForm;
