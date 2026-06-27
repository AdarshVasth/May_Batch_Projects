E-Commerce APIs
-------------------------------------------------
1. Authentication
-- POST Register /api/auth/register
-- POST Login    /api/auth/login
-- POST Logout   /api/auth/logout
-- POST ForgotPassword  /api/auth/forgot-password
-- GET ViewProfile  /api/auth/profile
-- PUT UpdateProfile /api/auth/profile
-- POST ChangePassword  /api/auth/change-password

2. Categories
-- POST Create Categories   /api/categories
-- GET  Get All categories  /api/categories 
-- GET Get one categories   /api/categories:id
-- PUT Update Categories    /api/categories:id
-- DELETE Delete Categories /api/categories:id

3. Product
-- POST Add product /api/product
-- GET View all products /api/products
-- GET View one product /api/product:id
-- PUT Update Prodcut /api/product:id
-- DELETE Delete Prodcut /api/product:id
-- GET Search products  /api/products/search?name=
-- GET Filter Products  /api/products/search?categoryId

4. Order
-- POST create order    /api/order
-- GET View all order   /api/orders
-- GET View one order   /api/order:id
-- POST Update STatus   /api/order/status

5. Review
-- POST Add review /api/review:productId
-- GET View reviews /api/review:productId
-- DELETE Delete reviews    /api/review:reviewId