import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    exhibition: {
      forms: forms(configContext),
    },
  },
});
