import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    conditioncheck: {
      forms: forms(configContext),
    },
  },
});
