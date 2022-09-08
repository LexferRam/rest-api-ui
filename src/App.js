import { Container, Grid } from '@mui/material'

import StepperSection from './components/StepperSection'
import TableSection from './components/TableSection'
import DeleteUserDialog from './components/DeleteUserDialog'
import EditUserDialog from './components/EditUserDialog'

const App = () => {

  return (
    <Container
      fixed
      style={{
        padding: '3em'
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
    </Container>
  )
}

export default App
