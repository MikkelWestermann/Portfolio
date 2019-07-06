import React from 'react';
import { Form, Button, Icon, Input, Select } from 'antd';
// import { useLaxElement } from 'use-lax';

import Section from '../Section';

import './styles.scss'

const Contact = ( { form } ) => {
  // const meImage = useLaxElement();

  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Section title='Contact' id='contact'>
      <Form className='contact-form' onSubmit={handleSubmit}>
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
          <Button size='large' type="primary" htmlType="submit" className="contact-form-button custom-button-hover">
            Submit <Icon type="upload" />
          </Button>
        </Form.Item>
      </Form>
    </Section>
  );
}

export default Form.create({ name: 'contact' })(Contact);