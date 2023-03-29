#!/bin/sh -l

echo "::Debug ::Debug Message"
echo "::Warining ::Warining Message"
echo "::Error ::Error Message"

echo "::add-mask::$1" # same as core.setSecret()

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"


echo "::group::some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

echo "HELLO=hello" >> $GITHUB_ENV