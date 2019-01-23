clean:
	rm docs -rf
	rm build -rf

build: clean
	yarn build
	mkdir docs -p
	mv build/* docs/*

deploy: build