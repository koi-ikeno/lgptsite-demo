import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://koi-ikeno.github.io',
  base: '/lgptsite-demo',
  integrations: [starlight({
    title: 'LittleGPTracker-feature improvemnt',
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
    ],
    social: {
      github: 'https://github.com/djdiskmachine/LittleGPTracker'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu. path in lowercase letter
      {
        label: 'What is LittleGPTracker?',
        link: '/guides/wiki/what-is-littlegptracker'
      }, {
        label: 'Ubuntu Install',
        link: '/guides/wiki/ubuntu_install'
      }, {
        label: 'LGPTConfiguration',
        link: '/guides/lgptconfiguration'
      }, {
        label: 'mapping.xml',
        link: '/guides/wiki/mapping_xml'
      }, {
        label: 'config.xml',
        link: '/guides/wiki/config_xml'
      }, {
        label: 'tips and tricks',
        link: '/guides/wiki/tips_and_tricks'
      }, {
        label: 'MIDI',
        link: '/guides/wiki/lgpt_midi'
      }]
    }, {
      label: 'Downloads',
      items: [{
        label: 'Releases (github)',
        link: 'https://github.com/djdiskmachine/LittleGPTracker/releases'
      }]
    }, {
      label: 'Link',
      link: '/guides/link'
    }]
  }), 
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),
  ]
});