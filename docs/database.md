# Database description

The database will be created on [Ionic Storage](https://ionicframework.com/docs/building/storage).
Ionic Storage should use SQLite as its driver on Android and iOS devices.

## List of Storage keys

Area :

* area : the list of areas
* type : the list of area types

Operation :

* operation
* vegetable
* vegetableName
* supplier (implements NamedDbObject)
* category : categories of vegetables (implements NamedDbObject)
* done : if the operation is done or not

Modalities :

* label (implements NamedDbObject)
* sublabel
* modality

Note : NamedDbObject has a name and an id; it allows us to reduce code repetitions by using a single method instead of 3 to interact with suppliers, labels and categories in the database respectively.

## UML diagram

![UML diagram](./database.png)
