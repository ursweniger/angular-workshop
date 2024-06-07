const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);
const directories = ['Aufgabe1', 'Aufgabe2', 'Aufgabe3'];
const appName = "hdm-events-app";

async function installModules(dir) {
    try {
        const { stdout, stderr } = await execPromise('npm install', { cwd: dir });
        if (stderr) {
            console.error(`Error in ${dir}: ${stderr}`);
            console.log(`npm install completed in ${dir}`);
            console.log(stdout);
        } else {
            console.log(`npm install completed in ${dir}`);
            console.log(stdout);
        }
    } catch (error) {
        console.error(`Error in ${dir}: ${error.message}`);
    }
}

async function initialize(baseDir) {
    for (const subDir of directories) {
        const fullDir = path.join(baseDir, subDir, appName);
        const packageJsonPath = path.join(fullDir, 'package.json');
        try {
            await fs.access(packageJsonPath);
            await installModules(fullDir);
        } catch {
            console.log(`No package.json found in ${fullDir}, skipping npm install`);
        }
    }
}

(async () => {
    const rootDir = path.resolve(__dirname);
    await initialize(rootDir);
})();
