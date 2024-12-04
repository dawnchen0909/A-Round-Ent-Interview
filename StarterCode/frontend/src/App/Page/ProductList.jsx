import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5888/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5888/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }} gutterBottom>
        Simple Card List
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <IconButton
                onClick={() => handleDelete(product.id)}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: 8,
                  zIndex: 1,
                  color: 'red',
                }}
              >
                <DeleteIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent
                sx={{
                  textAlign: 'start',
                }}
              >
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="h6">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;