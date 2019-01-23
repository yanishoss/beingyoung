clean:
	rm dist -rf
	rm build -rf

build: clean
	yarn build
	mkdir dist -p
	mv build/* dist

deploy: build