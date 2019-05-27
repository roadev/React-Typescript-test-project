module.exports = {
	'roots': [
		'./src'
	],
	'transform': {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
	},
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy"
	},
};
