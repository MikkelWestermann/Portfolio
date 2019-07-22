import React, { useState } from 'react'; 
import SubPage from '../sub-page';
import FormWrapper from '../form-wrapper';
import Container from '../Container';
import { Form, Button, Icon, Input, Typography } from 'antd';

import config from '../../config';

const UrlShortenerPage = ({ form }) => {
  const [formSubmitState, setFormSubmitState] = useState();

  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    let status; 
    form.validateFields((err, values) => {
      if (!err) {
        setFormSubmitState({ isFetching: true })
        
        fetch(`${config.getUrlShortener()}/create-tiny`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: values.link,
            duration: values.duration
          })
        })
          .then(res => {
            status = res.status; 
            return res.json()
          })
          .then(json => {
            setFormSubmitState({ isFetching: false, status, code: json.code })
          })
          .catch(err => setFormSubmitState({ isFetching: false, status, err: err }))
      }
    });
  };

  const submitButtonIcon = () => {
    if (formSubmitState) {
      if (formSubmitState.isFetching) {
        return <Icon type="loading" />
      } else if (formSubmitState.status < 400) {
        return <Icon type="check" />
      } else {
        return <Icon type="exclamation" />
      }
    } else {
      return <Icon type="upload" />
    }
  }
  return (
    <SubPage title='Url Shortener'>
      <Container text style={{ textAlign: 'center', opacity: 0.85, margin: '25px auto' }}>
        <Typography.Title level={4}>This is a small service for creating shorter urls. You can checkout the code on <a href='https://github.com/MikkelWestermann/url-shortener'>GitHub</a></Typography.Title>
        <Typography.Title level={3}>Give it a try! <Icon type="arrow-down" /></Typography.Title>
      </Container>
      <FormWrapper style={{ margin: '100px auto' }}>
        <Form className='custom-form' onSubmit={handleSubmit}>
          <Typography.Title level={4} style={{ textAlign: 'center', opacity: 0.75, margin: '30px 0' }}>Input a link and a duration and get a shortened link back!</Typography.Title>
          <Form.Item>
            {getFieldDecorator('link', {
              rules: [{ required: true, message: 'Please input a link!' }],
            })(
              <Input
                prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="https://www.this-is-a-very-long-link.com/even-more-text"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('duration', {
              getValueFromEvent: e => {
                const convertedValue = Number(e.currentTarget.value);
                if (isNaN(convertedValue)) {
                  return Number(this.props.form.getFieldValue("testNumber"));
                } else {
                  return convertedValue;
                }
              },
              rules: [{ required: true, message: 'Please input a valid expiration duration (max 600)', type: "number", min: 0, max: 600 }],
            })(
              <Input
                prefix={<Icon type="clock-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="number"
                placeholder="Duration until expiration (in seconds)"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button size='large' type="primary" htmlType="submit" className="custom-form-button custom-button-hover">
              Submit { submitButtonIcon() }
            </Button>
          </Form.Item>
          <p className={`custom-submission-confirmation ${formSubmitState && formSubmitState.status < 400 ? 'custom-submission-confirmation-show' : ''}`}>You can now visist your link at <a target='_blank' rel="noopener noreferrer" href={`${config.getUrlShortener()}/${formSubmitState && formSubmitState.code}`}>{`${config.getUrlShortener()}/${formSubmitState && formSubmitState.code}`}</a></p>
          <p className={`custom-submission-confirmation ${formSubmitState && formSubmitState.status >= 400 ? 'custom-submission-confirmation-fail' : ''}`}>Something went wrong... Are you sure you have filled the form correctly? Otherwise contact me <a href='/#contact'>here</a></p>
        </Form>
      </FormWrapper>
      <Container text style={{ textAlign: 'center', margin: '50px auto' }}>
        <Typography.Paragraph>It's a simple Node.js/Express server with a Redis DB. There is also a Python/Flask version <a href='https://github.com/MikkelWestermann/url-shortener-python'>here</a></Typography.Paragraph>
      </Container>
    </SubPage>
  )
}

export default Form.create({ name: 'url-shortener' })(UrlShortenerPage);