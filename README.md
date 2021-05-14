# strapi-provider-upload-telegram

A simplistic telegram upload provider for strapi.

**Path**
```
./config/plugins.js
```

**Usage**
```
module.exports = ({ env }) => ({
  upload: {
    provider: "telegram",
    providerOptions: {
      token: <YOUR TELEGRAM BOT TOKEN>,
      userId: <YOUR TELEGRAM USER ID>,
      disableNotification: boolean
    },
  },
});
```
You can use [@BotFather](https://t.me/BotFather) for generating telegram token and userId by using this [bot](https://t.me/userinfobot).
