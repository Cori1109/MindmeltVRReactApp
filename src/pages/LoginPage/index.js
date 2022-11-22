import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Button, Checkbox, Form, Input, Popover, Spin } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { 
    Container,
    LoginContainer,
    LogoImgContainer,
    Title,
    RememberContainer,
    HelpTextContainer,
    HelpTextContent,
    HelpHeader,
} from "./styled";
import { USER as key } from 'constants/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import LogoImg from "assets/img/logo.png";
import { loginRequest } from './action';
import { selectIsLoading } from './selector';

const LoginPage = (props) => {
    const { loginRequest, isLoading } = props;
    useInjectReducer({key, reducer});
	useInjectSaga({key, saga});

    const helpContent = (
        <HelpTextContainer>
            <HelpTextContent marginBottom={8}>
                If you select this checkbox, the application will save your username in a persistent browser cookie named "LOGIN_USERNAME_COOKIE". When you go to the login page the next time, the username field will be automatically populated with this value.
            </HelpTextContent>
            <HelpTextContent marginBottom={8}>
                If you deselect this checkbox and your username is already saved in the cookie, the application will overwrite it with an empty value. You can also use your browser's developer tools to completely remove the cookie.
            </HelpTextContent>
        </HelpTextContainer>
    );

    const helpHeader = (
        <HelpHeader>
            <span>Remember username</span>
        </HelpHeader>
    );

    const onFinish = (values) => {
        loginRequest(values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <Spin spinning={isLoading}>
                <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <LoginContainer>
                        <LogoImgContainer src={LogoImg} />
                        <Title>SmartVR Training Demo</Title>
                        <Form.Item
                            style={{width: "100%"}}
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size='large' placeholder='Username' prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item
                            style={{width: "100%"}}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password 
                                size='large' 
                                placeholder='Password' 
                                prefix={<KeyOutlined />}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                        </Form.Item>

                        <RememberContainer>
                            <Form.Item name="remember" valuePropName="checked" >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Popover content={helpContent} title={helpHeader}>
                                <QuestionCircleOutlined style={{marginTop: "10px"}} />
                            </Popover>
                        </RememberContainer>

                        <Form.Item style={{width: "100%"}}>
                            <Button style={{width: "100%", fontWeight: "bold"}} size="large" type="primary" htmlType="submit">
                                Sign In
                            </Button>
                        </Form.Item>
                    </LoginContainer>
                </Form>
            </Spin>
        </Container>
    )
}
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading()
});

const mapDispatchToProps = (dispatch) => ({
    loginRequest: (data) => dispatch(loginRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);