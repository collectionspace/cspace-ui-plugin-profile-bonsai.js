/* global cspaceUIPluginProfileBonsai */
/* The cspaceUIPluginProfileBonsai global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/bonsai.css';

module.exports = () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '3000',
  pluginInfo: {
    cspaceUIPluginProfileBonsai: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileBonsai.name',
          defaultMessage: 'Bonsai profile',
        },
      }),
      version: cspaceUIPluginProfileBonsai.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});
