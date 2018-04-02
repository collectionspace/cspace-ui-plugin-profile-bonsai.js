import forms from './forms';
import fields from './fields';

export default () => configContext => ({
    recordTypes: {
        collectionobject: {
            fields: fields(configContext),
            forms: forms(configContext),
        }
    }
});
