import React, { useState } from 'react';
import { MailTwoTone, CheckCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault(e);

        console.log(email)
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
                    type="submit"
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