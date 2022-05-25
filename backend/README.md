
Database Relation One to Many
```bash 

npx sequelize-cli model:generate --name user --attributes nama:string,email:string,username:string,password:string,image:string

npx sequelize-cli model:generate --name timeline --attributes image:string,content:string,comment:string,like:integer,userId:integer

```