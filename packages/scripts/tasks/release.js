const semanticRelease = require('semantic-release');

module.exports = async () => {
  try {
    const result = await semanticRelease(
      {
        branch: 'next',

        plugins: [
          '@semantic-release/commit-analyzer',
          '@semantic-release/release-notes-generator',
          [
            '@semantic-release/npm',
            {
              pkgRoot: 'lib',
            },
          ],
        ],
      },
      {
        cwd: process.cwd(),
      },
    );

    if (result) {
      const { lastRelease, commits, nextRelease, releases } = result;

      // eslint-disable-next-line no-console
      console.log(
        `Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`,
      );

      if (lastRelease.version) {
        // eslint-disable-next-line no-console
        console.log(`The last release was "${lastRelease.version}".`);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const release of releases) {
        // eslint-disable-next-line no-console
        console.log(
          `The release was published with plugin "${release.pluginName}".`,
        );
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('No release published.');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('The automated release failed with %O', error);
  }
};
