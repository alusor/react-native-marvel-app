#!/usr/bin/env bash
set -ex
brew uninstall node@6
NODE_VERSION="10.6.0"
echo $NODE_VERSION
curl "https://nodejs.org/download/release/v10.6.0/node-v10.6.0.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"
