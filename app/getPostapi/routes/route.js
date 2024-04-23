import handleActivityRequest from "../controllers/ActivityController.js";
import { handleUserCreation  }from "../controllers/UserController.js";

export function configureRoutes(app, client) {
  app.get("/api/activity", (req, res) => handleActivityRequest(req, res, client));
  app.post("/api/user", (req, res) => handleUserCreation(req, res, client));
}