import chalk from 'chalk';

export class Logger {
    static success(message) {
        console.log(chalk.green(`✅ ${message}`));
    }

    static error(message) {
        console.log(chalk.red(`❌ ${message}`));
    }

    static info(message) {
        console.log(chalk.blue(`ℹ️ ${message}`));
    }

    static warning(message) {
        console.log(chalk.yellow(`⚠️ ${message}`));
    }

    static process(message) {
        console.log(chalk.cyan(`🔄 ${message}`));
    }

    static highlight(message) {
        console.log(chalk.magenta(`💡 ${message}`));
    }

    // 用于打印普通文本
    static log(message) {
        console.log(chalk.white(message));
    }

    // 用于打印分隔线
    static divider() {
        console.log(chalk.gray('----------------------------------------'));
    }

    // 用于打印JSON数据
    static json(data) {
        console.log(chalk.cyan(JSON.stringify(data, null, 2)));
    }
} 