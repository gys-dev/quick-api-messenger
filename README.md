# QUICK API MESSENGER
Tự build chon bạn api gửi tin nhắn facebook một cách nhanh chóng .
## INSTALL
+ Cài đặt môi trường node js cho server của bạn :
+ Kéo source về:
```
git clone https://github.com/ducy23061999/quick-api-messenger.git
```
+ Chuyển đến thư mục quick-api-messenger
```
cd quick-api-messenger
```
+ Cấu hình account fb trong file account.json
+ Run code. Lúc này bạn có 2 lựa chọn 
Nếu bạn muốn server lắng nghe api của bạn dựa trên  method get 
```
node get-receiver.js
```
Nếu bạn muốn server lắng nghe api của bạn dựa trên method post 
```
node post-receiver.js
```
Lúc này hệ thống sẽ tự động login acc đồng thời lắng nghe các request trên port 8080. Nếu login bị lỗi vui lòng tắt xác thực và accept login trên facebook.
## HOW TO USE
Sau khi build thành công api sẽ lắng nghe request ở cổng 8080. Bạn có thể set lại cổng này ở hàm app.listen();
+ Với method get
```
url: http://www.domain.com:8080/messenger?id=<your target id>&message=<your Message>
```
+ Với method post
```
url: http://www.domain.com/mesenger:8080
post data:
id=<Target Id>
message=<Your message>
```

