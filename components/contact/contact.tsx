import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import styles from './contact.module.scss'

export const ContactMe = () => {
  const router = useRouter()

  return (
    <Grid container>
      <Grid item xs={12} md={4} onClick={() => router.push('/contact')}>
        <Typography className={styles.contact}>
          FEEL FREE TO CONTACT ME{' '}
        </Typography>
        <Typography className={styles.contact}>
          {"LET'S GET TO WORK TOGETHER"}
        </Typography>
      </Grid>
    </Grid>
  )
}
