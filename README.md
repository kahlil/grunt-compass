# `compass compile` for grunt.js

This is a custom grunt.js task that executes `compass compile` for you and prints the COMPASS output to `grunt.log.write()`.

1. Call `grunt.loadNpmTasks('grunt-compass')` in your gruntfile.
2. Configure `grunt watch` to watch your scss files and call the task.
	e.g.:

	```javascript
	watch: {
	    files: ['assets/scss/partials/*.scss'],
	    tasks: ['compass']
	}
	```

3. Setup the config for compass in your grunt config, or setup a compass config file:
	* Option 1: Set the configuration for compass in your grunt.js file:

		```javascript
		compass: {
		  src: 'assets/scss/partials',
		  dest: 'assets/css/partials'
		}
		```

		"src" is the folder with sass/scss files.
		"dest" is the file where the css files will be place.
	* Option 2: Setup a compass project
		```
		compass install compass
		```
4. You can set your custom output style like this:

    ```javascript
    compass: {
        outputstyle: 'compressed'
    }
    ```
5. You can disable line comments like this:

    ```javascript
    compass: {
        linecomments: false
    }
    ```
6. Run "grunt watch" and change some SASS files :)