import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
    DateInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
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
                source: 'person/local,organization/local,organization/shared',
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
                  source: 'person/person,person/ulan_pa',
                },
              },
            },
          },
        },
      },
    },
  };
};
