import { defineMessages } from 'react-intl';

export default {
  exitReasons: {
    values: [
      'deaccession',
      'dead',
      'disposal',
      'fundraiser',
      'missing',
      'other',
      'returnofloan',
    ],
    messages: defineMessages({
      dead: {
        id: 'option.exitReasons.dead',
        defaultMessage: 'dead',
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
