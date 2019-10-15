function getCount(objects) {
    let counts = 0; 
 
    // iterate over array of objects
    objects.map((item) => {
        if (item.x === item.y) {
            counts++;
        }
        return item;
    });
    return counts;
}
