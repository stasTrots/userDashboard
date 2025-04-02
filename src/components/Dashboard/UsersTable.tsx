import { Card, Table } from "antd"
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { columns } from './TableConfig'

const UsersTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users)

  return (
    <Card title="Users" style={{ margin: "auto", marginTop: 50 }}>
        <Table dataSource={users} columns={columns} pagination={{ pageSize: 10 }} bordered style={{ marginTop: 20 }} />
    </Card>
  );
};

export default UsersTable