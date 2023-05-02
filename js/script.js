/* 
  ! BT1: Quản lý tuyển sinh
  * input: điểm chuẩn, loại khu vực, loại đối tượng, điểm môn thứ 1, 2 ,3.
  * process:
  *   1. người dùng nhập các thông tin input
  *   2. người dùng nhấn calculate
  *   3. lấy các giá trị người dùng đã nhập (ép kiểu number)
  *   4. kiểm tra dữ liệu input:
  *     + 0 <=điểm chuẩn <= 30
  *     + 0 <= điểm các môn <= 10
  *   5. nếu sai, thông báo cho người dùng biết để nhập lại
  *      nếu đúng, bắt đầu thực hiện xử lý tính toán dữ liệu
  *   6. tính tổng điểm như sau:
  *     tổng = điểm khu vực + điểm đối tượng + điểm môn 1 + điểm môn 2 + điểm môn 3
  *   7. Kết quả đậu / rớt theo điều kiện:
  *     + tổng điểm >= điểm chuẩn
  *     + không môn nào trong môn 1, 2, 3 == 0 
  * output: tổng điểm và kết quả đậu / rớt
*/

document.querySelector(".ex1 button").onclick = function () {
  // todo: take user's data
  var passScore = document.getElementById("passScore").value * 1;
  var area = document.getElementById("area").value * 1;
  var object = document.getElementById("object").value * 1;
  var subject1 = document.getElementById("subject1").value * 1;
  var subject2 = document.getElementById("subject2").value * 1;
  var subject3 = document.getElementById("subject3").value * 1;

  // todo: check input data
  // * false
  if (passScore < 0 || passScore > 30) {
    alert("Giá trị điểm chuẩn không hợp lệ !!!");
  } else if (subject1 < 0 || subject1 > 10) {
    alert("Giá trị điểm môn thứ nhất không hợp lệ !!!");
  } else if (subject2 < 0 || subject2 > 10) {
    alert("Giá trị điểm môn thứ hai không hợp lệ !!!");
  } else if (subject3 < 0 || subject3 > 10) {
    alert("Giá trị điểm môn thứ ba không hợp lệ !!!");
  } else {
    // todo: handle and calculate data
    var totalScore = area + object + subject1 + subject2 + subject3;
    if (
      totalScore >= passScore &&
      subject1 != 0 &&
      subject2 != 0 &&
      subject3 != 0
    ) {
      document.querySelector(".ex1 #footer_ex1 span").innerHTML = `
        ${totalScore} 
        <i class="fa-sharp fa-solid fa-hand-point-right text-warning mx-5"></i> 
        <span class="text-success">Chúc mừng bạn đã đậu !!!</span>
      `;
    } else {
      document.querySelector(".ex1 #footer_ex1 span").innerHTML = `
        ${totalScore} 
        <i class="fa-sharp fa-solid fa-hand-point-right text-warning mx-5"></i> 
        <span class="text-danger">Rất tiếc bạn đã rớt !!!</span>
      `;
    }
  }
};

/*
  ! BT2: Tính tiền điện
  * input: họ tên và số kW
  * process:
  *   1. người dùng nhập các thông tin input
  *   2. người dùng nhấn submit
  *   3. lấy các giá trị người dùng đã nhập (ép kiểu number cho số kW)
  *   4. kiểm tra số kW người dùng nhập
  *     + số kW > 0
  *   5. nếu sai, thông báo cho người dùng nhập lại
  *      nếu đúng, bắt đầu tính toán tiền điện
  *   6. tính tiền điện như sau:
  *     + số kW <= 50: 
  *         số kW * 500
  *     + 50 < số kW <= 100:  
  *         50 * 500 + (số kW - 50) * 650
  *     + 100 < số kW <= 200: 
  *         50 * 500 + 50 * 650 + (số kW - 100) * 850
  *     + 200 < số kW <= 350: 
  *         50 * 500 + 50 * 650 + 100 * 850 + (số kW - 200) * 1100
  *     + số kW > 350: 
  *         50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (số kW - 350) * 1300
  *   7. format tiền điện
  * output: họ tên người dùng và tổng tiền điện 
*/

document.querySelector(".ex2 button").onclick = function () {
  // todo: take user's data
  var fullName = document.getElementById("fullName").value;
  var kW = document.getElementById("kW").value * 1;

  // todo: check kW input
  if (kW == 0 || kW < 0) {
    alert("Gía trị số kW không hợp lệ !!!");
  } else {
    // todo: calculate data
    if (kW <= 50) {
      var electricPayment = kW * 500;
    } else if (50 < kW && kW <= 100) {
      var electricPayment = 50 * 500 + (kW - 50) * 650;
    } else if (100 < kW && kW <= 200) {
      var electricPayment = 50 * 500 + 50 * 650 + (kW - 100) * 850;
    } else if (200 < kW && kW <= 350) {
      var electricPayment = 50 * 500 + 50 * 650 + 100 * 850 + (kW - 200) * 1100;
    } else {
      var electricPayment =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kW - 350) * 1300;
    }

    var formatResult = electricPayment.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    document.querySelector(".ex2 #footer_ex2 span:nth-child(2)").innerHTML =
      fullName;
    document.querySelector(".ex2 #footer_ex2 span:nth-child(6)").innerHTML =
      formatResult;
  }
};

/*
  ! BT3: Tính thuế thu nhập cá nhân
  * input: họ tên, tổng thu nhập hằng năm và số người phụ thuộc
  * process:
  *   1. người dùng nhập các thông tin input
  *   2. người dùng nhấn calculate
  *   3. lấy các giá trị người dùng đã nhập (ép kiểu number cho thu nhập hằng năm và số người phụ thuộc)
  *   4. kiểm tra các giá trị input trên
  *     + tổng thu nhập năm > 12.000.000 vnd
  *     + số người phụ thuộc >= 0
  *   5. nếu sai thì thông báo cho người dùng nhập lại
  *      nếu đúng thì bắt đầu tính toán tiền thuế thu nhập cá nhân
  *   6. Tiền thuế thu nhập cá nhân tính như sau:
  *     - thu nhập chịu thuế = tổng thu nhập năm - 4.000.000 - số người phụ thuộc * 1.600.000
  *     - tiền thuế thu nhập cá nhân = thu nhập chịu thuế * thuế suất
  *     - Thu nhập chịu thuế (triệu đồng) và thuế suất tương ứng:
  *        + x <= 60 : 5% 
  *        + 60 < x <= 120 : 10% 
  *        + 120 < x <= 210 : 15% 
  *        + 210 < x <= 384 : 20% 
  *        + 384 < x <= 624 : 25% 
  *        + 624 < x <= 960 : 30% 
  *        + 960 < x : 35%
  *   7. format tiền thuế thu nhập cá nhân 
  * output: họ tên người dùng và tiền thuế thu nhập cá nhân
*/

document.querySelector(".ex3 button").addEventListener("click", function () {
  // todo: take user's data
  var username = document.getElementById("username").value;
  var salaryPerYear = document.getElementById("salaryPerYear").value * 1;
  var dependence = document.getElementById("dependence").value * 1;

  // todo: check input
  if (salaryPerYear <= 12000000) {
    alert("Giá trị tổng thu nhập hằng năm không hợp lệ !!!");
  } else if (dependence < 0) {
    alert("Giá trị số người phụ thuộc không hợp lệ !!!");
  } else {
    // todo: calculate data
    var salaryBeforeTax = salaryPerYear - 4000000 - dependence * 1600000;
    if (salaryBeforeTax <= 60000000) {
      var tax = (salaryBeforeTax * 5) / 100;
    } else if (salaryBeforeTax > 60000000 && salaryBeforeTax <= 120000000) {
      var tax = (salaryBeforeTax * 10) / 100;
    } else if (salaryBeforeTax > 120000000 && salaryBeforeTax <= 210000000) {
      var tax = (salaryBeforeTax * 15) / 100;
    } else if (salaryBeforeTax > 210000000 && salaryBeforeTax <= 384000000) {
      var tax = (salaryBeforeTax * 20) / 100;
    } else if (salaryBeforeTax > 384000000 && salaryBeforeTax <= 624000000) {
      var tax = (salaryBeforeTax * 25) / 100;
    } else if (salaryBeforeTax > 624000000 && salaryBeforeTax <= 960000000) {
      var tax = (salaryBeforeTax * 30) / 100;
    } else {
      var tax = (salaryBeforeTax * 35) / 100;
    }

    var formatTax = tax.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 2,
    });

    document.querySelector(".ex3 #footer_ex3 span:nth-child(2)").innerHTML =
      username;
    document.querySelector(".ex3 #footer_ex3 span:nth-child(6)").innerHTML =
      formatTax;
  }
});

/*
  ! BT4: Tính tiền cáp
  * input: mã khách hàng, kiểu khách hàng, số kênh cao cấp và số kết nối (đối với doanh nghiệp)
  * process:
  *   1. xử lý form hiển thị
  *     - mặc định: nhà dân - số kết nối input không hiển thị
  *     - nếu người dùng chọn kiểu doanh nghiệp thì đặt display số kết nối input lại thành block
  *     - nếu người dùng lại chuyển từ doanh nghiệp thành nhà dân thì đặt display số kết nối input trở lại thành none
  *   2. người dùng nhập các thông tin input
  *   3. người dùng nhấn calculate
  *   4. lấy các giá trị người dùng đã nhập (ép kiểu number số kết nối và số kênh cao cấp)
  *   5. kiểm tra các giá trị input
  *     + số kết nối (nếu có) và số kênh cao cấp >= 0
  *   6. nếu sai thì thông báo cho người dùng nhập lại
  *      nếu đúng thì bắt đầu tính toán tiền cáp
  *   7. Tính toán tiền cáp theo các bước sau cho từng kiểu khách hàng:
  *     - Nhà dân:
  *       + khai báo hằng số:
  *           1. phí xử lý hóa đơn: 4.5$
  *           2. phí dịch vụ cơ bản: 20.5$
  *       + tiền cáp = phí xử lý hóa đơn + phí dịch vụ cơ bản + 7.5($) * số kênh cao cấp
  *     - Doanh nghiệp:
  *       + khai báo hằng số:
  *           1. phí xử lý hóa đơn: 15$
  *       + phí dịch vụ cơ bản:
  *           Số kết nối <= 10: 75$     
  *           Số kết nối > 10: 75($) + 5($) * (số kết nối - 10)
  *       + tiền cáp = phí xử lý hóa đơn + phí dịch vụ cơ bản + 50($) * số kênh cao cấp 
  *    8. format tiền cáp     
  * output: mã khách hàng và tiền cáp 
*/

// todo: form structure
document.getElementById("type").onclick = function () {
  var typeForm = document.getElementById("type").value;
  if (typeForm == "home") {
    document.getElementById("connectionContainer").classList.add("d-none");
  } else {
    document.getElementById("connectionContainer").classList.remove("d-none");
  }
};

// todo: click calculate button
document.querySelector(".ex4 button").onclick = function () {
  // todo: take user's data
  var code = document.getElementById("code").value;
  var type = document.getElementById("type").value;

  var cablePayment = type == "home" ? homeCalculate() : businessCalculate();

  if (cablePayment) {
    var formatCablePayment = cablePayment.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    document.querySelector(".ex4 #footer_ex4 span:nth-child(2)").innerHTML =
      code;
    document.querySelector(".ex4 #footer_ex4 span:nth-child(6)").innerHTML =
      formatCablePayment;
  }
};

function homeCalculate() {
  const handleBill = 4.5;
  const basicService = 20.5;
  var channel = document.getElementById("channel").value * 1;
  // todo: check channel input
  if (channel < 0) {
    alert("Giá trị số kênh cao cấp không hợp lệ !!!");
  } else {
    var cablePayment = handleBill + basicService + 7.5 * channel;
    return cablePayment;
  }
}

function businessCalculate() {
  const handleBusinessBill = 15;
  var connection = document.getElementById("connection").value * 1;
  var channel = document.getElementById("channel").value * 1;
  // todo: check connection and channel inputs
  if (connection < 0) {
    alert("Giá trị số kết nối không hợp lệ !!!");
  } else if (channel < 0) {
    alert("Giá trị số kênh cao cấp không hợp lệ !!!");
  } else {
    var basicBusinessService =
      connection <= 10 ? 75 : 75 + (connection - 10) * 5;
    var cableBusinessPayment =
      handleBusinessBill + basicBusinessService + 50 * channel;
    return cableBusinessPayment;
  }
}
