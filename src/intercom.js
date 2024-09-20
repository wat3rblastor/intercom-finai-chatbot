import React from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function Component() {
  Intercom({
    app_id: 'zeoovopy',
  });

  return <div>Ignore this. Click on the app on the bottom right.</div>;
}