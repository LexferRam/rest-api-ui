import {
    makeStyles
  } from '@mui/styles'
  
  const useTableStyles = makeStyles(() => ({
    tableHead: {
      backgroundColor: '#e5e5e5 !important'
    },
    tableRow :{
      "&:hover": {
        backgroundColor: '#efefef !important'
      }
    }
  }))

  export default useTableStyles;