
type ObjectType = {[key: string]: boolean};
function classNames(...classes:(string | ObjectType  )[]) {
    if(classes.length === 0) return '';
     return classes.map(item => {
        if(typeof item === 'string') return item;
        if(typeof item === 'object')  {
            let res = '';
            for (const [key, value] of Object.entries(item)) {
                if(value) {
                    res +=  key + ' ';
                }
              }  
              return res.trim();  
        }
        return '';
     }).join(' ').trim();
}
export default classNames;