import { defineManifest } from 'wxt'

export default defineManifest({
  name: 'LinkedIn AI Reply',
  description: 'AI-powered reply generator for LinkedIn messages',
  version: '0.1.0',
  manifest_version: 3,
  permissions: ['activeTab'],
  content_scripts: [
    {
      matches: ['https://www.linkedin.com/*'],
      js: ['./entrypoints/content/index.ts'],
    },
  ],
})