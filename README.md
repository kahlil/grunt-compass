# `compass compile` for grunt.js

This is a custom grunt.js task that executes `compass compile` for you.

1. Place the `grunt-compass` folder in the root of your project.
2. Call `grunt.loadTasks('grunt-compass/tasks');` in your gruntfile.
3. Configure `grunt watch` to watch your scss files and call the task.
e.g.:

````javascript
     watch: {
        files: ['assets/scss/partials/*.scss'],
        tasks: ['compass']
    }
````