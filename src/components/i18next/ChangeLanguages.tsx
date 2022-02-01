import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  Box,
  FormControl,
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
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18next.language}
        onChange={handleOnChange}
        label={t("language")}
        sx={{
          fontSize: "20px",
          fontWeiht: "700",
        }}
      >
        {languages.map(({ code, name, country_code }) => (
          <MenuItem
            key={code}
            sx={{ fontSize: "20px", fontWeight: "700" }}
            value={code}
          >
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
