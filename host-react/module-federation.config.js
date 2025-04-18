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
  name: "react-mod-fed",
  exposes: {},
  remotes: {
    SolidModFed: remoteConfig(
      "SolidModFed",
      "https://solid-js.netlify.app/remoteEntry.js"
    ),
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: packageJSON.dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: packageJSON.dependencies["react-dom"],
    },
  },
};
