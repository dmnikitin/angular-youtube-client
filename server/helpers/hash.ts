import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';
// tslint:disable: typedef
const saltRounds = 10;

export default function hash(next: NextFunction): void {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
      if (err) {
        return next(err);
      }
      document.password = hashedPassword;
      return next();
    });
  } else {
    return next();
  }
}
