# Makefile for grid-square project

.PHONY: help install build test pack-check clean publish

default: help

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  help       Show this help message"
	@echo "  install    Install dependencies (npm install)"
	@echo "  build      Build the project (npm run build)"
	@echo "  test       Run tests (npm test)"
	@echo "  pack-check Fail if the packed tarball would ship unexpected files"
	@echo "  clean      Remove node_modules and build artifacts"
	@echo "  publish    Publish the package (npm publish)"

install:
	npm install

build:
	npm run build

test:
	npm test

# Asserts the published file list matches the "files" allowlist and exits
# non-zero otherwise - suitable for CI. See scripts/check-pack.js.
pack-check:
	node scripts/check-pack.js

clean:
	rm -rf node_modules

publish:
	npm publish
