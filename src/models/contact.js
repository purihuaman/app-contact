let account = 1;

export class Contact {
  code = 0;
  name = '';
  phone = null;
  email = '';
  connected = false;

  constructor(name, phone, email, connected) {
    this.code = account;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.connected = connected;

    account++;
  }
}
