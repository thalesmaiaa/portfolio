import { Container, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styles } from "../styles";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <IconButton onClick={() => router.push("/")}>
        <ArrowBackIcon fontSize="large" sx={{ color: "#fff" }} />
      </IconButton>
      <Container maxWidth="md">
        <Typography variant="h3" sx={styles.contact}>
          PAGE NOT FOUND
        </Typography>
      </Container>
    </>
  );
};

export default NotFound;
