/* global cspaceUIPluginProfileBonsai */
/* The cspaceUIPluginProfileBonsai global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import accessionAttributesExtensionPlugin from 'cspace-ui-plugin-ext-accessionattributes';
import livingPlantExtensionPlugin from 'cspace-ui-plugin-ext-livingplant';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/bonsai.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '3000',
  // normally this is done in each recordType config but with so many it's a little cleaner here
  recordTypes: {
    consultation: {
      disabled: true,
    },
    dutyofcare: {
      disabled: true,
    },
    nagprainventory: {
      disabled: true,
    },
    repatriationrequest: {
      disabled: true,
    },
    summarydocumentation: {
      disabled: true,
    },
    heldintrust: {
      disabled: true,
    },
    restrictedmedia: {
      disabled: true,
    },
  },
  pluginInfo: {
    cspaceUIPluginProfileBonsai: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileBonsai.name',
          defaultMessage: 'Bonsai profile',
        },
      }),
      packageName: cspaceUIPluginProfileBonsai.packageName,
      packageVersion: cspaceUIPluginProfileBonsai.packageVersion,
      buildNum: cspaceUIPluginProfileBonsai.buildNum,
      repositoryUrl: cspaceUIPluginProfileBonsai.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileBonsai.packageVersion,
    },
  },
  plugins: [
    accessionAttributesExtensionPlugin(),
    livingPlantExtensionPlugin(),
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
