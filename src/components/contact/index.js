import React from 'react';
import { Form, Button } from 'antd';
// import { useLaxElement } from 'use-lax';

import Section from '../Section';

import './styles.scss'

const Contact = () => {
  // const meImage = useLaxElement();
  return (
    <Section title='Contact' id='contact'>
      <Form className='contact-form'>
        <Button size='large' type="primary" htmlType="submit" className="contact-form-button">
          Submit
        </Button>
      </Form>
    </Section>
  );
}

export default Contact;