#!/bin/bash

bun run build
gh-pages -d dist
