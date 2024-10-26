module.exports = 
{
    //Query Insert Function===============================================
    insertData(table, columns, values) 
    {
        var query = "INSERT INTO " + table + " (" + columns + ") VALUES ?;";
        
        data_con.query(query, [values], (err, result) => {
            if (err) throw err;
            console.log("Sucessfully inserted " + result.affectedRows + " row into " + table);
            });    
    },

    //Query Update Function===============================================
    updateData(table, column, value1, value2) 
    {
        var query = "UPDATE " + table + " SET " + column + " = '" + value2 + "' WHERE " + column + " = '" + value1 + "'";

        data_con.query(query, (err, result) => {
            if (err) throw err;
            console.log("Sucessfully updated " + table + "." + column + " from " + value1 + " to " + value2);
            });    
    },

    
    //Query Select Function===============================================
    selectData(table, value) 
    {
        var query = "SELECT " + value + " FROM " + table;

        data_con.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            });    
    },

    //Query Delete Function===============================================
    deleteData(table, PK, value) 
    {
        var query = "DELETE FROM " + table + " WHERE " + PK + " = '" + value + "'";

        data_con.query(query, (err, result) => {
            if (err) throw err;
            console.log("Sucessfully deleted row " + value + " from " + table);
            });    
    }
};