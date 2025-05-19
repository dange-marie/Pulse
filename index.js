#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from 'yargs/helpers'
import { orderToDate, registerCron } from "./src/pulse.js";

yargs(hideBin(process.argv))
    .command(
        'add <task>',
        'Add a schedule task',
        yargs => yargs.positional(
            'task',
            {
                description: 'The script you want to execute',
                type: 'string'
            }
        ),
        (argv) => {
            const at = argv.at ? argv.at.split(':').slice(0, 2).reverse() : ['*', '*']
            var date = []
            if (argv.every) {
                date = orderToDate(argv.every)
            } else if (argv.date) {
                date = orderToDate(argv.date)
            }
            registerCron(argv.task, at.concat(date))
        }
    )
    .option(
        'every',
        {
            alias: 'e',
            type: 'string',
            description: "the frequency at which your command will run"
        }
    )
    .option(
        'at',
        {
            alias: 'a',
            type: 'string',
            description: "the hour of the execution"
        }
    )
    .option(
        'date',
        {
            alias: 'd',
            type: 'string',
            description: "the date of the execution"
        }
    )
    .demandCommand(1)
    .parse()
