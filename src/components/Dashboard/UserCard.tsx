import { Button, Card } from "antd"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'

const UserCard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const navigate = useNavigate();

  const handleMoreButton = () => {
    navigate('/user-info')
  }

  return (
    <Card title={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <span>User Info</span>
        <Button onClick={handleMoreButton}>More</Button>
      </div>
    } style={{ margin: "auto", marginTop: 50 }}>
      <p><strong>Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </Card>
  );
};

export default UserCard