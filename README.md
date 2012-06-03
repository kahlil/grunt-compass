# `compass compile` for grunt.js

This is a custom grunt.js task that executes `compass compile` for you and prints the COMPASS output to `grunt.log.write()`.

1. Place the `grunt-compass` folder in the root of your project.
2. Call `grunt.loadTasks('grunt-compass/tasks');` in your gruntfile.
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

_**Notice:** At this moment this task doesn't work with `grunt` or `grunt compass` only with `grunt watch`. Calling `grunt compass` only creates the folders, not the files!_