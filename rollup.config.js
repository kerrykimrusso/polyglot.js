import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  external: ['string.prototype.trim'],
  plugins: [nodeResolve(), commonjs()],
};
