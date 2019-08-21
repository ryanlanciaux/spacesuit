const editJsonFile = require("edit-json-file");
const shell = require("shelljs");

module.exports = {
  modulePath: "packages",
  namespace: "@spacesuit",
  getStoryPath: ({ path, name, extension, parameters }) => {
    return `packages/stories/stories/${name}/${name}.stories.${extension}`;
  },
  afterModule: props => {
    const file = editJsonFile(`${__dirname}/packages/spacesuit/package.json`, {
      autosave: true
    });

    // add rebass
    const modulePackage = editJsonFile(
      `${__dirname}/packages/${props.name.toLowerCase()}/package.json`,
      {
        autosave: true
      }
    );

    modulePackage.set(`peerDependencies.rebass`, "^4.0.2");

    const packageName = `${props.config.namespace}/${props.name.toLowerCase()}`;

    file.set(`dependencies.${packageName}`, "^0.0.1");

    shell.exec("yarn lerna bootstrap");
    shell.exec(`blastoff g story ${props.name}`);
  }
};
