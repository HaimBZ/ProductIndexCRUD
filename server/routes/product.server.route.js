import express from 'express';

import * as productController from '../controllers/product.server.controller';

const router = express.Router();

router.route('/')
     .get(productController.getProducts)
     .post(productController.addProduct)
     .put(productController.updateProduct);

router.route('/:id')
      .get(productController.getProduct)
      .delete(productController.deleteProduct);


export default router;
