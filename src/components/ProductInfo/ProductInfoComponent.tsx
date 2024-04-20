import React from "react";
import { useAppSelector } from "../../types/hooks";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { RootState } from "../../store";
const ProductInfoComponent = () => {
    const productName: string = useAppSelector((state: RootState) => state.product.name);
    const productImage: string = useAppSelector((state: RootState) => state.product.image);
    const productTags: string[] = useAppSelector((state: RootState) => state.product.tags);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ productImage } />
            <Card.Body>
                <Card.Title>{ productName }</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <div>
                    {
                        productTags.map((item, index) => (
                            <Button variant="outline-dark" className="tag" size="sm">{item}</Button>
                        ))
                    }
                </div>
            </Card.Body>
        </Card>
    )
};

export default ProductInfoComponent;