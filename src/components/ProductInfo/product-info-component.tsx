import React from "react";
import { useAppSelector } from "../../types/hooks";
import { Card, Button } from "react-bootstrap";
import { RootState } from "../../store";
import "./product-info.scss";

/*
 * React functional component to generate product info data from state.
 */
const ProductInfoComponent = () => {
    const productName: string = useAppSelector((state: RootState) => state.product.name);
    const productImage: string = useAppSelector((state: RootState) => state.product.image);
    const productTags: string[] = useAppSelector((state: RootState) => state.product.tags);
    const productDescription: string = useAppSelector((state: RootState) => state.product.description);
    return (
        <Card className="px-2 mx-2">
            <Card.Img variant="top" src={ productImage } />
            <Card.Body>
                <Card.Title className="text-center">{ productName }</Card.Title>
                <Card.Text className="text-center">
                { productDescription }
                </Card.Text>
                <div>
                    {
                        productTags.map((item, _) => (
                            <Button variant="outline-dark" className="productTag" size="sm">{item}</Button>
                        ))
                    }
                </div>
            </Card.Body>
        </Card>
    )
};

export default ProductInfoComponent;