const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const {Product, Category, Tag, ProductTag} = require('../models');