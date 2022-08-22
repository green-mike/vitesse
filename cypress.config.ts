import { defineConfig } from 'cypress';
// @ts-expect-error: library don't have definition
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
// import cypressCucumberPreprocessor from '@badeball/cypress-cucumber-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

// console.log(cypressCucumberPreprocessor);
// const addCucumberPreprocessorPlugin = cypressCucumberPreprocessor.default.addCucumberPreprocessorPlugin;

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333',
    viewportWidth: 414,
    viewportHeight: 896,
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
});
