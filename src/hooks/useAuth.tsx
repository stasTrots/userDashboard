import { notification } from 'antd'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { LOGIN_API } from '../api/Api'
import { clearUser, setUser } from '../store/userSlice'
import { clearUsers } from '../store/usersSlice'
import { localStorageUtil } from '../utils/localStorage'

const useAuth = () => {
  const { get, set, remove } = localStorageUtil()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = get("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const openNotificationWithIcon = (type: NotificationType, error: string) => {
    api[type]({
      message: 'Authorization error',
      description: error,
    });
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(LOGIN_API, { username, password });
      set("accessToken", response.data.accessToken);
      setIsAuthenticated(true);
      dispatch(setUser(response.data))
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      setError(err.response.data.message);
      openNotificationWithIcon('error', err.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    remove("accessToken");
    setIsAuthenticated(false);
    dispatch(clearUser())
    dispatch(clearUsers())
    navigate("/");
  };

  return { isAuthenticated, login, loading, error, contextHolder, logout };
};

export default useAuth