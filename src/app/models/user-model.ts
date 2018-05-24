export class UserModel {

  private _firstName: string;
  private _content: string;
  private _email: string;
  private _lastName: string;


  constructor(firstName: string, content: string, email: string, lastName: string) {
    this._firstName = firstName;
    this._content = content;
    this._email = email;
    this._lastName = lastName;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  public  toString() : String[]{

    return 'UserModel :'['firstname : '+this._firstName+ 'content : '+this._content+'email : '+this._email+ 'lastname : '+this._lastName];
  }
}
