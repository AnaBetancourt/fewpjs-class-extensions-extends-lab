class Polygon {
    constructor(sideLengthArray){
        this.sideLengths = sideLengthArray
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        return this.sideLengths.reduce(function(total, current){
            return total + current
        })
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.sideLengths.length === 3){
            const side1 = this.sideLengths[0]
            const side2 = this.sideLengths[1]
            const side3 = this.sideLengths[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.sideLengths.length === 4){
            const side1 = this.sideLengths[0]
            const side2 = this.sideLengths[1]
            const side3 = this.sideLengths[2]
            const side4 = this.sideLengths[3]
            return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
    }

    get area(){
        return this.sideLengths[0]**2
    }
}