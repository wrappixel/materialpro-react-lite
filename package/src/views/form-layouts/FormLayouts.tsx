import { Grid2 as Grid } from "@mui/material";
import { FbDefaultForm } from "./fb-elements/index";

const FormLayouts = () => {
  return (
    <Grid container spacing={0}>
      <Grid size={{ sm: 12 }}>
        <FbDefaultForm />
      </Grid>
    </Grid>
  );
};

export default FormLayouts;
