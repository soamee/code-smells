class User {
  name: string
  address: Address
}

class Address {
  streetName: string
  houseNumber: number
  personArray = [User]
}