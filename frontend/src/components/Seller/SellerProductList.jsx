    const availableItems = items.filter(
        (item) =>
            item.available ===1
    );

    const unavailableItems = items.filter(
        (item) =>
            item.available ===0
    );

    return (
        <Container className="mb-4">
            <Row className="g-2">
                <h3>Available Items</h3>
                {availableItems.map(item=>(
                    <Col key={item.id} xs={1} md={6} lg={4}>
                        <SellerItemCard
                            id = {item.id}
                            image = {item.image}
                            name = {item.name}
                            price = {item.price}
                            promo_price = {item.promo_price}
                            available = {item.available}
                            role = {role}
                        />
                    </Col>
                ))}
            </Row>
            <h3 style ={{paddingTop: "40px"}}>Unavailable Items</h3>
            <Row className="g-2">
                {unavailableItems.map(item=>(
                    <Col key={item.id} xs={1} md={6} lg={4}>
                        <SellerItemCard
                            id = {item.id}
                            image = {item.image}
                            name = {item.name}
                            price = {item.price}
                            promo_price = {item.promo_price}
                            available = {item.available}
                            role = {role}
export default SellerProductList;