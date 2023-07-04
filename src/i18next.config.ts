import { join } from 'node:path';
import { readdirSync, lstatSync } from 'node:fs';

/**
 * Section : Logging
 *
 * Logs info level to console output. Helps finding issues with loading not working.
 *
 * @see https://www.i18next.com/overview/configuration-options#logging
 */
export const debug = true;

/**
 * ================================================================================
 * Section : Languages, Namespace, Resources
 *
 * @see https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
 * ================================================================================
 */

/**
 * Resources to initialize with
 *
 * (if not using a backend plugin or not using addResourceBundle)
 */
export const resources = undefined;

/**
 * Language to use (overrides language detection).
 * If set to 'cimode' the output text will be the key.
 */
export const lng = 'en';

/**
 * Language to use if translations in user language are not available.
 * Setting it explicitly to false will not trigger to load the fallbackLng at all
 */
export const fallbackLng = 'en';

/** Array of allowed languages */
export const supportedLngs = readdirSync(
  join(process.cwd(), 'resources/translations/'),
).filter((item) => {
  const isDir = lstatSync(
    join(process.cwd(), 'resources/translations/', item),
  ).isDirectory();
  return isDir;
});

/**
 * If true, will consider variants as supported when the main language is.
 *
 * E.g. en-US will be valid if en is in supportedLngs.
 */
export const nonExplicitSupportedLngs = false; // default as false

/**
 * Strategy to define which language codes to lookup.
 *
 * Example: given set language is
 * en-US:
 * - 'all' ⇒ ['en-US', 'en', 'dev']
 * - 'currentOnly' ⇒ 'en-US'
 * - 'languageOnly' ⇒ 'en'
 */
export const load = 'all';

/**
 * Array of languages to preload.
 * Important on server-side to assert translations are loaded before rendering views.
 */
export const preload = readdirSync(
  join(process.cwd(), 'resources/translations'),
).filter((item) => {
  const isDir = lstatSync(
    join(process.cwd(), 'resources/translations', item),
  ).isDirectory();
  return isDir;
});

/**
 * Locale will be fully lowercased
 *
 * e.g. en-US ⇒ en-us
 */
export const lowerCaseLng = true;

/**
 * Main language will be lowercased
 *
 * e.g. EN ⇒ en, while leaving full locales like en-US
 */
export const cleanCode = false;

/** String or Array of namespaces to load */
export const ns = ['app', 'info', 'common', 'error'];

/** Default namespace used if not passed to the translation function */
export const defaultNS = 'app';

/**
 * String or Array of namespaces to lookup key if not found in given namespace
 *
 * @see https://www.i18next.com/principles/fallback#namespace-fallback
 */
export const fallbackNS = ['app', 'info', 'common', 'error', 'missing'];

/**
 * Allows some resources to be set on initialization
 * while others can be loaded using a backend connector
 */
export const partialBundledLanguages = false;

/**
 * ================================================================================
 * Section : Missing keys
 *
 * @see https://www.i18next.com/overview/configuration-options#missing-keys
 * ================================================================================
 */

/** Calls save missing key function on backend if key not found */
export const saveMissing = true;

/**
 * Experimental:
 *
 * Enable to update default values using the saveMissing
 * (Works only if defaultValue is different from translated value.
 * Only useful on initial development or when keeping code as source of
 * truth not changing values outside of code.
 * Only supported if backend supports it already)
 */
export const updateMissing = false;

/**
 * 'current' or 'all'
 *
 * By default it uses the configured fallback language to save the missing keys to.
 * 'current' will use the current used/detected language (i18next.language)
 * 'all' will save it to all languages included in i18next.languages
 */
export const saveMissingTo = 'current';

/**
 * Will save all plural forms instead of
 * only singular if t was called for plurals
 */
export const saveMissingPlurals = true;

/**
 * function(lngs, ns, key, fallbackValue, updateMissing, options) { }
 *
 * Used for custom missing key handling (needs saveMissing set to true!)
 * The options are an internal value container similar to the t(key, options) options
 *
 * @see https://www.i18next.com/translation-function/essentials#overview-options
 */
export const missingKeyHandler = false;

/** Return default value while missing key */
export const parseMissingKeyHandler = undefined;

// /** Appends namespace to missing key */
export const appendNamespaceToMissingKey = false;

/**
 * ================================================================================
 * Section : Translation defaults
 *
 * @see https://www.i18next.com/overview/configuration-options#translation-defaults
 * ================================================================================
 */

/** String or Array of postProcessors to apply per default */
export const postProcess = false;

/** Allows null values as valid translation */
export const returnNull = true;

/** Allows empty string as valid translation */
export const returnEmptyString = true;

/**
 * Allows objects as valid translation result
 *
 * @see https://www.i18next.com/translation-function/objects-and-arrays
 */
export const returnObjects = false;

/** Returns an object that includes information about the used language, namespace, key and value */
export const returnDetails = false;

/**
 * Gets called if object was passed in as key but returnObjects was set to false
 *
 * function(key, value, options) {}
 */
export const returnedObjectHandler = undefined;

/**
 * Char that arrays will be joined by
 *
 * @see https://www.i18next.com/translation-function/objects-and-arrays
 */
export const joinArrays = false;

/**
 * Default: sets defaultValue
 *
 * function (args) { return { defaultValue: args[1] } };
 */
export const overloadTranslationOptionHandler = undefined;

/**
 * Prefix/Suffix for interpolation and other options
 * can be overridden in the init options or by passing additional options to the t function
 */
export const interpolation = {
  skipOnVariables: false,
};

/** Allow translate function to skip interpolation and return raw values instead */
export const skipInterpolation = false;

/**
 * ================================================================================
 * Section : Plugin options
 *
 * @see https://www.i18next.com/overview/configuration-options#plugin-options
 * ================================================================================
 */

/**
 * Options for language detection
 *
 * @see https://www.i18next.com/overview/plugins-and-utils#language-detector
 */
export const detection = undefined;

/**
 * Options for backend
 *
 * @see https://www.i18next.com/overview/plugins-and-utils#backends
 */
export const backend = {
  loadPath: join(
    process.cwd(),
    'resources',
    'translations/{{lng}}/{{ns}}.json',
  ),
  addPath: join(
    process.cwd(),
    'resources',
    'translations/{{lng}}/missing.json',
  ),
};

/**
 * Options for a cache layer in backends
 *
 * @see https://www.i18next.com/overview/plugins-and-utils#backends
 */
export const cache = undefined;

/**
 * ================================================================================
 * Section : Others
 *
 * @see https://www.i18next.com/overview/configuration-options#others
 * ================================================================================
 */

/**
 * Triggers resource loading in init() inside a setTimeout (default async behaviour).
 * Set it to false if your backend loads resources synchronously
 * - that way, calling i18next.t() after init() is possible without relying on
 *   the initialization callback.
 * This option only works for sync (blocking) loading backend,
 * like i18next-fs-backend and i18next-sync-fs-backend!
 */
export const initImmediate = true;

/**
 * Char to separate keys.
 * If working with a flat JSON, it's recommended to set this to false.
 */
export const keySeparator = '.';

/** Char to split namespace from key */
export const nsSeparator = ':';

/** Char to split plural from key */
export const pluralSeparator = '_';

/** Char to split context from key */
export const contextSeparator = '_';

/** Prefixes the namespace to the returned key when using lng: 'cimode' */
export const appendNamespaceToCIMode = false;

/** If a key is not found as nested key, it will try to lookup as flat key */
export const ignoreJSONStructure = false;

/**
 * Limits parallel reads to the backend to prevent opening up to
 * thousands of sockets or file descriptors at the same time,
 * leading to EMFILE errors if ulimit -n is exceeded (debug: true must be set to see them).
 * limiting parallelism usually makes loading all items
 * substantially faster than allowing all reads to start before any have finished.
 */
export const maxParallelReads = 10;
