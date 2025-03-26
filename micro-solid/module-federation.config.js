import packageJSON from "./package.json";

function remoteConfig(name, url) {
  return {
    type: "module",
    name,
    entry: url,
    entryGlobalName: "remote",
    shareScope: "default",
  };
}

export default {
  filename: "remoteEntry.js",
  name: "SolidModFed",
  exposes: {
    "./UserList": "./src/users/userLauncher.tsx",
    "./userStore": "./src/users/UserStore.ts",
  },
  remotes: {},
  shared: {
    "solid-js": {
      singleton: true,
      requiredVersion: packageJSON.dependencies["solid-js"],
    },
  },
};
