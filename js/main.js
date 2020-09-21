const initMain = () => {
  const commentList = document.querySelector('.main-page-feed-comments');
  const commentInput = document.querySelector(
    '.main-page-feed-write-comment-input'
  );
  const commentWriteButton = document.querySelector(
    '.main-page-feed-write-comment-button'
  );

  const addComment = () => {
    if (commentInput.value) {
      const newComment = document.createElement('LI');

      newComment.innerHTML = `<li class="main-page-feed-comment">
        <span class="main-page-feed-comment-writer text-bold">
          wecode_bootcamp
        </span>
       <span class="main-page-feed-comment-content">
          ${commentInput.value}
       </span>
      </li>`;

      commentList.append(newComment);

      commentInput.value = '';
      commentWriteButton.style.opacity = 0.5;
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

  commentWriteButton.addEventListener('click', addComment);
  commentInput.addEventListener('keydown', handleKeydown);
};

initMain();
