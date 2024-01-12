import { Trendingproduct } from "../models/trendingData.model.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getAllTrendingProducts = asyncHandler(async (req, res) => {
  const products = await Trendingproduct.find().select("-_id");

  res
    .status(200)
    .json(new ApiResponse(200, products, "Posts retrieved successfully!"));
});


const getTrendingProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Trendingproduct.findOne({ id }).select("-_id");
  if (!product) {
    throw new ApiError(404, "Product not found!");
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, "Post retrieved successfully!"));
});

export { getAllTrendingProducts, getTrendingProducts };
