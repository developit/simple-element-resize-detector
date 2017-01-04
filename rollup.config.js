import path from 'path';
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import es3 from 'rollup-plugin-es3';

let pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
	entry: pkg['jsnext:main'],
	dest: pkg.main,
	sourceMap: path.resolve(pkg.main),
	moduleName: pkg.amdName,
	useStrict: false,
	exports: 'default',
	format: 'umd',
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			presets: [
				['es2015', { loose:true, modules:false }],
				'stage-0'
			]
		}),
		es3()
	]
};