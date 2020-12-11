import React, { useState, useEffect } from 'react';
import { MailTwoTone, LikeOutlined, UnlockTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import { toast } from 'react-toastify';

import  { auth } from "../../firebase";
import 'react-toastify/dist/ReactToastify.css';

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration') || '');
    }, []);

    const handleSubmit = async e => {
        e.preventDefault(e);

        if (!email || !password) {
            toast.error('Fill email and password fields!');
            return;
        }

        if (password.length > 0 && password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(email, window.location.href);

            if (result.user.emailVerified) {
                window.localStorage.removeItem('emailForRegistration');

                const user = auth.currentUser;
                await user.updatePassword(password);

                const idTokenResult = await user.getIdTokenResult();

                history.push('/');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const completeRegisterForm = () => {
        return (
            <form
                className="text-center"
                onSubmit={handleSubmit}
            >
                <Input
                    size="large"
                    type="email"
                    prefix={<MailTwoTone />}
                    value={email}
                    disabled
                    className="mb-3"
                />
                <Input.Password
                    size="large"
                    type="password"
                    prefix={<UnlockTwoTone />}
                    value={password}
                    autoFocus
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password..."
                />
                <Button
                    className="mt-3 btn btn-raised btn-success"
                    htmlType="submit"
                    shape="round"
                    icon={<LikeOutlined />}
                    size="large"
                    loading={false}
                >
                    Complete Registration
                </Button>
            </form>
        )
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h3>Register Complete</h3>
                    { completeRegisterForm() }
                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;
