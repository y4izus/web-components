/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { TemplateResult } from 'lit';

import { mediumIcon } from '../icons/medium.js';
import { slackIcon } from '../icons/slack.js';
import { twitterIcon } from '../icons/twitter.js';
import { youtubeIcon } from '../icons/youtube.js';

// TODO: Define how to pass Segment data to the consumer.
interface SegmentData {
  cta: string;
  location: string;
}

export interface DropdownNavItem {
  label: string;
  subItems: NavLink[];
}

interface HomeLink {
  url: string;
  segment: SegmentData;
}

export interface NavLink {
  label: string;
  url: string;
  segment: SegmentData;
}

interface SocialMediaLink {
  icon: TemplateResult;
  label: string;
  url: string;
}

/**
 * Link to the home page.
 */
export const homeLink: HomeLink = {
  url: '/',
  segment: {
    cta: 'home',
    location: 'menu',
  },
};

/**
 * Link to the user account page.
 */
export const userLink: HomeLink = {
  url: '/account',
  segment: {
    cta: 'account',
    location: 'menu',
  },
};

/**
 * Main navigation links.
 */
export const navItems: Array<NavLink | DropdownNavItem> = [
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

/**
 * Social media links.
 */
export const socialMediaLinks: SocialMediaLink[] = [
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
