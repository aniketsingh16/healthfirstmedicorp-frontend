import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';

const FormContact = () => {
    return (
        <div className="ps-form--contact">
            <h2 className="ps-form__title">
                Tell us, what are you looking for..??
            </h2>

            
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            ></Form>
            <div className="row">

            </div>
            <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
     <Input className="form-control ps-form__input"/>
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input className="form-control ps-form__input" />
    </Form.Item>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="text"
                            placeholder="Name and Surname"
                            required
                        />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="email"
                            placeholder="Your E-mail"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="ps-form__group">
                        <textarea
                            className="form-control ps-form__textarea"
                            rows="5"
                            placeholder="Message"></textarea>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit">
                <button className="ps-btn ps-btn--warning">Send message</button>
            </div>
        </div>
    );
};

export default FormContact;
