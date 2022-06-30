/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { TemplateResult } from 'lit';

import { mediumIcon } from '../icons/medium.js';
import { qiskitLogoIcon } from '../icons/qiskit-logo.js';
import { slackIcon } from '../icons/slack.js';
import { twitterIcon } from '../icons/twitter.js';
import { userIcon } from '../icons/user.js';
import { youtubeIcon } from '../icons/youtube.js';

// TODO: Define how to pass Segment data to the consumer.
type SegmentData = {
  cta: string;
  location: string;
};

export type NavLink = {
  icon?: TemplateResult;
  label: string;
  url: string;
  segment?: SegmentData;
};

export type DropdownNavItem = {
  label: string;
  subItems: NavLink[];
};

export const homeLink: NavLink = {
  icon: qiskitLogoIcon,
  label: 'Home',
  url: '/',
  segment: {
    cta: 'home',
    location: 'menu',
  },
};

export const userAccountLink: NavLink = {
  icon: userIcon,
  label: 'User account',
  url: '/account',
  segment: {
    cta: 'account',
    location: 'menu',
  },
};

export const mainNavLinks: Array<NavLink | DropdownNavItem> = [
  {
    label: 'Overview',
    url: '/overview',
    segment: {
      cta: 'overview',
      location: 'menu',
    },
  },
  {
    label: 'Learn',
    url: '/learn',
    segment: {
      cta: 'learn',
      location: 'menu',
    },
  },
  {
    label: 'Community',
    subItems: [
      {
        label: 'Events',
        url: '/events',
        segment: {
          cta: 'events',
          location: 'menu',
        },
      },
      {
        label: 'Advocates',
        url: '/advocates',
        segment: {
          cta: 'advocates',
          location: 'menu',
        },
      },
      {
        label: 'Ecosystem',
        url: '/ecosystem',
        segment: {
          cta: 'ecosystem',
          location: 'menu',
        },
      },
    ],
  },
  {
    label: 'Documentation',
    url: '/documentation',
    segment: {
      cta: 'documentation',
      location: 'menu',
    },
  },
];

export const socialMediaLinks: NavLink[] = [
  {
    icon: twitterIcon,
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit',
  },
  {
    icon: slackIcon,
    label: 'Slack',
    url: 'https://ibm.co/joinqiskitslack',
  },
  {
    icon: youtubeIcon,
    label: 'YouTube',
    url: 'https://youtube.com/Qiskit',
  },
  {
    icon: mediumIcon,
    label: 'Medium',
    url: 'https://medium.com/Qiskit',
  },
];
