#!/bin/bash

echo "Cleaning React Native project..."

# Remove node_modules
echo "Removing node_modules..."
rm -rf node_modules

# Remove Metro cache
echo "Clearing Metro bundler cache..."
rm -rf /tmp/metro-*

# Clear watchman watches
echo "Clearing Watchman watches..."
watchman watch-del-all

# Remove Yarn or NPM lock file
echo "Removing lock files..."
rm -f yarn.lock
rm -f package-lock.json

# Remove build directories
echo "Removing iOS and Android build folders..."
rm -rf ios/Pods
rm -rf ios/build
rm -rf android/.gradle
rm -rf android/app/build
rm -rf android/build

# Install packages again
echo "Installing dependencies..."
yarn install || npm install

# Reinstall iOS pods
if [ -d "ios" ]; then
  echo "Installing iOS Pods..."
  cd ios && pod install && cd ..
fi

echo "✅ React Native project cleaned successfully!"
