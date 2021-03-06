import React, { useState } from 'react';
import { Form, Button, Icon, Input, Select } from 'antd';

import Section from '../Section';
import FormWrapper from '../form-wrapper';

import config from '../../config';

import './styles.scss'

const Contact = ( { form } ) => {

  const [formSubmitState, setFormSubmitState] = useState();

  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    const now = new Date()
    const scheduledDate = new Date(now.getTime() + 5*60000)
    form.validateFields((err, values) => {
      if (!err) {
        setFormSubmitState({ isFetching: true })
        
        fetch(config.getEmailAuto(), {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: 'hi@mikkelwestermann.com',
            date: scheduledDate,
            data: {
              subject: `${values.name} has contacted you about ${values.about}`,
              message: values.message,
              title: 'Contact Form'
            }
          })
        })
          .then(res => setFormSubmitState({ isFetching: false, status: res.status }))
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
    <Section title='Contact' id='contact'>
      <FormWrapper>
        <Form className='custom-form' onSubmit={handleSubmit}>
        <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Name"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="email"
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('about', {
                rules: [{ required: true, message: 'Please choose what this is about', enum: ['Bug', 'Hire', 'Project', 'Other'] }]
              })(
                <Select 
                  prefix={<Icon type="select" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                  placeholder='About'
                >
                  <Select.Option value='Bug'>Bug in a game</Select.Option>
                  <Select.Option value='Hire'>Hire</Select.Option>
                  <Select.Option value='Project'>Project</Select.Option>
                  <Select.Option value='Other'>Other</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('message', {
                rules: [{ required: true, message: 'You have to say something...' }]
              })(
                <Input.TextArea placeholder='Write me a message' autosize={{ minRows: 5 }} />
              )
            }
          </Form.Item>
          <Form.Item>
            <Button size='large' type="primary" htmlType="submit" className="custom-form-button custom-button-hover" disabled={formSubmitState && formSubmitState.status < 400}>
              Submit { submitButtonIcon() }
            </Button>
          </Form.Item>
          <p className={`custom-submission-confirmation ${formSubmitState && formSubmitState.status < 400 ? 'custom-submission-confirmation-show' : ''}`}>You will receive an email when I have received your message to confirm your submission</p>
          <p className={`custom-submission-confirmation ${formSubmitState && formSubmitState.status > 400 ? 'custom-submission-confirmation-fail' : ''}`}>Something went wrong... Are you sure you have filled the form correctly? Otherwise contact me <a href='mailto:mikkel.westermann.98@gmail.com'>here</a></p>
        </Form>
      </FormWrapper>
    </Section>
  );
}

export default Form.create({ name: 'contact' })(Contact);