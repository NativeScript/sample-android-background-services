const nsAppium = require("nativescript-dev-appium");

before("start server", async () => {
    await nsAppium.startServer();
});

after("stop server", async () => {
    await nsAppium.stopServer();
});
