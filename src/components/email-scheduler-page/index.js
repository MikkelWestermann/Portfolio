import React, { useState } from 'react'; 
import SubPage from '../sub-page';
import FormWrapper from '../form-wrapper';
import Container from '../Container';
import { Form, Button, Icon, Input, Typography, DatePicker } from 'antd';
import moment from 'moment';

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
        
        fetch(config.getEmailAuto(), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: values.email,
            date: values.date,
            data: {
              subject: values.subject,
              message: values.message,
              title: 'Email Automation'
            }
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
    <SubPage title='Email Scheduler'>
      <Container text style={{ textAlign: 'center', opacity: 0.85, margin: '25px auto' }}>
        <Typography.Title level={4}>This is a small service scheduling email delivery at a specified date and time. You can checkout the code on <a href='https://github.com/MikkelWestermann/email-automation'>GitHub</a></Typography.Title>
        <Typography.Title level={3}>Give it a try! <Icon type="arrow-down" /></Typography.Title>
      </Container>
      <FormWrapper style={{ margin: '100px auto' }}>
        <Form className='custom-form' onSubmit={handleSubmit}>
          <Typography.Title level={4} style={{ textAlign: 'center', opacity: 0.75, margin: '30px 0' }}>Input the data and it will send you an email!</Typography.Title>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email! Otherwise I don\'t know where to send the email...' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="your@email.com"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('date', {
              rules: [
                { required: true, message: 'Date is required' },
                { validator: (rule, date, callback) => {
                  if (date) {
                    if (date.isBefore(moment())) {
                      callback(new Error('You can\'t choose a date before now'))
                    } else if (date.isAfter(moment().add(7, 'd'))) {
                      callback(new Error('You can\'t schdule the email for later than a week from now'))
                    } else {
                      callback()
                    }
                  } else {
                    callback(new Error('!'))
                  }
                }}
              ],
            })(
              <DatePicker showTime placeholder="Select Time" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('subject', {
              rules: [{ required: true, message: 'Please input a subject' }],
            })(
              <Input
                placeholder="Subject"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('message', {
                rules: [{ required: true, message: 'Write a message for yourself' }]
              })(
                <Input.TextArea placeholder='Hello... me - write a message for yourself' autosize={{ minRows: 5 }} />
              )
            }
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
        <Typography.Paragraph>A simple Python/Flask application</Typography.Paragraph>
      </Container>
    </SubPage>
  )
}

export default Form.create({ name: 'email-auto' })(UrlShortenerPage);