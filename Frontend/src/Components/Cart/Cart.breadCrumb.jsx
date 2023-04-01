import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CartBreadCrumb = () => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <Link to="/cart">Cart</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link to="/cart/address">Address</Link>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Link to="/cart/payment">Payment</Link>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Link to="/cart/summary">Summary</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CartBreadCrumb;
