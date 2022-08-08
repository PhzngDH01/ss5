/////  Bài tập về nhà (HOMEWORK)
///    1

// // 1.1

let phoneeee = [
  {
    name: "Sony Xperia XZPremium",
    brand: "Sony",
    price: "4428",
    color: "white",
    category: "charge",
  },
  {
    name: "OPPO F3 Plus",
    brand: "Oppo",
    price: "5487",
    color: "black",
    category: "iphone",
  },
  {
    name: "IPhone 13 Pro max",
    brand: "apple",
    price: "21490",
    color: "gray",
    category: "iphone",
  },
  {
    name: "Samsung Galaxy S8",
    brand: "Samsung",
    price: "8490",
    color: "blue",
    category: "iphone",
  },
];

for (let i = 0; i < phoneeee.length; i++) {
  console.log(`Name : ${phoneeee[i].name}`);
  console.log(`Price: ${phoneeee[i].price}`);
  console.log("-----------");
}

// // 1.2

let a = Number(prompt("Nhập index bạn muốn xem"));
console.log(`Name : ${phoneeee[a].name}`);
console.log(`Price: ${phoneeee[a].price}`);
console.log(`Color: ${phoneeee[a].color}`);
console.log(`Category: ${phoneeee[a].category}`);

// //1.3
let aa = prompt("Nhập loại bạn muốn tìm kiếm");
for (let i = 0; i <= phoneeee.length - 1; i++) {
  if (aa === phoneeee[i].category) {
    console.table(phoneeee[i]);
  }
}

// //  1.4
phoneeee[0].providers = "phukienso";
phoneeee[1].providers = "tgdd";
phoneeee[2].providers = "tgdd";
phoneeee[3].providers = "tgdd";

console.table(phoneeee);

// //  1.5

let bb = prompt("Nhập nhà cung cấp bạn muốn kiểm tra");
for (let i = 0; i < phoneeee.length; i++) {
  if (bb === phoneeee[i].providers) {
    console.table(phoneeee[i]);
  }
}

///    2

//  2.1

//object
let nvht1 = [
  { stt: 1, name: "HTML", trangthai: "Hoàn thành :false" },
  { stt: 2, name: "CSS", trangthai: "Hoàn thành :false" },
  { stt: 3, name: "Javascript", trangthai: "Hoàn thành :false" },
  { stt: 4, name: "Node Packge Panager", trangthai: "Hoàn thành :false" },
  { stt: 5, name: "Git", trangthai: "Hoàn thành :false" },
];
for (i = 0; i <= nvht1.length - 1; i++) {
  console.log(`${nvht1[i].stt}. ${nvht1[i].name}`);
  console.log(` ${nvht1[i].trangthai}`);
}

// // 2.2 + 2.3 + 2.4 + 2.5 +2.6
let state = true;
while (true) {
  let crud = prompt(
    "Nhập đi em eii create/complete/update/delete/exit"
  ).toLowerCase();
  if (crud === "create") {
    let bbb = prompt("Thêm nhiệm vụ học tập mới");
    let kk = { stt: 6, name: `${bbb}`, trangthai: "Hoàn thành : false" };
    nvht1.push(kk);

    for (i = 0; i <= nvht1.length - 1; i++) {
      console.log(`${nvht1[i].stt}. ${nvht1[i].name}`);
      console.log(` ${nvht1[i].trangthai}`);
    }
  } else if (crud === "update") {
    let Update = Number(prompt("Nhập id muốn thay đổi"));
    let uptieu = String(prompt("Tiêu đề bạn muốn thay đổi"));
    for (let i = 0; i < nvht1.length; i++) {
      if (nvht1[i].stt === Update) {
        nvht1[i].name = uptieu;
        for (i = 0; i <= nvht1.length - 1; i++) {
          console.log(`${nvht1[i].stt}. ${nvht1[i].name}`);
          console.log(` ${nvht1[i].trangthai}`);
        }
      }
    }
  } else if (crud === "complete") {
    let complete = Number(prompt("Nhập id bạn muốn thay đổi"));
    for (let i = 0; i < nvht1.length; i++) {
      if (nvht1[i].stt === complete) {
        nvht1[i].trangthai = "Hoàn thành : true";
        for (i = 0; i <= nvht1.length - 1; i++) {
          console.log(`${nvht1[i].stt}. ${nvht1[i].name}`);
          console.log(` ${nvht1[i].trangthai}`);
        }
      }
    }
  } else if (crud === "delete") {
    let elete = Number(prompt("Nhập id bạn muốn xóa "));
    for (let i = 0; i < nvht1.length; i++) {
      if (nvht1[i].stt === elete) {
        let removed = nvht1.splice(elete - 1, 1);
        for (i = 0; i <= nvht1.length - 1; i++) {
          console.log(`${nvht1[i].stt}. ${nvht1[i].name}`);
          console.log(` ${nvht1[i].trangthai}`);
        }
      }
    }
  } else if (crud === "exit") {
    break;
  }
}
