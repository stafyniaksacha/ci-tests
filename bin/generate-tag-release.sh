#!/bin/bash
set -ev

printenv

for i in "$@"
do
case $i in
    -t=*|--gh-token=*)
    GH_TOKEN="${i#*=}"
    shift # past argument=value
    ;;
    -v=*|--version=*)
    VERSION="${i#*=}"
    shift # past argument=value
    ;;
    *)
      # unknown option
    ;;
esac
done

GITHUB_REPO="https://${GH_TOKEN:-git}@github.com/${TRAVIS_REPO_SLUG}.git"

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"

git add .
git commit -m "Release ${VERSION}"

git remote add origin-travis "$GITHUB_REPO"
git push origin-travis "$TRAVIS_BRANCH"

git tag -d "$VERSION"
git push origin :"$VERSION"
git tag -a "$VERSION" -m 'Release ${VERSION}'
git push origin-travis --tags
