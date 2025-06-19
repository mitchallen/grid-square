# Makefile for grid-square project

.PHONY: help build test clean publish

default: help

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  help     Show this help message"
	@echo "  build    Build the project (npm install)"
	@echo "  test     Run tests (npm test)"
	@echo "  clean    Remove node_modules and build artifacts"
	@echo "  publish   Publish the package (npm publish)"

build:
	npm install

test:
	npm test

clean:
	rm -rf node_modules

publish:
	npm publish
