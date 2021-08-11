const franc = require("./node_modules/franc");

const langs = require("./node_modules/langs")

const input = process.argv[2];
const code = franc(input);

if(code === 'und') {
    console.log("Sorry Could not figure that out! please try later");
} else {

const language = langs.where("3", code)

console.log(language.name);
}