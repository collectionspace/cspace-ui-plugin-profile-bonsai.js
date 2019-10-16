import { defineMessages } from 'react-intl';

export default {
  exitMethods: {
    values: [
      'courier',
      'garbage',
      'inperson',
      'post',
    ],
    messages: defineMessages({
      garbage: {
        id: 'option.exitMethods.garbage',
        defaultMessage: 'garbage',
      },
    }),
  },
  exitReasons: {
    values: [
      'broken',
      'deaccession',
      'dead',
      'deadandbroken',
      'disposal',
      'fundraiser',
      'missing',
      'other',
      'returnofloan',
    ],
    messages: defineMessages({
      broken: {
        id: 'option.exitReasons.broken',
        defaultMessage: 'broken',
      },
      dead: {
        id: 'option.exitReasons.dead',
        defaultMessage: 'dead',
      },
      deadandbroken: {
        id: 'option.exitReasons.deadandbroken',
        defaultMessage: 'dead and broken',
      },
      fundraiser: {
        id: 'option.exitReasons.fundraiser',
        defaultMessage: 'fundraiser',
      },
      missing: {
        id: 'option.exitReasons.missing',
        defaultMessage: 'missing',
      },
      other: {
        id: 'option.exitReasons.other',
        defaultMessage: 'other',
      },
    }),
  },
};
