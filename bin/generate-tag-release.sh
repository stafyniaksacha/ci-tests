#!/bin/bash
set -ev


PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')


!(git tag | grep "$PACKAGE_VERSION")

GITHUB_REPO="https://${GH_TOKEN:-git}@github.com/${TRAVIS_REPO_SLUG}.git"

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"

git add .
git commit -m "Release ${PACKAGE_VERSION}"

git remote add origin-travis "$GITHUB_REPO"
git push origin-travis HEAD:"$TRAVIS_BRANCH"

git tag -a "$PACKAGE_VERSION" -m 'Release ${VERSION}'
git push origin-travis --tags
