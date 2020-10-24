# npx sequelize model:create --name Project --attributes key:string,description:string,status:string,location:string,priority:string,target_resolution_time:date,actual_resolution_time:date

# npx sequelize model:create --name Employee --attributes name:string,gender:string,position:string,username:string,email:string,password:string,imageUrl:string

# npx sequelize model:create --name EmployeeProject --attributes isLeader:boolean,EmployeeId:integer,ProjectId:integer

# npx sequelize model:create --name Role --attributes name:string,description:string

# npx sequelize model:create --name EmployeeRole --attributes EmployeeId:string,RoleId:string

# npx sequelize model:create --name Permission --attributes name:string,description:string

# npx sequelize model:create --name RolePermission --attributes RoleId:integer,PermissionId:integer

# npx sequelize model:create --name Comment --attributes text:string,UserId:integer,ProjectId:integer,ParentId:integer