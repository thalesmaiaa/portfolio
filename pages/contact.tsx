import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { send } from "@emailjs/browser";
import { EmailField } from "../components/email/email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { styles } from "../styles";

type Data = {
  [key: string]: string;
  name: string;
  email: string;
  text: string;
};

const ContactMe: NextPage = () => {
  const router = useRouter();

  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    text: "",
  });

  const [valid, setIsValid] = useState(true);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send("gmail", "gmail", data, "ozcco-7uFJaYu9Fqa")
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (data.email.length > 0) {
      const valid = isValidEmail(data.email);
      setIsValid(valid);
      return;
    }
    setIsValid(true);
  }, [data.email]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <IconButton onClick={() => router.push("/")}>
        <ArrowBackIcon fontSize="large" sx={{ color: "#fff" }} />
      </IconButton>
      <Container maxWidth="md">
        <Typography variant="h3" sx={styles.contact}>
          CONTACT ME
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ mt: 5 }}>
            <EmailField
              label="Name"
              value={data.name}
              onChange={handleChange}
            />
            <EmailField
              label="Email"
              value={data.email}
              onChange={handleChange}
              error={valid ? false : true}
              helperText={valid ? "" : "Invalid email"}
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
              <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={valid ? false : true}
              >
                SEND EMAIL
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ContactMe;
