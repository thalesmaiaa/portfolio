import React from 'react'

import { Box, Typography } from '@mui/material'
import useWindowSize from '../../hooks/useWindowSize'

import { classes } from '../../utils'

import styles from './introduction.module.scss'

export const Introduction: React.FC = () => {
  const size = useWindowSize()

  const imageWidth = size[0] < 700 ? 128 : 256

  return (
    <>
      <Box className={styles.skillsContainer}>
        <Typography className={styles.name} variant="h2">
          Frontend Developer & Software Developer
        </Typography>
        <Typography className={styles.presentation} variant="h3">
          {
            ' I can build beautifully simple things and write clean, elegant and efficient code'
          }
        </Typography>
        <Box className={styles.imagesArea}>
          <div className={styles.images}>
            <img
              src={`https://cdn-icons-png.flaticon.com/${imageWidth}/2920/2920244.png`}
              className={classes(styles.image, styles.webImage)}
              alt=""
            />
            <img
              src={`https://cdn-icons-png.flaticon.com/${
                imageWidth * 2
              }/6062/6062646.png`}
              className={classes(styles.image, styles.laptopImage)}
              alt=""
            />

            <img
              src={`https://cdn-icons-png.flaticon.com/${imageWidth}/644/644667.png`}
              className={classes(styles.image, styles.codeImage)}
              alt=""
            />
          </div>
        </Box>
      </Box>
    </>
  )
}
