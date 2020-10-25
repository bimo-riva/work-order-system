npx sequelize model:create --name Project --attributes key:string,summary:string,description:string,status:string,location:string,priority:string,target_resolution_time:date,actual_resolution_time:date

npx sequelize model:create --name Employee --attributes name:string,gender:string,position:string,username:string,email:string,password:string,imageUrl:string

npx sequelize model:create --name EmployeeProject --attributes isLeader:boolean,EmployeeId:integer,ProjectId:integer

npx sequelize model:create --name Role --attributes name:string,description:string

npx sequelize model:create --name EmployeeRole --attributes EmployeeId:integer,RoleName:string

npx sequelize model:create --name Permission --attributes name:string,description:string

npx sequelize model:create --name RolePermission --attributes RoleName:string,PermissionName:string

npx sequelize model:create --name Comment --attributes text:string,EmployeeId:integer,ProjectId:integer,parentId:integer

npx sequelize seed:create --name projects
npx sequelize seed:create --name employees
npx sequelize seed:create --name employee-projects
npx sequelize seed:create --name roles
npx sequelize seed:create --name employee-roles
npx sequelize seed:create --name permissions
npx sequelize seed:create --name role-permissions
npx sequelize seed:create --name comments
