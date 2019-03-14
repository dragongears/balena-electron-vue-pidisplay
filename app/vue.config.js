module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Balena Electron Vue PiDisplay",
        appId: "com.dragongears.balena-electron-vue-pidisplay",
        appImage: {
          "systemIntegration": "doNotAsk"
        },
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: "link",
              path: "/Applications"
            },
            {
              x: 130,
              y: 150,
              type: "file"
            }
          ]
        },
        mac: {
          icon: "dist_electron/icons/icon.icns"
        },
        win: {
          icon: "dist_electron/icons/icon.ico"
        },
        linux: {
          icon: "dist_electron/icons",
          category: "Utility"
        }
      }
    }
  }
}
