import {
    Step,
    Stepper,
    StepLabel,
    Box,
    Grid
} from '@mui/material'

import Form1 from './Form1'
import Form2 from './Form2'
import { useDispatch, useUsersData } from '../context/UsersProvider'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../utils'

const steps = [
    {
        label: 'Paso 1',
        componente: <Form1 />
    },
    {
        label: 'Paso 2',
        componente: <Form2 />
    }
]

const StepperSection = () => {

    const { currentStepForm } = useUsersData()
    const dispatch = useDispatch();

    const objForm = useForm({
        resolver: yupResolver(schema),
    })

    const { handleSubmit, reset } = objForm;

    const onSubmit = async (newUser) => {

        try {
            dispatch({ type: 'RESET_USERS' })
            await axios.post(process.env.REACT_APP_USERS_URL, newUser);

            const { data: users } = await axios.get(process.env.REACT_APP_USERS_URL)
            dispatch({ type: "GET_USERS", payload: users })
            dispatch({ type: 'RESET_STEP_FORM' })
            dispatch({ type: 'OPEN_SNACKBAR_NOTIFICATION', payload: { label: "Usuario agregado exitosamente!" } })

            reset();
        } catch (error) {
            dispatch({ type: 'OPEN_SNACKBAR_NOTIFICATION_ERROR' })

        }
    }

    return (
        <Grid
            item
            md={4}
            sm={12}
            xs={12}
        >
            <Stepper
                activeStep={currentStepForm}
            >
                {steps.map((step, key) => (
                    <Step
                        key={key}
                    >
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box
                style={{
                    marginTop: '4em'
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    {currentStepForm === 0 && <Form1 objForm={objForm} />}
                    {currentStepForm === 1 && <Form2 objForm={objForm} />}
                </form>
            </Box>
        </Grid>
    )
}

export default StepperSection
