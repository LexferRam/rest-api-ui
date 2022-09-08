import { Grid } from '@mui/material'
import React from 'react'
import TableData from './Table'

const TableSection = () => {
    return (
        <Grid
            item
            md={8}
            sm={12}
            xs={12}
        >
            <TableData />
        </Grid>
    )
}

export default TableSection