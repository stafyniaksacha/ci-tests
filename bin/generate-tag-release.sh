#!/bin/bash
set -v

GITHUB_REPO=https://${GH_TOKEN:-git}@github.com/${TRAVIS_REPO_SLUG}.git

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"

git add .
git commit -m "Release ${npm_package_version}"

git remote add origin-travis $GITHUB_REPO
git push origin-travis $TRAVIS_BRANCH

git tag -d ${npm_package_version}
git push origin :${npm_package_version}
git tag -a ${npm_package_version} -m 'Release ${npm_package_version}'
git push origin-travis --tags
