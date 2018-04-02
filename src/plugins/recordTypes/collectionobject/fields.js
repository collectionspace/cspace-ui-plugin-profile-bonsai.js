import { defineMessages } from 'react-intl';

export default (configContext) => {
    const {
        AutocompleteInput,
        CompoundInput,
        TextInput,
        DateInput,
        OptionPickerInput,
        StructuredDateInput,
        TermPickerInput,
    } = configContext.inputComponents;

    const {
        configKey: config,
    } = configContext.configHelpers;

    const {
        DATA_TYPE_STRUCTURED_DATE,
    } = configContext.dataTypes;

    const {
        extensions,
    } = configContext.config;

    return {
        document: {
            'ns2:collectionobjects_bonsai': {
                [config]: {
                    service: {
                        ns: 'http://collectionspace.org/services/collectionobject/local/bonsai',
                    },
                },
                commonName: {
                    [config]: {
                        messages: defineMessages({
                            name: {
                                id: 'field.collectionobjects_bonsai.commonName.name',
                                defaultMessage: 'Common Name',
                            },
                        }),
                        view: {
                            type: TextInput,
                        },
                    },
                },
            },
        },
    };
};
