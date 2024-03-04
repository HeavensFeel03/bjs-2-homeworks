function parseCount(line) {
	let parseResult = Number.parseFloat(line);
	if (Number.isNaN(parseResult)) {
		throw new Error("Невалидное значение")
	};

	return parseResult;

}

function validateCount(line) {
	try {
		return parseCount(line)
	} catch (error) {
		return error
	}

}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		let p = this.perimeter / 2;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);

	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}