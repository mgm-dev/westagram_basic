const initMain = () => {
  const navSearchbar = document.querySelector('.nav-searchbar');
  const navSearchIcon = document.querySelector('.nav-search-icon');
  const commentList = document.querySelector('.feed-comment-list');
  const commentInput = document.querySelector('.feed-write-comment-input');
  const commentWriteButton = document.querySelector(
    '.feed-write-comment-button'
  );
  const commentDeleteButtonList = document.querySelectorAll(
    '.delete-comment-button'
  );
  const commentLikeButtonList = document.querySelectorAll(
    '.like-comment-button'
  );
  const commentDislikeButtonList = document.querySelectorAll(
    '.dislike-comment-button'
  );

  const turnOnSearch = () => {
    navSearchIcon.style.left = '5px';
    navSearchbar.style.textAlign = 'left';
    navSearchbar.style.paddingLeft = '18px';
  };

  const turnOffSearch = () => {
    navSearchIcon.style.left = '70px';
    navSearchbar.style.textAlign = 'center';
    navSearchbar.style.paddingLeft = '0';
    navSearchbar.value = '';
  };

  const addComment = () => {
    if (commentInput.value) {
      const newComment = document.createElement('LI');

      newComment.innerHTML = `<li class="feed-comment">
        <div class="comment-content">
          <span class="feed-comment-writer text-bold"> wecode_bootcamp </span>
          <span class="feed-comment-content"> ${commentInput.value} </span>
        </div>
        <div class="comment-buttons">
          <button class="delete-comment-button">삭제</button>
          <button class="like-comment-button"></button>
          <button class="dislike-comment-button display-none"></button>
        </div>
      </li>`;

      commentList.append(newComment);

      commentInput.value = '';
      commentWriteButton.style.opacity = 0.5;

      document.querySelectorAll('.delete-comment-button').forEach((item) => {
        item.addEventListener('click', deleteComment);
      });
      document.querySelectorAll('.like-comment-button').forEach((item) => {
        item.addEventListener('click', likeComment);
      });
      document.querySelectorAll('.dislike-comment-button').forEach((item) => {
        item.addEventListener('click', dislikeComment);
      });
    }
  };

  const handleKeydown = (e) => {
    commentInput.value
      ? (commentWriteButton.style.opacity = 1)
      : (commentWriteButton.style.opacity = 0.5);

    if (e.keyCode === 13) {
      addComment();
    }
  };

  const deleteComment = (e) => {
    e.target.parentNode.parentNode.remove();
  };

  const likeComment = (e) => {
    e.target.classList.toggle('display-none');
    e.target.nextElementSibling.classList.toggle('display-none');
  };

  const dislikeComment = (e) => {
    e.target.classList.toggle('display-none');
    e.target.previousElementSibling.classList.toggle('display-none');
  };

  navSearchbar.addEventListener('focus', turnOnSearch);
  navSearchbar.addEventListener('focusout', turnOffSearch);
  commentWriteButton.addEventListener('click', addComment);
  commentInput.addEventListener('keydown', handleKeydown);
  commentDeleteButtonList.forEach((item) => {
    item.addEventListener('click', deleteComment);
  });
  commentLikeButtonList.forEach((item) => {
    item.addEventListener('click', likeComment);
  });
  commentDislikeButtonList.forEach((item) => {
    item.addEventListener('click', dislikeComment);
  });
};

initMain();
