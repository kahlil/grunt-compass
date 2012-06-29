# grunt-compass

This is a custom grunt.js multitask that executes `compass compile` on the command line for you and prints the COMPASS output to `grunt.log.write()`.

1. Install this grunt plugin next to your project's grunt.js gruntfile with: `npm install grunt-compass`.
2. Call `grunt.loadNpmTasks('grunt-compass')` in your gruntfile.
3. Configure `grunt watch` to watch your scss files and call the task.
	e.g.:

	```javascript
	watch: {
	    files: ['assets/scss/partials/*.scss'],
	    tasks: ['compass:somename']
	}
	```

4. Setup the config for compass in your grunt config, or setup a compass config file:
	* Option 1: Set the configuration for compass in your grunt.js file:

		```javascript
		compass: {
            somename: {
                src: 'assets/scss/partials',
                dest: 'assets/css/partials'
            }
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
        somename: {
            outputstyle: 'compressed'
        }
    }
    ```
6. You can disable line comments like this:

    ```javascript
    compass: {
        somename: {
            linecomments: false
        }
    }
    ```
7. If you have multiple compass tasks and you want to force compass compilation you can do this:

    ```javascript
    compass: {
        somename: {
            forcecompile: true
        }
    }
    ```

8. You can require a given ruby library before running commands

    ```javascript
    compass: {
        somename: {
            require: 'animate-sass mylib'
        }
    }
    ```

9. Run "grunt watch" and change some SASS files :)

# Real World Examples

* [krzysu](https://github.com/krzysu) posted a Gist with his `compass compile` configuration [over here](https://gist.github.com/2917330).
* [javiervd](https://github.com/javiervd) kindly shares his grunt.js setup [over here](https://gist.github.com/2941501).

# Changelog

v0.2.10: Added 'gruntplugin' as a keyword in the package.json to get listed [here](http://jsfiddle.net/cowboy/qzRjD/show/).

v0.2.9: Ability to require a given ruby lib before running commands. Added by @[FGRibreau](https://github.com/FGRibreau).

v0.2.8: Added an option to force compilation of SASS files via the `--force` option.

----

# LICENSE MIT

Copyright (c) 2012 Kahlil Lechelt

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
