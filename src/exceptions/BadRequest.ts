class BadRequestExeption extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestExeption';
  }
}

export default BadRequestExeption;
