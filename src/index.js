/**
 * Created by yuan on 2018/8/31.
 */
transform(
    '/vendor/lodash.min.js'
)

var aa = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(aa);
// => [['a', 'b'], ['c', 'd']]

var bb = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log(bb);