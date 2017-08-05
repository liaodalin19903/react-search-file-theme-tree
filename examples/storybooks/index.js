/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import BarebonesExample from './barebones';
import AddRemoveExample from './add-remove';
import ModifyNodesExample from './modify-nodes';
import ExternalNodeExample from './external-node';
import TouchSupportExample from './touch-support';
import TreeToTreeExample from './tree-to-tree';
import styles from './generic.scss';

const wrapWithSource = (node, src) =>
  <div>
    {node}

    <br />
    <a
      href={`https://github.com/fritz-c/react-sortable-tree/blob/master/examples/storybooks/${src}`}
      target="_top"
      rel="noopener noreferrer"
      className={styles.sourceLink}
    >
      VIEW SOURCE →
    </a>
  </div>;

storiesOf('Basics', module)
  .add('Minimal implementation', () =>
    wrapWithSource(<BarebonesExample />, 'barebones.js')
  )
  .add('Add and remove nodes programmatically', () =>
    wrapWithSource(<AddRemoveExample />, 'add-remove.js')
  )
  .add('Modify nodes', () =>
    wrapWithSource(<ModifyNodesExample />, 'modify-nodes.js')
  );

storiesOf('Advanced', module)
  .add('Drag from external source', () =>
    wrapWithSource(<ExternalNodeExample />, 'external-node.js')
  )
  .add('Touch support (Experimental)', () =>
    wrapWithSource(<TouchSupportExample />, 'touch-support.js')
  )
  .add('Tree-to-tree dragging', () =>
    wrapWithSource(<TreeToTreeExample />, 'tree-to-tree.js')
  );