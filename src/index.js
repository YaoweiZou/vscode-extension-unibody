import fs from 'node:fs/promises';
import getTheme from "./theme";

const unibodyDarkTheme = getTheme({
    theme: "dark",
    name: "Unibody Dark"
});

const unibodyLightTheme = getTheme({
    theme: "light",
    name: "Unibody Light"
});

fs.mkdir("./themes", {recursive: true})
    .then(() =>
        Promise.all([
            fs.writeFile("./themes/unibody-dark.json", JSON.stringify(unibodyDarkTheme, null, 2)),
            fs.writeFile("./themes/unibody-light.json", JSON.stringify(unibodyLightTheme, null, 2))
        ])
    )
    .catch(() => process.exit(1));