process.env.NTBA_FIX_319 = 1;

const TelegramBot = require("node-telegram-bot-api");
// const TinyURL = require("node-url-shortener");

module.exports = {
  init(providerOptions) {
    const { userId, token, disableNotification } = providerOptions;
    const bot = new TelegramBot(token, { polling: true });
    return {
      async upload(file) {
        const result = await bot.sendDocument(userId, file.buffer, {
          caption: file.name,
          disable_notification: disableNotification,
        });
        const fileUrl = await bot.getFileLink(result.document.file_id);
        // const shortenUrl = await TinyURL.short(fileUrl);
        file.url = fileUrl;
        file.previewUrl = fileUrl;
        file.alternativeText = result.message_id.toString();
        return file;
      },
      async delete(file) {
        try {
          await bot.deleteMessage(userId, file.alternativeText.toString());
        } catch (e) {
          console.log(e);
        }
      },
    };
  },
};
