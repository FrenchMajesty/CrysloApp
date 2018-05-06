/**
 * Evaluates whether two objects are deeply equal or not
 * @param  {Object}  a The first object
 * @param  {Object}  b The second object
 * @return {Boolean}   
 */
export default function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}