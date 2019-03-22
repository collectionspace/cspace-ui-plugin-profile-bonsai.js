import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions.accessionattributes.collectionobject.messages.inputTable,
    panel: defineMessages({
      accessionattributes: {
        id: 'panel.collectionobject.accessionattributes',
        defaultMessage: 'Accession Attributes',
      },
    }),
  };
};
