const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) =>{
        pool.query(
            `insert into tbl_user(firstName, lastName, email, password)
            values(?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getusers: callBack =>{
        pool.query(
            `select id,firstName,lastName,email from tbl_user`,
            [],
            (error, results, fields) =>{
                if (error){
                   return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getuserByUserId:(id, callBack) =>{
        pool.query(
            `select id,firstName,lastName,email from tbl_user where id = ?`,
            [id],
            (error, results, fields) =>{
                if (error){
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser:(data, callBack) =>{
        pool.query(
            `update registration set firstName=?, lastName=?, email=?,password=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) =>{
                if (error){
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};