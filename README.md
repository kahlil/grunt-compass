# `compass compile` for Grunt.js

This is a custom grunt.js task that executes `compass compile` for you and prints the COMPASS output to `grunt.log.write()`.

1. Install this grunt plugin next to your project's grunt.js gruntfile with: `npm install grunt-compass`. In order for this to work you might have to create the node_modules folder in your project directory by yourself first. That is the case for me but appearantly not for everybody.
2. Call `grunt.loadNpmTasks('grunt-compass')` in your gruntfile.
3. Configure `grunt watch` to watch your scss files and call the task.
	e.g.:

	```javascript
	watch: {
	    files: ['assets/scss/partials/*.scss'],
	    tasks: ['compass']
	}
	```

4. Setup the config for compass in your grunt config, or setup a compass config file:
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
5. You can set your custom output style like this:

    ```javascript
    compass: {
        outputstyle: 'compressed'
    }
    ```
6. You can disable line comments like this:

    ```javascript
    compass: {
        linecomments: false
    }
    ```
7. Run "grunt watch" and change some SASS files :)