process.env.NTBA_FIX_319 = 1;
const TelegramBot = require("node-telegram-bot-api");
const TinyURL = require("tinyurl");
module.exports = {
  init(providerOptions) {
    const { chatId, token } = providerOptions;
    const bot = new TelegramBot(token, { polling: true });
    return {
      async upload(file) {
        const result = await bot.sendDocument(
          chatId,
          file.buffer, {
            caption: file.name,
            disable_notification: true
          }
        );
        const fileUrl = await bot.getFileLink(result.document.file_id);
        const shortenUrl = await TinyURL.shorten(fileUrl);
        file.url = shortenUrl;
        file.previewUrl = shortenUrl;
        file.alternativeText = result.message_id.toString();
        return file;
      },
      async delete(file) {
        try {
          await bot.deleteMessage(chatId, file.alternativeText.toString());
        } catch (e) {
          console.log(e);
        }
      },
    };
  },
};
