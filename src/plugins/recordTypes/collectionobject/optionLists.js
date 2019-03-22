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
      development: {
        id: 'option.collections.development',
        defaultMessage: 'development',
      },
      display: {
        id: 'option.collections.display',
        defaultMessage: 'display',
      },
    }),
  },
};
