import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
})

// ubah schema jadi model
const Category = models.Category || model('Category', CategorySchema);

export default Category;