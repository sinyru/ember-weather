"use strict";



define('ember-weather/adapters/application', ['exports', 'ember-weather/config/environment', 'active-model-adapter', 'ember'], function (exports, _emberWeatherConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _emberWeatherConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('ember-weather/app', ['exports', 'ember', 'ember-weather/resolver', 'ember-load-initializers', 'ember-weather/config/environment'], function (exports, _ember, _emberWeatherResolver, _emberLoadInitializers, _emberWeatherConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberWeatherConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberWeatherConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberWeatherResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberWeatherConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-weather/components/apparel-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],
    apparel: {},
    actions: {
      create: function create() {
        this.sendAction('create', this.get('apparel'));
      }
    }
  });
});
define('ember-weather/components/apparel-name', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('ember-weather/components/apparel-type', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['form-group'],
    tagName: 'div',
    actions: {
      atiToggled: function atiToggled(choice) {
        this.set('ati', choice);
      }
    }
  });
});
define('ember-weather/components/change-password-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define('ember-weather/components/email-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('ember-weather/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('ember-weather/components/hamburger-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define('ember-weather/components/location-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      getLocation: function getLocation() {
        this.sendAction('getLocation', this.get('location'));
        this.set('location', '');
      }
    }
  });
});
define('ember-weather/components/my-application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define('ember-weather/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define('ember-weather/components/password-confirmation-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('ember-weather/components/password-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('ember-weather/components/sign-in-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('ember-weather/components/sign-up-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('ember-weather/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-weather/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-weather/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('ember-weather/helpers/app-version', ['exports', 'ember', 'ember-weather/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _emberWeatherConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _emberWeatherConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define("ember-weather/helpers/bring-coat", ["exports", "ember"], function (exports, _ember) {
  exports.bringCoat = bringCoat;

  function bringCoat(params) {
    if (params.toString() === "Snow") {
      return true;
    } else {
      return false;
    }
  }

  exports["default"] = _ember["default"].Helper.helper(bringCoat);
});
define("ember-weather/helpers/bring-umbrella", ["exports", "ember"], function (exports, _ember) {
  exports.bringUmbrella = bringUmbrella;

  function bringUmbrella(params) {
    if (params.toString() === "Rain" || params.toString() === "Thunderstorm") {
      return true;
    } else {
      return false;
    }
  }

  exports["default"] = _ember["default"].Helper.helper(bringUmbrella);
});
define('ember-weather/helpers/create-image', ['exports', 'ember'], function (exports, _ember) {
  exports.createImage = createImage;

  function createImage(params) {
    var getUrl = 'https://openweathermap.org/img/w/' + params + '.png';

    return getUrl;
  }

  exports['default'] = _ember['default'].Helper.helper(createImage);
});
define('ember-weather/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-weather/helpers/radio-button', ['exports', 'ember'], function (exports, _ember) {
  exports.radioButton = radioButton;

  function radioButton(params) {}

  exports['default'] = _ember['default'].Helper.helper(radioButton);
});
define('ember-weather/helpers/random-pick', ['exports', 'ember'], function (exports, _ember) {
  exports.randomPick = randomPick;

  function randomPick(params) {
    var apparels = params;
    var result = apparels[0];
    return result;
  }

  exports['default'] = _ember['default'].Helper.helper(randomPick);

  // [Math.floor(Math.random() * myArray.length)]
});
define('ember-weather/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-weather/helpers/temp-convert', ['exports', 'ember'], function (exports, _ember) {
  exports.tempConvert = tempConvert;

  function tempConvert(params) {
    var k = params;
    var f = 9 / 5 * (k - 273) + 32;
    return parseInt(f);
  }

  exports['default'] = _ember['default'].Helper.helper(tempConvert);
});
define('ember-weather/helpers/test-apparel', ['exports', 'ember'], function (exports, _ember) {
  exports.testApparel = testApparel;

  function testApparel(data) {
    if (data > 0) {
      return true;
    } else {
      return false;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(testApparel);
});
define("ember-weather/helpers/test-location-exist", ["exports", "ember"], function (exports, _ember) {
  exports.testLocationExist = testLocationExist;

  function testLocationExist(params) {
    if (params.toString() !== "") {
      return true;
    } else {
      return false;
    }
  }

  exports["default"] = _ember["default"].Helper.helper(testLocationExist);
});
define("ember-weather/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('ember-weather/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-weather/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberWeatherConfigEnvironment) {
  var _config$APP = _emberWeatherConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ember-weather/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-weather/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-weather/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-weather/initializers/export-application-global', ['exports', 'ember', 'ember-weather/config/environment'], function (exports, _ember, _emberWeatherConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberWeatherConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberWeatherConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberWeatherConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-weather/initializers/flash-messages', ['exports', 'ember', 'ember-weather/config/environment'], function (exports, _ember, _emberWeatherConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _emberWeatherConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('ember-weather/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-weather/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('ember-weather/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-weather/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('ember-weather/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-weather/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-weather/models/apparel', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    clothingType: _emberData['default'].attr('string')
  });
});
define('ember-weather/models/location', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('ember-weather/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-weather/router', ['exports', 'ember', 'ember-weather/config/environment'], function (exports, _ember, _emberWeatherConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberWeatherConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('locations');
    this.route('weather', { path: '/locations/:weather' });
    this.route('apparels');
    this.route('apparel', { path: '/apparels/apparel' });
    this.route('random');
    this.route('page-not-found', { path: '/*wildcard' });
  });

  exports['default'] = Router;
});
define('ember-weather/routes/apparel', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    model: function model() {

      return this.get('store').findAll('apparel').then(function () {
        return _rsvp['default'].Promise.resolve({});
      });
    },
    actions: {
      create: function create(apparel) {
        var _this = this;

        if (apparel.name !== "") {
          return this.get('ajax').request('/apparels', {
            method: 'POST',
            data: {
              apparel: {
                name: apparel.name,
                clothing_type: apparel.clothingType
              }
            }
          }).then(function () {
            return _this.transitionTo('apparels');
          })['catch'](function () {
            _this.get('flashMessages').danger('There was a problem. Are you sure you fill in everything?');
          });
        } else {
          this.get('flashMessages').danger('There was a problem. Are you sure you fill in everything?');
        }
      }
    }
  });
});
define('ember-weather/routes/apparels', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    model: function model() {
      return this.get('store').findAll('apparel');
    },
    actions: {
      'delete': function _delete(id) {
        var _this = this;

        var store = this.get('store');
        store.findRecord('apparel', id, { reload: true }).then(function (apparel) {
          apparel.destroyRecord();
        }).then(function () {
          return _this.transitionTo('apparels');
        });
      }
    }
  });
});
define('ember-weather/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('ember-weather/routes/change-password', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    model: function model() {
      return this.get('store').findAll('apparel');
    },

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('ember-weather/routes/locations', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    weather: _ember['default'].inject.service(),
    model: function model() {
      return this.get('store').findAll('apparel');
    },

    actions: {
      getLocation: function getLocation(location) {
        var _this = this;

        return this.get('weather').getWeather(location).then(function (data) {

          return _this.transitionTo('weather', data);
        });
      }

    }

  });
});
define('ember-weather/routes/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-weather/routes/random', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('apparel').then(function (clothes) {
        var rand = Math.floor(Math.random() * clothes.get('length'));
        return clothes.objectAt(rand);
      });
    }
  });
});
define('ember-weather/routes/sign-in', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('ember-weather/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('ember-weather/routes/weather', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      if (this.get('isAuthenticated')) {
        return this.get('store').findAll('dataset');
      } else {
        this.transitionTo('sign-in');
        this.get('flashMessages').danger('Please sign in to view this page.');
      }
    }
  });
});
define('ember-weather/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('ember-weather/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax', 'ember-weather/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _emberWeatherConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _emberWeatherConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('ember-weather/services/apparel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    newApparel: function newApparel(apparel) {
      return this.get('ajax').post('/apparels', { data: apparel });
    }
  });
});
define('ember-weather/services/auth', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('ember-weather/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('ember-weather/services/weather', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    getWeather: function getWeather(location) {
      return this.get('ajax').request('/weathers/' + location);
    }

  });
});
define('ember-weather/storages/auth', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define("ember-weather/templates/apparel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "t7RlFx6R", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"New Apparel:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"apparel-input\"],null,[[\"create\",\"apparel\"],[\"create\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/apparel.hbs" } });
});
define("ember-weather/templates/apparels", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lL4N5WDd", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"My Apparels\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"model\"]]],null],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"test-apparel\"],[[\"get\",[\"model\",\"length\"]]],null]],null,3,1],[\"text\",\"  \"],[\"block\",[\"link-to\"],[\"apparel\"],[[\"class\"],[\"btn btn-primary\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Add More to the List!\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"You have nothing currently!\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"static-attr\",\"class\",\"apparel-type\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"apparel\",\"clothingType\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"static-attr\",\"class\",\"apparel-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"apparel\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-xs d-btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"apparel\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"apparel\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"apparel-table\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"apparel-type\"],[\"flush-element\"],[\"text\",\" Type \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"apparel-name\"],[\"flush-element\"],[\"text\",\" Description \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/apparels.hbs" } });
});
define("ember-weather/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZMrOCH5X", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/application.hbs" } });
});
define("ember-weather/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "omWfL1QL", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/change-password.hbs" } });
});
define("ember-weather/templates/components/apparel-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hSums2tq", "block": "{\"statements\":[[\"append\",[\"helper\",[\"apparel-name\"],null,[[\"ani\"],[[\"get\",[\"apparel\",\"name\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"apparel-type\"],null,[[\"ati\"],[[\"get\",[\"apparel\",\"clothingType\"]]]]],false],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"apparel-submit-input\"],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"create\"]],[\"flush-element\"],[\"text\",\"\\n          Submit\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"block\",[\"link-to\"],[\"apparels\"],[[\"class\",\"class\"],[\"apparel-submit-input\",\"btn btn-danger\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Cancel\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/apparel-input.hbs" } });
});
define("ember-weather/templates/components/apparel-name", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EBfDYR5O", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"apparel-name-input\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"apparel-label\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\",\"class\",\"maxlength\",\"min\"],[\"text\",\"Description: 40 Characters Maximum\",[\"get\",[\"ani\"]],\"ani\",40,1]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/apparel-name.hbs" } });
});
define("ember-weather/templates/components/apparel-type", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fcCncoHz", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"apparel-type-input\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"apparel-label\"],[\"flush-element\"],[\"text\",\"Type:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Coat\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"click\",\"type\",\"value\",\"name\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"atiToggled\",\"Coat\"],null],\"radio\",[\"get\",[\"ati\"]],\"kind\",\"ati-radio\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Jacket\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"click\",\"type\",\"value\",\"name\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"atiToggled\",\"Jacket\"],null],\"radio\",[\"get\",[\"ati\"]],\"kind\",\"ati-radio\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Shirt\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"click\",\"type\",\"value\",\"name\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"atiToggled\",\"Shirt\"],null],\"radio\",[\"get\",[\"ati\"]],\"kind\",\"ati-radio\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Sweater\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"click\",\"type\",\"value\",\"name\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"atiToggled\",\"Sweater\"],null],\"radio\",[\"get\",[\"ati\"]],\"kind\",\"ati-radio\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/apparel-type.hbs" } });
});
define("ember-weather/templates/components/change-password-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2emY1jK1", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/change-password-form.hbs" } });
});
define("ember-weather/templates/components/email-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ak/JTWov", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/email-input.hbs" } });
});
define("ember-weather/templates/components/hamburger-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "S0l40eyg", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/hamburger-menu.hbs" } });
});
define("ember-weather/templates/components/location-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IEbOzF0M", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"getLocation\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"placeholder\",\"id\",\"class\"],[\"text\",[\"get\",[\"location\"]],\"Zip Code OR City Name\",\"location\",\"location-input\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/location-input.hbs" } });
});
define("ember-weather/templates/components/my-application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rn+yySPS", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,8],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,7,3],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"my-weather-logo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"http://i.imgur.com/TvxddKb.png\"],[\"static-attr\",\"style\",\"width:20%;height:20%;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  HUNHUN\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-up\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-in\"],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Apparels\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Location\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"locations\"],null,6],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"apparels\"],null,5],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/my-application.hbs" } });
});
define("ember-weather/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FMnsYxWl", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/navbar-header.hbs" } });
});
define("ember-weather/templates/components/password-confirmation-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rnAW00R9", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/password-confirmation-input.hbs" } });
});
define("ember-weather/templates/components/password-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0fWJREAF", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/password-input.hbs" } });
});
define("ember-weather/templates/components/sign-in-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nVbMr9+2", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/sign-in-form.hbs" } });
});
define("ember-weather/templates/components/sign-up-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "M7Wbgn4m", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/components/sign-up-form.hbs" } });
});
define("ember-weather/templates/locations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cJT3BV1g", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"U.S. Location Only:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"location-input\"],null,[[\"location\",\"getLocation\"],[[\"get\",[\"location\"]],\"getLocation\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/locations.hbs" } });
});
define("ember-weather/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GoFz3QZr", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/page-not-found.hbs" } });
});
define("ember-weather/templates/random", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "53Pvbqwp", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"center-stuff\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"test-location-exist\"],[[\"get\",[\"model\",\"name\"]]],null]],null,2,1],[\"block\",[\"link-to\"],[\"locations\"],[[\"class\"],[\"btn btn-primary\"]],0],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back to Search Location\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"You currently have no clothes to wear!\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Add some clothing in the apparel section\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Random Choice of the Day!\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"model\",\"clothingType\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/random.hbs" } });
});
define("ember-weather/templates/sign-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "L5Tvm7e6", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/sign-in.hbs" } });
});
define("ember-weather/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yb9t8L3K", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/sign-up.hbs" } });
});
define("ember-weather/templates/weather", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cmwZf05g", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"test-location-exist\"],[[\"get\",[\"model\",\"name\"]]],null]],null,5,1],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"locations\"],[[\"class\"],[\"btn btn-primary\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Change Location\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"weather-show\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Unable to Track Location.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Please Try Again!\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Choice of the Day!\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Comment: Wear Coat, Be Warm\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Comment: Bring Umbrella\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"weather-show\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Location: \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"\\n      Weather Condition: \"],[\"append\",[\"unknown\",[\"model\",\"weather\",\"firstObject\",\"main\"]],false],[\"text\",\"\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"helper\",[\"create-image\"],[[\"get\",[\"model\",\"weather\",\"firstObject\",\"icon\"]]],null],null],[\"static-attr\",\"alt\",\"some_text\"],[\"static-attr\",\"style\",\"width:width;height:height;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Current Temperature: \"],[\"append\",[\"helper\",[\"temp-convert\"],[[\"get\",[\"model\",\"main\",\"temp\"]]],null],false],[\"text\",\" °F\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"bring-umbrella\"],[[\"get\",[\"model\",\"weather\",\"firstObject\",\"main\"]]],null]],null,4],[\"block\",[\"if\"],[[\"helper\",[\"bring-coat\"],[[\"get\",[\"model\",\"weather\",\"firstObject\",\"main\"]]],null]],null,3],[\"text\",\"    \"],[\"block\",[\"link-to\"],[\"random\"],[[\"class\"],[\"btn btn-danger\"]],2],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-weather/templates/weather.hbs" } });
});


define('ember-weather/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-weather';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-weather/app")["default"].create({"name":"ember-weather","version":"0.0.0+9e47be8a"});
}
//# sourceMappingURL=ember-weather.map
