const fs = require("fs-extra");
const { resolve } = require("path");

const bulmaPath = resolve("./node_modules/bulma/sass");
const bulmaEntryFile = resolve("./node_modules/bulma/bulma.sass");

fs.mkdirpSync("./assets/sass/_libs/bulma/sass");

fs.copy(bulmaPath, "./assets/sass/_libs/bulma/sass", (err) => {
    if (err) {
        console.error(err);
    }
});

fs.copyFile(bulmaEntryFile, "./assets/sass/_libs/bulma/bulma.sass", (err) => {
    if (err) {
        console.error(err);
    }
});
