const semanticRelease = require('semantic-release');

module.exports = async () => {
  try {
    const result = await semanticRelease(
      {
        branch: 'next',

        // repositoryUrl:
        //   `https://oauth:${process.env.SYSTEM_ACCESSTOKEN}@10.0.3.4:22/DefaultCollection/%D0%90%D1%81%D1%82%D1%80%D0%B0%D0%BB%20Front-end/_git/ui-kit`,

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
      const {
        lastRelease, commits, nextRelease, releases,
      } = result;

      console.log(
        `Published ${nextRelease.type} release version ${nextRelease.version} containing ${
          commits.length
        } commits.`,
      );

      if (lastRelease.version) {
        console.log(`The last release was "${lastRelease.version}".`);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const release of releases) {
        console.log(`The release was published with plugin "${release.pluginName}".`);
      }
    } else {
      console.log('No release published.');
    }
  } catch (error) {
    console.error('The automated release failed with %O', error);
  }
};
