

import express from 'express';
import chalk from 'chalk';

const server = express();

const TODOS=[]























const PORT = 3000;
server.listen(PORT,()=>{
    console.log(chalk.bgBlue(`Server running at ${PORT}`));
})