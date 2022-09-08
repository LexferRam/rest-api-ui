import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  IconButton,
  Tooltip,
  TablePagination
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import axios from 'axios'
import { useDispatch, useUsersData } from '../context/UsersProvider'

const TableData = () => {

  const { users, usersLoaded, page } = useUsersData()
  const dispatch = useDispatch()
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    dispatch({type:'HANDLE_CHANGE_PAGE', payload: newPage})
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    dispatch({type:'HANDLE_CHANGE_PAGE', payload: 0})
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_USERS_URL)
        dispatch({ type: "GET_USERS", payload: data })

      } catch (err) {
        console.log('KO::USERS', err)
      }
    }

    getUsers()
  }, [])

  if (!usersLoaded) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}><CircularProgress color="primary" /></div>

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Apellido</strong>
              </TableCell>
              <TableCell>
                <strong>E-mail</strong>
              </TableCell>
              <TableCell>
                <strong>Teléfono</strong>
              </TableCell>
              <TableCell>
                <strong>C.C.</strong>
              </TableCell>
              <TableCell>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, key) => (
              <TableRow
                key={key}
              >
                <TableCell>
                  {user.name}
                </TableCell>
                <TableCell>
                  {user.lastName}
                </TableCell>
                <TableCell>
                  {user.email}
                </TableCell>
                <TableCell>
                  {user.phoneNumber}
                </TableCell>
                <TableCell>
                  {user.cc}
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton color="primary" onClick={() => {
                      dispatch({ type: 'SELECT_USER', payload: user._id})
                      dispatch({ type: 'OPEN_EDIT_USER_DIALOG' })
                    }}>
                      <EditRoundedIcon fontSize='medium' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton color="secondary" onClick={() => {
                      dispatch({ type: 'SELECT_USER', payload: user._id })
                      dispatch({ type: 'OPEN_DELETE_USER_DIALOG' })
                    }}>
                      <DeleteIcon fontSize='medium' />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
    </>
  )
}

export default TableData
