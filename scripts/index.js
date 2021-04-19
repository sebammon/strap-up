#!/usr/bin/node
const inquirer = require("inquirer");
const path = require('path');
const {copyFile, readdir, readFile} = require("fs").promises;


const configDir = path.join(__dirname, '../configs');

(async function () {
    const configs = await readdir(configDir)

    const {template} = await inquirer.prompt([
        {
            type: "list",
            message: "Choose a config template:",
            name: "template",
            choices: configs,
        }
    ]);

    const templateDir = path.join(configDir, template);
    const templateFiles = await readdir(templateDir)

    for (let i = 0; i < templateFiles.length; i++) {
        try {
            let file = templateFiles[i];
            await copyFile(path.join(templateDir, file), path.join(process.cwd(), file));
        } catch (e) {
            console.error('Copy failed with error', e)
        }
    }
    console.log('Config files have been copied!')
})()