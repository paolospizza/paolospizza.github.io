# Paolo's Pizza Site

## generating locally

NB this probably doesn't work on Github pages because they don't use jekyll plugins

`NODE_ENV=production JEKYLL_ENV=production bundle exec jekyll build`

with this set css files are

* main.css - 17kb
* style.css - 77kb

without the `NODE_ENV` production flag

* main.css is __FOUR MEGABYTES__

## deploy

1) push to master

that's it 🤣

uses github actions to build the jekyll site from the master branch and then to publish the built files to the gh-pages branch
