import forms from './forms';

export default () => configContext => ({
    recordTypes: {
        collectionobject: {
            forms: forms(configContext)
        }
    }
});
