import { Row } from 'antd';
import React from 'react'
import { Label, RadioButton, TextInput, Title } from '../../components';
import { Container, FieldGroup, Form, FormContainer, Summary, SummaryContainer, TitleBox } from './MakeCheeseElement'

const MultiStepForm = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <TitleBox>
            <Title title="Cheddar - Moon River" size={"24px"} />
          </TitleBox>
          <Form>
            <Row>
              <FieldGroup>
                <Label label="Field 1" />
                <TextInput placeholder="Text" width={"300px"} />
              </FieldGroup>
              <FieldGroup>
                <Label label="Field 1" />
                <TextInput placeholder="Text" width={"300px"} />
              </FieldGroup>
            </Row>
            <Row>
              <FieldGroup>
                <Label label="Field 1" />
                <TextInput placeholder="Text" width={"300px"} />
              </FieldGroup>
              <FieldGroup>
                <Label label="Field 1" />
                <TextInput placeholder="Text" width={"300px"} />
              </FieldGroup>
            </Row>
            <Row>
              <FieldGroup>
                <Row>
                  <Title title="Selection Field" size={"16px"} />
                </Row>
                <RadioButton />
              </FieldGroup>
            </Row>
          </Form>
        </FormContainer>
        <div style={{ marginRight: 50 }} />
        <SummaryContainer>
          <Summary>
            <Title title="Summary" size={"24px"} />
          </Summary>
        </SummaryContainer>
      </Container>
    </>
  );
}

export default MultiStepForm