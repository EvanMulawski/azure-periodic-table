export const siteConfig = {
  title: 'Onward Platforms',
  url: 'https://azure-periodic-table.onwardplatforms.com/',
  github: 'https://github.com/onwardplatforms/azure-periodic-table',
  twitter: 'https://twitter.com/reillyjodonnell',
  linkedin: 'https://www.linkedin.com/in/justin-o-connor-67376483/',
};

const twitterUsername = "Justin O'Connor";
const encodedWebsite = encodeURIComponent(siteConfig.url);
const encodedUsername = encodeURIComponent(twitterUsername);
const hashtag = '%23AzurePeriodicTable';

export const socialConfig = {
  twitterUsername: 'reillyjodonnell',
  linkedinUsername: 'justin-o-connor-67376483',
  tweet: `Check%20out%20the%20Azure%20Resource%20Naming%20Convention%20Periodic%20Table!%20Created%20by%20${encodedUsername}%0A${encodedWebsite}%0A${hashtag}`,
  twitter: 'https://twitter.com/intent/tweet?text=',
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${siteConfig.url}`,
};

export const colorConfig = {
  gray: 'bg-gray-600',
  red: 'bg-red-500',
  orange: 'bg-orange-600',
  yellow: 'bg-yellow-600',
  lime: 'bg-lime-600',
  green: 'bg-green-600',
  cyan: 'bg-cyan-600',
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
  fuchsia: 'bg-fuchsia-600',
  pink: 'bg-pink-600',
  rose: 'bg-rose-600',
};
