const parent = document.querySelector(".parent");

let list = [
  {
    id: 0,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-1.png",
    identify: 1,
  },
  {
    id: 1,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-2.png",
    identify: 2,
  },
  {
    id: 2,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-3.png",
    identify: 3,
  },
  {
    id: 3,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-4.png",
    identify: 4,
  },
  {
    id: 4,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-5.png",
    identify: 5,
  },
  {
    id: 5,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-6.png",
    identify: 6,
  },
  {
    id: 6,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-7.png",
    identify: 7,
  },
  {
    id: 7,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-8.png",
    identify: 8,
  },
  {
    id: 8,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-1.png",
    identify: 1,
  },
  {
    id: 9,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-2.png",
    identify: 2,
  },
  {
    id: 10,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-3.png",
    identify: 3,
  },
  {
    id: 11,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-4.png",
    identify: 4,
  },
  {
    id: 12,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-5.png",
    identify: 5,
  },
  {
    id: 13,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-6.png",
    identify: 6,
  },
  {
    id: 14,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-7.png",
    identify: 7,
  },
  {
    id: 15,
    boolelan: false,
    boolelan2: false,
    img: "img/que_icon.svg",
    bgImg: "img/img-8.png",
    identify: 8,
  },
];

function listRandom() {
  const push = [];
  for (let i = 0; push.length !== list.length; i++) {
    const a = Math.floor(Math.random() * list.length);
    let c = true;
    for (let j = 0; j < push.length; j++) {
      if (push[j].id === a) {
        c = false;
      }
    }
    if (c) {
      push.push(list[a]);
    }
  }
  list = push;
}

listRandom();

function main(a) {
  a.map((e) => {
    parent.innerHTML += `
    <div class="col-3 p-2">
              <div style="box-shadow:0px 0px 40px lightgray;border-radius:10px;background-color:white">
                <div class="text-center p-3 p-4 p-lg-3 rounded" style="cursor:pointer;position:relative">
                  <img src=${
                    e.bgImg
                  } alt="img" class="w-100" style="pointer-events:"none">
                  ${
                    !e.boolelan
                      ? `<div style="border-radius:10px" class="question" onClick="change(${e.id},${e.identify} )"><img src=${e.img} alt="img" style="pointer-events:none;"></div>`
                      : ` `
                  }
                </div>
              </div>
            </div>`;
  });
}

main(list);

const wrong = document.getElementById("wrong");
const good = document.querySelector(".good");
const audio = document.getElementById("audio");
const error = document.getElementById("error");
const goodA = document.getElementById("good");
let count = 0;
let first = 0;

function change(id, identify) {
  audio.play();
  count++;
  if (count == 1) {
    first = identify;
    list = list.map((e) => {
      return e.id === id ? { ...e, boolelan: !e.boolelan } : e;
    });
    parent.innerHTML = "";
    main(list);
    good.classList.remove("ani");
  } else {
    list = list.map((e) => {
      return e.id === id ? { ...e, boolelan: !e.boolelan } : e;
    });
    parent.innerHTML = "";
    main(list);
    if (list.every((e) => e.boolelan === true)) {
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else if (first !== identify) {
      parent.style.pointerEvents = "none";
      wrong.classList.add("shake");
      error.play();
      setTimeout(() => {
        list = list.map((e) => {
          return e.identify === identify || e.identify === first
            ? { ...e, boolelan: false }
            : e;
        });
        count = 0;
        parent.style.pointerEvents = "all";
        parent.innerHTML = "";
        main(list);
        wrong.classList.remove("shake");
      }, 500);
    } else {
      parent.style.pointerEventS = "none";
      count = 0;
      setTimeout(() => {
        good.classList.add("ani");
        goodA.play();
      }, 200);
    }
  }
}
