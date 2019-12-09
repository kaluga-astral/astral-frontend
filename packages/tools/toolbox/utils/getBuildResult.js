const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

module.exports = (err, stats) =>
  new Promise((resolve, reject) => {
    let messages;
    if (err) {
      if (!err.message) {
        return reject(err);
      }
      messages = formatWebpackMessages({
        errors: [err.message],
        warnings: [],
      });
    } else {
      messages = formatWebpackMessages(
        stats.toJson({ all: false, warnings: true, errors: true }),
      );
    }
    if (messages.errors.length) {
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }
      return reject(new Error(messages.errors.join('\n\n')));
    }
    return resolve(
      stats.toString({
        colors: true,
        modules: true,
        maxModules: 0,
      }),
    );
  });
