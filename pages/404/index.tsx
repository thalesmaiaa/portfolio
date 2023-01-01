import { useRouter } from 'next/router'

import { Box, Container, IconButton, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import styles from './404.module.scss'

const NotFound = () => {
  const router = useRouter()

  return (
    <Box className={styles.NotFoundContainer}>
      <IconButton onClick={() => router.push('/')}>
        <ArrowBackIcon fontSize="large" sx={{ color: '#000' }} />
      </IconButton>
      <Container maxWidth="md">
        <Typography variant="h3" className={styles.NotFoundText}>
          PAGE NOT FOUND
        </Typography>
      </Container>
    </Box>
  )
}

export default NotFound
