import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { USERS_API } from '../api/Api'
import { RootState } from '../store/store'
import { setUsers } from '../store/usersSlice'

const useFetchUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.user)
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(USERS_API);
        dispatch(setUsers(response.data.users))
      } catch (err) {
        console.log(err)
        setError("Не вдалося отримати список користувачів");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { loading, error, user };
};

export default useFetchUsers;