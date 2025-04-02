import { RootState } from '@reduxjs/toolkit/query'
import { Button, Layout, Menu, MenuProps } from 'antd'
import Avatar from 'antd/es/avatar/Avatar'
import { Content, Header } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { NavRoutes } from '../routes/Routes'

const LayoutWrapper = ({children}: {children: React.ReactNode}) => {
  const user = useSelector((state: RootState) => state.user)
  const { logout } = useAuth()
  const navigate = useNavigate();
  const [current, setCurrent] = useState('mail');
  const { pathname } = useLocation()

  const handleChangePage: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`)
  };

  const handleMoreUserInfoButton = () => {
    navigate('/user-info')
  }

  useEffect(() => {
    setCurrent(pathname.split('/')[1])
  }, [pathname])

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0 24px'}}>
        <Avatar size={48} src={user.image} style={{ marginRight: 15}} onClick={handleMoreUserInfoButton}/>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={handleChangePage}
          items={NavRoutes}
          selectedKeys={[current]}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button onClick={logout}>
          Logout
        </Button>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default LayoutWrapper