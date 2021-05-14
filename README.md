# strapi-provider-upload-telegram

A simplistic telegram upload provider for strapi.

**Usage**

```
./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    provider: "telegram",
    providerOptions: {
      token: <YOUR TELEGRAM BOT TOKEN>,
      userId: <YOUR USER ID>,
    },
  },
});
```
You can use [@BotFather](https://t.me/BotFather) for generating telegram token and user id by using this [bot](https://t.me/userinfobot).
