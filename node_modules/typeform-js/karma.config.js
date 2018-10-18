
module.exports = function (config) {
	config.set({
		frameworks: [ 'browserify', 'jasmine' ],
		files: [
			'./node_modules/babel-polyfill/browser.js',
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'./spec/request.js',
			'./spec/**/*.js'
		],
		plugins: [
			'karma-jasmine',
			'karma-browserify',
			'karma-phantomjs-launcher',
			'karma-coverage',
			'karma-mocha-reporter',
			'karma-babel-preprocessor'
		],
		browsers: [ 'PhantomJS' ],
		preprocessors: {
			'./spec/**/*.js': ['browserify'],
			'./src/**/*.js': ['browserify']
		},
		reporters: [ 'mocha', 'coverage' ],
		mochaReporter: {
			output: 'minimal'
		},

		coverageReporter: {
			dir: 'reports/coverage',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
			]
		},
		babelPreprocessor: {
			options: {
				presets: ['es2015']
			}/*,
			filename: function (file) {
				return file.originalPath.replace(/\.js$/, '.es5.js');
			},
			sourceFileName: function (file) {
				return file.originalPath;
			}*/
		},

		// browserify configuration
		browserify: {
			debug: true,
			extensions: ['.js'],
			transform: [ 'babelify' ]
		}
	});
};