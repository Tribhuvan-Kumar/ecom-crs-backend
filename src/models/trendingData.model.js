import mongoose, { Schema } from "mongoose";

const trendingSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imgUrl: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

export const Trendingproduct = mongoose.model(
  "Trendingproduct",
  trendingSchema
);
