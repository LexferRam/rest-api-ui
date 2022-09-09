import { Container, Grid } from '@mui/material'

import StepperSection from './components/StepperSection'
import TableSection from './components/TableSection'
import DeleteUserDialog from './components/DeleteUserDialog'
import EditUserDialog from './components/EditUserDialog'

const App = () => {

  return (
    <div
      style={{
        padding: '5em 2em'
      }}
    >
      <DeleteUserDialog />
      <EditUserDialog />
      <Grid
        container
        spacing={6}
      >
        <StepperSection />
        <TableSection />
      </Grid>
    </div>
  )
}

export default App
