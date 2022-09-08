import {createContext, useContext, useReducer} from 'react';
import usersReducer, { initialState } from './usersReducer';

const UsersContext = createContext();

const UsersProvider = ({children}) => (
    <UsersContext.Provider
        value={useReducer(usersReducer, initialState)}
    >
        {children}
    </UsersContext.Provider>
)

export const useUsersData = () => useContext(UsersContext)[0];
export const useDispatch = () => useContext(UsersContext)[1];
export default UsersProvider;