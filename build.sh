#!/bin/bash

# Compile TypeScript to JavaScript
echo "Compiling TypeScript..."
tsc

# Clean up extra unerreacy file
echo "Cleaning up extra files..."
rm -rf scripts/ts scripts/data scripts/scripts

echo "Build complete! Your compiled JavaScript files are in the scripts/ directory."


