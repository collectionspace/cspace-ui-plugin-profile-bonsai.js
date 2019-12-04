import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:conservation_common': {
        conservators: {
          conservator: {
            [config]: {
              // Add a fullName message to disambiguate treatment "performed by" from repotting
              // "performed by"
              messages: defineMessages({
                fullName: {
                  id: 'field.conservation_common.conservator.fullName',
                  defaultMessage: 'Treatment performed by',
                },
              }),
            },
          },
        },
      },
      'ns2:conservation_bonsai': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conservation/local/bonsai',
          },
        },
        treatmentsPerformed: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          treatmentPerformed: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_bonsai.treatmentPerformed.name',
                  defaultMessage: 'Treatment performed',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'treatmentperformed',
                },
              },
            },
          },
        },
        futureTreatmentGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          futureTreatmentGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_bonsai.futureTreatmentGroup.name',
                  defaultMessage: 'Future treatment',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            futureTreatment: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.conservation_bonsai.futureTreatment.fullName',
                    defaultMessage: 'Future treatment',
                  },
                  name: {
                    id: 'field.conservation_bonsai.futureTreatment.name',
                    defaultMessage: 'Treatment',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'futuretreatment',
                  },
                },
              },
            },
            futureTreatmentDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.conservation_bonsai.futureTreatmentDate.fullName',
                    defaultMessage: 'Future treatment date',
                  },
                  name: {
                    id: 'field.conservation_bonsai.futureTreatmentDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            futureTreatmentNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.conservation_bonsai.futureTreatmentNote.fullName',
                    defaultMessage: 'Future treatment note',
                  },
                  name: {
                    id: 'field.conservation_bonsai.futureTreatmentNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
      ...extensions.livingplant.conservation.fields,
    },
  };
};
