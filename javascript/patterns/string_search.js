// naive implementation
function naiveSearch(in_str, match_str) {
    let count = 0;
    for(let i=0; i<in_str.length; i++) {
        let j=0;
        for(; j<match_str.length; j++) {
            if(in_str[i+j] !== match_str[j]) {
                break;
            }
        }
        if (j === match_str.length) count++;
    }
    return count;
}

console.log(naiveSearch('omomo', 'om'));