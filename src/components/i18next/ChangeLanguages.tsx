import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

//I18next Languages
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function ChangeLanguage() {
  const { t } = useTranslation();

  const handleOnChange = (event: SelectChangeEvent) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="language-select-label" color="primary">
        {t("language")}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18next.language}
        onChange={handleOnChange}
        color="primary"
        label={t("language")}
      >
        {languages.map(({ code, name, country_code }) => (
          <MenuItem key={code} color="primary" value={code}>
            <Box
              className={`flag-icon flag-icon-${country_code} mx-2`}
              mr={1}
              component="span"
            />

            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ChangeLanguage;
