import React from 'react'

function Home() {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.gadgets360cdn.com/products/large/iphone-12-pro-399x800-1602616979.jpg?downsize=240:*&output-quality=80&output-format=webp" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;