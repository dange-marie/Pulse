import nodeCron from "node-cron";

export const registerCron = (command, order) => {
    const cronOrder = order.join(' ')
    console.log(cronOrder, " ", command)
    if (!nodeCron.validate(cronOrder)) {
        console.error(`[❌ Invalid Cron] "${cronOrder}" is not valid.`)
        return
    }
    nodeCron.schedule(cronOrder, () => {
        exec(command, (err, stdout, stderr) => {
            if (err) return console.error(err);
            console.log(stdout);
        })}
    )
}

export const orderToDate = (order) => {
    const detachedOrder = order.split(' ')
    const date = ['*', '*', '*']
    if (detachedOrder.length === 1) {
        switch(detachedOrder[0].toLowerCase()) {
            case 'monday':
                date[2] = "1"
                break;
            case 'tuesday':
                date[2] = "2"
                break;
            case 'wednesday':
                date[2] = "3"
                break;
            case 'thursday':
                date[2] = "4"
                break;
            case 'friday':
                date[2] = "5"
                break;
            case 'saturday':
                date[2] = "6"
                break;
            case 'sunday':
                date[2] = "7"
                break;
            case 'week':
                date[2] = "1"
                break;
            case 'month':
                date[1] = "1"
                break;
        }
        return date
    } else if (detachedOrder.length > 1) {
        date[0] = detachedOrder[0]
        switch(detachedOrder[1].toLowerCase()) {
            case 'january':
                date[1] = "1"
                break;
            case 'february':
                date[1] = "2"
                break;
            case 'march':
                date[1] = "3"
                break;
            case 'april':
                date[1] = "4"
                break;
            case 'may':
                date[1] = "5"
                break;
            case 'june':
                date[1] = "6"
                break;
            case 'july':
                date[1] = "7"
                break;
            case 'august':
                date[1] = "8"
                break;
            case 'september':
                date[1] = "9"
                break;
            case 'october':
                date[1] = "10"
                break;
            case 'november':
                date[1] = "11"
                break;
            case 'december':
                date[1] = "12"
                break;
        }
        return date
    }
    return date
}