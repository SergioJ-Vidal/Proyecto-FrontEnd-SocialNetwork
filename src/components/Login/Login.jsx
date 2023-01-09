import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { Button, Form, Input, Modal } from "antd";

const Login = () => {

    const [formData, setFormData] = useState({

        email: '',

        password: ''

    })

    const { email, password } = formData

    const dispatch = useDispatch();

    const onChange = (e) => {

        setFormData((prevState) => ({

            ...prevState,

            [e.target.name]: e.target.value,

        }))

    }


    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const onSubmit = (e) => {

        e.preventDefault()
        dispatch(login(formData));
        handleOk()

    }

    const handleCancel = () => {
        setOpen(false);
    };

    return (

        <>
            <Button className="btnLogin" type="primary" onClick={showModal}>
                Login
            </Button>
            <Modal className="modal-form" open={open} title="Login to your user" onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button className="loginReturnBtn" key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button className="loginSendBtn" key="submit" type="submit" form="myform" value="Submit" htmlType="submit" loading={loading} onClick={onSubmit}>
                        Login
                    </Button>
                ]}
            >
                <div className="container">
                    <form onSubmit={onSubmit} id="myform" name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}

                        autoComplete="off">

                        <Form.Item label="Email" name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input type="email" name="email" value={email} onChange={onChange} />
                        </Form.Item>

                        <Form.Item label="Password" name="password"
                            rules={[{ required: true, message: "Please input your password!" }
                            ]}
                        >
                            <Input type="password" name="password" value={password} onChange={onChange} />
                        </Form.Item>

                    </form>
                </div>
            </Modal>

        </>



    )

}

export default Login