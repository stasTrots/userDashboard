import { Card, Spin } from 'antd'
import useFetchUsers from '../../hooks/useFetchUsers'
import useGetAllInfoUser from '../../hooks/useGetAllInfoUser'
import LayoutWrapper from '../../layouts/Layout'
import UserCard from './UserCard'
import UsersTable from './UsersTable'

const Dashboard: React.FC = () => {
  const { loading: loadingAllInfo } = useGetAllInfoUser();
  const { loading: loadingUsers } = useFetchUsers();

  return (
    <LayoutWrapper>
      {(loadingAllInfo || loadingUsers) ? (
        <Spin tip="Loading..." style={{ position: 'absolute', top: 'calc(50% - 10px)', left: 'calc(50% - 10px)' }} />
      ) : <Card>
      <UserCard />
      <UsersTable />
      </Card>}
    </LayoutWrapper>
  );
};

export default Dashboard