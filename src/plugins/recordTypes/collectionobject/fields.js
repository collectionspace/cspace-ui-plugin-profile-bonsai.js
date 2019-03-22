import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local,place/tgn',
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/tgn',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_bonsai': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/bonsai',
          },
        },
        taxon: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.taxon.name',
                defaultMessage: 'Scientific name',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local,taxon/common',
              },
            },
          },
        },
        commonName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.commonName.name',
                defaultMessage: 'Common name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        japaneseName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.japaneseName.name',
                defaultMessage: 'Japanese name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        nativeSpecies: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.nativeSpecies.name',
                defaultMessage: 'Native species?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        sponsor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.sponsor.name',
                defaultMessage: 'Sponsor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sponsorStartDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.sponsorStartDate.name',
                defaultMessage: 'Sponsor start date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        sponsorEndDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.sponsorEndDate.name',
                defaultMessage: 'Sponsor end date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        assignedVolunteers: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          assignedVolunteer: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bonsai.assignedVolunteer.name',
                  defaultMessage: 'Assigned volunteer',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/ulan',
                },
              },
            },
          },
        },
        potStyle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.potStyle.name',
                defaultMessage: 'Pot style',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'potstyle',
              },
            },
          },
        },
        treeType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bonsai.treeType.name',
                defaultMessage: 'Tree type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'treetype',
              },
            },
          },
        },
      },
      ...extensions.accessionattributes.collectionobject.fields,
    },
  };
};
