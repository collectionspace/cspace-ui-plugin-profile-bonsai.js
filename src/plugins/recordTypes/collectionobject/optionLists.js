import { defineMessages } from 'react-intl';

export default {
    collections: {
        values: [
            'development',
            'display',
            'library-collection',
            'permanent-collection',
            'study-collection',
            'teaching-collection',
        ],
        messages: defineMessages({
            'development': {
                id: 'option.collections.development',
                defaultMessage: 'development',
            },
            'display': {
                id: 'option.collections.display',
                defaultMessage: 'display',
            },
            'library-collection': {
                id: 'option.collections.library-collection',
                defaultMessage: 'library collection',
            },
            'permanent-collection': {
                id: 'option.collections.permanent-collection',
                defaultMessage: 'permanent collection',
            },
            'study-collection': {
                id: 'option.collections.study-collection',
                defaultMessage: 'study collection',
            },
            'teaching-collection': {
                id: 'option.collections.teaching-collection',
                defaultMessage: 'teaching collection',
            },
        }),
    },
};
