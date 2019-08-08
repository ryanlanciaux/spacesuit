module.exports = {
  modulePath: "packages",
  namespace: "@spacesuit",
  getStoryPath: ({path, name, extension, parameters}) => {
		return `packages/stories/stories/${name}/${name}.stories.${extension}`;
	}
};
