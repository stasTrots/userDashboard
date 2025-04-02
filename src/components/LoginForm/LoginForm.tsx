import { Button, Card, Form, Input } from "antd"
import useAuth from '../../hooks/useAuth.js'
import styles from './LoginForm.module.scss'

const LoginForm: React.FC = () => {
  const { login, loading, error, contextHolder } = useAuth()
  
  const onFinish = (values: any) => {
    login(values.username, values.password);
  };

  return (
    <div className={styles.loginFormContainer}>
      {contextHolder}
      <Card title={<p className={styles.cardTitle}>Login</p>} className={styles.loginForm}>
      <Form 
        name="login"
        onFinish={onFinish} 
        layout="vertical"
        variant={'underlined'}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter User Name!" }]}
          className={styles.loginFormItem}
        >
          <Input placeholder='Enter User Name...'/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter Password!" }]}
          className={styles.loginFormItem}
        >
          <Input.Password placeholder='Enter Password...'/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading} className={styles.loginButton}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
   
  );
};

export default LoginForm