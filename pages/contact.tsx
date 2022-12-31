import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Container, Grid, IconButton } from '@mui/material'
import { send } from '@emailjs/browser'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { EmailField, PageTitle, SubmitButton } from '../components/email/email'

type Data = {
  [key: string]: string
  name: string
  email: string
  text: string
}

const ContactMe: NextPage = () => {
  const router = useRouter()

  const [data, setData] = useState<Data>({
    name: '',
    email: '',
    text: '',
  })

  const [valid, setIsValid] = useState(true)

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    send('gmail', 'gmail', data, 'ozcco-7uFJaYu9Fqa').then((response) => {})
  }

  useEffect(() => {
    if (data.email.length > 0) {
      const valid = isValidEmail(data.email)
      setIsValid(valid)
      return
    }
    setIsValid(true)
  }, [data.email])

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }

  return (
    <>
      <IconButton onClick={() => router.push('/')}>
        <ArrowBackIcon fontSize="large" sx={{ color: '#fff' }} />
      </IconButton>
      <Container maxWidth="md">
        {/* <Typography variant="h3">CONTACT ME</Typography> */}
        <PageTitle label="CONTACT ME" />
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ mt: 5 }}>
            <EmailField
              label="Name"
              value={data.name}
              onChange={handleChange}
              style={{ margin: '0 100px 10px 0' }}
              gridStyle={{ marginRight: '150px' }}
            />
            <EmailField
              label="Email"
              value={data.email}
              onChange={handleChange}
              error={!valid}
              helperText={valid ? '' : 'Invalid email'}
            />
            <EmailField
              label="Text"
              value={data.text}
              onChange={handleChange}
              rows={5}
              multiline={true}
              xs={12}
            />

            <Grid item xs={12}>
              <SubmitButton label="SEND" valid={valid} />
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  )
}

export default ContactMe
