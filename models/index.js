const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag")
const ProductTag = require("./ProductTag");

Product.belongsTo(Category);
Category.hasMany(Product);

ProductTag.belongsTo(Product);
Product.hasMany(ProductTag);

ProductTag.belongsTo(Tag);
Tag.hasMany(ProductTag);

module.exports = {
    Category,
    Product,
    Tag,
    ProductTag
}