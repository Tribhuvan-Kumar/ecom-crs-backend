import { Product } from "../models/product.model.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().select("-_id");

  res
    .status(200)
    .json(new ApiResponse(200, products, "Posts retrieved successfully!"));
});

export { getAllProducts };
