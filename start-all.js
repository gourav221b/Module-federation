import { spawn } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const runCommand = (command, cwd) => {
    const [cmd, ...args] = command.split(' ');
    return spawn(cmd, args, {
        stdio: 'inherit',
        shell: true,
        cwd: resolve(__dirname, cwd)
    });
};

// Start both applications
const reactApp = runCommand('npm start', './host-react');
const solidApp = runCommand('npm start', './micro-solid');

// Handle process termination
const cleanup = () => {
    reactApp.kill();
    solidApp.kill();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup); 