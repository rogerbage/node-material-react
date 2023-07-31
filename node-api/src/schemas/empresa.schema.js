import mongoose from "mongoose";

const empresaSchema = new mongoose.Schema({
  name: { required: true, type: String },
  codes: { required: true, type: String },
  cnpj: { required: true, type: String },
  structuring_bank: { require: true, type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
});

empresaSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

empresaSchema.set("toJSON", { virtuals: true });

export const empresaModel = mongoose.model("Empresa", empresaSchema);
