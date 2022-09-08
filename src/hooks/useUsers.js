import {
  useState,
  useEffect
} from 'react'

import axios from 'axios'
import { useDispatch } from '../context/UsersProvider'

const useUsers = () => {

  const dispatch = useDispatch()

  /** GET USERS */
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_USERS_URL)

        dispatch({type: "GET_USERS", payload: data})

      } catch (err) {
        console.log('KO::USERS', err)
      }
    }

    getUsers()
  }, [])

  // return {
  //   users
  // }
}

export default useUsers
