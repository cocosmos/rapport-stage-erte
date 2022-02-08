import { Grid } from "@mui/material";

const Erte = () => {
  return (
    <Grid container height={"100%"}>
      <Grid item xs={12} key="erte">
        <iframe
          title="erte"
          src="https://www.erte.ch/"
          frameBorder="0"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Erte;
