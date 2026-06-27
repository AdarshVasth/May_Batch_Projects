E-Commerce Schema
----------------------
1. User 
-- name    : string
-- email    : string
-- mobile   : number
-- password : string
-- role     : enum(Customer/Seller/Admin)
-- address  : list of object [{
                    name : string,
                    mobile: number,
                    house_no: string,
                    landmark: string,
                    street : string,
                    state: string,
                    pincode: string
                }]

2. Category
-- name : string,
-- description : string,

3. Product
-- name : string,
-- description : string,
-- price : number,
-- discountprice : number,
-- categoryId : id (Category)
-- stock : number
-- images : []
-- rating : number
-- totalReviews : number
-- sellerId : Id (User)

4. Order
-- customerId : Id of (User)
-- items : [
            {
                productId: id of (product),
                quantity: number
                price: number,
                subtotal: number
            }
        ]
-- invoiceAmount
-- shippingAddress : {
                    name : string,
                    mobile: number,
                    house_no: string,
                    landmark: string,
                    street : string,
                    state: string,
                    pincode: string
                }
-- orderStatus : Enum [Created, Dispatched, In Transit, Delivered, Cancelled]
---------------
5. Payment
-- orderId : id of (order)
-- paymentMethod : Enum (COD/UPI)
-- status: Enum [Pending, InProgress, Success]
-- ReferenceNumber: string
--------------------------------
6. Review
-- customerId: 
-- productId: 
-- rating: 
-- comment: 