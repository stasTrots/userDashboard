import { Button, Card, Spin } from "antd"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useGetAllInfoUser from '../../hooks/useGetAllInfoUser'
import LayoutWrapper from '../../layouts/Layout'
import { RootState } from '../../store/store'

const UserPage: React.FC = () => {
  const { loading, error } = useGetAllInfoUser();
  const user = useSelector((state: RootState) => state.user.allInfo)
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <LayoutWrapper>
      <Card style={{ minWidth: '100%', minHeight: '100vh'}}>
      {loading ? (
        <Spin tip="Loading..." style={{ position: 'absolute', top: 'calc(50% - 10px)', left: 'calc(50% - 10px)' }} />
      ) : <Card title={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}><span>User Info</span><Button onClick={handleBackButton}>Back</Button></div>} style={{ margin: "auto", marginTop: 50 }}>
        {user
            ? Object.entries(user).map(([key, value]) => (
                <p key={key} style={{ textTransform: 'capitalize'}}>
                  <strong>{key}:</strong> {String(value)}
                </p>
              ))
            : <p>No user data available</p>}
            
      </Card>}
      </Card>
    </LayoutWrapper>
    
  );
};

export default UserPage