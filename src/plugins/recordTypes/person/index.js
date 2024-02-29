import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    person: {
      forms: forms(configContext),
    },
  },
});
