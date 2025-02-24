// import { Bot } from 'grammy';
// import dotenv from 'dotenv';
// import redis from './redis';
//
// dotenv.config();
//
// const bot = new Bot(process.env.BOT_TOKEN || '');
//
// bot.command('start', async (ctx) => {
//     await redis.incr('user_count');
//     ctx.reply('Привет! Добро пожаловать в Telegram Rating App!');
// });
//
// bot.on('message', (ctx) => {
//     ctx.reply(`Ты написал: ${ctx.message.text}`);
// });
//
// bot.start().then(() => {
//     console.log('🤖 Бот запущен!');
// });
//
// // Обработка SIGINT для graceful shutdown
// process.on('SIGINT', async () => {
//     console.log('⏹️ Остановка бота...');
//     await redis.quit();
//     process.exit(0);
// });
