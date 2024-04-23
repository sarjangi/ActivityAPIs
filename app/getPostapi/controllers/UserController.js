import UserRequest from "../request/userRequest.js";
import ActivityRequest from "../request/activityRequest.js";
import { client } from "../database/connection.js";
import { mapAccessibility, mapPrice, mapAccessibilityR, mapPriceR } from "../utils/utils.js";

const handleUserCreation = async (req, res, client) => {
    const userRequest = new UserRequest(req.body);

    try {
        // Validate request body
        if (!userRequest.name || !userRequest.price || !userRequest.accessibility) {
            return res
                .status(400)
                .json({ error: "Name, price, and accessibility are required fields." });
        }

        // Insert user into database
        const query = `INSERT INTO "user" (name, accessibility, price) VALUES ($1, $2, $3)`;
        const values = [userRequest.name, userRequest.accessibility, userRequest.price];

        await client.query(query, values, (err, result) => {
            if (!err) {
                res.status(201).json({ message: "User added successfully." });
            } else {
                console.error("Error executing query:", err);
                res.status(500).send("Error adding user to the database.");
            }
        });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("An error occurred while processing the request.");
    }
};

const getUserActivity = async (req, res) => {
    try {
        let userAccessibility;
        let userPrice;

        const activityRequest = new ActivityRequest(req.query);
        let queryToFetchUser = `SELECT * FROM "user" WHERE id = ${activityRequest.userid}`;
        console.log("Query Fetch User: ", queryToFetchUser);
        client.query(queryToFetchUser, (err, result) => {
        if (!err) {
            userAccessibility = mapAccessibilityR(result.rows[0].accessibility);
            userPrice = mapPriceR(result.rows[0].price);
            console.log(userAccessibility, userPrice);
    
            let userQueryForActivity = `SELECT * FROM "activity" WHERE price = ${userPrice} AND accessibility = ${userAccessibility}`;
            console.log("UserQuery ", userQueryForActivity);
            client.query(userQueryForActivity, (err, resultData) => {
            if (!err) {
                let returnArrForUserActivity = [];
                resultData.rows.forEach((row) => {
                row.accessibility = mapAccessibility(row.accessibility);
                row.price = mapPrice(row.price);
                returnArrForUserActivity.push(row);
                });
    
                if (returnArrForUserActivity.length > 0) {
                console.log(returnArrForUserActivity);
                res.send(returnArrForUserActivity);
                } else {
                console.log("No activities found for the user");
                res.status(404).send("No activities found");
                }
            } else {
                console.error("Error executing query for client activity", err);
                res.status(500).send("Error fetching data from the database");
            }
            });
        } else {
            console.log("Query Error: ", err);
            res.status(500).send("Error fetching data from the database");
        }
        });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Error fetching data from the database");
    }
};

export { handleUserCreation, getUserActivity }