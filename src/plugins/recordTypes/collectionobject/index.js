import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
