export default class ProductDTO {
  constructor(prod) {
    this.nombre = prod.name;
    this.precio = prod.price;
    this.disponibilidad = prod.stock;
  }
}
