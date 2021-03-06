import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const user = localStorage.getItem('token');
  console.log(user);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 261 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>??? {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  {user ?

                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link> :

                    <Link to="/login"><Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                    </Link>

                  }


                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>

          {user ?
            <Button style={{ marginLeft: 10 }} onClick={handleLogout} >Logout</Button> :
            <Link to="/login"><Button style={{ marginLeft: 10 }}>Login</Button></Link>
          }

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;