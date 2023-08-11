import React from 'react'

import {
  Button,
  Grid,
  GridProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'

import styles from './email.module.scss'

type GridItemProps = GridProps

type Props = TextFieldProps & {
  gridProps: GridItemProps
}

type TitleProps = {
  label: string
}

type ButtonProps = {
  label: string
  valid: boolean
}

export const EmailField: React.FC<Props> = (props) => {
  const { gridProps, ...rest } = props
  return (
    <GridItem {...gridProps}>
      <TextField {...rest} />
    </GridItem>
  )
}

export const GridItem: React.FC<GridItemProps> = (props) => {
  const { children, ...rest } = props
  return <Grid {...rest}>{children}</Grid>
}

export const PageTitle: React.FC<TitleProps> = ({ label }) => {
  return (
    <Typography variant="h3" className={styles.pageTitle}>
      {label}
    </Typography>
  )
}

export const SubmitButton: React.FC<ButtonProps> = ({ valid, label }) => {
  return (
    <Button
      variant="contained"
      size="large"
      type="submit"
      disabled={!valid}
      className={styles.submitButton}
    >
      {label}
    </Button>
  )
}
