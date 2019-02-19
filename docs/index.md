# BioNotes Technical Documentation

## Development environment

BioNotes is an application developed with [Ionic 4](https://ionicframework.com/), a multi-platform development platform (Web / Android / iOS) based on web technologies (Angular, TypeScript).

The development environment does not depend on the operating system (Windows, macOS, Linux), as long as npm is installed. Development does not depend on a particular IDE either, but we all use VSCode. WebStorm can theoretically be used.

We use a [tslint](https://github.com/palantir/tslint) file to ensure code consistency between each developer.
A modified version of [JSDoc](http://usejsdoc.org/) is used to write method documentation. We only use the @param annotation, similarly to the Typescript repository devs.
Technical documentation is created in Markdown on GitHub, and deployed on GitHub Pages.

The development of the code is done by following the [Github Flow](https://guides.github.com/introduction/flow/). We develop each feature on a dedicated branch, then merge this feature into the master branch once it has been validated. Releases correspond to Git tags.

The project is under the [Apache](https://www.apache.org/licenses/LICENSE-2.0) license. This license authorizes the modification and distribution of the code in any form and requires the maintenance of copyright during any modification. This is the most permissive license possible for the project, and the most appropriate for what we want to do. This way everyone can modify the project regardless of the type of project.

## Code description

Description of the project architecture and details about each class : [Code](./code.md)

## Database description

Explanation of the database structure : [Database](./database.md)
