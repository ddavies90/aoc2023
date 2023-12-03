#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No argument for day provided. This should be a single number, such as '5' or '24'."
  exit 1
fi

# Get the directory of the script
scriptDir=$(dirname "$0")

# Takes us back to the repo root
basePath="$scriptDir/.."

day=$1
directoryName="$basePath/$day"
testFileName="day$day.spec.ts"

if [ -d $directoryName ]; then
  echo There is already a directory for day $day
else
  cp -r $basePath/template $directoryName
  mv $directoryName/__test__/day{x}.spec.ts $directoryName/__test__/$testFileName
  sed -i '' -e s/{day}/$day/g $directoryName/index.ts
  sed -i '' -e s/0/$day/g $directoryName/__test__/$testFileName
fi