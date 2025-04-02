import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { GET_USER_API } from '../api/Api'
import { setAllInfo } from '../store/userSlice'
import { localStorageUtil } from '../utils/localStorage'
import useAuth from './useAuth'

const useGetAllInfoUser = () => {
  const { get } = localStorageUtil()
  const { logout } = useAuth()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = get('accessToken')

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(GET_USER_API, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
          }
        });
        dispatch(setAllInfo(response.data))
      } catch (err) {
        console.log(err)
        setError("Не вдалося отримати список користувачів");
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchUser();
    } else {
      logout()
    }
    
  }, []);

  return { loading, error };
};

export default useGetAllInfoUser;