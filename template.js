/**
 * Copyright 2014 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
'use strict';

// Basic template description.
exports.description = 'Create a LaxarJS activity, including Jasmine specs';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'For more information about LaxarJS activity best practices, ' +
  'please see the docs at http://laxarjs.org/docs/activities';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You can now start developing your activity! For more information ' +
  'about developing activities with LaxarJS, please see the Getting Started guide:' +
  '\n\n' +
  'http://laxarjs.org/docs/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function( grunt, init, done ) {

   var options = { type: 'activity' };
   var prompts = require( './prompts' )( options, init );

   init.process( options, prompts, function( err, props ) {

      // Files to copy (and process).
      var files = init.filesToCopy( props );

      if( props.author_name === 'aixigo AG' && props.licenses[0] === 'MIT' ) {
      } else {
         init.addLicenseFiles(files, props.licenses);
      }

      // Actually copy (and process) files.
      init.copyAndProcess( files, props );

      // All done!
      done();

   });

};
