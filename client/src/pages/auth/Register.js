import React, { useState } from 'react';
import { MailTwoTone, CheckCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { toast } from 'react-toastify';

import  { auth } from "../../firebase";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault(e);

        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        };

        await auth.sendSignInLinkToEmail(email, config);

        // Show notice
        toast.success(`Email is sent to ${email}. Click the link to complete your registration.`);

        // Save to LS
        window.localStorage.setItem('emailForRegistration', email);

        // clear state
        setEmail('');
    };

    const registerForm = () => {
        return (
            <form
                className="text-center"
                onSubmit={handleSubmit}
            >
                <Input
                    size="large"
                    type="email"
                    placeholder="Enter email..."
                    prefix={<MailTwoTone />}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onPressEnter={handleSubmit}
                    autoFocus
                    allowClear
                />
                <Button
                    className="mt-3 btn btn-raised btn-success"
                    htmlType="submit"
                    shape="round"
                    icon={<CheckCircleOutlined />}
                    size="large"
                    loading={false}
                >
                    Register
                </Button>
            </form>
        )
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h3>Register</h3>
                    { registerForm() }
                </div>
            </div>
        </div>
    );
};

export default Register;
