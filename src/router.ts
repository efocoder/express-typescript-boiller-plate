import express, { Router, Request, Response } from "express";

import HomeController from "./controllers/home.controller";

const router: Router = express.Router();

// ############## Home Routes ##################
router.get("", HomeController.hello);
router.get("/try", HomeController.try);
// ############## Home Routes ##################

// ################ 404 Routes ####################### 404 routes should be at the bottom here. Please define other routes above
router.get("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});
router.post("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});
router.post("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});
router.put("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});

router.patch("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});

router.delete("*", (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Resource not found",
  });
});
// ################ 404 Routes #######################

export default router;
