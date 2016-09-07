var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
    'ng2-table': 'js/vendor/ng2-table',
    'moment': 'js/vendor/moment/moment.js',
    'angular2-google-maps': 'js/vendor/angular2-google-maps'
};

var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-bootstrap': { defaultExtension: 'js' },
    'ng2-table': { defaultExtension: 'js' },
    'angular2-google-maps/core': {
        defaultExtension: 'js',
        main: 'index.js' // you can also use core.umd.js here, if you want faster loads
    }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms',
    '@angular/testing',
    '@angular/upgrade',
];

packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

var config = {
    map: map,
    packages: packages
};

System.config(config);