class Car {
  car_id: number;
  car_name: string;
  car_price: number;
  car_new: boolean;
  numb_of_seats: number;
  car_fault: string[];

  constructor(
    car_id: number,
    car_name: string,
    car_price: number,
    car_new: boolean,
    numb_of_seats: number,
    car_fault: string[]
  ) {
    this.car_id = car_id;
    this.car_name = car_name;
    this.car_price = car_price;
    this.car_new = car_new;
    this.numb_of_seats = numb_of_seats;
    this.car_fault = car_fault;
  }
}

const TeslaCar = new Car(788, "Tesla", 7000, true, 4, [
  "Not charging",
  "Bad breaks",
]);

// This function is expecting any data type and returning any type. T represents anything.
function acceptAnything<T>(value: T): T {
  return value;
}
