import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import { getAllProducts } from "./controllers/product.controller.js";
import {
  getAllTrendingProducts,
  getTrendingProducts,
} from "./controllers/trending.controller.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecom Website Server",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/app.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/v1/post/all-product:
 *   get:
 *     summary: This method is used to get all trending products image
 *     description: All Trending products here!
 *     responses:
 *       200:
 *         description: Returns all trending products.
 */
app.get("/api/v1/post/all-product", getAllTrendingProducts);

/**
 * @swagger
 * /api/v1/post/feature-product:
 *   get:
 *     summary: This method is used to get all feature images
 *     description: All feature images!
 *     responses:
 *       200:
 *         description: Returns all feature images.
 */
app.get("/api/v1/post/feature-product", getAllProducts);

/**
 * @swagger
 * /api/v1/post/trending-product/{id}:
 *   get:
 *     summary: Get details of a particular product
 *     description: Retrieve details of a specific product by providing its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns product details.
 */
app.get("/api/v1/post/trending-product/:id", getTrendingProducts);

export { app };
