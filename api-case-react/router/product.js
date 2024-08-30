const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Laptop Apple MacBook Air',
        price: 1350,
        quantity: 10,
        category: 'Công nghệ' ,
        description: 'MacBook Air M2 2022 một lần nữa đã khẳng định vị thế hàng đầu của Apple trong phân khúc laptop cao cấp - sang trọng vào giữa năm 2022 khi sở hữu phong cách thiết kế thời thượng, đẳng cấp cùng sức mạnh bộc phá đến từ bộ vi xử lý Apple M2 mạnh mẽ.',
        images: [
            'https://cdn.tgdd.vn/Products/Images/44/289441/apple-macbook-air-m2-2022-16gb-xam-1.jpg',
            'https://cdn.tgdd.vn/Products/Images/44/289441/apple-macbook-air-m2-2022-16gb-xam-2.jpg',
            'https://cdn.tgdd.vn/Products/Images/44/289441/air-m2-2022-16gb-xam-3.jpg'
        ]
    },
    {
        id: 2,
        name: 'Laptop HP Elitebook X360',
        price: 1400,
        quantity: 20,
        category: 'Công nghệ',
        description: 'Với thiết kế tinh tế, hiệu năng mạnh mẽ, tính linh hoạt và hệ thống bảo mật tiên tiến, laptop HP Elitebook X360 1040 G9 i7 (6Z982PA) phù hợp cho các chuyên gia, doanh nhân và những người dùng yêu công nghệ đang tìm kiếm một chiếc laptop đa dụng để thực hiện công việc và giải trí hàng ngày.',
        images: [
            'https://cdn.tgdd.vn/Products/Images/44/302983/Slider/vi-vn-hp-elitebook-x360-1040-g9-i7-6z982pa-thumbvideo.jpg',
            'https://cdn.tgdd.vn/Products/Images/44/302983/Slider/hp-elitebook-x360-1040-g9-i7-6z982pa-slider-fix-1-2048x1144.jpg',
            'https://cdn.tgdd.vn/Products/Images/44/302983/Slider/vi-vn-hp-elitebook-x360-1040-g9-i7-6z982pa-slider-4.jpg'

        ]
    },{
        id: 3,
        name: 'Điện thoại Samsung Galaxy Z Flip6',
        price: 1080,
        quantity: 20,
        category: 'Công nghệ',
        description: 'Thiết kế siêu mỏng và cực kỳ nhỏ gọn; FlexCam tích hợp Auto Zoom thông minh; Hỗ trợ nhiều tính năng Galaxy AI tiên tiến; Camera 50 MP thế hệ mới, nâng tầm nhiếp ảnh; Pin 4000 mAh, bền bỉ cả ngày dài',
        images: [
            'https://cdn.tgdd.vn/Products/Images/42/320722/Slider/vi-vn-samsung-galaxy-z-flip6-3.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/320722/Slider/vi-vn-samsung-galaxy-z-flip6-4.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/320722/Slider/vi-vn-samsung-galaxy-z-flip6-6.jpg'

        ]
    },{
        id: 4,
        name: 'Điện thoại Samsung Galaxy S23 FE 5G',
        price: 1400,
        quantity: 20,
        category: 'Công nghệ',
        description: 'Điện thoại được trang bị camera 50 MP có khả năng quay video 8K, màn hình 120 Hz. Với những tính năng này, hứa hẹn sẽ mang đến trải nghiệm tuyệt vời, đáp ứng mọi nhu cầu của người dùng.',
        images: [
            'https://cdn.tgdd.vn/Products/Images/42/306994/Slider/samsung-galaxy-s23-fe-sld-1-1020x570.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-1.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-4.jpg'

        ]
    },
    {
        id: 5,
        name: 'Sách giáo khoa',
        price: 15,
        quantity: 30,
        category: 'Giáo dục',
        description: 'Trọn bộ sách giáo khoa các lớp',
        images: [
            'https://intranphu.vn/wp-content/uploads/2016/04/SGK_final.jpg',
            'https://img.websosanh.vn/v10/users/review/images/o8dsfxmcsrhic/sgk-moi.jpg?compress=85',
            'https://img.giaoduc.net.vn/1200x630/Uploaded/2024/qsinga/2024_01_05/sach-6847.jpg'
        ]
    },
    {
        id: 6,
        name: 'Tour Hàn Quốc',
        price: 520,
        quantity: 30,
        category: 'Du lịch',
        description: 'Seoul - Công viên Lotte World - Đảo Nami - Thư viện Starfield - Coex Mall (3 đêm khách sạn)',
        images: [
            'https://media.travel.com.vn/Tour/tfd_240411034719_065667_nami%20m%C3%B9a%20%20xuan%20h%C3%A8.jpg',
            'https://media.travel.com.vn/Tour/tfd_240411034654_606588_Gyeongbokgung%201.jpg',
            'https://media.travel.com.vn/Tour/tfd_240411043116_961717_coex%20mall3.jpg'
        ]
    }
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.post("/", (req, res) => {
    const newProduct = {
        id: Date.now(), // Sử dụng timestamp để tạo id duy nhất
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        description: req.body.description,
        images: req.body.images
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].name = req.body.name;
        products[index].price = req.body.price;
        products[index].quantity = req.body.quantity;
        products[index].category = req.body.category;
        products[index].description = req.body.description;
        products[index].images = req.body.images;
        res.send(products[index]);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send({ message: 'Product deleted', id: id });
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

module.exports = router;
