/**
 * Created by kevin on 16/3/28.
 */
function clone(o){
    var k, ret= o, b;
    if(o && ((b = (o instanceof Array)) || o instanceof Object)) {
        ret = b ? [] : {};
        for(k in o){
            if(o.hasOwnProperty(k)){
                ret[k] = clone(o[k]);
            }
        }
    }
    return ret;
}