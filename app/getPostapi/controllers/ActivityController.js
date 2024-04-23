import { mapAccessibility, mapPrice, whereCondition } from "../utils/utils.js";
import ActivityRequest from "../request/activityRequest.js";
import { getUserActivity } from "./UserController.js";

const handleActivityRequest = async (req, res, client) => {
    const activityRequest = new ActivityRequest(req.query);
    let whereConditions;
    try {
        if (activityRequest.userid && activityRequest.userid != null && activityRequest.userid != '') {
            getUserActivity(req, res)
        } else {
            // Default query to fetch random activity
            switch (true) {
                case !!activityRequest.key:
                    whereConditions = whereCondition("key", activityRequest.key);
                    break;
                case !!activityRequest.type:
                    whereConditions = whereCondition("type", activityRequest.type);
                    break;
                case !!activityRequest.participants:
                    whereConditions = whereCondition("participants", activityRequest.participants);
                    break;
                case !!activityRequest.price:
                    whereConditions = whereCondition("price", activityRequest.price);
                    break;
                case !!activityRequest.accessibility:
                    whereConditions = whereCondition("accessibility", activityRequest.accessibility);
                    break;
                case activityRequest.minprice !== undefined && activityRequest.maxprice !== undefined:
                    whereConditions = ` WHERE price::numeric >= ${activityRequest.minprice} AND price::numeric <= ${activityRequest.maxprice}`;
                    break;
                case activityRequest.minaccessibility !== undefined && activityRequest.maxaccessibility !== undefined:
                    whereConditions = ` WHERE accessibility::numeric >= ${activityRequest.minaccessibility} AND accessibility::numeric <= ${activityRequest.maxaccessibility}`;
                    break;
                default:
                    whereCondition = "";
                    break;
            }
            let query = `Select * from activity ${whereConditions} ORDER BY RANDOM() LIMIT 1`;
                console.log(query);
                client.query(query, (err, result) => {
                if (!err) {
                    if (result.rows.length > 0) {
                    let returnActivity = result.rows[0];
                    returnActivity.accessibility = mapAccessibility(returnActivity.accessibility);
                    returnActivity.price = mapPrice(returnActivity.price);
                    res.send(returnActivity);
                    } else {
                    res.status(404).send("No activities found");
                    }
                } else {
                    console.error("Error executing query:", err);
                    res.status(500).send("Error fetching data from the database");
                }
            });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("An error occurred while processing the request");
    }
};

export default handleActivityRequest;