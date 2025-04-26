import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useCart } from "../context/Cart/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Container fixed sx={{ mt: 2 }}>
      <Typography variant="h4">My Cart</Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        {cartItems.map((item) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: 2,
              border: 1,
              borderColor: "#909090",
              borderRadius: 5,
              padding: 2,
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
              <img src={item.image} alt="product-image" width={100} />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>
                  {item.quantity} × {item.unitPrice}$
                </Typography>
                <Button>Remove Item</Button>
              </Box>
            </Box>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button>-</Button>
              <Button>+</Button>
            </ButtonGroup>
          </Box>
        ))}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5">Total Amount: {totalAmount}$</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CartPage;
