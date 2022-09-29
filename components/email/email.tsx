import { Grid, TextField } from "@mui/material";
import React from "react";
import styles from "./email.module.scss";

interface Props {
  label: string;
  value: string;
  onChange: any;
  xs?: number;
  error?: any;
  helperText?: any;
  multiline?: boolean;
  rows?: number;
}

export const EmailField: React.FC<Props> = ({
  label,
  value,
  onChange,
  xs = 5,
  multiline = false,
  rows = 1,
  error = false,
  helperText = "",
}: Props) => {
  return (
    <Grid item xs={xs}>
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
      />
    </Grid>
  );
};
