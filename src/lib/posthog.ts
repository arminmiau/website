import posthog from 'posthog-js';

export const initPosthog = () =>
  posthog.init('phc_eyCumDdoLZdouD2tZXcWddqnjYSiov2gFCP5pWVRix2', {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
  });
