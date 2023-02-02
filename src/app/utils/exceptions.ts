class NotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundException';
    }
}

function throwError(message: string): never {
  throw new Error(message);
}

function throwNotFoundException(message: string): never {
    throw new NotFoundException(message);
}

export {
    NotFoundException, 
    throwError, 
    throwNotFoundException
};