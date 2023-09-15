/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react';
import { getConfig } from '@salesforce/pwa-kit-runtime/utils/ssr-config';

// Components
import { configureRoutes } from '@salesforce/retail-react-app/app/utils/routes-utils';

// Create your pages here and add them to the routes array
// Use loadable to split code into smaller js chunks

import CheckoutRoute from './pages/home';

const routes = [
  {
    path: '/checkout',
    component: CheckoutRoute,
    exact: true,
  },
];

export default () => {
  const config = getConfig();
  return configureRoutes(routes, config, {
    ignoredRoutes: ['/callback', '*'],
  });
};
