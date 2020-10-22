const { Project, Employee } = require('../models/index')


class ProjectEmployee{

  static show(){

  }

  static getProjectAdd(){

  }

  static postProjectAdd(){
    
  }

  static getProjectOpen(){

  }

  static getProjectMine(){

  }

  static getProjectUnassigned(){

  }

  static getProjectDelete(){

  }

}

module.exports = ProjectEmployee

// | GET    | /projects            | Menampilkan seluruh project yang ada di database                |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                      |
// | POST   | /projects/add        | Menambahkan data project ke database                            |
// | GET    | /projects/open       | Menampilkan seluruh project di database dengan status open      |
// | GET    | /projects/mine       | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Menampilkan seluruh project yang belum di assign ke employee    |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                    |