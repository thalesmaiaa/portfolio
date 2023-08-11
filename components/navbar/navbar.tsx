import React from 'react'
import { useRouter } from 'next/router'

import { Box, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import CodeIcon from '@mui/icons-material/Code'

import styles from './navbar.module.scss'

export const Navbar: React.FC = () => {
  const router = useRouter()
  return (
    <>
      <Box className={styles.navContainer}>
        <IconButton className={styles.navItem} onClick={() => router.push('/')}>
          <CodeIcon fontSize="large" sx={{ color: '#34B3F1' }} />
        </IconButton>
        <Box className={styles.linksArea}>
          <Link href="/contact">
            <a>
              <Typography className={styles.links}>CONTACT ME</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </>
  )
}
