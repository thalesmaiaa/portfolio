import React, { CSSProperties } from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";

import styles from "./email.module.scss";

type Props = {
  label: string;
  value: string;
  onChange: any;
  xs?: number;
  error?: any;
  helperText?: any;
  multiline?: boolean;
  rows?: number;
  style?: CSSProperties;
  gridStyle?: CSSProperties;
};

type TitleProps = {
  label: string;
};

type ButtonProps = {
  label: string;
  valid: boolean;
};

export const EmailField: React.FC<Props> = ({
  label,
  value,
  onChange,
  xs = 5,
  multiline = false,
  rows = 1,
  error = false,
  style,
  gridStyle,
  helperText = "",
}: Props) => {
  return (
    <Grid item xs={xs} sx={gridStyle}>
      <TextField
        name={label?.toLowerCase()}
        label={label}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        error={error}
        helperText={helperText}
        fullWidth
        InputProps={{ className: styles.contactInputsBackground }}
        InputLabelProps={{ className: styles.contactInputsColor }}
        sx={style}
      />
    </Grid>
  );
};

export const PageTitle: React.FC<TitleProps> = ({ label }) => {
  return (
    <Typography variant="h3" className={styles.pageTitle}>
      {label}
    </Typography>
  );
};

export const SubmitButton: React.FC<ButtonProps> = ({ valid, label }) => {
  return (
    <Button
      variant="contained"
      size="large"
      type="submit"
      disabled={valid ? false : true}
      className={styles.submitButton}
    >
      {label}
    </Button>
  );
};
