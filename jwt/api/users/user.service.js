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
    getUsers: callBack =>{
        pool.query(
            `select user_id,firstName,lastName,email from tbl_user`,
            [],
            (error, results, fields) =>{
                if (error){
                   return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId:(id, callBack) =>{
        pool.query(
            `select user_id,firstName,lastName,email from tbl_user where user_id = ?`,
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
            `update tbl_user set firstName=?, lastName=?, email=?,password=? where user_id = ?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) =>{
                if (error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser:(data, callBack) =>{
        pool.query(
            `delete from tbl_user where user_id = ?`,
            [data.id],
            (error, results, fields) =>{
                if (error){
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail:(email, callBack) =>{
        pool.query(
            `select * from tbl_user where email = ?`,
            [email],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};