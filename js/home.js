const user = [
  {
    name: 'Phạm Ngọc  Bình',
    nickname: 'Lọ 🐳',
    img: './img/dog.jpg',
  },
  {
    name: 'Nguyễn Quốc Tuấn',
    nickname: 'Tuấn Cùi  🦔 ',
    img: './img/lo.png',
  },
  {
    name: 'Tống Huy Hoàng',
    nickname: 'Hoàng 1311 🐳',
    img: ' ./img/images.jpg',
  },
];

const userList = document.querySelector('#user__list');
let userTag = '';
user.map((data) => {
  userTag += `<li class='user__item'>
      <div class='user__img'>
        <img src='${data.img}' alt='' class='account' />
      </div>
      <div class='user__info'>
        <h4 class='user__ino__name'>${data.name}</h4>
        <span class='user__info__nickname'>${data.nickname}</span>
      </div>
    </li>`;
  userList.innerHTML = userTag;
});

const video = [
  {
    name: 'Phạm Ngọc  Bình',
    nickname: 'Lọ 🐳',
    img: './img/dog.jpg',
    des: 'Thử thách gì khó hơn đi...',
    music: 'Move Your Body(抖音完整原版) - 新腾',
    video: './img/video3.mp4',

    like: 200,
    comment: 100,
    share: 3,
  },
  {
    name: 'Nguyễn Quốc Tuấn',
    nickname: 'Tuấn Cùi  🦔 ',
    img: './img/lo.png',
    des: 'Thử thách gì khó hơn đi...',
    music: 'Thay Lòng (Yang Remix) - Hương Ly, BD Media Music',
    video: './img/video4.mp4',
    like: 400,
    comment: 100,
    share: 54,
  },
  {
    name: 'Tống Huy Hoàng',
    nickname: 'Hoàng 1311 🐳',
    img: ' ./img/images.jpg',
    des: 'Thử thách gì khó hơn đi...',
    music: 'Move Your Body(抖音完整原版) - 新腾',
    video: './img/video1.mp4',
    like: 2200,
    comment: 100,
    share: 12,
  },
];
const music = [
  'Thiên Thần Tình Yêu',
  'original sound',
  'nhạc nền ',
  'Thiên Thần',
  'original sound - Linh Ngọc Đàm',
  'nhạc nền - Theanh28 Entertainment',
];

const musicdoc = document.getElementById('discover__music');
let musicitem = '';
music.map((data) => {
  musicitem += `  <li class='music__item'>
      <img src='./img/music.svg' alt='' srcset='' />
      ${data}
    </li>
  `;
  musicdoc.innerHTML = musicitem;
});

const videoList = document.querySelector('#content');

let videoTag = '';
video.map((data) => {
  videoTag += `<div class='item'>
      <div class='card'>
        <div class='card__content'>
          <div class='card__content__left'>
            <img src='${data.img}' alt='' class='account' srcset='' />
          </div>
          <div class='card__body'>
            <div class='card__body__user'>
              <span class='card__body__user__name'>${data.name}</span>
              <span class='card__body__user__nickname'>${data.nickname}</span>
            </div>
            <p class='video__description'>
              ${data.des}
            </p>
            <b class='video__music'>
              {' '}
              <img src='./img/music.svg' alt='' srcset='' /> Ố dồi ôi
            </b>
            <div class='card__body__video'>
              <video class='myvideo' src='${data.video}'></video>
              <div class='card__video__option'>
                <div class='card__video__option__item'>
                  <div class='card__video__option__item__icon'>
                    <i class='fa-regular fa-heart'></i>
                  </div>
                  <span>${data.like}</span>
                </div>
                <div class='card__video__option__item'>
                  <div class='card__video__option__item__icon'>
                    <i class='fa-regular fa-comment'></i>
                  </div>
                  <span>${data.comment}</span>
                </div>
                <div class='card__video__option__item'>
                  <div class='card__video__option__item__icon'>
                    <i class='fa-sharp fa-solid fa-share'></i>
                  </div>
                  <span>${data.share}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='card__following'>
          <button class='card__folling_btn'>Follow</button>
        </div>
      </div>
    </div>`;

  videoList.innerHTML = videoTag;
});

const videoSelectted = document.querySelectorAll('.myvideo');

videoSelectted.forEach((current) => {
  current.onclick = () => {
    if (current.paused) {
      current.play();
    } else {
      current.pause();
    }
  };
});
