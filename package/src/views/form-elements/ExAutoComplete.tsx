import { Grid2 as Grid, Box } from "@mui/material";
import { ComboBoxAutocomplete } from "../../components/forms/AutoComplete/ComboBoxAutocomplete";
import { MultipleValuesAutocomplete } from "../../components/forms/AutoComplete/MultipleValuesAutocomplete";
import { CheckboxesAutocomplete } from "../../components/forms/AutoComplete/CheckboxesAutocomplete";
import { SizesAutocomplete } from "../../components/forms/AutoComplete/SizesAutocomplete";

const ExAutoComplete = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={3}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <ComboBoxAutocomplete />
        </Grid>

        {/* ------------------------- row 5 ------------------------- */}
        <Grid
          size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <MultipleValuesAutocomplete />
        </Grid>

        {/* ------------------------- row 6 ------------------------- */}
        <Grid
          size={{ xs: 12, lg: 4, sm: 6 }}

          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <CheckboxesAutocomplete />
        </Grid>
        {/* ------------------------- row 7 ------------------------- */}
        <Grid
          size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <SizesAutocomplete />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExAutoComplete;
