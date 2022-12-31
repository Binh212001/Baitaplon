const commentOur = [
  {
    name: 'Tống Huy Hoàng',
    comment: '10 điểm 🥰🥰🥰',
  },
  {
    name: 'Tống Huy Hoàng',
    comment: 'Click video to run 🥰🥰🥰',
  },
  {
    name: 'Phạm Ngọc Bình',
    comment: '11 điểm 🥰🥰🥰',
  },
  {
    name: 'Nguyễn Quốc Tuấn',
    comment: 'Tuyệt vời !!!!!🥰🥰',
  },
];
console.log('🚀 ~ file: videoprofile.js:15 ~ commentOur', commentOur);

const comment = document.getElementById('comments');

let content = '';

commentOur.map((data) => {
  content += `<div class='comment'>
      <img class='img' src='./img/dog.jpg' alt='' />
      <div class='comment__detail'>
        <h5>${data.name}</h5>
        <p>${data.comment}</p>
      </div>
            <span onclick="deletecomment(${data.comment})">Xóa</span>
    </div>`;
  comment.innerHTML = content;
});

const addNewComment = () => {
  let newct = '';
  const cm = document.getElementById('input').value;
  commentOur.push({
    comment: cm,
    name: 'Hihi',
  });

  commentOur.map((data) => {
    newct += `  <div class="comment">
            <img class="img" src="./img/dog.jpg" alt="" />
            <div class="comment__detail">
              <h5>${data.name}</h5>
              <p>${data.comment}</p>
            </div>
            <span onclick="deletecomment(${data.comment})">Xóa</span>
          </div>
    `;
    comment.innerHTML = newct;
  });
};

const myvideo = document.querySelector('#myvideo');

const run = () => {
  if (myvideo.paused) {
    myvideo.play();
  } else {
    myvideo.pause();
  }
};

const deleteComment = (key) => {
  console.log('dfjhsdjk');
  commentOur = commentOur.filter((x) => x.comment != key);
  addNewComment();
};
