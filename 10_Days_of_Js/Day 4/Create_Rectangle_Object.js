function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = ((a * 2) + (b * 2));
    this.area = a * b;
}
// Given
function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
